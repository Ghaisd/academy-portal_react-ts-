import { Avatar, Container, Stack, Typography , Box } from '@mui/material';

import { routes } from '../../../App';
import CustomIcon from '../../../Components/UI/InteractiveIcon';

type props = {
  Name: string;
  src: string;
  smallInfo: string;
  Github: string;
  Linkedin: string;
};
const Student = ({ src, Name, smallInfo, Github, Linkedin }: props) => (
  <Container
    sx={{
      border: 10,
      borderColor: 'secondary.main',
      bgcolor: 'primary.light',
      width: 280,
      ml: 15,
    }}
  >
    <Avatar
      alt='student'
      src={src}
      sx={{ width: 200, height: 200, mx: 'auto' }}
    />
    <Stack direction='row' mx='auto' my={1}>
      <CustomIcon
        href={`${routes.About}/${Name}`}
        iconType='bi bi-file-earmark-person'
      />
      <CustomIcon href={Linkedin} iconType='bi bi-linkedin' />
      <CustomIcon href={Github} iconType='bi bi-github' />
    </Stack>
    <Box>
      <Typography py={2} color='text.primary' variant='h4' align='center'>
        {Name}
      </Typography>
      <Typography color='info.main' variant='h6'>
        {smallInfo}
      </Typography>
    </Box>
  </Container>
);

export default Student;
