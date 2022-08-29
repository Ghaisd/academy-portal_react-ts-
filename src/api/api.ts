// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetcher = (url: string) => fetch(url).then((r: any) => r.json());
export const articlesUrl = 'https://localhost:7045/api/article';
export const studentsUrl = 'https://localhost:7045/api/allstudents';

export type ArticleType = {
  Id: number;
  Title: string;
  AuthorName: string;
  Content: string;
  ArticleImage: string;
  AuthorImage: string;
};

export type StudentType = {
  Name: string;
  LastName: string;
  ProfileImage: string;
  ShortInfo: string;
  Github: string;
  Linkedin: string;
};
