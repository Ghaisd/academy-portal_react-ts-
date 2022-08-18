import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

type props = {
  children: React.ReactElement
}
const HideOnScroll = ({ children }: props) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
