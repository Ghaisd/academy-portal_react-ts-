import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { routes } from '../../App';
import {RoutingButton} from '../../Components';

type props = {
  src: string;
  headline: string;
  author: string;
  articleContent: string;
  id: number;
};

const Article = ({ src, headline, author, articleContent, id }: props) => {
  const { t } = useTranslation();
  return (
    <Box
      bgcolor='primary.main'
      textAlign='center'
      border='1px solid transparent'
      display='grid'
      gridTemplateRows='auto 1fr auto'
      justifyItems='center'
      width={{sm:420}}
      height={{xs:'`auto`', sm:'60rem'}}
      mt={6.25}
      alignSelf='center'
      ml={{xs:'10%', sm:'0'}}
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
          borderColor: 'secondary.main',
          transition: 'all 400ms ease',
        },
      }}
    >
      <Box
        component='img'
        sx={{
          width: 1,
          height: 270,
          display: 'block',
        }}
        alt='article'
        src={src}
      />
      <Box p='3rem'>
        <Typography color='text.primary' variant='h5'>
          {headline}
        </Typography>
        <Typography color='text.primary' variant='subtitle2'>
          Skrevet av :{` ${author}`}
        </Typography>
        <Typography color='text.primary' variant='subtitle1' mt={1.2}>
          {articleContent}
        </Typography>
      </Box>
      <RoutingButton
        sx={{
          bgcolor: 'warning.main',
          mb: 4,
        }}
        to={`${routes.Articles}/${id}`}
      >
        {t('ReadMore')}
      </RoutingButton>
    </Box>
  );
};

export default Article;
