import React from 'react';

import {
    Box,
    Toolbar,
    IconButton,
    Typography,
    Container,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Drawer,
    AppBar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import { Themes } from '../theme';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { DrawerConfiguration } from './DragetConfiguration';

interface NavbarProps {
    handleChangeTheme: (theme: Themes) => void;
    themeSelected: Themes;
}
const drawerWidth = 240;

export default function Navbar({ handleChangeTheme, themeSelected }: NavbarProps) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const pages = [{
        name: 'Bcra',
        href: '/bcra',
    },
    {
        name: 'Cotizaciones',
        href: '/cotizaciones',
    },
    {
        name: 'Calculadora hipotecaria',
        href: '/calculadora-hipotecaria/sistema-frances',
    },
    {
        name: 'Informacion',
        href: '/info',
    },
    ]
    const path = usePathname();
    const partialPath = path.substring(
        path.indexOf("/") + 1,
        path.lastIndexOf("/") || path.indexOf("/") + 5,
    );
    const [isConfigOpen, setIsConfigOpen] = useState(false)

    return (
        <>
            <AppBar color='secondary' component="nav">
                <Container>
                    <Toolbar>
                        <IconButton
                            onClick={handleDrawerToggle}
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
                                FinherArg
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
                                        position: 'relative', // Add this line for proper positioning
                                        '&::before': { // Define a pseudo-element for the border
                                            content: '""', // Set content to empty string with quotes
                                            position: 'absolute', // Position the element absolutely
                                            bottom: 0, // Position it at the bottom
                                            left: 0, // Start from the left edge
                                            width: '100%', // Span the entire width
                                            height: page.href.includes(partialPath) && path !== "/" ? "4px" : "0", // Set height based on condition
                                            backgroundColor: page.href.includes(partialPath) && path !== "/" ? "primary.dark" : "transparent", // Set color based on condition
                                        },
                                    }}
                                >
                                    <ListItemButton
                                        LinkComponent={Link}
                                        href={page.href}
                                        sx={{
                                            p: 0,
                                            textAlign: 'center',
                                            height: '100%',
                                            color: page.href.includes(partialPath) && path !== "/" ? 'primary.dark' : 'primary.main',
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
            <nav>
                <Drawer
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: '0 0.4rem' }}>

                        <IconButton
                            onClick={handleDrawerToggle}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="Close drawer"
                        >
                            <ArrowBackIosNewIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
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
                                alignSelf: 'center',
                            }}
                        >
                            FinherArg
                        </Typography>
                    </Box>
                    <List sx={{ display: { md: 'flex', lg: 'none', m: 0, p: 0, flexDirection: 'column' } }}>
                        {pages.map((page) => (
                            <ListItem
                                key={page.name}
                                sx={{
                                    flex: 1,
                                    padding: 0,
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    m: '0.5rem 0',
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: page.href.includes(partialPath) && path !== "/" ? "4px" : "0",
                                        backgroundColor: page.href.includes(partialPath) && path !== "/" ? "primary.dark" : "transparent",
                                    },
                                }}
                            >
                                <ListItemButton
                                    LinkComponent={Link}
                                    href={page.href}
                                    sx={{
                                        p: '0.5rem',
                                        textAlign: 'center',
                                        height: '100%',
                                        color: page.href.includes(partialPath) && path !== "/" ? 'primary.dark' : 'primary.main',
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
                </Drawer>
            </nav>
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


