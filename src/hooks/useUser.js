import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURl } from '../utils/baseURL';

const useUser = (id) => {
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${baseURl}/users/${id}`);
        setUserInfo(res.data.posts);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { userInfo, loading };
};

export default useUser;
