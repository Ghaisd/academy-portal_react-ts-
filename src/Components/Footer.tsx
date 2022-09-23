import { Box, Container , Grid, Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';
import RoutingLink from './UI/RoutingLink';
import CustomIcon from './UI/InteractiveIcon';
import { routes } from '../App';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
    <Box 
    px={{xs:3,sm:10}}
    py={{xs:5}}
    bgcolor='primary.main' >
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
            <Grid item xs={12} sm = {4}>
              <Typography
                color='text.primary'
                variant='h5'
                component='div'
                sx={{ flexGrow: 1 }}
              >
                <RoutingLink to='/'>IKOMM ACADEMY</RoutingLink>
              </Typography>
              <Typography color='text.primary' variant='subtitle1' pt={1}>
                Talent finnes overalt for den som leter.
              </Typography>
              <Box
                component='img'
                src='/images/Logo_Transparent_hvit.png'
                alt='logo'
                mt={6}
                width={0.8}
              />
            </Grid>
            <Grid item xs={12} sm = {4}>
               <Typography
              color='text.primary'
              variant='h4'
              borderBottom={1}
            >
              {t('QuickLinks')}
            </Typography>
            <Box display='flex' flexDirection='column' gap={2} pt={2}>
              <RoutingLink to={routes.Home}>{t('Home')}</RoutingLink>
              <RoutingLink to={routes.Articles}>{t('Articles')}</RoutingLink>
              <RoutingLink to={routes.About}>{t('Participants')}</RoutingLink>
              <RoutingLink to={routes.AcademyTV}>{t('AcademyTV')}</RoutingLink>
              <RoutingLink to={routes.Contact}>{t('Contact')}</RoutingLink>
            </Box>
            </Grid>

            <Grid item xs={12} sm = {4}>
                  <Box display='flex' flexDirection='column' gap={2}>
              <Typography color='text.primary' variant='h4' borderBottom={1}>
                {t('Contact')}
              </Typography>
              <Typography color='text.primary' variant='h6'>
                94970223
              </Typography>
              <Typography color='text.primary' variant='h6'>
                academy@ikomm.no
              </Typography>
              <Box>
                <CustomIcon
                  href='https://www.facebook.com/ikommas/'
                  iconType='bi bi-facebook'
                />
                <CustomIcon
                  href='https://linkedin.com/company/ikomm'
                  iconType='bi bi-linkedin'
                />
              </Box>
            </Box>
            </Grid>
            </Grid>
            <Box textAlign='center' pt={{sm:5,xs:5}} mb={{sm:-5,xs:-5}}
            >
               <Typography
          color='text.primary'
          variant='h6'
          textAlign='center'
          borderTop={1}
          >
          Copyright &copy;{new Date().getFullYear()} IKOMM-ACADEMY
        </Typography>
            </Box>
          </Container>

          
    </Box>
    </footer>
  );
};

export default Footer;
