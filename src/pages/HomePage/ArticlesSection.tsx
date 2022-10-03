import { Typography , Box, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ArticleType } from '../../api/api';
import Loading from '../../Components/Loading';
import Article from '../ArticlesPage/Article';
import articles from '../../data/articles';


const ArticlesSection = () => {
  const { t } = useTranslation();
  
    return (
    <Box py={10} >
      <Typography color='text.primary' variant='h3' align='center'>
        {t('Articles_News')}
      </Typography>
      {articles ? (
        <Stack
          maxWidth={{xs:0.90, sm:1}}
          direction={{sm:'row'}}
          justifyContent= {{sm:'space-evenly'}}
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
         <Loading sx={{py: '20vh' }} /> 
      )}
    </Box>
  );
};
export default ArticlesSection;
