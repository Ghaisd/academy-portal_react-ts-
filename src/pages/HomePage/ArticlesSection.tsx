import { Typography , Box } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { ArticleType } from '../../api/api';
import useArticles from '../../api/hooks/useArticles';
import Loading from '../../Components/Loading';
import Article from '../ArticlesPage/Article';

const ArticlesSection = () => {
  const { data, error } = useArticles();
  const { t } = useTranslation();
  if (error) return <h1>{error}</h1>;

  return (
    <Box py={10} pt={{xs:'250%', sm:'4rem'}}>
      <Typography pb={8} color='text.primary' variant='h3' align='center'>
        {t('Articles_News')}
      </Typography>
      {data ? (
        <Box
          justifyItems='center'
          display='grid'
          gridTemplateColumns='repeat(3, 1fr)'
        >
          {data.slice(0, 3).map((article: ArticleType) => (
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
        <Loading sx={{ py: '20vh' }} />
      )}
    </Box>
  );
};
export default ArticlesSection;
