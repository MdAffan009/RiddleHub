import { Button, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

interface Pages {
    onSelect: (page: string) => void;
}

const Navbar = ({onSelect} : Pages) => {

        const pages = ["Home", "Login", "API"];

    return (
        <SimpleGrid>

            <HStack justifyContent="center" spaceX="90px">

                <Text fontSize={32}>RiddleHub</Text>

                {pages.map(page => <Button variant="ghost" key={page} onClick={() => onSelect(page)}><Text fontSize={20}>{page}</Text></Button>)}

                <ColorModeSwitch />

            </HStack>
        </SimpleGrid>
    );
};

export default Navbar;
