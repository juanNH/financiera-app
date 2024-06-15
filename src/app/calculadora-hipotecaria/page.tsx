import { WorkingFeature } from '@/commons/components/WorkingFeature';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "FinherArg - calculadora hipotecaria",
  description: "FinherArg es una aplicación que tiene el fin de poder brindar datos, herramientas y datos financieros a los usuarios.",
  // Add additional metadata here
  keywords: ['calculadora', 'hipotecas', 'prestamo hipotecario', 'calculadora financiera', 'calculadora hipotecaria', 'sistema frances', 'calculadora hipetcaria francesa', 'calculadora sistema frances'],
  authors: [{ name: "Juan", url: "https://www.linkedin.com/in/juannherrerad/" }],
  twitter: {
    title: 'FinherArg',
    description: 'FinherArg es una aplicación que tiene el fin de poder brindar datos, herramientas y datos financieros a los usuarios.',
  },
};

export default function Page() {
  return (
    <main>
          <WorkingFeature />
    </main>
  )
}

