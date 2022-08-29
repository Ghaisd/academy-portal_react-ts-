import { CardMedia } from '@mui/material';

type props = {
  src: string;
};

const Video = ({ src }: props) => (
  <CardMedia
    component='iframe'
    src={src}
    allowFullScreen
    height={250}
    frameBorder='none'
  />
);

export default Video;
