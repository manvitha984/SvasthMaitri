import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button, Typography, Paper } from '@material-ui/core';
import { auth } from '../firebase/firebase';
import { Navigate } from 'react-router-dom'; // Import Navigate from react-router-dom

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  paper: {
    padding: theme.spacing(4),
    marginLeft: theme.spacing(10),
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(10),
    marginTop: theme.spacing(10),
    boxShadow: theme.shadows[3],
    backgroundColor: theme.palette.background.paper,
    maxWidth: 500,
  },
  form: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  useEffect(() => {
    // Check if user is already logged in
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLoginClick = async () => {
    // Validate input fields
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      // Log in the user with email and password
      await auth.signInWithEmailAndPassword(email, password);
      console.log('User logged in:', email);
      setIsLoggedIn(true); // Set login state to true
      // Clear input fields and error message
      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  // Redirect to AftrBody if user is already logged in
  if (isLoggedIn) {
    return <Navigate to="/aftrbody" />;
  }

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <Paper className={classes.paper}>
            <form className={classes.form} noValidate autoComplete="off">
              <Typography variant="h4" align="center" gutterBottom>
                Login
              </Typography>
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <Typography variant="body2" color="error" align="center">
                  {error}
                </Typography>
              )}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className={classes.button}
                onClick={handleLoginClick} // Call handleLoginClick function on button click
              >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
