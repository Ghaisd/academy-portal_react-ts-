import { Box, Container } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import RoutingLink from './UI/RoutingLink';
import CustomIcon from './UI/InteractiveIcon';
import { routes } from '../App';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box bgcolor='primary.main' py={2} m={-1}>
      <Container maxWidth='xl'>
        <Grid container spacing={20}>
          <Grid>
            <Box mr={8}>
              <Typography
                color='text.primary'
                variant='h4'
                component='div'
                sx={{ flexGrow: 1 }}
              >
                <RoutingLink to='/'>IKOMM ACADEMY</RoutingLink>
              </Typography>
              <Typography color='text.primary' variant='subtitle1' pt={2}>
                Talent finnes overalt for den som leter.
              </Typography>
              <Box
                component='img'
                src='/images/Logo_Transparent_hvit.png'
                alt='logo'
                mt={6}
                width={0.8}
              />
            </Box>
          </Grid>
          <Grid ml={12}>
            <Typography
              color='text.primary'
              variant='h4'
              borderBottom={1}
              mb={1}
            >
              {t('QuickLinks')}
            </Typography>
            <Box display='flex' flexDirection='column' gap={1}>
              <RoutingLink to={routes.Home}>{t('Home')}</RoutingLink>
              <RoutingLink to={routes.Articles}>{t('Articles')}</RoutingLink>
              <RoutingLink to={routes.About}>{t('Participants')}</RoutingLink>
              <RoutingLink to={routes.AcademyTV}>{t('AcademyTV')}</RoutingLink>
              <RoutingLink to={routes.Contact}>{t('Contact')}</RoutingLink>
            </Box>
          </Grid>
          <Grid ml={24}>
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
        <Typography
          color='text.primary'
          variant='h6'
          textAlign='center'
          mt={4}
          borderTop={1}
        >
          Copyright &copy;2022 IKOMM-ACADEMY
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
