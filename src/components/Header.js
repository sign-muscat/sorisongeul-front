import React from 'react';
import { Heading, Center } from "@chakra-ui/react";

function Header() {
    return (
        <Center w="100vw" h={130}>
            <Heading mt={8} fontWeight={900}>
                소리손순
            </Heading>
        </Center>
    )
}

export default Header;