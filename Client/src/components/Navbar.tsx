import { Box, Button, HStack, SimpleGrid, Text } from "@chakra-ui/react";

const Navbar = () => {
    return (
        <SimpleGrid>

            <Box>
                <HStack justifyContent="center" spaceX="110px">

                    <Text fontSize={32}>RiddleHub</Text>

                    <Button variant="ghost"><Text fontSize={20}>Home</Text></Button>
                    <Button variant="ghost"><Text fontSize={20}>Sign In</Text></Button>
                    <Button variant="ghost"><Text fontSize={20}>Log In</Text></Button>
                    <Button variant="ghost"><Text fontSize={20}>API</Text></Button>


                </HStack>
            </Box>
        </SimpleGrid>
    )
}

export default Navbar;