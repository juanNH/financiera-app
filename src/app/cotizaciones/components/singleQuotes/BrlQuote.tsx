import React from 'react'
import { brlQuote } from '@/services/dolars/othersQuotes/get.brl.service';
import { QuoteCard } from '@/commons/components/QuoteCard';

export const BrlQuote = async () => {
    const uyuData = await brlQuote({ abortController: undefined });
    return (
        <QuoteCard {...uyuData} />
    )
}
