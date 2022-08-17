import { Typography } from '@mui/material';
import { Box } from '@mui/system';

type props = {
  iconAchievement: string
  nrOfAchievement: string
  finishedAchievement: string
}

// eslint-disable-next-line max-len
const Achievement = ({ iconAchievement, nrOfAchievement, finishedAchievement }: props) => (
  <Box
    bgcolor="primary.main"
    p={1.6}
    borderRadius={4}
    textAlign="center"
    sx={{
      i: {
        bgcolor: 'secondary.main',
        p: 1,
        borderRadius: 2,
        display: 'inline-block',
        mb: 2,
        fontSize: 32,
      },
    }}
  >
    <Typography variant="subtitle1" color="textPrimary">
      <i className={iconAchievement} />
    </Typography>
    <Typography color="textPrimary" variant="h4">{nrOfAchievement}</Typography>
    <Typography
      color="textPrimary"
      variant="h5"
    >
      {finishedAchievement}

    </Typography>
  </Box>
);

export default Achievement;
