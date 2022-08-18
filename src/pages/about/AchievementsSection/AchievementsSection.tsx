import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';
import { staticTextAbout } from '../../../data/staticText';
import achievements from '../../../data/achievements';
import Achievement from './Achievement';

const AchievementsSection = () => {
  const { achievementsSectionTextP } = staticTextAbout;

  return (
    <Container maxWidth="xl">
      <Box display="flex">
        <Box
          component="img"
          alt="achievement"
          src="/images/about_achievements.svg"
        />
        <Box>
          <Typography color="text.primary" variant="h3">Resultater</Typography>
          <Typography color="text.primary" variant="subtitle1" py={2}>
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
    </Container>
  );
};

export default AchievementsSection;
