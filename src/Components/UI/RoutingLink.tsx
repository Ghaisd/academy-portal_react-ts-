import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

type Props = {
  to: string;
  children: string;
};

const RoutingLink = ({ to, children, ...restProps }: Props) => (
  <Link
    component={RouterLink}
    to={to}
    {...restProps}
    color='text.primary'
    sx={{
      textDecoration: 'none',
      '&:hover': {
        color: 'primary.light',
        transition: 'all 400ms ease',
      },
    }}
  >
    {children}
  </Link>
);

export default RoutingLink;
