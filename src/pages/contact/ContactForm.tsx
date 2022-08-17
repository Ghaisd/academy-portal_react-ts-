import {
  Button, Input, TextField, Typography,
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
    <Box mb={2} mr={4}>
      <Input
        type="email"
        placeholder="Din epostadresse"
        required
      />
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
      <Typography color="textPrimary" variant="subtitle1">

        sende melding
      </Typography>
    </Button>
  </Box>
);
export default ContactForm;
