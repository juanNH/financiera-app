import React from 'react'
import { Typography, Box } from '@mui/material'
import EngineeringIcon from '@mui/icons-material/Engineering';
export const WorkingFeature = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column', textAlign: "center" }}>
            <Typography variant='h1' sx={{fontSize:'5rem'}}>Estamos trabajando!</Typography>
            <EngineeringIcon sx={{ flex: 1, fontSize: '30vh', alignSelf: 'center' }} color='primary' />
        </Box>
    )
}
