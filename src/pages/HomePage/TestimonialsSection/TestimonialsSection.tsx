import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';
import Testimonial, { TestimonialType } from './Testimonial';
import { PickTxtLng } from '../../../customFunctions/PickTxtLng';
import { testimonialsEn, testimonialsNo } from '../../../data/testimonials';

const TestimonialsSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography color='text.primary' variant='h3' align='center' pt={8}>
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
            pr: 1.3,
          },
        }}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
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
    </>
  );
};

export default TestimonialsSection;
