import { Avatar, Typography , Box } from '@mui/material';


export type TestimonialType = {
  name: string;
  image: string;
  role: string;
  paragraphText: string;
};

export type TestimonialProps = {
  testimonial: TestimonialType;
};

const Testimonial = ({
  testimonial: { name, image, role, paragraphText },
}: TestimonialProps) => (
  <Box mt={6}>
    <Avatar
      alt='Remy Sharp'
      src={image}
      sx={{ width: 84, height: 84, m: '0 auto 1rem' }}
    />

    <Box textAlign='center'>
      <Typography color='text.primary' variant='h6'>
        {name}
      </Typography>
      <Typography
        color='text.primary'
        variant='subtitle1'
        fontSize={12}
        pt={1}
        pb={2}
      >
        {role}
      </Typography>
    </Box>
    <Box bgcolor='secondary.main' p={4} borderRadius={5}>
      <Typography color='text.primary' variant='subtitle2'>
        {paragraphText}
      </Typography>
    </Box>
  </Box>
);

export default Testimonial;
