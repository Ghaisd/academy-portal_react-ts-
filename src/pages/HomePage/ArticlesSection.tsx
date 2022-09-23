import { Typography , Box, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ArticleType } from '../../api/api';
import useArticles from '../../api/hooks/useArticles';
import Loading from '../../Components/Loading';
import Article from '../ArticlesPage/Article';
import articles from '../../data/articles';

const ArticlesSection = () => {
  const { data, error } = useArticles();
  const { t } = useTranslation();
  if (error) return <h1>{error}</h1>;

  return (
    <Box py={10} >
      <Typography pb={8} color='text.primary' variant='h3' align='center'>
        {t('Articles_News')}
      </Typography>
      {articles ? (
        <Stack
          direction={{sm:'row'}}
          justifyContent={{sm:'space-evenly'}}
        >
          {articles.slice(0, 3).map((article: ArticleType) => (
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
         <Loading sx={{ py: '20vh' }} /> 
      )}
    </Box>
  );
};
export default ArticlesSection;
