import React from 'react'
import { Grid } from '@mui/material';
import { Dolar } from '../api/dolar/adapter';
import { QuoteCard } from '@/commons/components/QuoteCard';
interface Props {
    dolars: Dolar[],
}
export const DolarGrid = ({ dolars }: Props) => {
    return (
        <Grid container spacing={2} sx={{ p: '1rem 0' }}>
            {
                dolars.map(dolar => (
                    <Grid key={dolar.currency+dolar.name} item xs={6} md={4} lg={3}>
                        <QuoteCard {...dolar} name={'Dolar '+dolar.name} />
                    </Grid>
                ))
            }
        </Grid>
    )
}
