import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, IconButton, Typography, Container, List, ListItem, ListItemButton, ListItemText, Drawer, ToggleButtonGroup, ToggleButton, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import { Themes } from '../theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
interface NavbarProps {
    handleChangeTheme: (theme: Themes) => void;
    themeSelected: Themes;
}

export default function Navbar({ handleChangeTheme, themeSelected }: NavbarProps) {
    const pages = [{
        name: 'Bcra',
        href: '/bcra',
    },
    {
        name: 'Calculadora hipotecaria',
        href: '/calculadora-hipotecaria/sistema-frances',
    }]
    const pageType = usePathname();
    const [isConfigOpen, setIsConfigOpen] = useState(false)
    return (
        <>
            <AppBar position="static" color='secondary'>
                <Container>
                    <Toolbar sx={{ position: 'relative' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ width: { sx: '100%', md: 'inherith' }, margin: { xs: 'auto', md: 0 } }}>
                            <Typography
                                variant="h6"
                                noWrap
                                component={Link}
                                href="/"
                                sx={{
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    textDecoration: 'none',
                                    color: "warning.main",
                                }}
                            >
                                MiFinanciero
                            </Typography>
                        </Box>
                        <List sx={{ display: { xs: 'none', md: 'flex', m: 0, p: 0 } }}>
                            {pages.map((page) => (
                                <ListItem
                                    key={page.name}
                                    sx={{
                                        flex: 1,
                                        padding: 0,
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                        borderBottom: pageType === page.href ? "solid" : "none",
                                        borderBottomColor: pageType === page.href ? "primary.dark" : "none",
                                        borderBottomWidth: pageType === page.href ? "4px" : "none",
                                    }}
                                >
                                    <ListItemButton
                                        LinkComponent={Link}
                                        href={page.href}
                                        sx={{
                                            p: 0,
                                            textAlign: 'center',
                                            height: '100%',
                                            color: pageType === page.href ? 'primary.dark' : 'primary.main',
                                            "&:hover": {
                                                color: 'primary.dark'
                                            }
                                        }}
                                    >
                                        <ListItemText primary={page.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Box sx={{ position: 'absolute', right: 0 }}>
                            <IconButton aria-label="open configurations" onClick={() => setIsConfigOpen(true)}>
                                <SettingsIcon color='primary' />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                anchor={'right'}
                open={isConfigOpen}
                onClose={() => setIsConfigOpen(false)}
            >
                <DrawerConfiguration handleChangeTheme={handleChangeTheme} themeSelected={themeSelected} />
            </Drawer>
        </>
    )
}


interface DrawerConfigurationProps {
    handleChangeTheme: (theme: Themes) => void;
    themeSelected: Themes;
}
const DrawerConfiguration = ({ handleChangeTheme, themeSelected }: DrawerConfigurationProps) => {

    return (
        <Grid
            sx={{ width: '300px', display: 'flex', alignContent: 'center', flexDirection: 'column' }}
            role="configuration"
            container
        >
            <Grid item xs={12}>
                <Typography variant='h6' sx={{ textAlign: 'center' }}>Modo:</Typography>
                <ToggleButtonGroup
                    value={themeSelected}
                    aria-label="Themes selection"
                >
                    <ToggleButton style={{ color: "rgba(232, 195, 158, 1)" }} onClick={() => handleChangeTheme(Themes.LIGTH)} value={Themes.LIGTH}><LightModeIcon />Claro</ToggleButton>
                    <ToggleButton onClick={() => handleChangeTheme(Themes.DARK)} value={Themes.DARK}><DarkModeIcon />Oscuro</ToggleButton>
                </ToggleButtonGroup>
            </Grid>
        </Grid >
    )
}