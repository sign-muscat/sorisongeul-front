import {Text, Image, Flex, Box} from "@chakra-ui/react";


function Sidebar () {

    return(
        <Box h="100vh" position="sticky" ml="30px" top="calc(50% - 140px)">
            <Flex minW="70px" fontSize={12} flexDirection="column" bg="white" borderRadius={8} boxShadow="0 0 10px #e0e0e0">
                <Flex bg="#FEB2B2" justifyContent="center" borderRadius="8px 8px 0 0" py={1}>
                    <Text fontSize={14} fontWeight={500}>Quick</Text>
                </Flex>
                <Flex p={4} flexDirection="column" alignItems="center">
                    <Image src="images/icon_sidebar_hand.png"/>
                    <Text>맞.수.수</Text>
                </Flex>
                <Flex p={4} flexDirection="column" alignItems="center">
                    <Image src="images/icon_sidebar_lip.png"/>
                    <Text>너.목.보</Text>
                </Flex>
                <Flex p={4} flexDirection="column" alignItems="center">
                    <Image src="images/icon_sidebar_sound.png"/>
                    <Text>도.소.탐</Text>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Sidebar;