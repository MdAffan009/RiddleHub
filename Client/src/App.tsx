import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Box, Grid, GridItem } from '@chakra-ui/react';

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
      <Grid
        templateAreas={`"nav" "main"`}
        templateColumns={'1fr'}
      >

        <GridItem area="nav" marginTop={4}>

          <Navbar />

        </GridItem>

      </Grid>
    </>

  );
}

export default App;
