import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { staticTextAboutNo, staticTextAboutEn } from '../../../data/staticText';
import achievements from '../../../data/achievements';
import Achievement from './Achievement';
import Text from '../../../Components/Text';

const { achievementsSectionTextPNo } = staticTextAboutNo;
const { achievementsSectionTextPEn } = staticTextAboutEn;

const AchievementsSection = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth='xl'>
      <Box display='flex'>
        <Box
          component='img'
          alt='achievement'
          src='/images/about_achievements.svg'
        />
        <Box>
          <Typography color='text.primary' variant='h3'>
            {t('Achievements')}
          </Typography>
          {/* <Typography color='text.primary' variant='subtitle1' py={2}>
            {achievementsSectionTextPNo}
          </Typography> */}
          <Text
            textNo={achievementsSectionTextPNo}
            textEn={achievementsSectionTextPEn}
            variant='subtitle1'
            py={2}
          />
          <Box display='grid' gridTemplateColumns='repeat(2, 4fr)' gap={2.4}>
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
