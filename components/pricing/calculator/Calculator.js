import styles from '../../../styles/Calculator.module.css';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function Calculator() {
  const [size, setSize] = useState({
    small: false,
    medium: false,
    large: false,
  });

  const [refinement, setRefinement] = useState({
    minimum: false,
    basic: false,
    polished: false,
  })

  const [users, setUsers] = useState({
    classic: false,
    oauth: false,
    multitenant: false,
  })

  const [generated, setGenerated] = useState({
    dashboard: false,
    upload: false,
    profiles: false,
    emails: false,
    ratings: false,
  })

  const [social, setSocial] = useState({
    messaging: false,
    forums: false,
    sharing: false,
  })

  const [ecommerce, setEcommerce] = useState({
    subscription: false,
    cart: false,
    management: false,
  })

  const [management, setManagement] = useState({
    cms: false,
    analytics: false,
    multilingual: false
  })
 

  const handleSize = type => {
    setSize(state => {
      return { state, [type]: !state[type] };
    }); // not '...state' because i want to reset state to initial
  };

  const handleRefinement = type => {
    setRefinement(state => {
      return {state, [type]: !state[type]}
    })
  }

  const handleUsers = type => {
    setUsers(state => {
      return {...state, [type]: !state[type]}
    })
  }

  const handleGenerated = type => {
    setGenerated(state => {
      return {...state, [type]: !state[type]}
    })
  }

  const handleSocial = type => {
    setSocial(state => {
      return {...state, [type]: !state[type]}
    })
  }

  const handleCommerce = type => {
    setEcommerce(state => {
      return {...state, [type]: !state[type]}
    })
  }

  const handleManagement = type => {
    setManagement(state => {
      return {...state, [type]: !state[type]}
    })
  }

  

  return (
    <div className={styles.calculator}>
      <Accordion
        sx={{
          width: 350,
          backgroundColor: 'lightgray',
          textShadow: 'none',
          boxShadow: '5px 5px 5px dimgray'
        }}
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
            <button
              onClick={handleSize.bind(this, 'small')}
              className={`${styles.button} ${
                size.small && styles.buttonActive
              }`}
            >
              Small
            </button>
            <button
              onClick={handleSize.bind(this, 'medium')}
              className={`${styles.button} ${
                size.medium && styles.buttonActive
              }`}
            >
              Medium
            </button>
            <button
              onClick={handleSize.bind(this, 'large')}
              className={`${styles.button} ${
                size.large && styles.buttonActive
              }`}
            >
              Large
            </button>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          width: 350,
          backgroundColor: 'lightgray',
          textShadow: 'none',
          boxShadow: '5px 5px 5px dimgray'
        }}
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
            <button
              onClick={handleRefinement.bind(this, 'minimum')}
              className={`${styles.button} ${
                refinement.minimum && styles.buttonActive
              }`}
            >Minimum</button>
            <button
              onClick={handleRefinement.bind(this, 'basic')}
              className={`${styles.button} ${
                refinement.basic && styles.buttonActive
              }`}
            >Basic</button>
            <button
              onClick={handleRefinement.bind(this, 'polished')}
              className={`${styles.button} ${
                refinement.polished && styles.buttonActive
              }`}
            >Polished</button>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          width: 350,
          backgroundColor: 'lightgray',
          textShadow: 'none',
          boxShadow: '5px 5px 5px dimgray'
        }}
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
            <button
              onClick={handleUsers.bind(this, 'classic')}
              className={`${styles.button} ${
                users.classic && styles.buttonActive
              }`}
            >Classic Signup</button>
            <button
              onClick={handleUsers.bind(this, 'oauth')}
              className={`${styles.button} ${
                users.oauth && styles.buttonActive
              }`}
            >OAuth Signup</button>
            <button
              onClick={handleUsers.bind(this, 'multitenant')}
              className={`${styles.button} ${
                users.multitenant && styles.buttonActive
              }`}
            >Multi-tenant Accounts</button>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          width: 350,
          backgroundColor: 'lightgray',
          textShadow: 'none',
          boxShadow: '5px 5px 5px dimgray'
        }}
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
            <button
              onClick={handleGenerated.bind(this, 'dashboard')}
              className={`${styles.button} ${
                generated.dashboard && styles.buttonActive
              }`}
            >Dashboard</button>
            <button
              onClick={handleGenerated.bind(this, 'upload')}
              className={`${styles.button} ${
                generated.upload && styles.buttonActive
              }`}
            >File Uploading</button>
            <button
              onClick={handleGenerated.bind(this, 'profiles')}
              className={`${styles.button} ${
                generated.profiles && styles.buttonActive
              }`}
            >Profiles</button>
            <button
              onClick={handleGenerated.bind(this, 'emails')}
              className={`${styles.button} ${
                generated.emails && styles.buttonActive
              }`}
            >Emails</button>
            <button
              onClick={handleGenerated.bind(this, 'ratings')}
              className={`${styles.button} ${
                generated.ratings && styles.buttonActive
              }`}
            >Ratings</button>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          width: 350,
          backgroundColor: 'lightgray',
          textShadow: 'none',
          boxShadow: '5px 5px 5px dimgray'
        }}
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
            <button
              onClick={handleSocial.bind(this, 'messaging')}
              className={`${styles.button} ${
                social.messaging && styles.buttonActive
              }`}
            >Messaging</button>
            <button
              onClick={handleSocial.bind(this, 'forums')}
              className={`${styles.button} ${
                social.forums && styles.buttonActive
              }`}
            >Forums</button>
            <button
              onClick={handleSocial.bind(this, 'sharing')}
              className={`${styles.button} ${
                social.sharing && styles.buttonActive
              }`}
            >Social Sharing</button>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          width: 350,
          backgroundColor: 'lightgray',
          textShadow: 'none',
          boxShadow: '5px 5px 5px dimgray'
        }}
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
           <button
              onClick={handleCommerce.bind(this, 'subscription')}
              className={`${styles.button} ${
                ecommerce.subscription && styles.buttonActive
              }`}
            >Subscription</button>
            <button
              onClick={handleCommerce.bind(this, 'cart')}
              className={`${styles.button} ${
                ecommerce.cart && styles.buttonActive
              }`}
            >Shopping Cart</button>
            <button
              onClick={handleCommerce.bind(this, 'management')}
              className={`${styles.button} ${
                ecommerce.management && styles.buttonActive
              }`}
            >Product Management</button>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          width: 350,
          backgroundColor: 'lightgray',
          textShadow: 'none',
          boxShadow: '5px 5px 5px dimgray'
        }}
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
            <button
              onClick={handleManagement.bind(this, 'cms')}
              className={`${styles.button} ${
                management.cms && styles.buttonActive
              }`}
            >CMS Integration</button>
            <button
              onClick={handleManagement.bind(this, 'analytics')}
              className={`${styles.button} ${
                management.analytics && styles.buttonActive
              }`}
            >Analytics</button>
            <button
              onClick={handleManagement.bind(this, 'multilingual')}
              className={`${styles.button} ${
                management.multilingual && styles.buttonActive
              }`}
            >Multilingual Support</button>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <div className={styles.estimation}>Total Cost: $0</div>
    </div>
  );
}
