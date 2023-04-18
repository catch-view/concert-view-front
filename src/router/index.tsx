import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import DefaultLayout from 'layouts/DefaultLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
