import React, { FormEvent, useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, Divider, Box } from '@mui/material';
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

    const submitDate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (dateStart && dateEnd) {
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
        </form>
    )
}
