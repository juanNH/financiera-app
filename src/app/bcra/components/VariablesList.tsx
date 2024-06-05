import React from 'react'
import Link from 'next/link';
import { BcraVariable } from '@/services/bcra/graphql.variableList.service'
import { Grid, Paper, Card, CardContent, Typography, CardActions, Button, Divider } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
interface Props {
    data: BcraVariable[]
}

export const VariablesList = ({ data }: Props) => {
    return (
        <Grid component={Paper} spacing={2} container sx={{ p: 1 }}>
            {
                data.map(variable => (
                    <Grid
                        elevation={24}
                        key={variable.idVariable}
                        component={Card}
                        item xs={12}
                        md={5.7}
                        lg={3.8}
                        sx={{ boxShadow: 3, margin: { xs: "0.5rem 0", md: 1 }, display: 'flex', flexDirection: 'column' }}
                    >
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
                            <Button variant="contained" color="warning" size="small" sx={{ margin: 'auto' }} component={Link} href={`/bcra/${variable.idVariable}`}>
                                Ver gráfica<TimelineIcon />
                            </Button>
                        </CardActions>
                    </Grid>
                ))
            }
        </Grid>
    )
}
