'use client'
import React from 'react'
import { Box, Tabs, Tab } from '@mui/material';
import Link from 'next/link';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ padding: { xs: 0, md: '2rem', lg: '4rem' } }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="tabs de calculadora de prestamos">
                    <Tab
                        label="Sistema frances"
                        component={Link}
                        href="/calculadora-hipotecaria/sistema-frances" />
                    <Tab
                        label="Sistema aleman"
                        component={Link}
                        href="/calculadora-hipotecaria/sistema-aleman" />
                </Tabs>
            </Box>
            {children}
        </Box>
    )
}
