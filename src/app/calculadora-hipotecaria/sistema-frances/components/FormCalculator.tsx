import React from 'react'
import { Paper, TextField, InputAdornment, Box, Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

/**
 * strings to reduce writting
 */
const formTexts = {
    requiredText: "Complete el campo.",
    requireNumber: "Debe ingresar un numero valido."
}
/**
 * Schema with zod to validate Form
 */
const FormSchema = z.object({
    loanDebth:
        z.number({
            required_error: formTexts.requireNumber,
            invalid_type_error: formTexts.requireNumber,
        }) // Ensure it's a number first
            .int(formTexts.requireNumber)
            .finite(formTexts.requireNumber) // Validate finite number
            .safe(formTexts.requireNumber) // Validate safe number
            .positive(formTexts.requireNumber), // Validate positive number
    yearlyInterest:
        z.number({
            required_error: formTexts.requireNumber,
            invalid_type_error: formTexts.requireNumber,
        })
            .finite(formTexts.requireNumber)
            .safe(formTexts.requireNumber)
            .positive(formTexts.requireNumber), // Validate positive number
    totalYears:
        z.number({
            required_error: formTexts.requireNumber,
            invalid_type_error: formTexts.requireNumber,
        })
            .int(formTexts.requireNumber)
            .finite(formTexts.requireNumber)
            .safe(formTexts.requireNumber)
            .positive(formTexts.requireNumber), // Validate positive number
});

/**
 * Type from FormSchema to export
 */
export type FormFields = z.infer<typeof FormSchema>;

/**
 * @param handleCalculate Function to call after form is correct.
 */
interface Props {
    handleCalculate: (data: FormFields) => void;
}
export const FormCalculator = ({ handleCalculate }: Props) => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>({ resolver: zodResolver(FormSchema) })
    return (
        <Paper variant="outlined" component={Grid} item xs={12} md={12} lg={3} sx={{ p: 1 }}>
            <form onSubmit={handleSubmit(handleCalculate)} >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField
                        {...register("loanDebth", {
                            setValueAs: (value) => Number(value),
                        })}
                        type="number"
                        InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                        label="Monto del credito"
                        error={errors.loanDebth?.message ? true : false}
                        helperText={errors.loanDebth?.message}
                        sx={{ my: 1 }}
                    />
                    <TextField
                        {...register("yearlyInterest", {
                            setValueAs: (value) => Number(value.replace(",", ".")),
                        })}
                        label="Interes anual"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">%</InputAdornment>
                        }}
                        error={errors.yearlyInterest?.message ? true : false}
                        helperText={errors.yearlyInterest?.message}
                        sx={{ my: 1 }}
                    />
                    <TextField
                        {...register("totalYears", {
                            setValueAs: (value) => Number(value),
                        })}
                        type="number"
                        label="Años del credito"
                        error={errors.totalYears?.message ? true : false}
                        helperText={errors.totalYears?.message}
                        sx={{ my: 1 }}
                    />
                    <Button variant="outlined" type="submit" disabled={isSubmitting}> {isSubmitting ? 'Calculando...' : 'Calcular'}</Button>
                </Box>
            </form>
        </Paper>
    )
}
