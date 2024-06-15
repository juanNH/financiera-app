'use client'
import { DolarGrid } from '@/app/components/DolarGrid';
import { useDolars } from '@/commons/hooks';
import React from 'react'

export const DolarQuotes = () => {
    const {dolars} = useDolars();

  return (
    <>
        <DolarGrid dolars={dolars} loadNumber={7}/>
    </>
  )
}
