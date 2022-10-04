import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Container , Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Testimonial, { TestimonialType } from './Testimonial';
import { PickTxtLng } from '../../../customFunctions/PickTxtLng';
import { testimonialsEn, testimonialsNo } from '../../../data';

const TestimonialsSection = () => {
  const { t } = useTranslation();
  return (
    <Stack justifyContent='center' alignItems='center'>
      <Typography color='text.primary' variant='h3' pt={8}>
        {t('Testimonials')}
      </Typography>
      <Container
        maxWidth='lg'
        sx={{
          paddingBottom: 6,
          '.swiper-pagination-bullet': {
            borderRadius: 0.1,
            opacity: 1,
            bgcolor: 'primary.light',
          },
          '.swiper-pagination-bullet-active': {
            bgcolor: 'success.main',
          },
          '.swiper-button-next,.swiper-button-prev': {
            bgcolor: 'primary.light',
            color: '#000',
            p: 0.5,
            px: -10
          },
        }}
      >
        <Swiper
         breakpoints={{
          1: {
            width: 500,
            slidesPerView: 1,
            slidesPerGroup:1
          },
          601: {
            slidesPerView: 2,
          }
        }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
          spaceBetween={50}
          navigation
          slidesPerGroup={2}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
        >
          {PickTxtLng<TestimonialType[]>(testimonialsNo, testimonialsEn).map(
            (testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <Testimonial testimonial={testimonial} />
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </Container>
    </Stack>
  );
};

export default TestimonialsSection;
