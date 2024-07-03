import React from 'react'
import { Box, Typography } from '@mui/material';
import { OthersQuotes } from './components/OthersQuotes';
import { Metadata } from 'next';
import { DolarGrid } from '../components/DolarGrid';

export const metadata: Metadata = {
    title: "FinherArg - Cotizaciones",
    description: "FinherArg es una aplicación que tiene el fin de poder brindar datos, herramientas y datos financieros a los usuarios.",
    // Add additional metadata here
    keywords: ['dolar', 'dolar mep', 'dolar ccl', 'real', 'euro', 'dolar oficial', 'dolar blue', 'dolar tarjeta', 'dolar cripto', 'dolar mayorista', 'peso chileno', 'peso urugayo'],
    authors: [{ name: "Juan", url: "https://www.linkedin.com/in/juannherrerad/" }],
    twitter: {
        title: 'FinherArg',
        description: 'FinherArg es una aplicación que tiene el fin de poder brindar datos, herramientas y datos financieros a los usuarios.',
    },
}
const Page = () => {
    return (
        <main>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', p: { sx: 0, md: '0 2rem', lg: '0 4rem' } }}>
                <Box sx={{ width: '80%', textAlign: 'center' }}>
                    <Typography variant={'h3'} sx={{ fontSize: '1.4rem', textAlign: 'center', p: 1 }}>Dolares</Typography>
                    <DolarGrid />
                    <Typography variant={'h3'} sx={{ fontSize: '1.4rem', textAlign: 'center', p: 1 }}>Otras cotizaciones</Typography>
                    <OthersQuotes />
                </Box>
            </Box>
        </main>
    )
}

export default Page;
