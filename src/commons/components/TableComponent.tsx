import { Paper, TableRow, TableContainer, Table, TableHead, TableCell, TableBody } from '@mui/material';
import { TableCellProps } from '@mui/material/TableCell';
import React from 'react'
import { TableRowTable } from './TableRowTable';
import { TableContainerProps } from '@mui/material/TableContainer';


interface Props {
    tableHead: {
        tableCellProps?: TableCellProps,
        text: string,
    }[],
    tableLabel: string,
    isLoading: boolean,
    tableBodyData: JSX.Element,
    loadingRows?: number,
    tableContainerProps?: TableContainerProps,
}
export const TableComponent = ({ tableContainerProps, tableHead, tableLabel, tableBodyData, isLoading, loadingRows = 10 }: Props) => {
    return (
        <TableContainer component={Paper} {...tableContainerProps}>
            <Table sx={{ minWidth: 650 }} aria-label={tableLabel}>
                <TableHead>
                    <TableRow>
                        {tableHead.map(item => {
                            return (
                                <TableCell {...item.tableCellProps} key={item.text}>
                                    {item.text}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRowTable
                        isLoading={isLoading}
                        tableBodyData={tableBodyData}
                        loadingRows={loadingRows}
                        loadinCells={tableHead.length}
                    />
                </TableBody>
            </Table>
        </TableContainer >
    )
}
