import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const BasicInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #717F88',
      fontSize: 12,
      color: "#717F88",
      padding: '9px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ])
    }
  }));