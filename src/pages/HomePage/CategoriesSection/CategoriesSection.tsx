import { Container, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { matchRoutes } from 'react-router-dom';
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
    <Box bgcolor='primary.main' py={5} >
    <Container sx={{
      maxWidth: {xs:'xl', sm:'xxl'}
    }}>
      <Stack
      direction={{sm:'row'}}
      bgcolor='primary.main'
      spacing={20}
      >
      <Stack spacing={5}>
        <Text
          textNo={categoriesSectionTextHNo}
          textEn={categoriesSectionTextHEn}
          variant='h1'
        />
        <Text
          textNo={categoriesSectionTextPNo}
          textEn={categoriesSectionTextPEn}
          variant='body1'
        />
      <Stack direction='row' sx={{
        pb:{xs:'4rem'},
      }}>
        <RoutingButton
          sx={{
            bgcolor: 'primary.light',
            width: '10rem',
            mr: 5
          }}
          to={routes.About}
          >
          {t('ReadMore')}
        </RoutingButton>
        <RoutingButton
          to={routes.AcademyTV}
          sx={{
            bgcolor: 'primary.light',
            width: '10rem',
          }}
          >
          {t('AcademyTV')}
        </RoutingButton>
          </Stack>
      </Stack>

      <Stack mb={5} display={{sm:'grid'}} gridTemplateColumns='repeat(2, 1fr)' gap={2.4}>
        {PickTxtLng<CategoryType[]>(categoriesNo, categoriesEn).map(
          (category) => (
            <Category key={category.headerText} category={category} />
          ),
        )}
      </Stack>
    </Stack>
    </Container>
    </Box>
  );
};

export default CategoriesSection;
