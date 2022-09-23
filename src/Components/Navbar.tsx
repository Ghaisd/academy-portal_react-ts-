import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
import { t } from 'i18next';
import RoutingLink from './UI/RoutingLink';
import { routes } from '../App';
import LanguageMenu from './LanguageMenu';


// import { Typography, AppBar, Toolbar, Stack, Container } from '@mui/material';
// import { useTranslation } from 'react-i18next';
// import RoutingLink from './UI/RoutingLink';
// import { routes } from '../App';
// import HideOnScroll from './UI/HideOnScroll';
// import LanguageMenu from './LanguageMenu';

// const Navbar = () => {
//   const { t } = useTranslation();
//   return (
//     <HideOnScroll>
//       <AppBar position='fixed' sx={{ bgcolor: 'secondary.main' }}>
//         <Container maxWidth='xl' >
//         <Toolbar>
//           <Typography
//             color='text.primary'
//             variant='h5'
//             component='div'
//             sx={{ flexGrow: 1 }}
//           >
//             <RoutingLink to='/'>IKOMM ACADEMY</RoutingLink>
//             <LanguageMenu />
//           </Typography>
//           <Stack direction='row' spacing={7}>
//             <RoutingLink to={routes.Home}>{t('Home')}</RoutingLink>
//             <RoutingLink to={routes.Articles}>{t('Articles')}</RoutingLink>
//             <RoutingLink to={routes.About}>{t('Participants')}</RoutingLink>
//             <RoutingLink to={routes.AcademyTV}>{t('AcademyTV')}</RoutingLink>
//             <RoutingLink to={routes.Contact}>{t('Contact')}</RoutingLink>
//           </Stack>
//         </Toolbar>
//         </Container>
//       </AppBar>
//     </HideOnScroll>
//   );
// };

// export default Navbar;
const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static' sx={{bgcolor: 'secondary.main'}}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h5'
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
           <RoutingLink to='/'>IKOMM ACADEMY</RoutingLink>
           <LanguageMenu />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
           <Stack direction='column' bgcolor='secondary.main' gap={4} p={2}>
             <RoutingLink to={routes.Home}>{t('Home')}</RoutingLink>
             <RoutingLink to={routes.Articles}>{t('Articles')}</RoutingLink>
             <RoutingLink to={routes.About}>{t('Participants')}</RoutingLink>
             <RoutingLink to={routes.AcademyTV}>{t('AcademyTV')}</RoutingLink>
             <RoutingLink to={routes.Contact}>{t('Contact')}</RoutingLink>
              </Stack>
            </Menu>
          </Box>
          <Typography
            variant='h5'
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            <RoutingLink to='/'>IKOMM ACADEMY</RoutingLink>
            <LanguageMenu />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
             <Stack direction='row' spacing={7} pl={80}>
             <RoutingLink
              to={routes.Home}>{t('Home')}</RoutingLink>
             <RoutingLink to={routes.Articles}>{t('Articles')}</RoutingLink>
             <RoutingLink to={routes.About}>{t('Participants')}</RoutingLink>
             <RoutingLink to={routes.AcademyTV}>{t('AcademyTV')}</RoutingLink>
             <RoutingLink to={routes.Contact}>{t('Contact')}</RoutingLink>
           </Stack>
          </Box>        
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
