import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: 'rgba(0,0,0,1)',
		},
		secondary: {
			main: 'rgba(174,26,22,1)',
		},
		error: {
			main: red.A400,
		},
		
	},
	typography: {
	    allVariants: {
	      fontFamily: 'Montserrat',
    },
  },



});



export default theme;
