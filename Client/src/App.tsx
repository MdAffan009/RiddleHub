import Navbar from './components/Navbar';
import { Grid, GridItem, Separator } from '@chakra-ui/react';

function App() {


  return (

    <>

        <Grid
          templateAreas={`"nav" "main"`}
          templateColumns={'1fr'}
        >

          <GridItem area="nav" marginTop={4}>

            <Navbar />

            <Separator background={"gray.900"}/>

          </GridItem>


        </Grid>
    </>

  );
}

export default App;
