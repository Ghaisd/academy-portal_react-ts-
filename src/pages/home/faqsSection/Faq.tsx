import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

type props = {
  headerText: string
  paragraphText: string
}

const Faq = ({ headerText, paragraphText }: props) => {
  // eslint-disable-next-line max-len
  const [faqIcon, setFaqIcon] = useState('bi bi-plus-square');
  const [displayMode, setDisplayMode] = useState('none');

  const SetCssClasses = () => {
    if (faqIcon === 'bi bi-plus-square') {
      setFaqIcon('bi bi-dash-square');
      setDisplayMode('d-inline-block');
    } else {
      setFaqIcon('bi bi-plus-square');
      setDisplayMode('none');
    }
  };
  return (
    <Box
      p={4}
      bgcolor="#537a5a"
      onClick={SetCssClasses}
      sx={{
        '&:hover': {
          cursor: 'pointer',
        },
      }}
    >
      <Box>
        <i className={faqIcon} />
        <Typography
          display="inline-block"
          ml={1}
          variant="h6"
        >
          {headerText}

        </Typography>
      </Box>
      <Typography pt={2} display={displayMode}>{paragraphText}</Typography>
    </Box>
  );
};

export default Faq;
