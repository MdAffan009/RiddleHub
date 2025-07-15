import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Grid, GridItem, Separator } from '@chakra-ui/react';
import Home from './components/Home';
import Login from './components/Login';
import API from './components/API';
import Footer from './components/Footer';
import SignIn from './components/SignIn';

function App() {

  return (

    <Router>

      <Grid
        templateAreas={`"nav" "main" "footer"`}
        templateColumns={'1fr'}
      >

        <GridItem area="nav" marginTop={4}>

          <Navbar />

          <Separator background={"gray.900"} />

        </GridItem>

        <GridItem area="main" marginTop={10}>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/API" element={<API />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>

        </GridItem>

        <GridItem area="footer" marginTop={8}>
          <Footer />
        </GridItem>

      </Grid>
    </Router>

  );
}

export default App;
