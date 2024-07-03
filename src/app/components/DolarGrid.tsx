'use client'
import React, { Suspense, useRef } from 'react'
import { Grid, Skeleton } from '@mui/material';
import { QuoteCard } from '@/commons/components/QuoteCard';
import { range } from 'lodash';
import { dolars as dolarsFetch } from '@/services/dolars/get.dolars.service';

export const DolarGrid = () => {
    const abortController = useRef(new AbortController())
    const dolars = dolarsFetch({ abortController: abortController.current });

    return (
        <Grid container spacing={2} sx={{ p: '1rem 0' }}>
            <Suspense fallback={<DolarGridSkeleton loadNumber={7} />}>
                {
                    dolars.then(data => data.map(dolar => (
                        <Grid key={dolar.currency + dolar.name} item xs={6} md={4} lg={3}>
                            <QuoteCard {...dolar} name={'Dolar ' + dolar.name} />
                        </Grid>
                    )))
                }
            </Suspense>
        </Grid>
    )
}
/**
 * Skeleton of DolarGrid.
 * @param loadNumber number to render placeholders, default 10.
 */
interface PropsSkeleton {
    loadNumber?: number,
}
export const DolarGridSkeleton = ({ loadNumber = 10 }: PropsSkeleton) => {
    const range_arr = range(1, loadNumber);

    return (
        <Grid container spacing={2} sx={{ p: '1rem 0' }}>
            {range_arr.map(item => (
                <Grid key={item} item xs={6} md={4} lg={3}>
                    <Skeleton variant="rectangular" >
                        <QuoteCard currency={''} type={''} name={''} buy={0} sell={0} updateDate={''} />
                    </Skeleton>
                </Grid>
            ))
            }
        </Grid >
    )
}