import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Typography , Box } from '@mui/material';

import useArticles from '../../api/hooks/useArticles';
import { ArticleType } from '../../api/api';
import Loading from '../../Components/Loading';

const ArticlePage = () => {
  const { id } = useParams<string>();
  const [article, setArticle] = useState<ArticleType>();

  const { data, error } = useArticles();

  const articles = data;
  useEffect(() => {
    if (articles) {
      const individualArticle: ArticleType | undefined = articles.find(
        (x) => x.Id.toString() === id,
      );
      if (individualArticle) {
        setArticle(individualArticle);
      }
    }
  }, [id, articles, setArticle]);
  if (error) return <h1>{error}</h1>;
  if (!data) {
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
        height={768}
        display='block'
        my={8}
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
          width={128}
        />
        <Box ml={2} textTransform='uppercase'>
          <Typography color='text.primary' variant='h5' py={2}>
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
