import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import useSWR from 'swr';
import Article from '../ArticlesPage/Article';

export type ArticleType = {
  Id: number;
  Title: string;
  AuthorName: string;
  Content: string;
  ArticleImage: string;
};
const ArticlesSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetcher = (url: string) => fetch(url).then((r: any) => r.json());
  const { data, error } = useSWR('https://localhost:7045/api/article', fetcher);
  if (error) return <h1>{error}</h1>;
  return (
    <Box py={10}>
      <Typography pb={8} color='text.primary' variant='h3' align='center'>
        Artikler/Nyheter
      </Typography>
      <Box
        justifyItems='center'
        display='grid'
        gridTemplateColumns='repeat(3, 1fr)'
      >
        {data ? (
          data
            .slice(0, 3)
            .map((article: ArticleType) => (
              <Article
                key={article.Id}
                id={article.Id}
                headline={article.Title}
                author={article.AuthorName}
                articleContent={article.Content}
                src={article.ArticleImage}
              />
            ))
        ) : (
          <h1>Loading</h1>
        )}
      </Box>
    </Box>
  );
};
export default ArticlesSection;
