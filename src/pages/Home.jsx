import React from 'react';
import Box from '@mui/material/Box';
import useUsers from '../hooks/useUsers';
import { Card, Grid, Typography } from '@mui/material';
import { baseURl } from '../utils/baseURL';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import DataNotFound from '../components/DataNotFound';

const Home = () => {
  const { data, loading } = useUsers(`${baseURl}/users`);

  if (loading) {
    return <Loading />;
  }
  if (data?.length === 0) return <DataNotFound />;

  return (
    <Box sx={{ p: 8 }}>
      <Typography variant="h4" align="center">
        Display List of Users
      </Typography>
      <Grid container spacing={5} sx={{ mt: 1 }}>
        {data.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user._id}>
            <Link
              to={`user/${user.id}`}
              state={{ data: user }}
              style={{ textDecoration: 'none' }}
            >
              <Card sx={{ p: 3 }} elevation={3}>
                <Typography variant="h5">
                  User Name:-{' '}
                  <span style={{ color: 'green' }}>
                    {user?.firstName} {user.lastName}
                  </span>
                </Typography>
                <Typography variant="h6">User email:- {user.email}</Typography>
                <Typography variant="body">
                  Company Name:- {user.company.name}
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
