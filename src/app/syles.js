import { createMuiTheme } from '@material-ui/core/styles';

import { DODGER_BLUE, CATALINA_BLUE, BLACK, EBB } from '../constants/colors';

export const appTheme = createMuiTheme({
  palette: {
    secondary: {
      main: DODGER_BLUE
    }
  },
  overrides: {
    MuiSvgIcon: {
      root: {
        color: CATALINA_BLUE
      }
    },
    MuiButton: {
      label: {
        color: 'inherit'
      },
      textPrimary: {
        color: DODGER_BLUE
      }
    },
    MuiIconButton: {
      label: {
        color: 'inherit'
      }
    },
    MuiTableRow: {
      head: {
        "& > th ": {
          color: BLACK,
          fontWeight: 'bold',
          fontSize: '16px'
        }
      },
    },
    MuiTable: {
      root: {
        backgroundColor: EBB
      }
    }
  }
});
