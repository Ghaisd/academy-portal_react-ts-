import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

type props = {
  to: string
  children: string
}

function CustomLink({ to, children, ...props }: props) {
  return (
    <Box sx={{

      li: {
        listStyleType: 'none',
        boxSizing: 'border-box',
      },
      a: {
        cursor: 'pointer',
        color: 'white',
      },
      'a:hover': {
        color: 'primary.light',
        transition: 'all 400ms ease',
      },
    }}
    >
      <li>
        <Link style={{ textDecoration: 'none' }} to={to} {...props}>
          {children}
        </Link>
      </li>
    </Box>
  );
}

export default CustomLink;
