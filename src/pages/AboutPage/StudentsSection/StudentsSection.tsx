import { Typography , Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { StudentType } from '../../../api/api';
import Loading from '../../../Components/Loading';
import Student from './Student';
import students from '../../../data/students';

const StudentsSection = () => {
  // const { data, error } = useStudents();
  const { t } = useTranslation();
  // if (error) return <h1>{error}</h1>;
  return (
    <>
      <Typography align='center' color='text.primary' variant='h3'>
        {t('OurStudents')}
      </Typography>
      <Box
        display='grid'
        gridTemplateColumns={{sm:'repeat(4, 1fr)'}}
        gap={2}
        my={8}
      >
        {students ? (
          students.map((student: StudentType) => (
            <Student
              key={student.Name}
              src={student.ProfileImage}
              Name={student.Name}
              smallInfo={student.ShortInfo}
              Github={student.Github}
              Linkedin={student.Linkedin}
            />
          ))
        ) : (
          <Loading
            sx={{
              pl: '48vw',
              py: '15vh',
            }}
          />
        )}
      </Box>
    </>
  );
};

export default StudentsSection;
