'use client'

import React from 'react'
import { FormControl, TextField } from '@mui/material';
import { debounce } from 'lodash';
import { BcraVariable } from '@/services/bcra/graphql.variableList.service';

export interface RequiredBcraVariable extends BcraVariable {
    descripcion: string; // Ensures description is not undefined
}
interface Props {
    data: RequiredBcraVariable[],
    setVariables: React.Dispatch<React.SetStateAction<BcraVariable[]>>
}

export const Search = ({ data, setVariables }: Props) => {

    function handleDebounceFn(inputValue: string) {
        if(inputValue.trim() === ""){
            setVariables(data);
        }
        setVariables(data.filter((item) => item.descripcion.toLowerCase().includes(inputValue.toLowerCase())));
    }

    const debounceFn = debounce(handleDebounceFn, 300);

    function handleChange(event:any) {
        debounceFn(event.target.value);
    };
    return (
        <FormControl sx={{ p: 1 }}>
            <TextField
                type="text"
                label="Búsqueda por descripción"
                sx={{ my: 1 }}
                onChange={handleChange}
            />
        </FormControl>
    )
}
