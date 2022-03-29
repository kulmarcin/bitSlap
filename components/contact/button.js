import { styled } from '@mui/material/styles';
import {Button} from '@mui/material'


const myButton = styled(Button)({
    boxShadow: '5px 5px 5px gray',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid white',
    lineHeight: 1.5,
    backgroundColor: 'transparent',
    borderColor: 'white',
    color: 'white',
    '&:active': {
        borderColor: 'gray'
    },
    '&:focus': {
        borderColor: 'gray'
    },
    '&:hover': {
        borderColor: 'orange'
    }
  });

  export default myButton