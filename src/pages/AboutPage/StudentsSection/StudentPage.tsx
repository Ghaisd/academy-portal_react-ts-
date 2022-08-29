import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import useSWR from 'swr';
import CustomButton from '../../../Components/UI/RoutingButton';
import CustomIcon from '../../../Components/UI/InteractiveIcon';

type StudentType = {
  Id: number;
  Name: string;
  LastName: string;
  ShortInfo: string;
  Status: string;
  Image: string;
  Github: string;
  Linkedin: string;
  ProfileImage: string;
};
const StudentPage = () => {
  const { id } = useParams<string>();
  const [student, setStudent] = useState<StudentType>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetcher = (url: string) => fetch(url).then((r: any) => r.json());
  const { data, error } = useSWR(
    'https://localhost:7045/api/allstudents',
    fetcher,
  );

  const students: StudentType[] = data;
  useEffect(() => {
    if (students) {
      const individualStudent = students.find((x) => x.Name.toString() === id);
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
