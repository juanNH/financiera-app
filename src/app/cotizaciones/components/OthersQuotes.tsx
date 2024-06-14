import React from 'react'
import { Grid } from '@mui/material';
import { UyuQuote, ClpQuote, BrlQuote, EurQuote } from './singleQuotes';



export const OthersQuotes = () => {

  return (
    <Grid container spacing={2} sx={{ p: '1rem 0' }}>
      <Grid item xs={6} md={4} lg={3}>
        <UyuQuote />
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <ClpQuote />
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <BrlQuote />
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <EurQuote />
      </Grid>
    </Grid>
  )
}
