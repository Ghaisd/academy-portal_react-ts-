import { Box } from '@mui/system';
import Article from './Article';
import articles from '../../data/articles';

const Articles = () => (
  <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" m={4} ml={18} my={8}>
    {articles.map((article) => (
      <Article
        key={article.id}
        id={article.id}
        headline={article.Title}
        author={article.AuthorName}
        articleContent={article.Content}
        src={article.ImageLInk}
      />
    ))}
  </Box>
);

export default Articles;
