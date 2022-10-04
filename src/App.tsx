import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import {Navbar,Footer} from './Components'
import {AboutPage, AcademyTVPage, ArticlesPage, ContactPage, 
  ArticlePage, HomePage, ErrorPage, StudentPage} from './pages';
  import theme from './theme';
  import useScrollToTop from './hooks/UseScrollToTop';

export const routes = {
  Home: '/Home',
  Articles: '/Articles',
  About: '/About',
  AcademyTV: '/AcademyTV',
  Contact: '/Contact',
  ArticlePage: '/Articles/:id',
  StudentPage: '/about/:id',
};

const App = () => {
  useScrollToTop();
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path={routes.Home} element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path={routes.Articles} element={<ArticlesPage />} />
        <Route path={routes.About} element={<AboutPage />} />
        <Route path={routes.AcademyTV} element={<AcademyTVPage />} />
        <Route path={routes.Contact} element={<ContactPage />} />
        <Route path={routes.ArticlePage} element={<ArticlePage />} />
        <Route path={routes.StudentPage} element={<StudentPage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};
export default App;
