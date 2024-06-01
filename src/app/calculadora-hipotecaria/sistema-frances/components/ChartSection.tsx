import React from 'react'
import { Line } from 'react-chartjs-2'
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
import { Grid, Paper } from '@mui/material';
import { CalculateLoanFrenchSystem } from '@/app/api/loan/adapter';
import { TooltipContextTitle } from '@/commons/models/chartjs.types';
import roundToTwoDecimals from '@/commons/helpers/roundToTwoDecimals';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

/**
 * @param {CalculateLoanFrenchSystem} data array with data to render
 */
interface Props {
    data: CalculateLoanFrenchSystem,
}
interface DataSet {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    yAxisID: string;
}
export const ChartSection = ({ data }: Props) => {
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
                text: `Grafico de evolucion de pago atraves de los meses de un total a pagar de $${data.totalToPay}`,
            },
            tooltip: {
                callbacks: {
                    title: function (ctx: any | TooltipContextTitle<DataSet>[]) {
                        return `Mes: ${ctx[0].label} - Total restante: $${roundToTwoDecimals(data.totalToPay - (data.monthlyPayment * Number(ctx[0].label)))}`;
                    },
                }
            }
        },
        scales: {
            y: {
                type: 'linear' as const,
                display: true,
                position: 'left' as const,
            },
            y1: {
                type: 'linear' as const,
                display: true,
                position: 'right' as const,
                grid: {
                    drawOnChartArea: false,
                },
            },
        },

    };

    const labels = data.amortizationTable.map(item => (item.month));

    const datas = {
        labels,
        datasets: [
            {
                label: 'Interes pagado',
                data: data.amortizationTable.map(item => (item.interestPaid)),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                yAxisID: 'y',
            },
            {
                label: 'Capital pagado',
                data: data.amortizationTable.map(item => item.principalPaid),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                yAxisID: 'y1',
            },
        ],
    };
    return (
        <Paper xs={12} md={12} lg={9} sx={{ p: 2 }} component={Grid} item variant="outlined">
            <Line options={options} data={datas} />
        </Paper>
    )
}
