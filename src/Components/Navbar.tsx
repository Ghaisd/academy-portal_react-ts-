import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import RoutingLink from './UI/RoutingLink';
import { routes } from '../App';
import LanguageMenu from './LanguageMenu';
import HideOnScroll from './UI/HideOnScroll';

const ResponsiveAppBar = () => {
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll>
    <AppBar position='fixed' sx={{bgcolor: 'secondary.main'}}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h5'
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
           <RoutingLink isLogo  to='/'>IKOMM ACADEMY</RoutingLink>
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
           <Stack direction='column' divider={<Divider sx={{bgcolor: 'white'}} />} bgcolor='secondary.main' gap={2} p={2}  >
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
            <RoutingLink isLogo to='/'>IKOMM ACADEMY</RoutingLink>
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
    </HideOnScroll>
  );
};
export default ResponsiveAppBar;
