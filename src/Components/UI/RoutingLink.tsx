import { Link, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

type Props = {
  to: string;
  isLogo?: boolean;
  children: ReactNode | string;
};

const RoutingLink = ({ to, children, isLogo, ...restProps }: Props) => 
(
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
    <Typography variant={(isLogo) ? 'h5' : 'body2'}>
    {children}
    </Typography>
  </Link>
)

export default RoutingLink;
