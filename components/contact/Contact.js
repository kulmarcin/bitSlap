import { Typography, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import styles from '../../styles/Contact.module.css';

import Button from './button';
import Input from './input';

import db from '../../firebase'

export default function Contact() {
  const desktop = useMediaQuery('(min-width: 768px)');

  const [submitted, setSubmitted] = useState(false);
  const [describe, setDescribe] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [isLoading,setIsLoading] = useState(false)

  const submitHandler = async e => {
    e.preventDefault();

    if (describe && name && email) {
        try {
            setIsLoading(true)
            const docRef = await addDoc(collection(db, "submissions"), {
              name: name,
              email: email,
              description: describe
            });
            setIsLoading(false)
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            setError(e)
          }


      setSubmitted(true);
    } else {
      setError('Please fill all required fields');
    }
  };

  const clickHandler = e => {
    if (error) {
      setError(false);
    }
  };

  const describeHandler = e => {
    setDescribe(e.target.value);
  };

  const nameHandler = e => {
    setName(e.target.value);
  };

  useEffect(() => {

    if(!email) {
        return
    }

    const timer = setTimeout(() => {
      if (!email.includes('@')) {
        setError('Please enter valid email');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [email]);

  const emailHandler = e => {
    if (error) setError(false);

    setEmail(e.target.value);
  };

  return (
    <div className={styles.contact}>
      <Typography variant="h4" component="h4">
        Contact
      </Typography>

      <form className={styles.form} autoComplete="off">
        <Input
          sx={{
            marginBottom: 2,
            boxShadow: '5px 5px 5px gray',
            width: desktop ? 500 : 300
          }}
          label="Name"
          variant="outlined"
          onChange={nameHandler}
          onClick={clickHandler}
        />
        <Input
          sx={{
            marginBottom: 2,
            boxShadow: '5px 5px 5px gray',
            width: desktop ? 500 : 300
          }}
          label="E-mail"
          variant="outlined"
          type="email"
          onChange={emailHandler}
          onClick={clickHandler}
        />
        <Input
          sx={{
            marginBottom: 2,
            boxShadow: '5px 5px 5px gray',
            width: desktop ? 500 : 300,
            height: 'auto'
          }}
          label="Describe your project"
          variant="outlined"
          multiline
          rows={5}
          onChange={describeHandler}
          onClick={clickHandler}
        />
        {!isLoading ? <Button type="submit" variant="outlined" onClick={submitHandler}>
          Submit
        </Button> : <div className={styles.ldsdualring}></div>}
      </form>
      {submitted && (
        <div
          style={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <h3 style={{ color: 'white', textShadow: '5px 5px 5px black' }}>
            Thank you for contacting us. We will get back to you as soon as
            possible.
          </h3>
        </div>
      )}
      {error && (
        <div
          style={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <h3 style={{ color: 'red', textShadow: '5px 5px 5px black' }}>
            {error}
          </h3>
        </div>
      )}
    </div>
  );
}
