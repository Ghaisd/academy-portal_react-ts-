import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import articles from '../../data/articles';

type ArticleType =
    {
    id: string;
    AuthorId: number;
    AuthorName: string;
    AuthorImageLink: string;
    Title: string;
    Content: string;
    ImageLInk: string;
    CanPublish: boolean;
    IsPublished: boolean;
}

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<ArticleType>();

  useEffect(() => {
    const typedArticle = articles as ArticleType[];
    const individualArticle = typedArticle.find((x) => x.id === id);
    if (individualArticle) {
      setArticle(individualArticle);
    }
  }, [id, setArticle]);
  return (
    <>
      <Box
        component="img"
        height={768}
        display="block"
        my={8}
        mx="auto"
        alt="Article"
        src={article?.ImageLInk}
      />

      <Typography variant="h3" textAlign="center">
        {article?.Title}
      </Typography>

      <Box display="flex">
        <Box
          component="img"
          alt="Article"
          src={article?.AuthorImageLink}
          width={128}
        />
        <Box ml={2} textTransform="uppercase">
          <Typography variant="h5" py={2}>{article?.AuthorName}</Typography>
          <Typography>May 18, 2022</Typography>
        </Box>
      </Box>

      <Typography
        variant="h5"
        mb={12}
        mx="auto"
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
