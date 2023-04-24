import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import FormPage from '../../pages/FormPage/FormPage';
import NotFound from '../../pages/NotFoundPage/NotFound';
import Layout from '../Layout/Layout';
import '../../index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="404" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
