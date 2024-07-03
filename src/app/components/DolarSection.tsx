'use client'
import React, { Suspense, useRef } from 'react'
import { Box, Typography, Grid, Skeleton } from '@mui/material';
import { DolarGrid, DolarGridSkeleton } from './DolarGrid';
import Link from 'next/link';
import { useDolars } from '@/commons/hooks';
import { QuoteCard } from '@/commons/components/QuoteCard';
import { range } from 'lodash';
import { dolars as dolarsFetch } from '@/services/dolars/get.dolars.service';

export const DolarSection = () => {
    const abortController = useRef(new AbortController())

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

