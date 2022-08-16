import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import CustomButton from '../../../Components/UI/CustomButton';
import CustomIcon from '../../../Components/UI/CustomIcon';
import students from '../../../data/students';

type StudentType = {
    _id: number;
    Name: string;
    LastName: string;
    FullName: string;
    ShortInfo: string;
    Description: string;
    Status: string;
    Image: string;
    GithubLink: string;
    LinkedinLink: string;
}
const StudentPage = () => {
  const { id } = useParams();
  const [oneStudent, setOneStudent] = useState<StudentType>();

  useEffect(() => {
    const typedStudent = students as StudentType[];
    const student = typedStudent.find((x) => x.Name === id);
    if (student) {
      setOneStudent(student);
    }
  }, [id, setOneStudent]);

  return (
    <Box
      py={30}
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={24}
    >
      <Box>
        <Typography
          color="#f75023"
          variant="h4"
        >
          Hallo, jeg er

        </Typography>
        <br />
        <Typography variant="h2">
          {`${oneStudent?.Name} ${oneStudent?.LastName}`}

        </Typography>
        <br />
        <Typography
          variant="h6"
        >
          Student at Ikomm Academy

        </Typography>
        <br />
        <Typography
          variant="h5"
          color="#a09dab"
        >
          {oneStudent?.ShortInfo}

        </Typography>
        <br />
        <Box mb={2}>
          <CustomIcon href="https://linkedin.com" iconType="bi bi-linkedin" />
          <CustomIcon href={oneStudent?.GithubLink} iconType="bi bi-github" />
        </Box>
        <CustomButton
          to="/#"
          styles={{ backgroundColor: '#f75023', borderRadius: 20 }}
        >
          Last ned CV
        </CustomButton>
      </Box>
      <Box
        component="img"
        borderRadius="30px"
        alt="ProfilePic"
        src={oneStudent?.Image}
      />
    </Box>
  );
};

export default StudentPage;
