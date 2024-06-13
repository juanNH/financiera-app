'use client';
import { ThemeProvider } from '@mui/material/styles';
import { theme, darkTheme, Themes } from './../theme';
import { useState } from 'react';
import Navbar from './Navbar';
import { CssBaseline } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/es-mx';



export function StyledRoot({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [themeSelected, setThemeSelected] = useState<Themes>(Themes.LIGTH)
    const themesDictionary = {
        [Themes.LIGTH]: theme,
        [Themes.DARK]: darkTheme
    }
    const handleChangeTheme = (theme: Themes) => {
        setThemeSelected(theme)
    }
    return (
        <ThemeProvider theme={themesDictionary[themeSelected]}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">

                <CssBaseline />
                <Navbar handleChangeTheme={handleChangeTheme} themeSelected={themeSelected} />
                {children}
            </LocalizationProvider>

        </ThemeProvider >
    );
}