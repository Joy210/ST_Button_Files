theme 
import { colors, createTheme } from '@mui/material';

const ff = [
  'Murecho',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Poppins',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
].join(',');

export const newTheme = {
  // Components
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: ff,
      },
    },
  },
  // Breakpoints
  breakpoints: {
    values: {
      // default
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      // added
      mobile: 0,
      tablet: 640,
      desktop: 1024,
    },
  },
  palette: {
    default: {
      white: '#FFFFFF',
      black: '#000000',
    },
    neutral: {
      25: '#FAFBFC',
      50: '#F5F7FA',
      75: '#EBF0F5',
      100: '#E2E8F0',
      200: '#D8E1EB',
      300: '#CFD8E3',
      400: '#BECAD6',
      500: '#9BA6B2',
      600: '#77818C',
      700: '#5A6573',
      800: '#3E4957',
      900: '#1A2B3D',
    },
    blue: {
      100: '#EDF5FF',
      200: '#D4E8FF',
      300: '#B8D9FF',
      400: '#5CA7FF',
      500: '#1882FF',
      550: '#126FDE',
      600: '#0E56AB',
      700: '#E8F3FF',
      800: '#073C7A',
    },
    orange: {
      100: '#FFEEDB',
      101: '#FFEEDB',
      200: '#FFE1C2',
      201: '#F9C994',
      300: '#FFA03B',
      301: '#F99C1C',
      400: '#F78E1E',
      500: '#F27D00',
      600: '#D66F00',
      800: '#AD5A00',
    },
    red: {
      100: '#FCECEB',
      200: '#FDE6E5',
      201: '#F7A4A1',
      300: '#F48884',
      500: '#EF5550',
      600: '#D14B46',
    },
    // black: {
    //   main: '#000000',
    // },
    // white: {
    //   main: '#FFFFFF',
    // },
    green: {
      100: '#D6F1DD',
      201: '#8DD89E',
      300: '#68CB7E',
      500: '#03A629',
    },
    // gray: {
    //   100: '#F5F7FA',
    //   101: '#5A6573',
    //   200: '#EBF0F5',
    //   300: '#E2E8F0',
    //   400: '#D8E1EB',
    //   500: '#BECAD6',
    //   600: '#9BA6B2',
    //   700: '#77818C',
    //   800: '#3E4957',
    //   900: '#1A2B3D',
    //   main: '#FAFBFC',
    //   dark: '#77818C',
    // },
    secondary: {
      main: '#FF3326',
    },
    error: {
      main: '#D32F2F',
    },
    success: {
      500: '#03A629',
      main: '#43A046',
    },
    dark: {
      darkerGray: '#4d5661',
    },
    // calendarDate: {
    //   red: '#FCECEB',
    //   redDot: '#F7A4A1',
    //   green: '#D6F1DD',
    //   greenDot: '#8DD89E',
    //   orange: '#FFEEDB',
    //   orangeDot: '#F9C994',
    // },
  },
  typography: {
    fontFamily: ff,
    h1: {
      fontSize: '40px',
      fontWeight: 600,
      lineHeight: '48px',
      color: '#1A2B3D',
    },
    h2: {
      fontSize: '32px',
      fontWeight: 600,
      lineHeight: '40px',
      color: '#1A2B3D',
    },
    h3: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '32px',
      color: '#1A2B3D',
    },
    h4: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '24px',
      color: '#1A2B3D',
    },
    h5: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
      color: '#1A2B3D',
    },
    h6: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '24px',
      color: '#1A2B3D',
    },
    body1: {
      color: '#3E4957',
    },
    span: {
      color: '#3E4957',
    },
    allVariants: {
      fontFamily: ff,
    },
  },
};
export const theme = createTheme(newTheme);
