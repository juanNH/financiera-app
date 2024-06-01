import React, { Fragment } from 'react'
import { TableRow, TableCell, Skeleton } from '@mui/material';
import _ from 'lodash';
interface Props {
    tableBodyData: JSX.Element,
    isLoading: boolean,
    loadingRows: number,
    loadinCells: number,
}
export const TableRowTable = ({ tableBodyData, isLoading, loadingRows, loadinCells }: Props) => {
    if (isLoading) {
        return (<Fragment>{_.range(1, loadingRows + 1).map(row => (
            <TableRow
                key={row}
            >
                {
                    _.range(1, loadinCells + 1).map(cell => (
                        <TableCell key={cell.toString() + row.toString()}>
                            <Skeleton variant="rectangular" />
                        </TableCell>
                    ))
                }
            </TableRow>
        ))
        }</Fragment>)
    }
    return <Fragment>{tableBodyData}</Fragment>;
}
