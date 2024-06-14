'use client';
import React, { useEffect, useRef, useState } from 'react'
import { DataState } from '../models/structure.interface';
import { Dolar } from '@/app/api/dolar/adapter';
import { dolars as dolarsFetch } from '@/services/dolars/get.dolars.service';

export const useDolars = () => {
    const [dolars, setDolars] = useState<DataState<Dolar[]>>({
        isLoading: true,
        isError: false,
        data: []
    })
    const abortController = useRef(new AbortController())
    const apiFetch = async () => {
        try {
            const dolars = await dolarsFetch({ abortController: abortController.current });
            setDolars({
                isError: false,
                isLoading: false,
                data: dolars,
            })
        } catch (error) {
            console.error(error)
            setDolars({
                ...dolars,
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
    return {dolars};
}