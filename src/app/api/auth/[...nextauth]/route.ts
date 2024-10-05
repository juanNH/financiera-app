import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import { axiosInstanceServer } from '../../axios.instance';
import { setCookie } from 'nookies';

const handler = NextAuth({
    providers: [GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })],
    session: {
        strategy: 'jwt',
        maxAge: 1 * 24 * 60 * 60,
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            if (!profile?.email) {
                throw new Error('No profile');
            }
            try {
                const { data } = await axiosInstanceServer.post<{
                    access_token: string,
                    user: {
                        "email": string,
                        "name": string,
                        "provider": string,
                        "created_at": string,
                        "id": number
                    }
                }>('/user/login',
                    {
                        email: user.email,
                        name: user.name,
                        provider: account?.provider
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                );
                setCookie(null, 'accessToken', data.access_token, {
                    maxAge: 1 * 24 * 60 * 60,
                    path: '/',
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict',
                });
                return true;
            } catch (err) {
                console.error(err);
                return false;
            }
        },
        async jwt({ token, user }: any) {
            if (user) {
                token.accessToken = user.access_token;
            }
            return token;
        },
        async session({ session, token }: any) {
            session.accessToken = token.accessToken;
            return session;
        }
    }
})

export { handler as GET, handler as POST };