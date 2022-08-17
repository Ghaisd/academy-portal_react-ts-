import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import CustomButton from '../Components/UI/CustomButton';

const ErrorPage = () => (

  <Box
    my={[40, 42.5]}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Typography
      color="textPrimary"
      variant="h2"
      align="center"
    >
      Oops! Page not found

    </Typography>
    <Typography color="textPrimary" variant="h1" align="center">404</Typography>
    <Typography
      mb={2}
      align="center"
    >
      We can&apos;t find the page you&apos;re looking for.

    </Typography>
    <CustomButton
      to="/"
    >
      Go back home

    </CustomButton>
  </Box>
);

export default ErrorPage;
