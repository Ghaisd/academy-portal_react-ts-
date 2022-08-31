import { Button, Input, TextField } from '@mui/material';
import { Box } from '@mui/system';
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
          placeholder={t('Fornavn')}
          required
          sx={{
            borderRight: 1,
          }}
        />
        <Input type='text' placeholder={t('Etternavn')} required />
      </Box>
      <Box>
        <Input
          type='email'
          placeholder={t('Din epostadresse')}
          required
          sx={{}}
        />
      </Box>
      <Box pr={4}>
        <TextField multiline rows={7} placeholder={t('Beskjed')} required />
      </Box>
      <Button type='submit' variant='contained' color='success'>
        {t('sende melding')}
      </Button>
    </Box>
  );
};
export default ContactForm;
