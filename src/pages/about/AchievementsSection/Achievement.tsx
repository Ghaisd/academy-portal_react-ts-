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
    bgcolor="#474a48"
    p={1.6}
    borderRadius={4}
    textAlign="center"
    sx={{
      i: {
        bgcolor: '#537a5a',
        p: 1,
        borderRadius: 2,
        display: 'inline-block',
        mb: 2,
        fontSize: 32,
      },
    }}
  >
    <i className={iconAchievement} />
    <Typography variant="h4">{nrOfAchievement}</Typography>
    <Typography variant="h5">{finishedAchievement}</Typography>
  </Box>
);

export default Achievement;
