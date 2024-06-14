import React from 'react'
import { eurQuote } from '@/services/dolars/othersQuotes/get.eur.service';
import { QuoteCard } from '@/commons/components/QuoteCard';

export const EurQuote = async () => {
    const uyuData = await eurQuote({ abortController: undefined });
    return (
        <QuoteCard {...uyuData} />
    )
}
