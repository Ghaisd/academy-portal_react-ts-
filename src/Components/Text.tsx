import { SxProps, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

type props = {
  textNo: string;
  textEn: string;
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit'
    | undefined;
  sx?: SxProps | React.CSSProperties | undefined;
};

const Text = ({ textNo, textEn, variant, sx }: props) => {
  const { i18n } = useTranslation();
  return (
    <Typography color='text.primary' variant={variant} sx={sx}>
      {i18n.language === 'no' ? textNo : textEn}
    </Typography>
  );
};

export default Text;
