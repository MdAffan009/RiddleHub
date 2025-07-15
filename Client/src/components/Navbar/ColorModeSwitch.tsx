import { HStack, Text, Switch } from '@chakra-ui/react';
import { useColorMode } from '../../ui/color-mode';


const ColorModeSwitch = () => {

    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <HStack>
            <Switch.Root colorPalette='green' checked={colorMode === 'dark'} onCheckedChange={toggleColorMode}>
                <Switch.HiddenInput />
                <Switch.Control />

            </Switch.Root>
            <Text whiteSpace={'nowrap'}>Dark Mode</Text>
        </HStack>
    );
};

export default ColorModeSwitch;
