import { Button, Input, TextField , Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <Box
      component='form'
      action='https://formspree.io/f/xeqnvgjb'
      method='POST'
      sx={{
        '& > div >*,& >div >div>*': {
          width: 1,
          p: 2,
          bgcolor: 'primary.dark',
          color: 'lightgray',
        },
      }}
    >
      <Box display='flex' justifyContent='center'>
        <Input
          type='text'
          placeholder={t('FirstName')}
          required
          sx={{
            borderRight: 1,
          }}
        />
        <Input type='text' placeholder={t('LastName')} required />
      </Box>
      <Box>
        <Input type='email' placeholder={t('Email')} required />
      </Box>
      <Box pr={4}>
        <TextField multiline rows={7} placeholder={t('Message')} required />
      </Box>
      <Button type='submit' variant='contained' color='success'>
        {t('SendMessage')}
      </Button>
    </Box>
  );
};
export default ContactForm;
