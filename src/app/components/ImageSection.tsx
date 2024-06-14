'use client'
import React from 'react'
import { Box } from '@mui/material';
import Image from 'next/image'
import useWindowSize from '@/commons/hooks/useWindowSize';

export const ImageSection = () => {
  const size = useWindowSize();
  return (
    <Box sx={{ margin: { xs: 0, md: 'auto' } }}>

      <Image src={`/calculator.jpg`}
        alt={'Finanzas'}
        width={size.width * 0.6 > 1200 ? 1200 : (size.width <= 768 ? size.width : size.width * 0.6)}
        height={size.height * 0.3 > 360 ? 360 : size.height * 0.3}
        priority={true}
        placeholder='empty'
      />

    </Box>
  )
}

