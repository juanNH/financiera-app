'use client'
import React, { useState } from 'react'
import { TableMortgageCalculator } from './components/TableMortgageCalculator'
import { calculateLoanFrenchSystem } from '@/services/loan-calculator/get.loan-calculator.service'
import { DataState } from '@/commons/models/structure.interface'
import { FormCalculator, FormFields } from './components/FormCalculator'
import { CalculateLoanFrenchSystem } from '@/app/api/loan/adapter'
import { ChartSection } from './components/ChartSection'
import { Grid, Box } from '@mui/material';
import { DescriptionSection } from './components/DescriptionSection'

export default function page() {
    const [data, setData] = useState<DataState<CalculateLoanFrenchSystem>>({
        data: {
            totalToPay: 0,
            monthlyPayment: 0,
            amortizationTable: []
        },
        isError: false,
        isLoading: false,
    })
    const handleCalculate = async (data: FormFields) => {
        setData(prevState => ({ ...prevState, isLoading: true }))
        try {
            const frenchSystemTable = await calculateLoanFrenchSystem({
                params: {
                    loanDebth: data.loanDebth,
                    yearlyInterest: data.yearlyInterest,
                    totalYears: data.totalYears,
                }
            })
            setData(prevState => ({ ...prevState, data: frenchSystemTable, isLoading: false }))
        } catch (error) {
            setData(prevState => ({ ...prevState, isLoading: false }))
        }

    }
    return (
        <Box sx={{ pt: 2 }}>
            <Grid container>
                <DescriptionSection data={data.data.amortizationTable} />
                <FormCalculator handleCalculate={handleCalculate} />
                <ChartSection data={data.data} />
                <Grid item xs={12} sx={{ pt: 1 }}>
                    <TableMortgageCalculator
                        data={data.data.amortizationTable}
                        isLoading={data.isLoading}
                    />
                </Grid>
            </Grid>

        </Box >
    )
}
