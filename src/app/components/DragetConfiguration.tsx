'use client';
import React from 'react'
import { useSession } from 'next-auth/react';
import {
    Box,
    Typography,
    ToggleButtonGroup,
    ToggleButton,
    Grid,
    Button,
    Avatar,
} from '@mui/material';
import { Themes } from '../theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { GoogleButton } from './access/GoogleButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'next-auth/react';

interface DrawerConfigurationProps {
    handleChangeTheme: (theme: Themes) => void;
    themeSelected: Themes;
}
export const DrawerConfiguration = ({ handleChangeTheme, themeSelected }: DrawerConfigurationProps) => {
    const { data: session } = useSession();
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            <Grid
                sx={{ width: '300px', display: 'flex', alignContent: 'center', justifyContent: 'center', flexDirection: 'row' }}
                role="configuration"
                container
            >
                <Grid item xs={12}>
                    <Typography variant='h6' sx={{ textAlign: 'center' }}>Modo:</Typography>
                    <ToggleButtonGroup
                        sx={{ p: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        value={themeSelected}
                        aria-label="Themes selection"
                    >
                        <ToggleButton style={{ color: "rgba(232, 195, 158, 1)" }} onClick={() => handleChangeTheme(Themes.LIGTH)} value={Themes.LIGTH}><LightModeIcon />Claro</ToggleButton>
                        <ToggleButton onClick={() => handleChangeTheme(Themes.DARK)} value={Themes.DARK}><DarkModeIcon />Oscuro</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid item xs={12} sx={{ display: session ? 'flex' : 'none', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar alt="Avatar Profile Picture" src={session?.user?.image as string} sx={{ width: 120, height: 120 }} />
                    <Typography variant='h5' sx={{ textAlign: 'center' }}>
                        <b>Gracias por usar FinherArg!</b>
                        <br />
                        {session?.user?.name}
                    </Typography>

                </Grid>
                <Grid item xs={12} sx={{ p: '1rem', display: session ? 'none' : 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <GoogleButton />
                </Grid>
            </Grid>
            <Box sx={{ p: '1rem 0' }}>
                <Button onClick={() => signOut()} variant="contained" sx={{ display: session ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
                    Log out <LogoutIcon />
                </Button>
            </Box>
        </Box>
    )
}