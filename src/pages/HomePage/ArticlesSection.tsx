import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { ArticleType } from '../../api/api';
import useArticles from '../../api/hooks/useArticles';
import Article from '../ArticlesPage/Article';

const ArticlesSection = () => {
  const { data, error } = useArticles();
  const { t } = useTranslation();
  if (error) return <h1>{error}</h1>;
  return (
    <Box py={10}>
      <Typography pb={8} color='text.primary' variant='h3' align='center'>
        {t('Articles_News')}
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
