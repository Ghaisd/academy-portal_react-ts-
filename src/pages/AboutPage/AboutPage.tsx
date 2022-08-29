import { Box } from '@mui/system';
import AchievementsSection from './AchievementsSection/AchievementsSection';
import StudentsSection from './StudentsSection/StudentsSection';

const AboutPage = () => (
  <Box py={10}>
    <StudentsSection />
    <AchievementsSection />
  </Box>
);

export default AboutPage;