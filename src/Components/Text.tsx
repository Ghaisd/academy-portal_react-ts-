import { SxProps, Typography, TypographyProps } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = TypographyProps &
  SxProps & {
    textNo: string;
    textEn: string;
  };

const Text = ({ textNo, textEn, color, ...restProps }: Props) => {
  const { i18n } = useTranslation();
  return (
    <Typography color={color || 'text.primary'} {...restProps}>
      {i18n.language === 'no' ? textNo : textEn}
    </Typography>
  );
};

export default Text;
