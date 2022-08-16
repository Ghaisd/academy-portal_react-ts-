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
      bgcolor="#909590"
      p={2}
      borderRadius={8}
    >
      <Box
        bgcolor="#537a5a"
        p={1}
        borderRadius={4}
        width={18}
      >
        <i className={cssIcon} />
      </Box>
      <Typography mt={1} variant="h6">{headerText}</Typography>
      <Typography mt={1} mb={6}>{paragraphText}</Typography>
    </Box>
  );
};

export default Category;
