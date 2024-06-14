import React from 'react'
import { dolars as dolarsFetch } from '@/services/dolars/get.dolars.service';
import { Box, Typography } from '@mui/material';
import { DolarGrid } from '../components/DolarGrid';
import { OthersQuotes } from './components/OthersQuotes';

const Page = async () => {
    const dolars = await dolarsFetch({ abortController: undefined });

    return (
        <main>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', p: { sx: 0, md: '0 2rem', lg: '0 4rem' } }}>
                <Box sx={{ width: '80%', textAlign: 'center' }}>
                    <Typography variant={'h3'} sx={{ fontSize: '1.4rem', textAlign: 'center', p: 1 }}>Dolares</Typography>
                    <DolarGrid dolars={dolars} />
                    <Typography variant={'h3'} sx={{ fontSize: '1.4rem', textAlign: 'center', p: 1 }}>Otras cotizaciones</Typography>
                    <OthersQuotes />
                </Box>
            </Box>
        </main>
    )
}

export default Page;
