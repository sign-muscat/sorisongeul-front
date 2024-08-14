import {
    Avatar, Text, Box, Card, Flex, Heading, useDisclosure, Button, VStack
} from "@chakra-ui/react";
import {SmallCloseIcon} from "@chakra-ui/icons";
import {useRef} from "react";

function FriendApplyCard({apply}) {

    return (
        apply &&
            <>
                <Card maxW='xs'>
                    <Flex spacing='4'>
                        <Flex p={4} flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Avatar name={apply.nickname} src={apply.profileImage} />

                            <Box>
                                <Heading size='sm'>{apply.nickname}</Heading>
                                <Text fontSize='12px'>{apply.applyDate}</Text>
                            </Box>
                            <VStack>
                                <Button colorScheme='mint' size='xs' borderRadius='full'>수락</Button>
                                <Button colorScheme='gray' size='xs' borderRadius='full'>거절</Button>

                            </VStack>
                        </Flex>

                    </Flex>
                </Card>
            </>

    );
}

export default FriendApplyCard;