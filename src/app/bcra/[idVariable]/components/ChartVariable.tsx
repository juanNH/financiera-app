'use client'
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useTheme, Paper, Box, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2'
import { VariableHistory } from '@/services/bcra/get.variableHistory.service';
import { DataState } from '@/commons/models/structure.interface';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
interface Props {
    variables: DataState<VariableHistory[]>,
    graphText?: string,
}
export const ChartVariable = ({ variables, graphText = "Cargando..." }: Props) => {
    const theme = useTheme();
    const textColor = theme.palette.text.primary;
    let label = 'Variacion durante'
    if (variables.data.length) {
        label += ` ${variables?.data[0].fecha} - ${variables?.data[variables.data.length - 1].fecha}`;
    }
    if (variables.isError) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <Typography variant="h1" component="h1">
                    Recurso no disponible
                </Typography>
            </Box>
        )
    }
    const options = {
        responsive: true,
        interaction: {
            mode: 'index' as const,
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: graphText,
                color: textColor
            },
            legend: {
                labels: {
                    color: textColor,
                }
            },
        },
        scales: {
            y: {
                type: 'linear' as const,
                display: true,
                position: 'left' as const,
                ticks: { color: textColor }
            },
            x: {
                ticks: { color: textColor }
            }
        },

    };
    const labels = variables.data.map(item => (item.fecha));
    const datas = {
        labels,
        datasets: [
            {
                label: label,
                labelColor: 'red',
                data: variables.data.map(item => Number(item.valor.replace(/\./g, "").replace(",", "."))),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                yAxisID: 'y',
            },
        ],
    };
    return (
        <Paper sx={{ p: 2, width:'90%' }} variant="outlined">
            <Line options={options} data={datas} />
        </Paper>
    )
}
