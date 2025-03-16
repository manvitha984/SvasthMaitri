import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import { auth, database} from '../firebase/firebase';

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
}));

const Profile = () => {
  const classes = useStyles();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userRef = database.ref(`users/${user.uid}`);
          const snapshot = await userRef.once('value');
          if (snapshot.exists()) {
            setUserData(snapshot.val());
          } else {
            setError('User data not found.');
          }
        } catch (error) {
          setError(error.message);
        }
      } else {
        setError('User not authenticated.');
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <Typography variant="body2" color="error">{error}</Typography>;
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {userData ? (
          <>
            <Typography variant="h4" align="center" gutterBottom>
              Profile
            </Typography>
            <Typography variant="body1">Username: {userData.username}</Typography>
            <Typography variant="body1">Email: {userData.email}</Typography>
            <Typography variant="body1">Phone Number: {userData.phoneNumber}</Typography>
          </>
        ) : (
          <Typography variant="body1" align="center">Loading...</Typography>
        )}
      </Paper>
    </div>
  );
};

export default Profile;
