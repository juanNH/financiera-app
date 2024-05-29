import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, IconButton, Typography, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Navbar() {
    const pages = [{
        name: 'Bcra',
        href: '/bcra',
    },
    {
        name: 'Calculadora hipotecaria',
        href: '/calculadora-hipotecaria',
    }]
    const pageType = usePathname();
    return (
        <AppBar position="static" color='secondary'>
            <Container>
                <Toolbar disableGutters>
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
                </Toolbar>
            </Container>
        </AppBar >
    )
}
