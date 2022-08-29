import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import useSWR from 'swr';
// import students from '../../../data/students';
import Student from './Student';

type StudentType = {
  Name: string;
  ProfileImage: string;
  ShortInfo: string;
  Github: string;
  Linkedin: string;
};

const StudentsSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetcher = (url: string) => fetch(url).then((r: any) => r.json());
  const { data, error } = useSWR(
    'https://localhost:7045/api/allstudents',
    fetcher,
  );
  if (error) return <h1>{error}</h1>;
  return (
    <>
      <Typography align='center' color='text.primary' variant='h3'>
        Årets kull
      </Typography>
      <Box
        display='grid'
        gridTemplateColumns='repeat(4, 1fr)'
        gap={2}
        my={8}
        width={50}
      >
        {data ? (
          data.map((student: StudentType) => (
            <Student
              key={student.Name}
              src={student.ProfileImage}
              Name={student.Name}
              smallInfo={student.ShortInfo}
              GithubLink={student.Github}
              LinkedinLink={student.Linkedin}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Box>
    </>
  );
};

export default StudentsSection;
