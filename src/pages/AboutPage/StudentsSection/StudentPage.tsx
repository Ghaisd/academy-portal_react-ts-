import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import CustomButton from '../../../Components/UI/RoutingButton';
import CustomIcon from '../../../Components/UI/InteractiveIcon';
import useStudents from '../../../api/hooks/useStudents';
import { StudentType } from '../../../api/api';

const StudentPage = () => {
  const { id } = useParams<string>();
  const [student, setStudent] = useState<StudentType>();

  const { data, error } = useStudents();

  const students = data;
  useEffect(() => {
    if (students) {
      const individualStudent: StudentType | undefined = students.find(
        (x) => x.Name === id,
      );
      if (individualStudent) {
        setStudent(individualStudent);
      }
    }
  }, [id, students, setStudent, student]);
  if (error) return <h1>{error}</h1>;
  if (!data) return <h1>Loading</h1>;
  return (
    <Box
      py={40}
      display='flex'
      alignItems='center'
      justifyContent='center'
      gap={14}
    >
      <Box>
        <Typography color='#f75023' variant='h4'>
          Hallo, jeg er
        </Typography>
        <br />
        <Typography color='text.primary' variant='h2'>
          {student?.Name}
          {student?.LastName}
        </Typography>
        <br />
        <Typography color='text.primary' variant='h6'>
          Student at Ikomm Academy
        </Typography>
        <br />
        <Typography variant='h5' color='#a09dab'>
          {student?.ShortInfo}
        </Typography>
        <br />
        <Box mb={2}>
          <CustomIcon href='https://linkedin.com' iconType='bi bi-linkedin' />
          <CustomIcon href={student?.Github} iconType='bi bi-github' />
        </Box>
        <CustomButton
          sx={{
            bgcolor: 'warning.main',
          }}
          to='#'
        >
          Last ned CV
        </CustomButton>
      </Box>
      <Box
        component='img'
        borderRadius={20}
        alt='ProfilePic'
        width={400}
        src={student?.ProfileImage}
      />
    </Box>
  );
};

export default StudentPage;
