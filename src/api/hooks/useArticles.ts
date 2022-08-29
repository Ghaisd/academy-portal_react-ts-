import useSWR from 'swr';
import { articlesUrl, fetcher } from '../api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useArticles = (): any => {
  const url = articlesUrl;
  const { data, error } = useSWR(
    url,
    fetcher,
  );
  return (
    { data, error }
  );
};

export default useArticles;
