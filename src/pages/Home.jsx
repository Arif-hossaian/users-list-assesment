import React from 'react';
import Box from '@mui/material/Box';
import useUsers from '../hooks/useUsers';
import { Card, Grid, Typography } from '@mui/material';
import { baseURl } from '../utils/baseURL';
import { Link } from 'react-router-dom';

const Home = () => {
  const { data, loading } = useUsers(`${baseURl}/users`);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (data?.length === 0) return <p>data not found</p>;

  return (
    <Box sx={{ p: 15 }}>
      <Grid container spacing={5}>
        {data.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user._id}>
            <Link
              to={`user/${user.id}`}
              state={{ data: user }}
              style={{ textDecoration: 'none' }}
            >
              <Card sx={{ p: 3 }} elevation={3}>
                <Typography variant="h4">
                  User Name:-{' '}
                  <span style={{ color: 'green' }}>{user?.username}</span>
                </Typography>
                <Typography variant="h5">User email:- {user.email}</Typography>
                <Typography variant="body">
                  User Address:- {user.company.address.address},{' '}
                  {user.company.address.city}
                </Typography>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
