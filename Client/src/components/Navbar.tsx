import { Button, SimpleGrid, Tabs, Text } from "@chakra-ui/react";


const Navbar = () => {
    return (
        <SimpleGrid>


            <Tabs.Root variant="plain">
                <Tabs.List paddingX={4} spaceX={20}>

                    <Text fontSize={30}>RiddleHub</Text>

                    <Tabs.Trigger value="Home">
                        <Button variant="ghost" fontSize={20}>Home</Button>
                    </Tabs.Trigger>

                    <Tabs.Trigger value="Sign In">
                        <Button variant="ghost" fontSize={20}>Sign In</Button>
                    </Tabs.Trigger>

                    <Tabs.Trigger value="Log In">
                        <Button variant="ghost" fontSize={20}>Log In</Button>
                    </Tabs.Trigger>

                    <Tabs.Trigger value="API">
                        <Button variant="ghost" fontSize={20}>API</Button>
                    </Tabs.Trigger>

                </Tabs.List>

                <Tabs.Content value="Home">This is Home</Tabs.Content>
            </Tabs.Root>
        </SimpleGrid>
    )
}

export default Navbar;