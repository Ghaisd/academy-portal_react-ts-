import { Stack } from '@mui/material';
import { ArticleType } from '../../api/api';
import useArticles from '../../api/hooks/useArticles';
import Loading from '../../Components/Loading';
import Article from './Article';
import articles from '../../data/articles';

const ArticlesPage = () => {
  const { data, error } = useArticles();
  if (error) return <h1>{error}</h1>;

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {articles ? (
        <Stack
          display={{xs:'block',sm:'grid'}}
          gridTemplateColumns='repeat(3, 1fr)'
          justifyItems='center'
          my={8}
        >
          {articles.map((article: ArticleType) => (
            <Article
              key={article.Id}
              id={article.Id}
              headline={article.Title}
              author={article.AuthorName}
              articleContent={article.Content}
              src={article.ArticleImage}
            />
          ))}
        </Stack>
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
