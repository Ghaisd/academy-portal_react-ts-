import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import CustomIcon from '../../Components/UI/CustomIcon';

const ContactBoard = () => (
  <Box
    bgcolor="secondary.main"
    pl={15}
  >
    <Box
      component="img"
      src="/images/contact.svg"
      alt="Contact"
      width="300px"
    />
    <Typography borderBottom={1} color="textPrimary" variant="h4">Kontakt oss</Typography>
    <Typography color="textPrimary" variant="h6">
      Kontakt oss for mer informasjon.
    </Typography>
    <CustomIcon
      href="https://www.facebook.com/ikommas/"
      iconType="bi bi-facebook"
    />
    <CustomIcon
      href="https://linkedin.com/company/ikomm"
      iconType="bi bi-linkedin"
    />
  </Box>
);

export default ContactBoard;
