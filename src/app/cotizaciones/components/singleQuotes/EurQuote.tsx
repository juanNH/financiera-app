'use client';
import React from 'react'
import { Quote, useQuotes } from '@/commons/hooks/useQuotes';
import { QuoteCard } from '@/commons/components/QuoteCard';
import { QuoteSkeleton } from './QuoteSkeleton';

export const EurQuote = () => {
    const { quote } = useQuotes(Quote.eur);
    if (quote.isLoading) {
        return <QuoteSkeleton />
    }
    return (
        <QuoteCard {...quote.data} />
    )
}
