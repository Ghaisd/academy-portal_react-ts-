import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { SxProps } from '@mui/system';

type props = {
  to: string;
  // eslint-disable-next-line react/require-default-props
  sx?: SxProps | React.CSSProperties | undefined;
  // eslint-disable-next-line max-len, react/require-default-props
  color?:
    | 'primary'
    | 'secondary'
    | 'inherit'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined;
  children: string;
};

const CustomButton = ({ to, sx, color, children }: props) => (
  <Button
    component={Link}
    to={to}
    color={color}
    variant='contained'
    size='medium'
    sx={sx}
  >
    {children}
  </Button>
);

export default CustomButton;
