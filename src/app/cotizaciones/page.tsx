'use client'
import React from 'react'
import { Box, Typography } from '@mui/material';
import { DolarGrid } from '../components/DolarGrid';
import { OthersQuotes } from './components/OthersQuotes';
import { useDolars } from '@/commons/hooks';

const Page = () => {
    const {dolars} = useDolars();
    return (
        <main>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', p: { sx: 0, md: '0 2rem', lg: '0 4rem' } }}>
                <Box sx={{ width: '80%', textAlign: 'center' }}>
                    <Typography variant={'h3'} sx={{ fontSize: '1.4rem', textAlign: 'center', p: 1 }}>Dolares</Typography>
                    <DolarGrid dolars={dolars} loadNumber={7}/>
                    <Typography variant={'h3'} sx={{ fontSize: '1.4rem', textAlign: 'center', p: 1 }}>Otras cotizaciones</Typography>
                    <OthersQuotes />
                </Box>
            </Box>
        </main>
    )
}

export default Page;
