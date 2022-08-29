import { Typography } from '@mui/material';
import { Box } from '@mui/system';
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
  <Box border={10} borderColor='secondary.main' bgcolor='primary.light' mr={14}>
    <Box display='flex' alignItems='center'>
      <Box component='img' src={src} alt='Student' height='300px' />
      <Box display='flex' flexDirection='column' justifyContent='center'>
        <CustomIcon
          href={`${routes.About}/${Name}`}
          iconType='bi bi-file-earmark-person'
        />
        <CustomIcon href={Linkedin} iconType='bi bi-linkedin' />
        <CustomIcon href={Github} iconType='bi bi-github' />
      </Box>
    </Box>
    <Box>
      <Typography pt={2} color='text.primary' variant='h4' align='center'>
        {Name}
      </Typography>
      <Typography color='info.main' pl={2} variant='h6'>
        {smallInfo}
      </Typography>
    </Box>
  </Box>
);

export default Student;
