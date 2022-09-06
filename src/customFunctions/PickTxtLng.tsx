import { useTranslation } from 'react-i18next';
import React from 'react';

export const PickTxtLng = (
  textNo: { headerText: string; paragraphText: string; iconClass: string }[],
  textEn: { headerText: string; paragraphText: string; iconClass: string }[],
) => {
  const { i18n } = useTranslation();
  return i18n.language === 'no' ? textNo : textEn;
};
