import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import useScrollToTop from './hooks/UseScrollToTop';
import AcademyTV from './pages/academyTV/AcademyTV';
import Articles from './pages/articles/Articles';
import Contact from './pages/contact/Contact';
import ArticlePage from './pages/articles/ArticlePage';
import About from './pages/about/About';
import StudentPage from './pages/about/StudentsSection/StudentPage';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/home/Home';
import './index.css';

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
    <>
      <Navbar />
      <Routes>
        <Route path={routes.Home} element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path={routes.Articles} element={<Articles />} />
        <Route path={routes.About} element={<About />} />
        <Route path={routes.AcademyTV} element={<AcademyTV />} />
        <Route path={routes.Contact} element={<Contact />} />
        <Route
          path={routes.ArticlePage}
          element={<ArticlePage />}
        />
        <Route
          path={routes.StudentPage}
          element={<StudentPage />}
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
