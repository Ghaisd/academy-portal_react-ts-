import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { StudentType } from '../../../api/api';
import useStudents from '../../../api/hooks/useStudents';
import Loading from '../../../Components/Loading';
import Student from './Student';

const StudentsSection = () => {
  const { data, error } = useStudents();
  const { t } = useTranslation();
  if (error) return <h1>{error}</h1>;
  return (
    <>
      <Typography align='center' color='text.primary' variant='h3'>
        {t('OurStudents')}
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
