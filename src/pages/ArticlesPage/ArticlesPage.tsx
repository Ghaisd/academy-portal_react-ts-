import { Stack } from '@mui/material';
import { ArticleType } from '../../api/api';
import Article from './Article';
import {articles} from '../../data';

const ArticlesPage = () => 
   (
        <Stack
          display={{xs:'block',sm:'grid'}}
          justifyItems='center'
          gridTemplateColumns='repeat(3, 1fr)'
          mr={{xs:'10%', sm:'0'}}
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
      );

export default ArticlesPage;
