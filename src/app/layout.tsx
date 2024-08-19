import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { StyledRoot } from "./components/StyledRoot";
import { ApolloWrapper } from "@/lib/apolloWrapper";
import { Providers } from "./components/Providers";


export const metadata: Metadata = {
  title: "FinherArg",
  description: "FinherArg es una aplicación que tiene el fin de poder brindar datos, herramientas y datos financieros a los usuarios.",
  // Add additional metadata here
  keywords: ['Aplicaciones financieras', 'Finanzas', 'Presupuesto', 'Planificación financiera', 'Criptomonedas', 'Análisis financiero', 'Educación financiera'],
  authors: [{ name: "Juan", url: "https://www.linkedin.com/in/juannherrerad/" }],
  twitter: {
    title: 'FinherArg',
    description: 'FinherArg es una aplicación que tiene el fin de poder brindar datos, herramientas y datos financieros a los usuarios.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body style={{ margin: '4rem 0 0 0' }} suppressHydrationWarning={true}>
        <Providers>
          <ApolloWrapper>
            <AppRouterCacheProvider>
              <StyledRoot>
                {children}
              </StyledRoot>
            </AppRouterCacheProvider>
          </ApolloWrapper>
        </Providers>
      </body>
    </html>
  );
}
