import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box , Stack, Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';
import RoutingButton from '../../../Components/UI/RoutingButton';
import CustomIcon from '../../../Components/UI/InteractiveIcon';
import { StudentType } from '../../../api/api';
import {studentsNo, studentsEn} from '../../../data/students';
import { PickTxtLng } from '../../../customFunctions/PickTxtLng';

const StudentPage = () => {
  const {t} = useTranslation();
  const { id } = useParams<string>();
  const [student, setStudent] = useState<StudentType>();
  const individualStudent: StudentType | undefined = PickTxtLng(studentsNo, studentsEn).find((x) => x.Name === id)

  useEffect(() => {
      setStudent(individualStudent);
  }, [individualStudent]);
  return (
      <Stack
      direction={{sm:'row-reverse'}}
      py={{xs:10, sm:30}}
      alignItems='center'
      justifyContent='center'
      gap={10}
      >
      <Box
      component='img'
      borderRadius={20}
      alt='ProfilePic'
      width={400}
      src={student?.ProfileImage}
      />
      <Box textAlign={{xs:'center', sm:'inherit'}}>
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
        <RoutingButton
          sx={{
            bgcolor: 'warning.main',
          }}
          to='#'
          >
          {t('DownloadCV')}
        </RoutingButton>
      </Box>
     
     </Stack>
     );
    };

export default StudentPage;
