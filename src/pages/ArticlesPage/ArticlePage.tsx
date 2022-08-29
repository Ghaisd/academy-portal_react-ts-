import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import useSWR from 'swr';

type ArticleType = {
  Id: number;
  AuthorId: number;
  AuthorName: string;
  AuthorImage: string;
  Title: string;
  Content: string;
  ArticleImage: string;
  CanPublish: boolean;
  IsPublished: boolean;
};

const ArticlePage = () => {
  const { id } = useParams<string>();
  const [article, setArticle] = useState<ArticleType>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetcher = (url: string) => fetch(url).then((r: any) => r.json());
  const { data, error } = useSWR('https://localhost:7045/api/article', fetcher);

  const articles: ArticleType[] = data;
  useEffect(() => {
    if (articles) {
      const individualArticle = articles.find((x) => x.Id.toString() === id);
      if (individualArticle) {
        setArticle(individualArticle);
      }
    }
  }, [id, articles, setArticle]);
  if (error) return <h1>{error}</h1>;
  if (!data) return <h1>Loading</h1>;
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