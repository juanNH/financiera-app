import React from 'react'
import { Paper, Grid, Typography, List, ListItem } from '@mui/material';
import { AmortizationTableFrenchSystem } from '@/app/api/loan/adapter';

export const DescriptionSection = () => {

    return (
        <Paper item xs={12} component={Grid} sx={{ p: 1 }}>
            <Typography variant="h3" sx={{ fontSize: { sm: "24px", md: "32px" } }}>Sistema frances</Typography>
            <Typography variant="body1">
                El préstamo con sistema francés es un método de amortización en el que el monto total del préstamo se paga en cuotas iguales durante todo el periodo del préstamo.
                Desde el primer pago hasta el último, las cuotas mensuales son siempre del mismo monto.
            </Typography>
            <List>
                <ListItem>
                    <Typography variant="body1">
                        Aunque las cuotas son iguales, cada pago se compone de dos partes: capital e intereses.
                    </Typography>
                </ListItem>

                <ListItem>
                    <Typography variant="body1">
                        Al principio, los intereses representan una mayor parte de la cuota. Estos intereses se calculan sobre el saldo pendiente del préstamo.
                    </Typography>
                </ListItem>

                <ListItem>
                    <Typography variant="body1">
                        Con cada cuota pagada, se reduce el saldo pendiente del préstamo. A medida que el saldo baja, los intereses disminuyen y la parte de la cuota destinada a pagar el capital aumenta.
                    </Typography>
                </ListItem>
            </List>
        </Paper>
    )
}
