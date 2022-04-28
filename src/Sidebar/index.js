import React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import { Box } from '@mui/system';
import { CssBaseline, Divider, IconButton, List, Toolbar, Typography } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu';
import NavItem from './NavItem';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open ? {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  } : {
    marginLeft: `calc(${theme.spacing(7)} + 8px)`,
    width: `calc(100% - (${theme.spacing(7)} + 8px))`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const navItems = [
  {
    text: 'Typography',
    pathname: '/typography'
  },
  {
    text: 'Button',
    pathname: '/button'
  },
  {
    text: 'TextField',
    pathname: '/textfield'
  },
  {
    text: 'Radio',
    pathname: '/radio'
  }
]

export default function Sidebar(props) {

  const theme = useTheme();
  const [ open, setOpen ] = React.useState(false);

  const toggleSidebar = () => setOpen(!open)

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={toggleSidebar}
            edge='start'
            sx={{
              marginRight: 5
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            Responsive Sidebar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <Typography variant='h6' color='primary'>
            +
          </Typography>
        </DrawerHeader>
        <Divider />
        <List>
          {navItems.map(item => (
            <NavItem
              key={item.pathname}
              handlePathChange={props.handlePathChange}
              text={item.text}
              pathname={item.pathname}
              open={open}
            />
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
