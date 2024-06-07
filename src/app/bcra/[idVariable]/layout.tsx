import React from 'react'
import { Metadata } from 'next'
import { Box } from '@mui/material';

export const metadata: Metadata = {
    title: "MiFinanciero",
    description: "MiFinanciero es una aplicación que tiene el fin de poder brindar datos, herramientas y datos financieros a los usuarios.",
    // Add additional metadata here
    keywords: ['bcra', 'banco central de la republica argentina', 'variables bcra', 'variables del banco central de la republica argentina', 'argentina', 'variables argentina', 'tasa', 'historial bcra'],
    authors: [{ name: "Juan", url: "https://www.linkedin.com/in/juannherrerad/" }],
    twitter: {
        title: 'MiFinanciero',
        description: 'MiFinanciero es una aplicación que tiene el fin de poder brindar datos, herramientas y datos financieros a los usuarios.',
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Box sx={{ padding: { xs: 0, md: '0 2rem', lg: '0 4rem' } }}>
            {children}
        </Box>
    )
}

