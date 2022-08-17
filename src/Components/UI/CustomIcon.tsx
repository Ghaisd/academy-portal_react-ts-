import { Link } from '@mui/material';

type props = {
  href: string | undefined,
  iconType: string
}

function CustomIcon({ href, iconType }: props) {
  return (
    <Link
      ml={2}
      color="#fff"
      fontSize={35}
      href={href}
      rel="noreferrer"
      sx={{
        '&:hover': {
          color: '#909590',
          transition: 'all 400ms ease',
        },
      }}
    >
      <i className={iconType} />
    </Link>
  );
}

export default CustomIcon;
