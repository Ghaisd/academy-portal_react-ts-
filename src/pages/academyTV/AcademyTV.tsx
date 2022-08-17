import { Box } from '@mui/material';
import Video from './Video';
import videos from '../../data/videos';

const AcademyTV = () => (
  <Box display="grid" gap={4} gridTemplateColumns="repeat(3, 1fr)" py={30}>
    {videos.map((video) => (
      <Video key={video[0]} src={video} />
    ))}
  </Box>
);

export default AcademyTV;
