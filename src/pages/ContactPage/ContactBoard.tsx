import { Typography , Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';
import CustomIcon from '../../Components/UI/InteractiveIcon';

const {contact} = images;

const ContactBoard = () => {
  const { t } = useTranslation();
  return (
    <Box bgcolor='secondary.main' pl={15}>
      <Box
        component='img'
        src={contact}
        alt='Contact'
        width='300px'
      />
      <Typography borderBottom={1} color='text.primary' variant='h4'>
        {t('Contact')}
      </Typography>
      <Typography color='text.primary' variant='h6'>
        {t('ContactUsForMoreInfo')}
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
