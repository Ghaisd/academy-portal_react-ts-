// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetcher = (url: string) => fetch(url).then((r: any) => r.json());
export const articlesUrl = 'https://localhost:7045/api/article';
export const studentsUrl = 'https://localhost:7045/api/allstudents';
