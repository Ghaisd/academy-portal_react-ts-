import { useTranslation } from 'react-i18next';

export const PickTxtLng = <T,>(textNo: T, textEn: T) => {
  const { i18n } = useTranslation();
  return i18n.language === 'no' ? textNo : textEn;
};
