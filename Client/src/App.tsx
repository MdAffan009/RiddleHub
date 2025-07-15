import { useState } from 'react';
import Navbar from './components/Navbar';
import { Grid, GridItem, Separator } from '@chakra-ui/react';
import Home from './components/Home';
import Login from './components/Login';
import API from './components/API';
import Footer from './components/Footer';

function App() {


  const [page, setPage] = useState<String>('Home');


  return (

    <>

      <Grid
        templateAreas={`"nav" "main" "footer"`}
        templateColumns={'1fr'}
      >

        <GridItem area="nav" marginTop={4}>

          <Navbar onSelect={(page) => setPage(page)} />

          <Separator background={"gray.900"} />

        </GridItem>

        <GridItem area="main" marginTop={10}>
          {page === "Home" && <Home />}
          {page === "Login" && <Login />}
          {page === "API" && <API/>}
        </GridItem>
        
        <GridItem area="footer" marginTop={8}>
          <Footer />
        </GridItem>

      </Grid>
    </>

  );
}

export default App;
