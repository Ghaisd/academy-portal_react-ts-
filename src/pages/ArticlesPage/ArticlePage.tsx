import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Typography , Box } from '@mui/material';
import { ArticleType } from '../../api/api';
import Loading from '../../Components/Loading';
import articles from '../../data/articles';

const ArticlePage = () => {
  const { id } = useParams<string>();
  const [article, setArticle] = useState<ArticleType>();

  useEffect(() => {
    if (articles) {
      const individualArticle: ArticleType | undefined = articles.find(
        (x) => x.Id.toString() === id,
      );
      if (individualArticle) {
        setArticle(individualArticle);
      }
    }
  }, [id]);
  if (!articles) {
    return (
      <Loading
        sx={{
          py: '50vh',
        }}
      />
    );
  }
  return (
    <>
      <Box
        component='img'
        height={{xs:330,sm:768}}
        display='block'
        my={6}
        mx='auto'
        alt='Article'
        src={article?.ArticleImage}
      />

      <Typography color='text.primary' variant='h3' textAlign='center'>
        {article?.Title}
      </Typography>

      <Box display='flex'>
        <Box
          component='img'
          alt='Article'
          src={article?.AuthorImage}
          width={{xs:70,sm:128}}
          py={{xs:5, sm:0}}
          borderRadius={5}
        />
        <Box ml={2} textTransform='uppercase'>
          <Typography color='text.primary' variant='h5' py={2} pt={{xs:6,sm:2}}>
            {article?.AuthorName}
          </Typography>
          <Typography color='text.primary' variant='subtitle2'>
            May 18, 2022
          </Typography>
        </Box>
      </Box>

      <Typography
        color='text.primary'
        variant='h5'
        mb={12}
        mx='auto'
        lineHeight={2}
        sx={{
          inlineSize: '80vw',
        }}
      >
        {article?.Content}
      </Typography>
    </>
  );
};

export default ArticlePage;
