import {Box, Card, Text, Link as ChakraLink, Image} from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'

function GameCard({game}) {
    return (
        <ChakraLink as={ReactRouterLink} to={game.url}>
            <Card w={175} h={270} p={6}>
                <Box>
                    <Image src={game.img}/>
                </Box>
                <Text fontWeight={700} fontSize='20px'>{game.title}</Text>
                <Text>{game.desc}</Text>
            </Card>
        </ChakraLink>
    );
}

export default GameCard;