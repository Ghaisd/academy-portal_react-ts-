import { Typography , Box } from '@mui/material';

import { useState } from 'react';

export type FaqType = {
  headerText: string;
  paragraphText: string;
};

export type FaqProps = {
  faq: FaqType;
};

const Faq = ({ faq: { headerText, paragraphText } }: FaqProps) => {
  const [faqIcon, setFaqIcon] = useState('bi bi-plus-square');
  const [displayMode, setDisplayMode] = useState('none');
  const [height, setHeight] = useState<number | string>(30);

  const SetCssClasses = () => {
    if (faqIcon === 'bi bi-plus-square') {
      setFaqIcon('bi bi-dash-square');
      setDisplayMode('inline-block');
      setHeight('auto');
    } else {
      setFaqIcon('bi bi-plus-square');
      setDisplayMode('none');
      setHeight(30);
    }
  };
  return (
    <Box
      p={4}
      pb={{xs:10,sm:3}}
      bgcolor='secondary.main'
      onClick={SetCssClasses}
      display='inline-block'
      height={height}
      sx={{
        i: {
          color: 'text.primary',
        },
        '&:hover': {
          cursor: 'pointer',
        },
      }}
    >
      <i className={faqIcon} />
      <Typography
        display='inline-block'
        ml={{xs:2,sm:1}}
        variant='h6'
        color='text.primary'
      >
        {headerText}
      </Typography>

      <Typography
        pt={2}
        display={displayMode}
        color='text.primary'
        variant='subtitle1'
      >
        {paragraphText}
      </Typography>
    </Box>
  );
};

export default Faq;
