import { useEffect, useState } from 'react';
import { apiInstance } from 'src/plugins/axios';

interface IPAddress {
  IPv4: string;
}

const useClientIP = () => {
  const [ipAddress, setIPAddress] = useState<string | null>(null);

  useEffect(() => {
    const getClientIP = async () => {
      try {
        const response = await apiInstance.get<IPAddress>('https://geolocation-db.com/json/');
        setIPAddress(response.data.IPv4);
      } catch (error) {
        console.error('Failed to fetch IP address:', error);
      }
    };

    getClientIP();
  }, []);

  return ipAddress;
};

export default useClientIP;
