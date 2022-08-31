/* eslint-disable react/jsx-no-constructed-context-values */
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import useScrollToTop from './hooks/UseScrollToTop';
import AcademyTVPage from './pages/AcademyTVPage/AcademyTVPage';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ArticlePage from './pages/ArticlesPage/ArticlePage';
import AboutPage from './pages/AboutPage/AboutPage';
import StudentPage from './pages/AboutPage/StudentsSection/StudentPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import theme from './theme';

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
