import React from 'react';
import { Button , SxProps } from '@mui/material';
import { Link } from 'react-router-dom';


type props = {
  to: string;
  sx?: SxProps | React.CSSProperties | undefined;
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

const RoutingButton = ({ to, sx, color, children }: props) => (
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

export default RoutingButton;
