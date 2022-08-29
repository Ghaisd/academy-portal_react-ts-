import { Box } from '@mui/system';
import useArticles from '../../api/hooks/useArticles';
import { ArticleType } from '../HomePage/ArticlesSection';
import Article from './Article';

const ArticlesPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error } = useArticles();
  if (error) return <h1>{error}</h1>;

  return (
    <Box
      display='grid'
      gridTemplateColumns='repeat(3, 1fr)'
      justifyItems='center'
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
