'use client'
import React from 'react'
import { QuoteCard } from '@/commons/components/QuoteCard';
import { Skeleton } from '@mui/material';

export const QuoteSkeleton = () => {
    return (
        <Skeleton variant="rectangular" >
            <QuoteCard currency={''} type={''} name={''} buy={0} sell={0} updateDate={''} />
        </Skeleton>
    )
}