import { Button, HStack, SimpleGrid, Text } from "@chakra-ui/react";

const Navbar = () => {

        const pages = ["Home", "Leaderboard", "About", "API"];

    return (
        <SimpleGrid>

            <HStack justifyContent="center" spaceX="90px">

                <Text fontSize={32}>RiddleHub</Text>

                {pages.map(page => <Button variant="ghost" key={page}><Text fontSize={20}>{page}</Text></Button>)}

            </HStack>
        </SimpleGrid>
    );
};

export default Navbar;
