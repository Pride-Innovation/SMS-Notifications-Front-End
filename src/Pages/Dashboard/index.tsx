import * as React from 'react';
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
import { Outlet, useNavigate } from 'react-router';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Stack } from '@mui/material';
import { routes } from './routes';

const drawerWidth = 200;

export default function ClippedDrawer() {
    const navigate = useNavigate()
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <MessageOutlinedIcon fontSize="medium" />
                    <Typography variant="h6" noWrap component="div" sx={{ ml: "20px" }}>
                        SMS Reports
                    </Typography>
                    <Stack sx={{ ml: "auto", cursor: "pointer" }} direction="row" alignItems="center">
                        <LogoutIcon sx={{ mr: 1 }} />
                        <Typography variant="body1">Logout</Typography>
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
                            <ListItemButton onClick={() => navigate(item.path)}>
                                <ListItem key={item.id} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
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
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}
