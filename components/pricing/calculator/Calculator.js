import React, { useEffect, useRef, useState } from 'react';

import styles from '../../../styles/Calculator.module.css';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Stack from '@mui/material/Stack';
import Tooltip from './tooltip'

export default function Calculator() {
  const smallRef = useRef(null);
  const mediumRef = useRef(null);
  const largeRef = useRef(null);

  const minimumRef = useRef(null);
  const basicRef = useRef(null);
  const polishedRef = useRef(null);

  const DAILY_SALARY = 100;

  const [previousSize, setPreviousSize] = useState(null);
  const [previousRefinement, setPreviousRefinement] = useState(null);
  const [days, setDays] = useState(0);
  const [total, setTotal] = useState(0);

  const [size, setSize] = useState({
    small: false,
    medium: false,
    large: false
  });

  const [refinement, setRefinement] = useState({
    minimum: false,
    basic: false,
    polished: false
  });

  const [users, setUsers] = useState({
    classic: false,
    oauth: false,
    multitenant: false
  });

  const [generated, setGenerated] = useState({
    dashboard: false,
    upload: false,
    profiles: false,
    emails: false,
    ratings: false
  });

  const [social, setSocial] = useState({
    messaging: false,
    forums: false,
    sharing: false
  });

  const [ecommerce, setEcommerce] = useState({
    subscription: false,
    cart: false,
    management: false
  });

  const [management, setManagement] = useState({
    cms: false,
    analytics: false,
    multilingual: false
  });

  useEffect(() => {
    setTotal(days * DAILY_SALARY);
  }, [days]);

  const handleSize = (type, e) => {
    setSize(state => {
      return { state, [type]: !state[type] };
    }); // not '...state' because i want to reset state to initial

    e.target.disabled = !e.target.disabled;

    switch (type) {
      case 'small':
        mediumRef.current.disabled = false;
        largeRef.current.disabled = false;
        if (previousSize === 'medium') setDays(state => state - 4);
        if (previousSize === 'large') setDays(state => state - 7);
        setPreviousSize(type);
        !size[type] ? setDays(state => state + 2) : setDays(state => state - 2);
        break;
      case 'medium':
        smallRef.current.disabled = false;
        largeRef.current.disabled = false;
        if (previousSize === 'small') setDays(state => state - 2);
        if (previousSize === 'large') setDays(state => state - 7);
        setPreviousSize(type);
        !size[type] ? setDays(state => state + 4) : setDays(state => state - 4);
        break;
      case 'large':
        mediumRef.current.disabled = false;
        smallRef.current.disabled = false;
        if (previousSize === 'medium') setDays(state => state - 4);
        if (previousSize === 'small') setDays(state => state - 2);
        setPreviousSize(type);
        !size[type] ? setDays(state => state + 7) : setDays(state => state - 7);
        break;
    }
  };

  const handleRefinement = (type, e) => {
    setRefinement(state => {
      return { state, [type]: !state[type] };
    });

    e.target.disabled = !e.target.disabled;

    switch (type) {
      case 'minimum':
        basicRef.current.disabled = false;
        polishedRef.current.disabled = false;
        if (previousRefinement === 'basic') setDays(state => state - 3);
        if (previousRefinement === 'polished') setDays(state => state - 5);
        setPreviousRefinement(type);
        !refinement[type]
          ? setDays(state => state + 1)
          : setDays(state => state - 1);
        break;
      case 'basic':
        minimumRef.current.disabled = false;
        polishedRef.current.disabled = false;
        if (previousRefinement === 'minimum') setDays(state => state - 1);
        if (previousRefinement === 'polished') setDays(state => state - 5);
        setPreviousRefinement(type);
        !refinement[type]
          ? setDays(state => state + 3)
          : setDays(state => state - 3);
        break;
      case 'polished':
        basicRef.current.disabled = false;
        minimumRef.current.disabled = false;
        if (previousRefinement === 'basic') setDays(state => state - 3);
        if (previousRefinement === 'minimum') setDays(state => state - 1);
        setPreviousRefinement(type);
        !refinement[type]
          ? setDays(state => state + 5)
          : setDays(state => state - 5);
        break;
    }
  };

  const handleUsers = type => {
    setUsers(state => {
      return { ...state, [type]: !state[type] };
    });

    switch (type) {
      case 'classic':
        !users[type]
          ? setDays(state => state + 2)
          : setDays(state => state - 2);
        break;
      case 'oauth':
        !users[type]
          ? setDays(state => state + 2)
          : setDays(state => state - 2);
        break;
      case 'multitenant':
        !users[type]
          ? setDays(state => state + 2)
          : setDays(state => state - 2);
        break;
    }
  };

  const handleGenerated = type => {
    setGenerated(state => {
      return { ...state, [type]: !state[type] };
    });

    switch (type) {
      case 'dashboard':
        !generated[type]
          ? setDays(state => state + 7)
          : setDays(state => state - 7);
        break;
      case 'upload':
        !generated[type]
          ? setDays(state => state + 2)
          : setDays(state => state - 2);
        break;
      case 'profiles':
        !generated[type]
          ? setDays(state => state + 3)
          : setDays(state => state - 3);
        break;
      case 'emails':
        !generated[type]
          ? setDays(state => state + 2)
          : setDays(state => state - 2);
        break;
      case 'ratings':
        !generated[type]
          ? setDays(state => state + 4)
          : setDays(state => state - 4);
        break;
    }
  };

  const handleSocial = type => {
    setSocial(state => {
      return { ...state, [type]: !state[type] };
    });

    switch (type) {
      case 'messaging':
        !social[type]
          ? setDays(state => state + 6)
          : setDays(state => state - 6);
        break;
      case 'forums':
        !generated[type]
          ? setDays(state => state + 5)
          : setDays(state => state - 5);
        break;
      case 'sharing':
        !generated[type]
          ? setDays(state => state + 2)
          : setDays(state => state - 2);
        break;
    }
  };

  const handleCommerce = type => {
    setEcommerce(state => {
      return { ...state, [type]: !state[type] };
    });

    switch (type) {
      case 'subscription':
        !ecommerce[type]
          ? setDays(state => state + 7)
          : setDays(state => state - 7);
        break;
      case 'cart':
        !ecommerce[type]
          ? setDays(state => state + 5)
          : setDays(state => state - 5);
        break;
      case 'management':
        !ecommerce[type]
          ? setDays(state => state + 4)
          : setDays(state => state - 4);
        break;
    }
  };

  const handleManagement = type => {
    setManagement(state => {
      return { ...state, [type]: !state[type] };
    });

    switch (type) {
      case 'cms':
        !management[type]
          ? setDays(state => state + 6)
          : setDays(state => state - 6);
        break;
      case 'analytics':
        !management[type]
          ? setDays(state => state + 4)
          : setDays(state => state - 4);
        break;
      case 'multilingual':
        !management[type]
          ? setDays(state => state + 4)
          : setDays(state => state - 4);
        break;
    }
  };

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
            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>4-5 key feature pages</h3>
              </div>
            }>
            <button
              disabled={false}
              ref={smallRef}
              onClick={handleSize.bind(this, 'small')}
              className={`${styles.button} ${
                size.small && styles.buttonActive
              }`}
            >
              Small
            </button>
            
            </Tooltip>
            
            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>6-9 feature pages</h3>
              </div>
            }>
              
              <button
              disabled={false}
              ref={mediumRef}
              onClick={handleSize.bind(this, 'medium')}
              className={`${styles.button} ${
                size.medium && styles.buttonActive
              }`}
            >
              Medium
            </button>
             
            
            </Tooltip>
            
            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>10-15 key feature pages</h3>
              </div>
            }>
              
              <button
              disabled={false}
              ref={largeRef}
              onClick={handleSize.bind(this, 'large')}
              className={`${styles.button} ${
                size.large && styles.buttonActive
              }`}
            >
              Large
            </button>
              
            </Tooltip>
            
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
            <Tooltip title={
              <div className={styles.tooltip}> 
                <h3>Minimum viable product - very raw</h3>
              </div>
            }>
              
              <button
              ref={minimumRef}
              onClick={handleRefinement.bind(this, 'minimum')}
              className={`${styles.button} ${
                refinement.minimum && styles.buttonActive
              }`}
            >
              Minimum
            </button>
              
            </Tooltip>
            

            <Tooltip title={
              <div className={styles.tooltip}>
                  <h3>Quite basic, but pleasing eye</h3>
              </div>
            }>
              
              <button
              ref={basicRef}
              onClick={handleRefinement.bind(this, 'basic')}
              className={`${styles.button} ${
                refinement.basic && styles.buttonActive
              }`}
            >
              Basic
            </button>
              
            </Tooltip>
            

            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>Professional UI design with animations</h3>
              </div>
            }>
              
              <button
              ref={polishedRef}
              onClick={handleRefinement.bind(this, 'polished')}
              className={`${styles.button} ${
                refinement.polished && styles.buttonActive
              }`}
            >
              Polished
            </button>
              
            </Tooltip>
            
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
            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>Email/Password Sign Up</h3>
              </div>
            }>
              <button
              onClick={handleUsers.bind(this, 'classic')}
              className={`${styles.button} ${
                users.classic && styles.buttonActive
              }`}
            >
              Classic Signup
            </button>
            </Tooltip>
            

            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>Facebook/Github/Twitter etc. Sign Up</h3>
              </div>
            }>
              <button
              onClick={handleUsers.bind(this, 'oauth')}
              className={`${styles.button} ${
                users.oauth && styles.buttonActive
              }`}
            >
              OAuth Signup
            </button>
            </Tooltip>
            

            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>Account based signups each with their own administrators and users</h3>
              </div>
            }>
              <button
              onClick={handleUsers.bind(this, 'multitenant')}
              className={`${styles.button} ${
                users.multitenant && styles.buttonActive
              }`}
            >
              Multi-tenant Accounts
            </button>
            </Tooltip>
            
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
            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>Dashboard is the first thing user sees when logged in and would summarize data</h3>
              </div>
            }>
              <button
              onClick={handleGenerated.bind(this, 'dashboard')}
              className={`${styles.button} ${
                generated.dashboard && styles.buttonActive
              }`}
            >
              Dashboard
            </button>
            </Tooltip>
            

            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>Users would upload file content</h3>
              </div>
            }>
