import { TableComponent } from '@/commons/components'
import React, { Fragment } from 'react'
import { TableRow, TableCell, TableBody } from '@mui/material';
import { AmortizationTableFrenchSystem } from '@/app/api/loan/adapter';

/**
 * @param {AmortizationTableFrenchSystem[]} data array with data to render
 * @param isLoading boolean to render skeleton for table
 */
interface Props {
    data: AmortizationTableFrenchSystem[],
    isLoading: boolean,
}
export const TableMortgageCalculator = ({ data, isLoading }: Props) => {
    return (
        <TableComponent
            tableHead={[{
                text: 'Mes'
            },
            {
                text: 'Pago'
            },
            {
                text: 'Interes pagado'
            },
            {
                text: 'Capital pagado'
            },
            {
                text: 'Saldo restante'
            }]}
            tableLabel={'Tabla de calculo de prestamo.'}
            isLoading={isLoading}
            tableBodyData={<Fragment>{data.map((row) => (
                <TableRow
                    key={row.month}
                >
                    <TableCell>
                        {row.month}
                    </TableCell>
                    <TableCell>${row.payment}</TableCell>
                    <TableCell>${row.interestPaid}</TableCell>
                    <TableCell>${row.principalPaid}</TableCell>
                    <TableCell>${row.remainingBalance}</TableCell>
                </TableRow>
            ))}</Fragment>}
            loadingRows={10}
        />
    )
}
