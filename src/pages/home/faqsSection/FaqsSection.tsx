/* eslint-disable */
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import faqs from '../../../data/faqs';
import Faq from './Faq';

const FaqsSection = () => {
  return (
    <Box
      mt={12.5}
      bgcolor="#474a48"
      p={[8, 20]}
    >
      <Typography variant="h3" align="center" mb={8}>Frequently Asked Questions</Typography>
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
        {faqs.map((faq) => (
          <Faq
            key={faq.headerText}
            headerText={faq.headerText}
            paragraphText={faq.paragraphText}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FaqsSection;
