import { Box, Container } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Typography } from '@mui/material';
import CustomLink from './UI/CustomLink';
import CustomIcon from './UI/CustomIcon';
import { routes } from '../App';

const Footer = () => (
  <Box bgcolor="primary.main" py={2} m={-1}>
    <Container maxWidth="xl">
      <Grid container spacing={20}>
        <Grid>
          <Box mr={8}>
            <Typography
              color="textPrimary"
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <CustomLink to="/">
                IKOMM ACADEMY
              </CustomLink>
            </Typography>
            <Typography color="textPrimary" variant="subtitle1" pt={2}>
              Talent finnes overalt for den som leter.
            </Typography>
            <Box
              component="img"
              src="/images/Logo_Transparent_hvit.png"
              alt="logo"
              mt={6}
              width={0.8}
            />
          </Box>
        </Grid>
        <Grid ml={12}>
          <Typography
            color="textPrimary"
            variant="h4"
            borderBottom={1}
            mb={1}
          >
            Sidemeny

          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <CustomLink to={routes.Home}>Hjem</CustomLink>
            <CustomLink to={routes.Articles}>Siste nytt</CustomLink>
            <CustomLink to={routes.About}>Kandidatene</CustomLink>
            <CustomLink to={routes.AcademyTV}>Academy TV</CustomLink>
            <CustomLink to={routes.Contact}>Kontaktinfo</CustomLink>
          </Box>
        </Grid>
        <Grid ml={24}>
          <Box display="flex" flexDirection="column" gap={2}>

            <Typography
              color="textPrimary"
              variant="h4"
              borderBottom={1}
            >
              Kontaktinfo

            </Typography>
            <Typography color="textPrimary" variant="h6">94970223</Typography>
            <Typography
              color="textPrimary"
              variant="h6"
            >
              academy@ikomm.no

            </Typography>
            <Box>
              <CustomIcon
                href="https://www.facebook.com/ikommas/"
                iconType="bi bi-facebook"
              />
              <CustomIcon
                href="https://linkedin.com/company/ikomm"
                iconType="bi bi-linkedin"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Typography
        color="textPrimary"
        variant="h6"
        textAlign="center"
        mt={4}
        borderTop={1}
      >
        Copyright &copy;2022 IKOMM-ACADEMY
      </Typography>
    </Container>
  </Box>
);

export default Footer;
