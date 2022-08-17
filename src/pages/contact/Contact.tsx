import { Container } from '@mui/system';
import ContactBoard from './ContactBoard';
import ContactForm from './ContactForm';

const Contact = () => (
  <Container
    maxWidth="lg"
    sx={{
      py: 11,
    }}
  >
    <ContactBoard />
    <ContactForm />
  </Container>
);

export default Contact;
