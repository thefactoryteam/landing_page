// hooks/usePageTracking.js
import { useEffect } from 'react';
import { useLocation } from 'react-router';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-8CJLZ6QLE5', {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default usePageTracking;
