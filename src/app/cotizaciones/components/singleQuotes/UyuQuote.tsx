import React from 'react'
import { uyuQuote } from '@/services/dolars/othersQuotes/get.uyu.service';
import { QuoteCard } from '@/commons/components/QuoteCard';

export const UyuQuote = async () => {
    const uyuData = await uyuQuote({ abortController: undefined });
    return (
        <QuoteCard {...uyuData} />
    )
}
