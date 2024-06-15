import React from 'react'
import { Box } from '@mui/material';
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Box sx={{ padding: { xs: 0, md: '4rem', lg: '2rem 16em' } }}>
            {children}
        </Box>
    )
}
