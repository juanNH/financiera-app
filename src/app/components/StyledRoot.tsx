'use client';
import { ThemeProvider } from '@mui/material/styles';
import { theme, darkTheme, Themes } from './../theme';
import { useState } from 'react';
import Navbar from './Navbar';
import { CssBaseline } from "@mui/material";



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
            <CssBaseline />
            <Navbar handleChangeTheme={handleChangeTheme} themeSelected={themeSelected} />
            {children}
        </ThemeProvider >
    );
}