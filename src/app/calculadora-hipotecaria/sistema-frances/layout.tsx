import React from 'react'
import { Box } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "MiFinanciero",
    description: "MiFinanciero es una aplicación que tiene el fin de poder brindar datos, herramientas y datos financieros a los usuarios.",
    // Add additional metadata here
    keywords: ['calculadora', 'hipotecas', 'prestamo hipotecario', 'calculadora financiera', 'calculadora hipotecaria', 'sistema frances', 'calculadora hipetcaria francesa', 'calculadora sistema frances'],
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
        <Box sx={{ pt: 2 }}>
            {children}
        </Box>
    )
}
