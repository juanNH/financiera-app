import React from 'react'
import { clpQuote } from '@/services/dolars/othersQuotes/get.clp.service';
import { QuoteCard } from '@/commons/components/QuoteCard';

export const ClpQuote = async () => {
    const uyuData = await clpQuote({ abortController: undefined });
    return (
        <QuoteCard {...uyuData} />
    )
}
