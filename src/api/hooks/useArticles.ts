import useSWR from 'swr';
import { articlesUrl, ArticleType, fetcher } from '../api';

type Articles = {
  data: ArticleType[]
  error: string;
}
const useArticles = (): Articles => {
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
