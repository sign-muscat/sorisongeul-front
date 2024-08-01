import React from 'react';
import { Heading, Center, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'

function Header() {
    return (
        <Center w="100vw" h={130}>
            <Heading mt={8} fontWeight={900}>
                <ChakraLink as={ReactRouterLink} to='/'>
                    소리손순
                </ChakraLink>
            </Heading>
        </Center>
    )
}

export default Header;