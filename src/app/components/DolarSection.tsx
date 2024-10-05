import React from 'react'
import { Box, Typography } from '@mui/material';
import { DolarGrid } from './DolarGrid';
import Link from 'next/link';

export const DolarSection = () => {
    return (
        <Box sx={{ width: '80%', textAlign: 'center' }}>
            <Typography variant={'h3'} sx={{ fontSize: '1.4rem', textAlign: 'center', p: 1 }}>Dolares</Typography>
            <DolarGrid />
            <Typography
                sx={{ textDecoration: 'none' }}
                href={`/cotizaciones`}
                component={Link}
            >
                Ver otras cotizaciones
            </Typography>
        </Box>
    )
}

