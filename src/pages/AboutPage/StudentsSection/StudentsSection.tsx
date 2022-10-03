import { Typography, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { StudentType } from '../../../api/api';
import Student from './Student';
import { studentsEn, studentsNo } from '../../../data/students';
import { PickTxtLng } from '../../../customFunctions/PickTxtLng';

const StudentsSection = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Typography align='center' color='text.primary' variant='h3'>
        {t('OurStudents')}
      </Typography>
      <Stack
        display={{sm:'grid'}}
        gridTemplateColumns={{sm:'repeat(4, 1fr)'}}
        gap={2}
        my={8}
      >
          {PickTxtLng<StudentType[]>(studentsNo, studentsEn).map((student:StudentType) => (
            <Student
              key={student.Name}
              src={student.ProfileImage}
              Name={student.Name}
              smallInfo={student.ShortInfo}
              Github={student.Github}
              Linkedin={student.Linkedin}
            />),
            )} 
      </Stack>
    </>
  );
};

export default StudentsSection;

