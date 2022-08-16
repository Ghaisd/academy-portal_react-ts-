import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import students from '../../../data/students';
import Student from './Student';

const StudentsSection = () => (
  <>
    <Typography align="center" variant="h2">Årets kull</Typography>
    <Box
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gap={2}
      my={8}
      width={50}
    >
      {students.map((student) => (
        <Student
          key={student.Name}
          src={student.Image}
          studentName={student.Name}
          smallInfo={student.ShortInfo}
          GithubLink={student.GithubLink}
          LinkedinLink={student.LinkedinLink}
        />
      ))}
    </Box>
  </>
);

export default StudentsSection;
