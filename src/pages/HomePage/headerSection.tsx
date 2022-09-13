import { CardMedia , Box } from '@mui/material';

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
    <Box
      height={800}
      pl={25}
      display='grid'
      gridTemplateColumns='1fr 1fr'
      alignItems='center'
      gap={10}
    >
      <Box>
        <Text
          textNo={headerSectionTextHNo}
          textEn={headerSectionTextHEn}
          variant='h3'
        />
        <Text
          textNo={headerSectionTextPNo}
          textEn={headerSectionTextPEn}
          variant='h6'
          display='flex'
          my={3}
        />
        <RoutingButton
          to={routes.Contact}
          sx={{
            bgcolor: 'primary.light',
          }}
        >
          {t('JoinUs')}
        </RoutingButton>
      </Box>
      <CardMedia
        sx={{ height: 540, width: 504 }}
        component='iframe'
        src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6876623560589283328'
        allowFullScreen
        title='Embedded post'
        frameBorder='none'
      />
    </Box>
  );
};
export default HeaderSection;
