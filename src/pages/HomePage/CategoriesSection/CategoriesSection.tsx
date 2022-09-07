import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { routes } from '../../../App';
import Text from '../../../Components/Text';
import RoutingButton from '../../../Components/UI/RoutingButton';
import { PickTxtLng } from '../../../customFunctions/PickTxtLng';
import { categoriesNo, categoriesEn } from '../../../data/categories';
import { staticTextHomeNo, staticTextHomeEn } from '../../../data/staticText';
import Category, { CategoryType } from './Category';

const { categoriesSectionTextHNo, categoriesSectionTextPNo } = staticTextHomeNo;

const { categoriesSectionTextHEn, categoriesSectionTextPEn } = staticTextHomeEn;

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
        <Text
          textNo={categoriesSectionTextHNo}
          textEn={categoriesSectionTextHEn}
          variant='h3'
        />
        <Text
          textNo={categoriesSectionTextPNo}
          textEn={categoriesSectionTextPEn}
          variant='h6'
          mt={2}
          mb={6}
        />

        <RoutingButton
          sx={{
            bgcolor: 'primary.light',
          }}
          to={routes.About}
        >
          {t('ReadMore')}
        </RoutingButton>
        <RoutingButton
          to={routes.AcademyTV}
          sx={{
            bgcolor: 'primary.light',
            ml: 2,
          }}
        >
          {t('AcademyTV')}
        </RoutingButton>
      </Box>

      <Box display='grid' gridTemplateColumns='repeat(2, 1fr)' gap={2.4}>
        {PickTxtLng<CategoryType[]>(categoriesNo, categoriesEn).map(
          (category) => (
            <Category key={category.headerText} category={category} />
          ),
        )}
      </Box>
    </Box>
  );
};

export default CategoriesSection;
