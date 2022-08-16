import { Box } from '@mui/system';
import ContactBoard from './ContactBoard';
import ContactForm from './ContactForm';

const Contact = () => (
  <Box
    bgcolor="#474a48"
    display="grid"
    m={16}
    ml={64}
    maxWidth={0.5}
  >
    <ContactBoard />
    <ContactForm />
  </Box>
);

export default Contact;