<button
              onClick={handleGenerated.bind(this, 'upload')}
              className={`${styles.button} ${
                generated.upload && styles.buttonActive
              }`}
            >
              File Uploading
            </button>
            </Tooltip>
            

            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>Users would be able to manage and publish their profiles to other users</h3>
              </div>
            }>
<button
              onClick={handleGenerated.bind(this, 'profiles')}
              className={`${styles.button} ${
                generated.profiles && styles.buttonActive
              }`}
            >
              User Profiles
            </button>
            </Tooltip>
            

            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>Users might receive regular automated emails from the app to drive engagement</h3>
              </div>
            }>
              <button
              onClick={handleGenerated.bind(this, 'emails')}
              className={`${styles.button} ${
                generated.emails && styles.buttonActive
              }`}
            >
              Automated Emails
            </button>
            </Tooltip>
            

            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>Typical use case would be restaurant reviews or customer satisfaction ratings</h3>
              </div>
            }>
              <button
              onClick={handleGenerated.bind(this, 'ratings')}
              className={`${styles.button} ${
                generated.ratings && styles.buttonActive
              }`}
            >
              Ratings
            </button>
            </Tooltip>
            
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
            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>Allowing users to send messages to other account users</h3>
              </div>
            }>
              <button
              onClick={handleSocial.bind(this, 'messaging')}
              className={`${styles.button} ${
                social.messaging && styles.buttonActive
              }`}
            >
              Messaging
            </button>
            </Tooltip>
            

            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>Classic forum functionality or simple commenting function</h3>
              </div>
            }>
