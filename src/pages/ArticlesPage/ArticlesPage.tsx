import { Box } from '@mui/system';
import { ArticleType } from '../../api/api';
import useArticles from '../../api/hooks/useArticles';
import Loading from '../../Components/Loading';
import Article from './Article';

const ArticlesPage = () => {
  const { data, error } = useArticles();
  if (error) return <h1>{error}</h1>;

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data ? (
        <Box
          display='grid'
          gridTemplateColumns='repeat(3, 1fr)'
          justifyItems='center'
          my={8}
        >
          {data.map((article: ArticleType) => (
            <Article
              key={article.Id}
              id={article.Id}
              headline={article.Title}
              author={article.AuthorName}
              articleContent={article.Content}
              src={article.ArticleImage}
            />
          ))}
        </Box>
      ) : (
        <Loading
          sx={{
            py: '50vh',
          }}
        />
      )}
    </>
  );
};

export default ArticlesPage;
