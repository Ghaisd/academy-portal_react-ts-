import { Typography, AppBar, Toolbar, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CustomLink from './UI/RoutingLink';
import { routes } from '../App';
import HideOnScroll from './UI/HideOnScroll';
import LanguageMenu from './LanguageMenu';

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <HideOnScroll>
      <AppBar position='fixed' sx={{ bgcolor: 'secondary.main' }}>
        <Toolbar>
          <Typography
            color='text.primary'
            variant='h5'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            <CustomLink to='/'>IKOMM ACADEMY</CustomLink>
            <LanguageMenu />
          </Typography>
          <Stack direction='row' spacing={7}>
            <CustomLink to={routes.Home}>{t('Hjem')}</CustomLink>
            <CustomLink to={routes.Articles}>{t('Siste nytt')}</CustomLink>
            <CustomLink to={routes.About}>{t('Kandidatene')}</CustomLink>
            <CustomLink to={routes.AcademyTV}>{t('Akademi TV')}</CustomLink>
            <CustomLink to={routes.Contact}>{t('Kontaktinfo')}</CustomLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
