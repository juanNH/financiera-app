import React from 'react'
import { Box } from '@mui/material';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Box sx={{ padding: { xs: 0, md: '2rem', lg: '2rem 4rem' } }}>
            {children}
        </Box>
    )
}
