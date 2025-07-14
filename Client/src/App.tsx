import { useState } from 'react';
import Navbar from './components/Navbar';
import { Grid, GridItem, Separator } from '@chakra-ui/react';
import Home from './components/Home';
import Login from './components/Login';
import API from './components/API';

function App() {


  const [page, setPage] = useState<String>('Home');


  return (

    <>

      <Grid
        templateAreas={`"nav" "main"`}
        templateColumns={'1fr'}
      >

        <GridItem area="nav" marginTop={4}>

          <Navbar onSelect={(page) => setPage(page)} />

          <Separator background={"gray.900"} />

        </GridItem>

        <GridItem area="main" marginTop={5}>
          {page === "Home" && <Home />}
          {page === "Login" && <Login />}
          {page === "API" && <API/>}
        </GridItem>
        
      </Grid>
    </>

  );
}

export default App;
