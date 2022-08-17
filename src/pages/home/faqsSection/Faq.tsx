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
      setDisplayMode('inline-block');
    } else {
      setFaqIcon('bi bi-plus-square');
      setDisplayMode('none');
    }
  };
  return (
    <Box
      p={4}
      bgcolor="secondary.main"
      onClick={SetCssClasses}
      sx={{
        '&:hover': {
          cursor: 'pointer',
        },
      }}
    >
      <Box>
        <Typography
          color="textPrimary"
          variant="subtitle1"
          display="inline-block"
        >
          <i className={faqIcon} />
        </Typography>
        <Typography
          display="inline-block"
          ml={1}
          variant="h6"
          color="textPrimary"
        >
          {headerText}

        </Typography>
      </Box>

      <Typography
        pt={2}
        display={displayMode}
        color="textPrimary"
        variant="subtitle1"
      >
        {paragraphText}

      </Typography>
    </Box>
  );
};

export default Faq;
