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
    >
      <Stack width={{sm:'45%'}} spacing={{xs:5,sm:3}} justifyContent={{xs:'center'}} alignContent={{xs:'center'}} py={1}>
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
            alignSelf: {xs:'center', sm:'inherit'},
            width: '10rem'
          }}
        >
          {t('JoinUs')}
        </RoutingButton>
      </Stack>
      <Box display='flex' justifyContent='center'>
      <CardMedia
        sx={{ height: 580, width: {xs:500,sm:510}, py: {xs: 4}}}
        component='iframe'
        src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6876623560589283328'
        allowFullScreen
        title='Embedded post'
        frameBorder='none'
        />
        </Box>
    </Stack>
    </Container>
  );
};
export default HeaderSection;
