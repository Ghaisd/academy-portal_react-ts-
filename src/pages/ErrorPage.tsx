import { Typography , Box } from '@mui/material';

import RoutingButton from '../Components/UI/RoutingButton';

const ErrorPage = () => (
  <Box
    my={[40, 42.5]}
    display='flex'
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
  >
    <Typography color='text.primary' variant='h2' align='center'>
      Oops! Page not found
    </Typography>
    <Typography color='text.primary' variant='h1' align='center'>
      404
    </Typography>
    <Typography variant='body1' mb={2} align='center'>
      We can&apos;t find the page you&apos;re looking for.
    </Typography>
    <RoutingButton to='/'>Go back home</RoutingButton>
  </Box>
);

export default ErrorPage;
