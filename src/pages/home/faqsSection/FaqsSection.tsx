/* eslint-disable */
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import faqs from '../../../data/faqs';
import Faq from './Faq';

const FaqsSection = () => {
  return (
    <Box bgcolor='#474a48' py={2}>
    <Container 
    sx={{
      mt:10,
    }}
      // mt={12.5}
      // bgcolor="#474a48"
      // py={10}
    >
      <Typography variant="h3" align="center" my={8}>Frequently Asked Questions</Typography>
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2} pb={4}>
        {faqs.map((faq) => (
          <Faq
            key={faq.headerText}
            headerText={faq.headerText}
            paragraphText={faq.paragraphText}
          />
        ))}
      </Box>
    </Container>
    </Box>
  );
};

export default FaqsSection;
