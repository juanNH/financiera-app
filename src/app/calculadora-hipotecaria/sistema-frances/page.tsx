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
import * as XLSX from "xlsx";

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
    const [isLoadingExport, setLoadingExport] = useState(false);

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
    const handleExportTable = async (title?: string, worksheetname?: string) => {
        try {
            setLoadingExport(true);
            if (data.data.amortizationTable.length) {
                const dataToExport = data.data.amortizationTable.map((row) => ({
                    Mes: row.month,
                    Pago: row.payment,
                    InteresPagado: row.interestPaid,
                    CapitalDevengado: row.principalPaid,
                    CapitalRestante: row.remainingBalance,
                })
                    ,);
                // Create Excel workbook and worksheet
                const workbook = XLSX.utils.book_new();
                const worksheet = XLSX.utils?.json_to_sheet(dataToExport);
                XLSX.utils.book_append_sheet(workbook, worksheet, worksheetname);
                // Save the workbook as an Excel file
                XLSX.writeFile(workbook, `${title}.xlsx`);
                setLoadingExport(false);
            } else {
                setLoadingExport(false);
            }
        } catch (error) {
            setLoadingExport(false);
        }
    };
    return (
        <Box sx={{ pt: 2 }}>
            <Grid container>
                <DescriptionSection />
                <FormCalculator
                    handleCalculate={handleCalculate}
                    handleExportTable={handleExportTable}
                    disabledExportButton={(data.data.amortizationTable.length <= 0) ? true : (isLoadingExport ? true : false)}
                />
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
