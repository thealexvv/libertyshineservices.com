import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/HomePage';
import NotFound from './pages/notFound/NotFoundPage';
import Portfolio from './pages/portfolio/PortfolioPage';
import Questions from './pages/questions/QuestionsPage';
import ServicesPage from './pages/services/ServicesPage';
import PagesLayout from './pages/pagesLayout/PagesLayout';

export const floridaTelNumber = '856 761 56 31';
export const newJerseyTelNumber = '732 305 06 85';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PagesLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="questions" element={<Questions />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      {/* {modalOpen && <Modal toggleModal={toggleModal} />} */}
    </>
  );
};

export default App;
