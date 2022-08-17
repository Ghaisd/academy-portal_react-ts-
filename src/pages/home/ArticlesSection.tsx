import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import articles from '../../data/articles';
import Article from '../articles/Article';

const ArticlesSection = () => (
  <Box py={28}>
    <Typography
      pb={8}
      color="textPrimary"
      variant="h3"
      align="center"
    >
      Artikler/Nyheter

    </Typography>
    <Box
      justifyItems="center"
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
    >
      {articles.slice(0, 3).map((article) => (
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
  </Box>
);

export default ArticlesSection;