<button
              onClick={handleSocial.bind(this, 'forums')}
              className={`${styles.button} ${
                social.forums && styles.buttonActive
              }`}
            >
              Forums
            </button>
            </Tooltip>
            

            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>Ability to share pieces of information in a controlled way on social media accounts</h3>
              </div>
            }>
              <button
              onClick={handleSocial.bind(this, 'sharing')}
              className={`${styles.button} ${
                social.sharing && styles.buttonActive
              }`}
            >
              Social Sharing
            </button>
            </Tooltip>
            
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

<Tooltip title={
              <div className={styles.tooltip}>
                <h3>Your app will have revenue model where customers will pay monthly/quarterly/yearly</h3>
              </div>
            }>
              <button
              onClick={handleCommerce.bind(this, 'subscription')}
              className={`${styles.button} ${
                ecommerce.subscription && styles.buttonActive
              }`}
            >
              Subscription
            </button>
            </Tooltip>
            

            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>Users will be able to browse products and add them to the cart</h3>
              </div>
            }>
              <button
              onClick={handleCommerce.bind(this, 'cart')}
              className={`${styles.button} ${
                ecommerce.cart && styles.buttonActive
              }`}
            >
              Shopping Cart
            </button>
            </Tooltip>
            

            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>Ability to manage date, e.g. product listings, availabilities of products or other data</h3>
              </div>
            }>
              <button
              onClick={handleCommerce.bind(this, 'management')}
              className={`${styles.button} ${
                ecommerce.management && styles.buttonActive
              }`}
            >
              Product Management
            </button>
            </Tooltip>
            
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

<Tooltip title={
              <div className={styles.tooltip}>
                <h3>Content management system would allow edititing of significant parts of the static content without developer intervention</h3>
              </div>
            }>
<button
              onClick={handleManagement.bind(this, 'cms')}
              className={`${styles.button} ${
                management.cms && styles.buttonActive
              }`}
            >
              CMS Integration
            </button>
            </Tooltip>
            

            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>Find out where users come from and how they use your app</h3>
              </div>
            }>
 <button
              onClick={handleManagement.bind(this, 'analytics')}
              className={`${styles.button} ${
                management.analytics && styles.buttonActive
              }`}
            >
              Usage Analytics
            </button>
            </Tooltip>
           

            <Tooltip title={
              <div className={styles.tooltip}>
                <h3>Get your app in multiple languages</h3>
              </div>
            }>
<button
              onClick={handleManagement.bind(this, 'multilingual')}
              className={`${styles.button} ${
                management.multilingual && styles.buttonActive
              }`}
            >
              Multilingual Support
            </button>
            </Tooltip>
            
          </Stack>
        </AccordionDetails>
      </Accordion>

      <div className={styles.estimation}>Total Cost: ${total}</div>
      <div className={styles.completion}>Completion in: {days} days</div>
    </div>
  );
}
