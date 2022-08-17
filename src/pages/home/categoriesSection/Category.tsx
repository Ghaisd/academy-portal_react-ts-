import { Typography } from '@mui/material';
import { Box } from '@mui/system';

type props = {
  categoryIcon: string
  headerText: string
  paragraphText: string
}

const Category = ({ categoryIcon, headerText, paragraphText } : props) => {
  const cssIcon = categoryIcon;
  return (
    <Box
      bgcolor="primary.light"
      p={2}
      borderRadius={8}
    >
      <Box
        bgcolor="secondary.main"
        p={1}
        borderRadius={4}
        width={18}
      >
        <Typography color="textPrimary" variant="subtitle1">
          <i className={cssIcon} />
        </Typography>
      </Box>
      <Typography
        mt={1}
        color="textPrimary"
        variant="h6"
      >
        {headerText}

      </Typography>
      <Typography
        color="textPrimary"
        variant="subtitle2"
        mt={1}
        mb={6}
      >
        {paragraphText}

      </Typography>
    </Box>
  );
};

export default Category;
