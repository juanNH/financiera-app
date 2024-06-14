import React from 'react'
import { Typography, CardContent, Paper } from '@mui/material';

import { Dolar } from '@/app/api/dolar/adapter';


export const QuoteCard = (quote: Dolar) => {
    const formattedDate = formatDate(quote.updateDate);
    return (
        <Paper variant="outlined" sx={{ '&:hover': { boxShadow: '0px 3px 5px rgba(237,108,2, 0.2)', } }}>
            <CardContent>
                <Typography variant='h4' sx={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>
                    {quote.name}
                </Typography>
                <Typography variant="h5" sx={{ fontSize: '1rem' }}>
                    Venta / Compra
                </Typography>
                <Typography variant="h6" sx={{ fontSize: '1.1rem', margin: '0 0 0.5rem 0', color: 'primary.main' }}>
                    ${quote.sell} / ${quote.buy}
                </Typography>
                <Typography variant="body2">
                    Ultima actualizacion el
                </Typography>
                <Typography variant="body2">
                    {formattedDate}
                </Typography>
            </CardContent >
        </Paper>
    )
}
function formatDate(dateString: string) {
    const date = new Date(dateString); // Create a Date object from the string
    const day = String(date.getDate()).padStart(2, '0'); // Get day with zero-padding
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month with zero-padding (months are 0-indexed)
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} a las ${hour}:${minutes}`;
}
