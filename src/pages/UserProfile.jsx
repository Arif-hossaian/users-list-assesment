import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useUser from '../hooks/useUser';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Loading from '../components/Loading';
import DataNotFound from '../components/DataNotFound';

const UserProfile = () => {
  let Error = false;
  let { state } = useLocation();
  let userData = state.data;
  const { userInfo, loading } = useUser(`${userData.id}/posts`);

  if (loading) return <Loading />;
  if (userInfo.length === 0) return <DataNotFound />;

  return (
    <Box sx={{ p: 8 }}>
      <Typography variant="h4" align="center">
        User profile
      </Typography>
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Typography variant="h5">
          User Name:-{' '}
          <span style={{ color: 'green' }}>
            {userData?.firstName} {userData?.lastName}
          </span>
        </Typography>
        <Typography variant="h6">User email:- {userData?.email}</Typography>
        <Typography variant="body">
          Company Name:- {userData?.company?.name}
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {userInfo.map((user) => {
          if (user.userId === userData.id) {
            return (
              <Grid item xs={12} sm={6} md={4} key={user.id}>
                <Card sx={{ p: 3, mt: 5 }} elevation={3}>
                  <Typography variant="h5">{user?.title}</Typography>
                  <Typography variant="body">{user?.body}</Typography>
                </Card>
              </Grid>
            );
          } else {
            Error = true;
            return null;
          }
        })}
      </Grid>
      {Error && (
        <Typography align="center" sx={{ color: 'red', mt: 10 }}>
          Error occurred
        </Typography>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 5,
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" size="lg">
            Go to home page
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default UserProfile;
