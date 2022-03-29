import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
  '& label': {
    color: 'white'
  },
  '& label.Mui-focused': {
    color: 'orange'
  },
  '& label.MuiFormLabel-filled': {
    color: 'orange'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
      color: 'white'
    },
    '&:hover fieldset': {
      borderColor: 'orange'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'orange'
    },
    '& .MuiInputBase-input': {
      color: 'orange',
      fontSize: 13
    }
  }
});

export default CssTextField;
