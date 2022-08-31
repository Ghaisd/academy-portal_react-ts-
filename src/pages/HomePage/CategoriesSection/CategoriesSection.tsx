import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { routes } from '../../../App';
import CustomButton from '../../../Components/UI/RoutingButton';
import categories from '../../../data/categories';
import { staticTextHome } from '../../../data/staticText';
import Category from './Category';

const { categoriesSectionTextH, categoriesSectionTextP } = staticTextHome;

const CategoriesSection = () => {
  const { t } = useTranslation();
  return (
    <Box
      display='grid'
      gridTemplateColumns='40% 60%'
      height={560}
      bgcolor='primary.main'
      pt={12}
      pr={5}
      pl={24}
    >
      <Box mr={8}>
        <Typography color='text.primary' variant='h3'>
          {categoriesSectionTextH}
        </Typography>
        <Typography mt={2} mb={6} color='text.primary' variant='h6'>
          {categoriesSectionTextP}
        </Typography>
        <CustomButton
          sx={{
            bgcolor: 'primary.light',
          }}
          to={routes.About}
        >
          {t('ReadMore')}
        </CustomButton>
        <CustomButton
          to={routes.AcademyTV}
          sx={{
            bgcolor: 'primary.light',
            ml: 2,
          }}
        >
          {t('AcademyTV')}
        </CustomButton>
      </Box>

      <Box display='grid' gridTemplateColumns='repeat(2, 1fr)' gap={2.4}>
        {categories.map((category) => (
          <Category
            key={category.headerText}
            headerText={category.headerText}
            paragraphText={category.paragraphText}
            categoryIcon={category.iconClass}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CategoriesSection;
