
import React from 'react'
import { VariablesList } from './components/VariablesList';
import { DescriptionSection } from './components/DescriptionSection';
import { BcraVariable, variableListBcra } from '@/services/bcra/graphql.variableList.service';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "MiFinanciero",
  description: "MiFinanciero es una aplicación que tiene el fin de poder brindar datos, herramientas y datos financieros a los usuarios.",
  // Add additional metadata here
  keywords: ['bcra', 'banco central de la republica argentina', 'variables bcra', 'variables del banco central de la republica argentina', 'argentina', 'variables argentina', 'tasa', 'historial bcra'],
  authors: [{ name: "Juan", url: "https://www.linkedin.com/in/juannherrerad/" }],
  twitter: {
    title: 'MiFinanciero',
    description: 'MiFinanciero es una aplicación que tiene el fin de poder brindar datos, herramientas y datos financieros a los usuarios.',
  },
};
export default async function Page() {
  let data:BcraVariable[] = [];
  try {
    data = await variableListBcra() || [];
  } catch (error) {
    console.error(error)
  }
  return (
    <main>
      <DescriptionSection />
      <VariablesList data={data || []} />
    </main>
  )
}

