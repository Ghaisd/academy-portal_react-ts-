import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import useScrollToTop from './hooks/UseScrollToTop';

export const routes = {
  Home: '/Home',
  Articles: '/Articles',
  About: '/About',
  AcademyTV: '/AcademyTV',
  Contact: '/Contact',
  IndividualArticle: '/Articles/:id',
  IndividualPersonalizedPage: '/about/:id',
};

const App = () => {
  useScrollToTop();
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};
export default App;
