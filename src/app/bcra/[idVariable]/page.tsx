'use client'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { VariableHistory, variableHistory as variableHistoryFetch } from '@/services/bcra/get.variableHistory.service'
import { ChartVariable } from './components/ChartVariable'
import { variableById } from '@/services/bcra/get.variableById.service'
import { DataState, Nulleable } from '@/commons/models/structure.interface'
import { BcraVariable } from '@/services/bcra/graphql.variableList.service'
import { DateFormSection } from './components/DateFormSection'


interface DateObj {
    year: number;
    month: number;
    day: number;
}

export default function Page() {
    const today = new Date();
    const date: DateObj = {
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate(),
    }
    const dateSixMonthAgo = {
        year: date.month - 6 >= 1 ? date.year : date.year - 1,
        month: date.month - 6 >= 1 ? date.month - 6 : 12 + (date.month - 6),
        day: date.day,
    }
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
    const handleSearchHistory = (startDate: Date, endDate: Date) => {
        callApi({
            year: startDate.getFullYear(),
            month: startDate.getMonth(),
            day: startDate.getDate(),
        }, {
            year: endDate.getFullYear(),
            month: endDate.getMonth(),
            day: endDate.getDate(),
        })
    }

    /**
     * Function to fetch bcra history data.
     * @param startDate Date to start queu.
     * @param endDate Date to end queu.
     */
    const callApi = async (startDate: DateObj, endDate: DateObj) => {
        try {
            setVariableHistory({
                ...variableHistory,
                isError: false,
                isLoading: true,
            })
            const variablePromise = variableById({
                params: { idVariable: Number(idString) },
                abortController: abortController.current
            })
            const variableHistoryPromise = variableHistoryFetch({
                params: {
                    id: Number(idString),
                    startDate: `${startDate.year}-${startDate.month}-${startDate.day}`,
                    endDate: `${endDate.year}-${endDate.month}-${endDate.day}`,
                },
                abortController: abortController.current
            });
            const [variableHistoryResponse, variableResponse] = await Promise.all([variableHistoryPromise, variablePromise])
            setVariableHistory({
                ...variableHistory,
                data: variableHistoryResponse,
                isLoading: false,
                isError: false,
            });
            setVariable({
                ...variable,
                data: variableResponse,
                isLoading: false,
                isError: false,
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

        callApi(dateSixMonthAgo, date)
        return () => {
            abortController.current.abort();
        }
    }, [])
    return (
        <main>
            <DateFormSection
                startDate={`${dateSixMonthAgo.day > 9 ? dateSixMonthAgo.day : '0' + dateSixMonthAgo.day.toString()}/${dateSixMonthAgo.month > 9 ? dateSixMonthAgo.month : '0' + dateSixMonthAgo.month.toString()}/${dateSixMonthAgo.year}`}
                endDate={`${date.day > 9 ? date.day : '0' + date.day.toString()}/${date.month > 9 ? date.month : '0' + date.month.toString()}/${date.year}`}
                handleSearchHistory={handleSearchHistory}
                dataIsLoading={variableHistory.isLoading}
            />
            <ChartVariable variables={variableHistory} graphText={variable.data?.descripcion} />
        </main>
    )
}
