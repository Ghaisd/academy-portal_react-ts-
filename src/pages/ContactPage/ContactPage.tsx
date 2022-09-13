import { Container } from '@mui/material';
import ContactBoard from './ContactBoard';
import ContactForm from './ContactForm';

const ContactPage = () => (
  <Container
    maxWidth='lg'
    sx={{
      py: 11,
    }}
  >
    <ContactBoard />
    <ContactForm />
  </Container>
);

export default ContactPage;
