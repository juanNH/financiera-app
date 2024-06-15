import React, { FormEvent, useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, Divider, Box, Alert } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { Nulleable } from '@/commons/models/structure.interface';

interface Props {
    endDate: string,
    startDate: string,
    handleSearchHistory: (startDate: Date, endDate: Date) => void,
    dataIsLoading: boolean,
}

export const DateFormSection = ({ endDate, startDate, handleSearchHistory, dataIsLoading }: Props) => {
    const [dateStart, setDateStart] = useState<Nulleable<Dayjs>>(dayjs(startDate, 'DD/MM/YYYY'));
    const [dateEnd, setDateEnd] = useState<Nulleable<Dayjs>>(dayjs(endDate, 'DD/MM/YYYY'));
    const [isError, setIsError] = useState<{ state: boolean, msg: string }>({ state: false, msg: '' });
    const submitDate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (dateStart && dateEnd) {
            const dateStartD = dateStart?.valueOf();
            const dateEndD = dateEnd?.valueOf();
            if (dateStartD > dateEndD) {
                return setIsError({ state: true, msg: 'La fecha Desde, no puede ser mayor al Hasta' });

            }
            if (dateEndD - dateStartD > 1000 * 60 * 60 * 24 * 365 ) {
                return setIsError({ state: true, msg: 'La busqueda debe ser menor de un año de diferencia' });
            }
            setIsError({ state: false, msg: '' });
            handleSearchHistory(dateStart?.toDate() as Date, dateEnd?.toDate() as Date);
        }
    }
    return (
        <form onSubmit={submitDate}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', p: '1rem' }}>
                <DatePicker
                    value={dateStart}
                    onChange={(newValue) => setDateStart(newValue)}
                    label="Desde"

                />
                <Divider orientation="vertical" variant="middle" flexItem sx={{ m: '0 1rem' }} />
                <DatePicker
                    value={dateEnd}
                    onChange={(newValue) => setDateEnd(newValue)}
                    label="Hasta"
                />
                <Button
                    variant="outlined"
                    type="submit"
                    disabled={dataIsLoading}
                    sx={{ m: '0 1rem' }}
                >
                    Buscar
                </Button>

            </Box>
            {isError.state &&
                <Alert sx={{ m: '0 0 1rem 0' }} severity="error">No puede haber entre los buscadores de fecha, mas de 1 año de diferencia.</Alert>
            }
        </form>
    )
}
