import React from 'react'
import { Grid } from '@mui/material';
import { DescriptionSection } from './components/DescriptionSection'
import { ActionSection } from './components/ActionSection'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "FinherArg - Calculadora hipotecaria sistema frances",
    description: "FinherArg es una aplicación que tiene el fin de poder brindar datos, herramientas y datos financieros a los usuarios.",
    // Add additional metadata here
    keywords: ['calculadora', 'hipotecas', 'prestamo hipotecario', 'calculadora financiera', 'calculadora hipotecaria', 'sistema frances', 'calculadora hipetcaria francesa', 'calculadora sistema frances'],
    authors: [{ name: "Juan", url: "https://www.linkedin.com/in/juannherrerad/" }],
    twitter: {
      title: 'FinherArg',
      description: 'FinherArg es una aplicación que tiene el fin de poder brindar datos, herramientas y datos financieros a los usuarios.',
    },
  };
export default function page() {

    return (
        <main>
            <Grid container>
                <DescriptionSection />
                <ActionSection />
            </Grid>
        </main>
    )
}
