import {Box, Card, Text, Link as ChakraLink} from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'

function GameCard({game}) {
    return (
        <ChakraLink as={ReactRouterLink} to={game.url}>
            <Card w={175} h={220} p={5}>
                <Box>
                    대충 여기 이미지
                </Box>
                <Text fontWeight={700} fontSize='20px'>{game.title}</Text>
                <Text>{game.desc}</Text>
            </Card>
        </ChakraLink>
    );
}

export default GameCard;