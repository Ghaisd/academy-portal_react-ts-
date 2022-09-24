import { CardMedia , Box, Stack, Container } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { routes } from '../../App';
import Text from '../../Components/Text';
import RoutingButton from '../../Components/UI/RoutingButton';
import { staticTextHomeNo, staticTextHomeEn } from '../../data/staticText';

const { headerSectionTextHNo, headerSectionTextPNo } = staticTextHomeNo;
const { headerSectionTextHEn, headerSectionTextPEn } = staticTextHomeEn;

const HeaderSection = () => {
  const { t } = useTranslation();
  return (
    <Container sx={{
      maxWidth: {xs:'xl', sm:'xxl'},
      py: '4rem'
    }}>
    <Stack 
    direction={{ xs: 'column', sm: 'row' }}
    py={{sm:3}}
    justifyContent={{sm:'space-around'}}
    spacing={{sm:40}}
    sx={{flexGrow: 1, display: { xs: {
      direction:'column'
    }}
    }}
    >
      <Stack width={{sm:'45%'}} spacing={5} justifyContent={{xs:'center'}} alignContent={{xs:'center'}} py={{xs:1}}>
        <Text
          textNo={headerSectionTextHNo}
          textEn={headerSectionTextHEn}
        />
        <Text
          textNo={headerSectionTextPNo}
          textEn={headerSectionTextPEn}
          variant='body1'
        />
        <RoutingButton
          to={routes.Contact}
          sx={{
            bgcolor: 'primary.light',
            width: {sm:'10rem'}
          }}
        >
          {t('JoinUs')}
        </RoutingButton>
      </Stack>
      <CardMedia
        sx={{ height: 540, width: {xs:350,sm:510}, py: {xs: 2}}}
        component='iframe'
        src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6876623560589283328'
        allowFullScreen
        title='Embedded post'
        frameBorder='none'
        />
    </Stack>
    </Container>
  );
};
export default HeaderSection;
