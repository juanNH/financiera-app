import React, { useState } from 'react'
import { Paper, Grid, Button, Typography } from '@mui/material';
import * as XLSX from "xlsx";
import { AmortizationTableFrenchSystem } from '@/app/api/loan/adapter';


/**
 * Interface of component
 * @param {AmortizationTableFrenchSystem[]} data Data to export excel.
 */
interface Props {
    data: AmortizationTableFrenchSystem[],
}
export const DescriptionSection = ({ data }: Props) => {
    const [isLoading, setLoading] = useState(false);
    const onGetExporProduct = async (title?: string, worksheetname?: string) => {
        try {
            setLoading(true);
            if (data.length) {
                const dataToExport = data.map((row) => ({
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
                setLoading(false);
            } else {
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
        }
    };

    return (
        <Paper item xs={12} component={Grid}>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque est ea suscipit tempora ipsam dicta ipsum, qui molestias illo molestiae quo repellat hic reiciendis beatae vel. Facere reiciendis id cupiditate.
            </Typography>
            <Button
                onClick={() => onGetExporProduct('calculo-prestamo','calculo-prestamo')}
                variant="outlined"
                type="submit"
                disabled={isLoading || !data.length}
            >
                {isLoading ? 'Exportando...' : 'Exportar'}
            </Button>
        </Paper>
    )
}
