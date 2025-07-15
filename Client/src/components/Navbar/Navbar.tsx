import { Button, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";

const Navbar = () => {
    const pages = [
        { name: "Home", path: "/" },
        { name: "Login", path: "/login" },
        { name: "API", path: "/API" },
    ];

    return (
        <SimpleGrid>
            <HStack justifyContent="center" spaceX={90}>
                <Text fontSize={32}>RiddleHub</Text>

                {pages.map((page) => (
                    <Button as={Link} to={page.path} {...({} as any)} variant="ghost" key={page.name}>
                        <Text fontSize={20}>{page.name}</Text>
                    </Button>
                ))}

                <ColorModeSwitch />
            </HStack>
        </SimpleGrid>
    );
};

export default Navbar;
