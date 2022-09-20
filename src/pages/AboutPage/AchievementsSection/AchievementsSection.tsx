import { Box, Container , Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { staticTextAboutNo, staticTextAboutEn } from '../../../data/staticText';
import Achievement, { AchievementType } from './Achievement';
import Text from '../../../Components/Text';
import { PickTxtLng } from '../../../customFunctions/PickTxtLng';
import { achievementsEn, achievementsNo } from '../../../data/achievements';

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
          <Text
            textNo={achievementsSectionTextPNo}
            textEn={achievementsSectionTextPEn}
            variant='subtitle1'
            py={2}
          />
          <Box display='grid' gridTemplateColumns='repeat(2, 4fr)' gap={2.4}>
            {PickTxtLng<AchievementType[]>(achievementsNo, achievementsEn).map(
              (achievement) => (
                <Achievement key={achievement.nrOfAchievement} achievement={achievement} />
              ),
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AchievementsSection;
