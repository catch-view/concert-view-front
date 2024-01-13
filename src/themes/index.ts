import { createTheme, ThemeOptions } from '@mui/material';
import Palatte from './palette';

const theme = (mode: string) => {
  const themeOptions: ThemeOptions = {
    palette: Palatte(),
  };

  const theme = createTheme(themeOptions);
  return theme;
};

export default theme;
