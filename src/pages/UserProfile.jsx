import React from 'react';
import { useLocation } from 'react-router-dom';

const UserProfile = () => {
  let { state } = useLocation();
  let userData = state.data;
  console.log(userData);
  return <div>UserProfile</div>;
};

export default UserProfile;
