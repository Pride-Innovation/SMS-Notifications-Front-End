import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, useLocation, useNavigate } from 'react-router';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Stack } from '@mui/material';
import { routes } from './routes';
import { ROUTES } from '../../core/routes';
import Logo from "../../statics/images/logo.1b6cf8fbdaaee75f39fd.bmp"
import { useEffect, useState } from 'react';
import AuthenticationUtills from '../Authentication/utils';

const drawerWidth = 200;

export default function ClippedDrawer() {
    const [currentPath, setCurrentPath] = useState<string>("");
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { clearSession } = AuthenticationUtills()

    const handleLogOut = () => {
        clearSession()
        navigate(ROUTES.HOME)
    }


    useEffect(() => {
        if (pathname === ROUTES.BIRTHDAY_REPORTS) return setCurrentPath(ROUTES.REPORTS)
        return setCurrentPath(pathname);
    }, [pathname])

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box component="img" height={50} width={40} src={Logo} />
                        <Typography variant="h6" noWrap component="div" sx={{ ml: "20px" }}>
                            Pride Microfinance SMS Reports
                        </Typography>
                    </Box>
                    <Stack sx={{ ml: "auto", cursor: "pointer" }} direction="row" alignItems="center">
                        <IconButton onClick={handleLogOut} sx={{ borderRadius: "5px" }}>
                            <LogoutIcon sx={{ mr: 1, color: "#FFF" }} />
                            <Typography variant="body1" sx={{ color: "#FFF" }}>Logout</Typography>
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {routes.map(item => (
                            <ListItemButton sx={{
                                bgcolor: `${currentPath === item.path ? "#1976D2" : "none"}`,
                                color: `${currentPath === item.path ? "#FFF" : "none"}`,
                            }} onClick={() => navigate(item.path)}>
                                <ListItem key={item.id} disablePadding>
                                    <ListItemButton >
                                        <ListItemIcon sx={{ color: `${currentPath === item.path ? "#FFF" : "none"}` }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.name} />
                                    </ListItemButton>
                                </ListItem>
                            </ListItemButton>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Box mt={3} />
                <Outlet />
            </Box>
        </Box>
    );
}
