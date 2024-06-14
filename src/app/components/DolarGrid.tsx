import React from 'react'
import { Grid, Skeleton } from '@mui/material';
import { Dolar } from '../api/dolar/adapter';
import { QuoteCard } from '@/commons/components/QuoteCard';
import { range } from 'lodash';
import { DataState } from '@/commons/models/structure.interface';
interface Props {
    dolars: DataState<Dolar[]>,
    loadNumber?: number,
}
export const DolarGrid = ({ dolars, loadNumber = 10 }: Props) => {
    const range_arr = range(1, loadNumber);
    if (dolars.isLoading) {
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
    return (
        <Grid container spacing={2} sx={{ p: '1rem 0' }}>
            {
                dolars.data.map(dolar => (
                    <Grid key={dolar.currency + dolar.name} item xs={6} md={4} lg={3}>
                        <QuoteCard {...dolar} name={'Dolar ' + dolar.name} />
                    </Grid>
                ))
            }
        </Grid>
    )
}
