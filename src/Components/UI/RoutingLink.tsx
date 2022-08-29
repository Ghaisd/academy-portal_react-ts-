import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

type props = {
  to: string;
  children: string;
};

const CustomLink = ({ to, children, ...props }: props) => (
  <Link
    component={RouterLink}
    to={to}
    {...props}
    sx={{
      textDecoration: 'none',
      color: 'text.primary',
      '&:hover': {
        color: 'primary.light',
        transition: 'all 400ms ease',
      },
    }}
  >
    {children}
  </Link>
);

export default CustomLink;
