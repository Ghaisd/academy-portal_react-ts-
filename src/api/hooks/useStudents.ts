import useSWR from 'swr';
import { studentsUrl, fetcher, StudentType } from '../api';

type Students = {
  data: StudentType[];
  error: string;
}

const useStudents = (): Students => {
  const url = studentsUrl;
  const { data, error } = useSWR(
    url,
    fetcher,
  );
  return (
    { data, error }
  );
};

export default useStudents;
