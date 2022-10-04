import { Box, Container , Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { images } from '../../../constants';
import Achievement, { AchievementType } from './Achievement';
import Text from '../../../Components/Text';
import { PickTxtLng } from '../../../customFunctions/PickTxtLng';
import {staticTextAboutNo, staticTextAboutEn, achievementsEn, achievementsNo } from '../../../data';

const {aboutAchievements} = images;
const { achievementsSectionTextPNo } = staticTextAboutNo;
const { achievementsSectionTextPEn } = staticTextAboutEn;

const AchievementsSection = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth='xl'>
      <Box display='flex' flexDirection={{xs:'column', sm:'row'}}>
        <Box
          component='img'
          alt='achievement'
          src= {aboutAchievements}
        />
        <Box>
          <Typography color='text.primary' variant='h3' pt={2}>
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
