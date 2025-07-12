import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Box } from '@chakra-ui/react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('/api/hello') // Proxy will redirect this to Express
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage('Error connecting to server.'));
  }, []);

  return (

    <>
      <Box margin={10}>
      <Navbar />
      </Box>
    </>

  );
}

export default App;
