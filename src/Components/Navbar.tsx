import { Typography, AppBar, Toolbar, Stack } from '@mui/material';
import CustomLink from './UI/RoutingLink';
import { routes } from '../App';
import HideOnScroll from './UI/HideOnScroll';

const Navbar = () => (
  <HideOnScroll>
    <AppBar position='fixed' sx={{ bgcolor: 'secondary.main' }}>
      <Toolbar>
        <Typography
          color='text.primary'
          variant='h5'
          component='div'
          sx={{ flexGrow: 1 }}
        >
          <CustomLink to='/'>IKOMM ACADEMY</CustomLink>
        </Typography>
        <Stack direction='row' spacing={7}>
          <CustomLink to={routes.Home}>Hjem</CustomLink>
          <CustomLink to={routes.Articles}>Siste nytt</CustomLink>
          <CustomLink to={routes.About}>Kandidatene</CustomLink>
          <CustomLink to={routes.AcademyTV}>Academy TV</CustomLink>
          <CustomLink to={routes.Contact}>Kontaktinfo</CustomLink>
        </Stack>
      </Toolbar>
    </AppBar>
  </HideOnScroll>
);

export default Navbar;
