'use client';

import React from 'react'
import { Quote, useQuotes } from '@/commons/hooks/useQuotes';
import { QuoteCard } from '@/commons/components/QuoteCard';
import { Skeleton } from '@mui/material';

export const ClpQuote = () => {
    const { quote } = useQuotes(Quote.clp);
    if (quote.isLoading) {
        return (
            <Skeleton variant="rectangular" >
                <QuoteCard currency={''} type={''} name={''} buy={0} sell={0} updateDate={''} />
            </Skeleton>
        )
    }
    return (
        <QuoteCard {...quote.data} />
    )
}
