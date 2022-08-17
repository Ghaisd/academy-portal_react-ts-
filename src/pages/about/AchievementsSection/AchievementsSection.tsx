import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { staticTextAbout } from '../../../data/staticText';
import achievements from '../../../data/achievements';
import Achievement from './Achievement';

const AchievementsSection = () => {
  const { achievementsSectionTextP } = staticTextAbout;

  return (
    <Box display="flex">
      <Box
        component="img"
        alt="achievement"
        src="/images/about_achievements.svg"
      />
      <Box>
        <Typography color="textPrimary" variant="h3">Resultater</Typography>
        <Typography color="textPrimary" variant="subtitle1" py={2}>
          {achievementsSectionTextP}
        </Typography>
        <Box display="grid" gridTemplateColumns="repeat(2, 4fr)" gap={2.4}>
          {achievements.map((achievement) => (
            <Achievement
              key={achievement.nr}
              nrOfAchievement={achievement.nr}
              iconAchievement={achievement.icon}
              finishedAchievement={achievement.finished}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AchievementsSection;
