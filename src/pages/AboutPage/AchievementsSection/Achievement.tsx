import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export type AchievementType = {
  iconAchievement: string;
  nrOfAchievement: string;
  finishedAchievement: string;
};

export type AchievementProps = {
  achievement: AchievementType;
};

const Achievement = ({
  achievement: { iconAchievement, nrOfAchievement, finishedAchievement },
}: AchievementProps) => (
  <Box
    bgcolor='primary.main'
    p={1.6}
    borderRadius={4}
    textAlign='center'
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
    <Typography variant='subtitle1' color='text.primary'>
      <i className={iconAchievement} />
    </Typography>
    <Typography color='text.primary' variant='h4'>
      {nrOfAchievement}
    </Typography>
    <Typography color='text.primary' variant='h5'>
      {finishedAchievement}
    </Typography>
  </Box>
);

export default Achievement;
