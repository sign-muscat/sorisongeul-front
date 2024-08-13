import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Text,
    Heading,
    SimpleGrid,
    Flex,
    VStack,
    HStack,
    Container,
    Center,
    Stack,
    Divider,
    TableCaption,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    Tfoot,
    TableContainer,
    Table, Image, Checkbox
} from "@chakra-ui/react";
import {CheckCircleIcon, CheckIcon} from "@chakra-ui/icons";
import {Outlet} from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import IonIcon from "@reacticons/ionicons";

function PricingPage() {
    return (
        <>
            <Box
                bgImage="url('/images/pricing-bg.jpg')"
                bgSize="cover"
                bgPos="center"
                bgRepeat="no-repeat"
                pt={300}
            >
                <Box
                    bgSize="cover"
                    bgPos="center"
                    bgRepeat="no-repeat"
                    bgGradient="linear(to-b, rgba(255,255,255,0) 0%, white 60%)"
                    textAlign='center'
                    pt={150}
                    pb={75}
                >
                    <Heading fontSize="42px" color="gray.700" fontWeight={700}>
                        합리적인 요금으로<br/>모든 기능을 즐기세요.
                    </Heading>
                </Box>
            </Box>

            <Container maxW='xl' p={0}>
                <HStack spacing={4} justify="center" w="100%">
                    <Card w="50%" h="350px" p='35px'>
                        <CardHeader p='unset' h='95px'>
                            <Text fontWeight={600}>무료</Text>
                            <Text fontSize="32px" fontWeight={700}>￦0</Text>
                        </CardHeader>
                        <CardBody p='unset'>
                            <Stack spacing='1'>
                                <Text><CheckIcon color="red.400" mb={1} mr={1}/> 랭킹 집계</Text>
                                <Text><CheckIcon color="red.400" mb={1} mr={1}/> 맞춰라! 수수께끼 플레이</Text>
                                <Text><CheckIcon color="red.400" mb={1} mr={1}/> 도전! 소리 탐정 맛보기</Text>
                                <Text><CheckIcon color="red.400" mb={1} mr={1}/> 너의 목소리가 보여 맛보기</Text>
                            </Stack>
                        </CardBody>
                        <CardFooter p='unset'>
                            <Button bg="red.100" borderRadius='full' w='100%'>무료로 시작하기</Button>
                        </CardFooter>
                    </Card>
                    <Center w="50%" h="350px"
                        borderRadius='8px'
                        border='2px'
                        borderColor='transparent'
                        bg='linear-gradient(270deg, #9AE6B4 0%, #90CDF4 100%) padding-box,
                            linear-gradient(270deg, #9AE6B4 0%, #90CDF4 100%) border-box'
                    >
                        <Card w="100%" h="100%" p='35px'>
                            <CardHeader p='unset'  h='95px'>
                                <HStack>
                                    <Box color='yellow.400'>
                                        <IonIcon name={"diamond"}/>
                                    </Box>
                                    <Text fontWeight={600}>Pro</Text>
                                </HStack>
                                <HStack align='baseline'>
                                    <Text fontSize="32px" fontWeight={700}>￦2,200</Text>
                                    <Text fontWeight={600}>/월</Text>
                                </HStack>
                            </CardHeader>
                            <CardBody p='unset'>
                                <Stack spacing='1'>
                                    <Text><CheckIcon color="teal.400" mb={1} mr={1}/> 무제한 게임 플레이</Text>
                                    <Text><CheckIcon color="teal.400" mb={1} mr={1}/> 게임 내 AI 힌트 제공</Text>
                                </Stack>
                            </CardBody>
                            <CardFooter p='unset'>
                                <Button variant='gradient' borderRadius='full' w='100%'>플랜 시작하기</Button>
                            </CardFooter>
                        </Card>
                    </Center>
                </HStack>
                <Box mt={5}>
                    <Text fontSize="sm" color="gray.500">
                        * VAT가 포함된 가격입니다. <br />
                        * 수익금의 10%는 장애인 단체에 기부됩니다.
                    </Text>
                </Box>

            </Container>
            <Divider my={20}/>

            <Container maxW='xl' p={0}>
                <Heading textAlign='center' fontSize='2xl'>요금제 비교</Heading>

                <TableContainer my={20}>
                    <Table variant='simple' >
                        <Thead>
                            <Tr>
                                <Th/>
                                <Th>무료</Th>
                                <Th>Pro</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Th>랭킹 집계</Th>
                                <Td><CheckCircleIcon color='teal.400'/></Td>
                                <Td><CheckCircleIcon color='teal.400'/></Td>
                            </Tr>
                            <Tr>
                                <Th>맞혀라! 수수께끼</Th>
                                <Td>기초 단어 플레이 가능</Td>
                                <Td>무제한 플레이</Td>
                            </Tr>
                            <Tr>
                                <Th>도전! 소리 탐정</Th>
                                <Td>맛보기 게임 플레이 가능</Td>
                                <Td>데일리 문제 플레이 가능</Td>
                            </Tr>
                            <Tr>
                                <Th>너의 목소리가 보여</Th>
                                <Td>맛보기 게임 플레이 가능</Td>
                                <Td>데일리 문제 플레이 가능</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>

                <Box borderRadius='xl' bg='linear-gradient(90deg, #9AE6B4 0%, #90CDF4 100%)'
                     px={10} py={6} position='relative'
                >
                    <HStack>
                        <Box>
                            <Text color='white' fontWeight={700} fontSize='18px' mb={1}>
                                기업 제휴를 검토중이신가요?
                            </Text>
                            <Button colorScheme='whiteAlpha' color='white' bg='none'
                                    border='1px solid white' borderRadius='full' size='sm'
                            >
                                문의 남기기
                            </Button>
                        </Box>
                        <Image src='/images/highfive.png' boxSize='100px' position='absolute' right={20} bottom={0}/>
                    </HStack>

                </Box>
            </Container>

        </>

    );
}

export default PricingPage;