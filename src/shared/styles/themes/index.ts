import { ThemeOptions } from '@mui/material';
import createTheme from '@mui/material/styles/createTheme';
import Palatte from './palette';

const theme = (mode: string) => {
  const themeOptions: ThemeOptions = {
    palette: Palatte(),
    typography: {
      fontFamily: 'Noto Serif KR',
    },
  };

  const theme = createTheme(themeOptions);
  return theme;
};

export default theme;
