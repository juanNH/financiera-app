import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "MiFinanciero",
  description: "MiFinanciero es una aplicación que tiene el fin de poder brindar datos, herramientas y datos financieros a los usuarios.",
  // Add additional metadata here
  keywords: ['calculadora', 'hipotecas', 'prestamo hipotecario', 'calculadora financiera', 'calculadora hipotecaria', 'sistema frances', 'calculadora hipetcaria francesa', 'calculadora sistema frances'],
  viewport: { width: "device-width", initialScale: 1 },
  authors: [{ name: "Juan", url: "https://www.linkedin.com/in/juannherrerad/" }],
  twitter: {
    title: 'MiFinanciero',
    description: 'MiFinanciero es una aplicación que tiene el fin de poder brindar datos, herramientas y datos financieros a los usuarios.',
  },
};

const page = () => {
  return (
    <>
    </>
  )
}

export default page;