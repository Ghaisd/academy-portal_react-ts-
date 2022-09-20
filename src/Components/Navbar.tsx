import { Typography, AppBar, Toolbar, Stack, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import RoutingLink from './UI/RoutingLink';
import { routes } from '../App';
import HideOnScroll from './UI/HideOnScroll';
import LanguageMenu from './LanguageMenu';

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <HideOnScroll>
      <AppBar position='fixed' sx={{ bgcolor: 'secondary.main' }}>
        <Container maxWidth='xl' >
        <Toolbar>
          <Typography
            color='text.primary'
            variant='h5'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            <RoutingLink to='/'>IKOMM ACADEMY</RoutingLink>
            <LanguageMenu />
          </Typography>
          <Stack direction='row' spacing={7}>
            <RoutingLink to={routes.Home}>{t('Home')}</RoutingLink>
            <RoutingLink to={routes.Articles}>{t('Articles')}</RoutingLink>
            <RoutingLink to={routes.About}>{t('Participants')}</RoutingLink>
            <RoutingLink to={routes.AcademyTV}>{t('AcademyTV')}</RoutingLink>
            <RoutingLink to={routes.Contact}>{t('Contact')}</RoutingLink>
          </Stack>
        </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
