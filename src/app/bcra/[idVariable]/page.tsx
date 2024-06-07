'use client'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { VariableHistory, variableHistory as variableHistoryFetch } from '@/services/bcra/get.variableHistory.service'
import { ChartVariable } from './components/ChartVariable'
import { variableById } from '@/services/bcra/get.variableById.service'
import { DataState, Nulleable } from '@/commons/models/structure.interface'
import { BcraVariable } from '@/services/bcra/graphql.variableList.service'


export default function page() {
    const [variableHistory, setVariableHistory] = useState<DataState<VariableHistory[]>>({
        data: [],
        isLoading: true,
        isError: false
    })
    const [variable, setVariable] = useState<DataState<Nulleable<BcraVariable>>>({
        isError: false,
        isLoading: false,
        data: null,
    })
    const abortController = useRef(new AbortController())
    const path = usePathname()
    const idString = path.substring(
        path.lastIndexOf("/") + 1,
        path.length,
    );
    const today = new Date();
    const date = {
        year: today.getFullYear(),
        month: today.getMonth(),
        day: today.getDate(),
    }
    const callApi = async () => {
        try {
            const variablePromise = variableById({
                params: { idVariable: Number(idString) },
                abortController: abortController.current
            })
            const variableHistoryPromise = variableHistoryFetch({
                params: {
                    id: Number(idString),
                    startDate: `${date.year - 1}-${date.month}-${date.day}`,
                    endDate: `${date.year}-${date.month}-${date.day}`,
                },
                abortController: abortController.current
            });
            const [variableHistoryResponse, variableResponse] = await Promise.all([variableHistoryPromise, variablePromise])
            setVariableHistory({
                ...variableHistory,
                data: variableHistoryResponse,
                isLoading: false,
            });
            setVariable({
                ...variable,
                data: variableResponse,
                isLoading: false,
            })
        } catch (error) {
            console.error(error)
            setVariableHistory({
                ...variableHistory,
                isError: true
            })
            setVariable({
                ...variable,
                isError: true,
            })
        }
    }
    useEffect(() => {
        callApi()
        return () => {
            abortController.current.abort();
        }
    }, [])
    return (
        <main>
            <ChartVariable variables={variableHistory} graphText={variable.data?.descripcion} />
        </main>
    )
}
