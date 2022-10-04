import { Container } from '@mui/material';
import {ContactBoard, ContactForm} from '..';

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
