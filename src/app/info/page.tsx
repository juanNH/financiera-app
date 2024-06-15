import React from 'react'
import { Paper, Typography } from '@mui/material';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "FinherArg - Informacion",
    description: "FinherArg es una aplicación que tiene el fin de poder brindar datos, herramientas y datos financieros a los usuarios.",
    // Add additional metadata here
    keywords: ['api', 'bcra', 'dolar', 'finherarg'],
    authors: [{ name: "Juan", url: "https://www.linkedin.com/in/juannherrerad/" }],
    twitter: {
      title: 'FinherArg',
      description: 'FinherArg es una aplicación que tiene el fin de poder brindar datos, herramientas y datos financieros a los usuarios.',
    },
  };
  

const Page = () => {
    return (
        <main>
            <Paper sx={{ p: '1rem', textAlign: 'center' }}>
                <Typography variant="h1" sx={{ fontSize: "3rem" }}>Informacion sobre la web</Typography>
                <Typography variant="body2">Esta aplicacion tiene como objetivo brindar informacion financiera y brindar distintas herramientas del mundo financiero al publico.</Typography>
                <Typography variant="h5" sx={{ fontSize: "2.2rem" }}>Recursos consumidos</Typography>
                <Typography variant="body2">Para la obtencion de datos sobre el bcra, consultamos a la api del <Link target='_blank' href="https://www.bcra.gob.ar/default.asp">Banco Central de la Republica Argentina</Link>.</Typography>
                <Typography variant="body2">Para la obtencion de datos sobre el dolar, consultamos a la api de <Link target='_blank' href="https://dolarapi.com/docs/">DolarApi.com</Link>.</Typography>
            </Paper>


        </main>
    )
}

export default Page;
