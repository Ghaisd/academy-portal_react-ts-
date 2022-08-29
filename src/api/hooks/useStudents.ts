import useSWR from 'swr';
import { studentsUrl, fetcher } from '../api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStudents = (): any => {
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
