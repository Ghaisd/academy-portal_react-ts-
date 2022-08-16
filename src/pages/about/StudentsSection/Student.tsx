import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { routes } from '../../../App';
import CustomIcon from '../../../Components/UI/CustomIcon';

type props = {
  src: string,
  studentName: string,
  smallInfo: string,
  GithubLink: string,
  LinkedinLink: string,
}
const Student = ({
  src, studentName, smallInfo, GithubLink, LinkedinLink,
}: props) => (
  <Box border={10} borderColor="#537a5a" bgcolor="#909590" mr={14}>
    <Box display="flex" alignItems="center">
      <Box
        component="img"
        src={src}
        alt="Student"
        height="300px"
      />
      <Box display="flex" flexDirection="column" justifyContent="center">
        <CustomIcon
          href={`${routes.About}/${studentName}`}
          iconType="bi bi-file-earmark-person"
        />
        <CustomIcon href={LinkedinLink} iconType="bi bi-linkedin" />
        <CustomIcon href={GithubLink} iconType="bi bi-github" />
      </Box>
    </Box>
    <Box>
      <Typography pt={2} variant="h4" align="center">{studentName}</Typography>
      <Typography color="#109" pl={2} variant="h6">{smallInfo}</Typography>
    </Box>
  </Box>
);

export default Student;
