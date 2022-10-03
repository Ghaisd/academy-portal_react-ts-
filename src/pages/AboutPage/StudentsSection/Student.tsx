import { Avatar, Container, Stack, Typography , Box } from '@mui/material';

import { routes } from '../../../App';
import CustomIcon from '../../../Components/UI/InteractiveIcon';

export type props = {
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
      bgcolor: 'primary.main',
      width: 280,
    }}
  >
    <Avatar
      alt={Name}
      src={src}
      sx={{ width: 200, height: 200, mx: 'auto'}}
    />
    <Stack direction='row' mx='auto' my={1} pl={3}>
      <CustomIcon
        href={`${routes.About}/${Name}`}
        iconType='bi bi-file-earmark-person'
      />
      <CustomIcon href={Linkedin} iconType='bi bi-linkedin' />
      <CustomIcon href={Github} iconType='bi bi-github' />
    </Stack>
    <Box>
      <Typography py={2} color='text.primary' variant='h4' align='center' noWrap >
        {Name}
      </Typography>
      <Typography color='info' variant='h6' textAlign='center'>
        {smallInfo}
      </Typography>
    </Box>
  </Container>
);

export default Student;
