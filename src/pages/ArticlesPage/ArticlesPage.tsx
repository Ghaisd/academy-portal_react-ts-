import { Box } from '@mui/system';
import useSWR from 'swr';
import { ArticleType } from '../HomePage/ArticlesSection';
import Article from './Article';
// import articles from '../../data/articles';

const ArticlesPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetcher = (url: string) => fetch(url).then((r: any) => r.json());
  const { data, error } = useSWR('https://localhost:7045/api/article', fetcher);
  if (error) return <h1>{error}</h1>;

  return (
    <Box
      display='grid'
      gridTemplateColumns='repeat(3, 1fr)'
      m={4}
      ml={24}
      my={8}
    >
      {data ? (
        data.map((article: ArticleType) => (
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
  );
};

export default ArticlesPage;
