import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { PickTxtLng } from '../../../customFunctions/PickTxtLng';
import { faqsNo, faqsEn } from '../../../data/faqs';
import Faq, { FaqType } from './Faq';

const FaqsSection = () => {
  const { t } = useTranslation();
  return (
    <Box bgcolor='primary.main' py={2}>
      <Container>
        <Typography color='text.primary' variant='h3' align='center' my={8}>
          {t('FAQ')}
        </Typography>
        <Box display='grid' gridTemplateColumns='1fr 1fr' gap={2} pb={4}>
          {PickTxtLng<FaqType[]>(faqsNo, faqsEn).map(
            (faq: { headerText: string; paragraphText: string }) => (
              <Faq key={faq.headerText} faq={faq} />
            ),
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default FaqsSection;
