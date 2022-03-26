import styles from '../../../styles/Calculator.module.css';

import ComputerIcon from '@mui/icons-material/Computer';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CloudIcon from '@mui/icons-material/Cloud';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export default function Calculator() {
  return (
    <div className={styles.calculator}>
      <Accordion
        sx={{ width: 350, backgroundColor: 'lightgray', textShadow: 'none' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{fontWeight: 'bold'}}>Size</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ width: 350, backgroundColor: 'lightgray', textShadow: 'none' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{fontWeight: 'bold'}}>UI Refinement</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ width: 350, backgroundColor: 'lightgray', textShadow: 'none' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{fontWeight: 'bold'}}>Users or Accounts</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ width: 350, backgroundColor: 'lightgray', textShadow: 'none' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{fontWeight: 'bold'}}>User Generated Content</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ width: 350, backgroundColor: 'lightgray', textShadow: 'none' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{fontWeight: 'bold'}}>Social</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ width: 350, backgroundColor: 'lightgray', textShadow: 'none' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{fontWeight: 'bold'}}>eCommerce</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ width: 350, backgroundColor: 'lightgray', textShadow: 'none' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{fontWeight: 'bold'}}>Management</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ width: 350, backgroundColor: 'lightgray', textShadow: 'none' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{fontWeight: 'bold'}}>Mobile</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ width: 350, backgroundColor: 'lightgray', textShadow: 'none' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{fontWeight: 'bold'}}>Cloud Solutions</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>


        <div className={styles.estimation}>Total Cost: </div>
    </div>
  );
}
