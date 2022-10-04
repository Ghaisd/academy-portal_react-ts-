import { Link } from '@mui/material';

type props = {
  href: string | undefined;
  iconType: string;
};

const InteractiveIcon = ({ href, iconType }: props) => (
  <Link
    ml={2}
    color='text.primary'
    fontSize={35}
    href={href}
    rel='noreferrer'
    sx={{
      '&:hover': {
        color: 'primary.light',
        transition: 'all 400ms ease',
      },
    }}
  >
    <i className={iconType} />
  </Link>
);

export default InteractiveIcon;
