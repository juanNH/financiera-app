'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { gql, useQuery } from '@apollo/client';
import { ChartVariable } from '../bcra/[idVariable]/components/ChartVariable';
import { BcraVariable } from '@/services/bcra/graphql.variableList.service';
import { DataState } from '@/commons/models/structure.interface';
import { VariableHistory, variableHistory as variableHistoryFetch } from '@/services/bcra/get.variableHistory.service'
import Link from 'next/link';
import { Typography, Box, Divider, useTheme } from '@mui/material';
import { boolean } from 'zod';

const query = gql`
query{  
    variables{

		baseMonetaria{
			idVariable
			cdSerie
			descripcion
			fecha
			valor
  	}
	
		inflacionMensual{
			idVariable
			cdSerie
			descripcion
			fecha
			valor
  	}
		inflacionInteranual{
			idVariable
			cdSerie
			descripcion
			fecha
			valor
  	}
		uva{
			idVariable
			cdSerie
			descripcion
			fecha
			valor
            }
		reservasInternacionales{
			idVariable
			cdSerie
			descripcion
			fecha
			valor
  	}
  }
} 
`
interface GraphResponse {
    variables: {
        baseMonetaria: BcraVariable,
        inflacionMensual: BcraVariable,
        inflacionInteranual: BcraVariable,
        uva: BcraVariable,
        reservasInternacionales: BcraVariable,
    }
}
interface VariablesHistory {
    baseMonetaria: { data: VariableHistory[], isError: boolean },
    inflacionMensual: { data: VariableHistory[], isError: boolean },
    inflacionInteranual: { data: VariableHistory[], isError: boolean },
    uva: { data: VariableHistory[], isError: boolean },
    reservasInternacionales: { data: VariableHistory[], isError: boolean },
}
export const BcraSwiper = () => {
    const abortController = useRef(new AbortController())
    const { data: variablesGraph, loading, error } = useQuery<GraphResponse>(query);
    const [variablesHistory, setVariablesHistory] = useState<DataState<VariablesHistory>>({
        isLoading: true,
        isError: false,
        data: {
            baseMonetaria: { data: [], isError: false },
            inflacionInteranual: { data: [], isError: false },
            inflacionMensual: { data: [], isError: false },
            uva: { data: [], isError: false },
            reservasInternacionales: { data: [], isError: false },
        }
    })

    const callVariablesHistory = async (data: GraphResponse) => {
        const today = new Date();
        const date = {
            year: today.getFullYear(),
            month: today.getMonth() + 1,
            day: today.getDate(),
        }
        const dateSixMonthAgo = {
            year: date.month - 6 >= 1 ? date.year : date.year - 1,
            month: date.month - 6 >= 1 ? date.month - 6 : 12 + (date.month - 6),
            day: date.day,
        }
        const baseMonetariaHistoryPromise = variableHistoryFetch({
            params: {
                id: data.variables.baseMonetaria.idVariable as number,
                startDate: `${dateSixMonthAgo.year}-${dateSixMonthAgo.month}-${dateSixMonthAgo.day}`,
                endDate: `${date.year}-${date.month}-${date.day}`,
            },
            abortController: abortController.current
        });
        const inflacionInteranualHistoryPromise = variableHistoryFetch({
            params: {
                id: data?.variables?.inflacionInteranual.idVariable as number,
                startDate: `${dateSixMonthAgo.year}-${dateSixMonthAgo.month}-${dateSixMonthAgo.day}`,
                endDate: `${date.year}-${date.month}-${date.day}`,
            },
            abortController: abortController.current
        });
        const inflacionMensualHistoryPromise = variableHistoryFetch({
            params: {
                id: data?.variables?.inflacionMensual.idVariable as number,
                startDate: `${dateSixMonthAgo.year}-${dateSixMonthAgo.month}-${dateSixMonthAgo.day}`,
                endDate: `${date.year}-${date.month}-${date.day}`,
            },
            abortController: abortController.current
        });
        const uvaHistoryPromise = variableHistoryFetch({
            params: {
                id: data?.variables?.uva.idVariable as number,
                startDate: `${dateSixMonthAgo.year}-${dateSixMonthAgo.month}-${dateSixMonthAgo.day}`,
                endDate: `${date.year}-${date.month}-${date.day}`,
            },
            abortController: abortController.current
        });
        const reservasInternacionalesHistoryPromise = variableHistoryFetch({
            params: {
                id: data?.variables?.reservasInternacionales.idVariable as number,
                startDate: `${dateSixMonthAgo.year}-${dateSixMonthAgo.month}-${dateSixMonthAgo.day}`,
                endDate: `${date.year}-${date.month}-${date.day}`,
            },
            abortController: abortController.current
        });
        const [
            baseMonetariaHistoryResponse,
            inflacionInteranualHistoryResponse,
            inflacionMensualHistoryResponse,
            uvaHistoryResponse,
            reservasInternacionalesHistoryResponse,
        ] = await Promise.allSettled([
            baseMonetariaHistoryPromise,
            inflacionInteranualHistoryPromise,
            inflacionMensualHistoryPromise,
            uvaHistoryPromise,
            reservasInternacionalesHistoryPromise
        ])
        setVariablesHistory({
            ...variablesHistory,
            isError: false,
            isLoading: false,
            data: {
                ...variablesHistory.data,
                baseMonetaria: baseMonetariaHistoryResponse.status === 'fulfilled' ? { data: baseMonetariaHistoryResponse.value, isError: false } : { data: [], isError: true },
                inflacionInteranual: inflacionInteranualHistoryResponse.status === 'fulfilled' ? { data: inflacionInteranualHistoryResponse.value, isError: false } : { data: [], isError: true },
                inflacionMensual: inflacionMensualHistoryResponse.status === 'fulfilled' ? { data: inflacionMensualHistoryResponse.value, isError: false } : { data: [], isError: true },
                uva: uvaHistoryResponse.status === 'fulfilled' ? { data: uvaHistoryResponse.value, isError: false } : { data: [], isError: true },
                reservasInternacionales: reservasInternacionalesHistoryResponse.status === 'fulfilled' ? { data: reservasInternacionalesHistoryResponse.value, isError: false } : { data: [], isError: true },
            }
        })
    }
    const theme = useTheme();
    const backgroundColor = theme.palette.background.paper;
    useEffect(() => {
        if (variablesGraph) {
            const variablesFunc = variablesGraph
            callVariablesHistory(variablesFunc);
        }

    }, [variablesGraph])
    return (
        <Box sx={{ width: { xs: '100%', lg: '50%' }, m: '2rem 0' }}>
            <Divider />
            <Typography variant={'h3'} sx={{ fontSize: '1.4rem', textAlign: 'center', p: 1 }}>Variables Bcra (Ultimos 6 meses)</Typography>
            <Swiper
                style={{ width: '100%' }}
                spaceBetween={30}
                loop={true}
                centeredSlides={true}

                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
            >
                <SwiperSlide style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', background: backgroundColor }}>
                    <Box>
                        <Typography
                            sx={{ textDecoration: 'none' }}
                            href={`/bcra/${variablesGraph?.variables?.inflacionMensual.idVariable}`}
                            component={Link}
                        >
                            Ver más
                        </Typography>
                    </Box>
                    <ChartVariable variables={{
                        ...variablesHistory,
                        data: variablesHistory.data.inflacionMensual.data,
                        isError:variablesHistory.data.inflacionMensual.isError,
                    }} graphText={variablesGraph?.variables?.inflacionMensual.descripcion || undefined} />
                </SwiperSlide>
                <SwiperSlide style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', background: backgroundColor }}>
                    <Box>
                        <Typography
                            sx={{ textDecoration: 'none' }}
                            href={`/bcra/${variablesGraph?.variables?.inflacionInteranual.idVariable}`}
                            component={Link}
                        >
                            Ver más
                        </Typography>
                    </Box>
                    <ChartVariable variables={{
                        ...variablesHistory,
                        data: variablesHistory.data.inflacionInteranual.data,
                        isError:variablesHistory.data.inflacionInteranual.isError,
                    }} graphText={variablesGraph?.variables?.inflacionInteranual.descripcion || undefined} />
                </SwiperSlide>
                <SwiperSlide style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', background: backgroundColor }}>
                    <Box>
                        <Typography
                            sx={{ textDecoration: 'none' }}
                            href={`/bcra/${variablesGraph?.variables?.uva.idVariable}`}
                            component={Link}
                        >
                            Ver más
                        </Typography>
                    </Box>
                    <ChartVariable variables={{
                        ...variablesHistory,
                        data: variablesHistory.data.uva.data,
                        isError:variablesHistory.data.uva.isError,
                    }} graphText={variablesGraph?.variables?.uva.descripcion || undefined} />
                </SwiperSlide>
                <SwiperSlide style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', background: backgroundColor }}>
                    <Box>
                        <Typography
                            sx={{ textDecoration: 'none' }}
                            href={`/bcra/${variablesGraph?.variables?.baseMonetaria.idVariable}`}
                            component={Link}
                        >
                            Ver más
                        </Typography>
                    </Box>
                    <ChartVariable variables={{
                        ...variablesHistory,
                        data: variablesHistory.data.baseMonetaria.data,
                        isError:variablesHistory.data.baseMonetaria.isError,
                    }} graphText={variablesGraph?.variables?.baseMonetaria.descripcion || undefined} />
                </SwiperSlide>
                <SwiperSlide style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', background: backgroundColor }}>
                    <Box>
                        <Typography
                            sx={{ textDecoration: 'none' }}
                            href={`/bcra/${variablesGraph?.variables?.reservasInternacionales.idVariable}`}
                            component={Link}
                        >
                            Ver más
                        </Typography>
                    </Box>
                    <ChartVariable variables={{
                        ...variablesHistory,
                        data: variablesHistory.data.reservasInternacionales.data,
                        isError: variablesHistory.data.reservasInternacionales.isError,
                    }} graphText={variablesGraph?.variables?.reservasInternacionales.descripcion || undefined} />
                </SwiperSlide>
            </Swiper>
        </Box>
    )
}
