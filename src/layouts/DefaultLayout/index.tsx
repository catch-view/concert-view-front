import React from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div>
      <div>header</div>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
