import React from 'react'
import { dolars as dolarsFetch } from '@/services/dolars/get.dolars.service';
import { Box, Typography } from '@mui/material';
import { DolarGrid } from './DolarGrid';
import Link from 'next/link';

export const DolarSection = async () => {
    const dolars = await dolarsFetch({ abortController: undefined });

    return (
        <Box sx={{ width: '80%', textAlign: 'center' }}>
            <Typography variant={'h3'} sx={{ fontSize: '1.4rem', textAlign: 'center', p: 1 }}>Dolares</Typography>
            <DolarGrid dolars={dolars} />
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

