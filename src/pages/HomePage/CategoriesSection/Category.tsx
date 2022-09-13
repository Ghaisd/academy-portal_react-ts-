import { Typography , Box } from '@mui/material';


export type CategoryType = {
  headerText: string;
  paragraphText: string;
  iconClass: string;
};

export type CategoryProps = {
  category: CategoryType;
};

const Category = ({
  category: { headerText, paragraphText, iconClass },
}: CategoryProps) => {
  const cssIcon = iconClass;
  return (
    <Box bgcolor='primary.light' p={2} borderRadius={8}>
      <Box bgcolor='secondary.main' p={1} borderRadius={4} width={18}>
        <Typography color='text.primary' variant='subtitle1'>
          <i className={cssIcon} />
        </Typography>
      </Box>
      <Typography mt={1} color='text.primary' variant='h6'>
        {headerText}
      </Typography>
      <Typography color='text.primary' variant='subtitle2' mt={1} mb={6}>
        {paragraphText}
      </Typography>
    </Box>
  );
};

export default Category;
