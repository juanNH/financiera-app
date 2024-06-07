import React from 'react'
import { Paper, Typography } from '@mui/material';
import Link from 'next/link';

export const DescriptionSection = () => {
    return (
        <Paper sx={{ m: "2rem 0", p: 2 }}>
            <Typography variant="h3" sx={{ fontSize: { sm: "24px", md: "32px" } }}>Principales variables del <b>BCRA</b></Typography>
            <Typography variant="body1">
                Estas son las principales variables de las que dispone el <Link href="https://www.bcra.gob.ar/default.asp" target='_blank' style={{ textDecoration: 'none' }}>BCRA</Link>(Banco central de la República argentina) de manera pública.
            </Typography>
        </Paper>
    )
}
