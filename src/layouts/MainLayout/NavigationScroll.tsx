import React, { useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

// ==============================|| NAVIGATION SCROLL TO TOP ||============================== //

interface INavigationsScrollProps {
  children?: ReactNode;
}
const NavigationScroll = ({ children }: INavigationsScrollProps) => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return <>{children}</>;
};

export default NavigationScroll;
