import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import CustomIcon from '../../Components/UI/InteractiveIcon';

const ContactBoard = () => {
  const { t } = useTranslation();
  return (
    <Box bgcolor='secondary.main' pl={15}>
      <Box
        component='img'
        src='/images/contact.svg'
        alt='Contact'
        width='300px'
      />
      <Typography borderBottom={1} color='text.primary' variant='h4'>
        {t('Kontakt oss')}
      </Typography>
      <Typography color='text.primary' variant='h6'>
        {t('Kontakt oss for mer informasjon.')}
      </Typography>
      <CustomIcon
        href='https://www.facebook.com/ikommas/'
        iconType='bi bi-facebook'
      />
      <CustomIcon
        href='https://linkedin.com/company/ikomm'
        iconType='bi bi-linkedin'
      />
    </Box>
  );
};

export default ContactBoard;
