import {
  Button, Input, TextField,
} from '@mui/material';
import { Box } from '@mui/system';

const ContactForm = () => (
  <Box
    component="form"
    action="https://formspree.io/f/xeqnvgjb"
    method="POST"
    sx={{
      '& > div >*,& >div >div>*': {
        width: 1,
        p: 2,
        bgcolor: 'primary.dark',
        color: 'lightgray',
      },
    }}
  >
    <Box
      display="flex"
      justifyContent="center"
    >
      <Input
        type="text"
        placeholder="Fornavn"
        required
        sx={{
          borderRight: 1,
        }}
      />
      <Input
        type="text"
        placeholder="Etternavn"
        required
      />
    </Box>
    <Box>
      <Input
        type="email"
        placeholder="Din epostadresse"
        required
        sx={{
        }}
      />
    </Box>
    <Box pr={4}>
      <TextField
        multiline
        rows={7}
        placeholder="Beskjed"
        required
      />
    </Box>
    <Button
      type="submit"
      variant="contained"
      color="success"
    >
      sende melding
    </Button>
  </Box>
);
export default ContactForm;
