import styles from '../../../styles/Calculator.module.css';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Calculator() {
  const handleClick = () => {
    console.log('hey');
  };
  return (
    <div className={styles.calculator}>
      <Accordion
        sx={{ width: 350, backgroundColor: 'lightgray', textShadow: 'none' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            direction="row"
            spacing={1}
            sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <Chip label="Small" variant="" onClick={handleClick} />
            <Chip label="Medium" variant="outlined" onClick={handleClick} />
            <Chip label="Large" variant="outlined" onClick={handleClick} />
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ width: 350, backgroundColor: 'lightgray', textShadow: 'none' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>UI Refinement</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Stack
            direction="row"
            spacing={1}
            sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <Chip label="Minimum" variant="" onClick={handleClick} />
            <Chip label="Basic" variant="outlined" onClick={handleClick} />
            <Chip label="Polished" variant="outlined" onClick={handleClick} />
          </Stack>

        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ width: 350, backgroundColor: 'lightgray', textShadow: 'none' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>Users</Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Stack
            direction="row"
            spacing={1}
            sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <Chip label="Classic Signup" variant="" onClick={handleClick} sx={{marginBottom: 1}} />
            <Chip label="OAuth Signup" variant="outlined" onClick={handleClick} />
            <Chip label="Multi-tenant Accounts" variant="outlined" onClick={handleClick}/>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ width: 350, backgroundColor: 'lightgray', textShadow: 'none' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>
            User Generated Content
          </Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Stack
            direction="row"
            spacing={1}
            sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <Chip label="Dashboard" variant="" onClick={handleClick} sx={{marginBottom: 1}} />
            <Chip label="File Uploading" variant="outlined" onClick={handleClick} />
            <Chip label="Profiles" variant="outlined" onClick={handleClick} />
            <Chip label="Emails" variant="outlined" onClick={handleClick} />
            <Chip label="Ratings" variant="outlined" onClick={handleClick} />
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ width: 350, backgroundColor: 'lightgray', textShadow: 'none' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>Social</Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Stack
            direction="row"
            spacing={1}
            sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <Chip label="Messaging" variant="" onClick={handleClick} />
            <Chip label="Forums" variant="outlined" onClick={handleClick} />
            <Chip label="Social Sharing" variant="outlined" onClick={handleClick} />
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ width: 350, backgroundColor: 'lightgray', textShadow: 'none' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>eCommerce</Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Stack
            direction="row"
            spacing={1}
            sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <Chip label="Subscription" variant="" onClick={handleClick} sx={{marginBottom: 1}} />
            <Chip label="Shopping Cart" variant="outlined" onClick={handleClick} />
            <Chip label="Product Management" variant="outlined" onClick={handleClick} />
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ width: 350, backgroundColor: 'lightgray', textShadow: 'none' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>Management</Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Stack
            direction="row"
            spacing={1}
            sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <Chip label="CMS Integration" variant="" onClick={handleClick} sx={{marginBottom:1}} />
            <Chip label="Analytics" variant="outlined" onClick={handleClick} />
            <Chip label="Multilingual Support" variant="outlined" onClick={handleClick} />
          </Stack>
        </AccordionDetails>
      </Accordion>

      <div className={styles.estimation}>Total Cost: $0</div>
    </div>
  );
}
