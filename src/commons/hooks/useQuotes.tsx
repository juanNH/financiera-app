'use client';
import { useEffect, useRef, useState } from 'react'
import { DataState } from '../models/structure.interface';
import { Dolar } from '@/app/api/dolar/adapter';
import { brlQuote } from '@/services/dolars/othersQuotes/get.brl.service';
import { clpQuote } from '@/services/dolars/othersQuotes/get.clp.service';
import { eurQuote } from '@/services/dolars/othersQuotes/get.eur.service';
import { uyuQuote } from '@/services/dolars/othersQuotes/get.uyu.service';

export const useQuotes = (type: Quote) => {
    const [quote, setQuote] = useState<DataState<Dolar>>({
        isLoading: true,
        isError: false,
        data: {
            currency: '',
            type: '',
            name: '',
            buy: 0,
            sell: 0,
            updateDate: ''
        }
    })
    const handleFetch = () => {
        switch (type) {
            case Quote.brl:
                return brlQuote;
            case Quote.clp:
                return clpQuote;
            case Quote.eur:
                return eurQuote;
            case Quote.uyu:
                return uyuQuote;
            default:
                break;
        }
    }
    const abortController = useRef(new AbortController())
    const apiFetch = async () => {
        try {
            const fetch = handleFetch();
            if (fetch === undefined) {
                throw new Error('Bad type selected');
            }
            const dolars = await fetch({ abortController: abortController.current });
            setQuote({
                isError: false,
                isLoading: false,
                data: dolars,
            })
        } catch (error) {
            console.error(error)
            setQuote({
                ...quote,
                isError: true,
                isLoading: false,
            })
        }
    }
    useEffect(() => {
        apiFetch();
        return () => {
            abortController.current.abort;
        }
    }, [])
    return { quote };
}
export enum Quote {
    brl,
    clp,
    eur,
    uyu,
}