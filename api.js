import axios from 'axios';

  useEffect(() => {
    axios.get('/api/hello')
      .then(res => setMessage(res.data.message))
      .catch(err => console.log(err));
  }, []);
