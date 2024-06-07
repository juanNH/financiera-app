'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { Grid, Paper, Card, CardContent, Typography, CardActions, Button, Divider } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import { BcraVariable } from '@/services/bcra/graphql.variableList.service';
import { RequiredBcraVariable, Search } from './Search';

interface Props {
    data: BcraVariable[]
}

export const VariablesList = ({data}: Props) => {
    const [variables, setVariables] = useState(data)
    return (
        <Paper>
            <Search data={data as RequiredBcraVariable[]} setVariables={setVariables}/>

            <Grid spacing={2} container sx={{ p: '0 1rem' }}>
                {
                    variables.map(variable => (
                        <Grid
                            key={variable.idVariable}
                            item
                            xs={12}
                            md={6}
                            lg={4}
                            sx={{ display: 'flex' }}
                        >
                            <Card sx={{ flex: 1, boxShadow: 3, display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ p: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h5" sx={{ flex: 1 }}>
                                        {variable.descripcion}
                                    </Typography>
                                    <Typography variant="h4">
                                        {variable.valor}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Ultima actualización: {variable.fecha}
                                    </Typography>
                                </CardContent>
                                <Divider />
                                <CardActions>
                                    <Button variant="contained" color="warning" size="small" sx={{ margin: 'auto' }} component={Link} href={`/bcra/${variable.idVariable}/`}>
                                        Ver gráfica<TimelineIcon />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Paper>
    )
}
