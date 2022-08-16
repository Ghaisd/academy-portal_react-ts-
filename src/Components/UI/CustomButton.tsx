import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

type props = {
  to: string
  // eslint-disable-next-line react/require-default-props
  styles?: React.CSSProperties | undefined
  children: string
}

function CustomButton({ to, styles, children }: props) {
  return (
    <Button
      component={Link}
      to={to}
      variant="contained"
      size="medium"
      sx={{
        background: '#909590',
        textTransform: 'none',
        '&:hover': {
          background: '#6B6B6B',
          color: 'white',
          transition: 'all 400ms ease',
        },
      }}
      style={styles}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
