'use client';
import React from 'react'
import { QuoteCard } from '@/commons/components/QuoteCard';
import { Quote, useQuotes } from '@/commons/hooks/useQuotes';
import { QuoteSkeleton } from './QuoteSkeleton';

export const BrlQuote = () => {
    const { quote } = useQuotes(Quote.brl);
    if (quote.isLoading) {
        return <QuoteSkeleton />
    }
    return (
        <QuoteCard {...quote.data} />
    )
}
