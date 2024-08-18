import React from 'react';
import { Heading, Center, Link as ChakraLink, Flex, Button, Image, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom';
import {Lock, PersonCircle, PersonPlus, Unlock} from "react-bootstrap-icons";
import {isLogin} from "../utils/TokenUtils";
import {callLogoutAPI} from "../apis/AuthAPICalls";
import {useDispatch} from "react-redux";

function Header({ onOpenLoginModal }) {
    const dispatch = useDispatch();
    const  loginStatus = isLogin();

    return (
        <Center w="100vw" h={100} className="Header">
            <Flex w="100vw" maxW="800px" justifyContent="space-between" alignItems="center">
                <Heading>
                    <ChakraLink as={ReactRouterLink} to='/'>
                        <Image src="/images/logo.png" alt="소리손순 로고 이미지"/>
                    </ChakraLink>
                </Heading>
                <Flex alignItems="center" fontSize="14px" fontWeight="600">
                    <ChakraLink as={ReactRouterLink} to='/'>소리손글 소개</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to='/' ml="35px">요금제</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to='/' ml="35px">수어 찾기</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to='/' ml="35px">커뮤니티</ChakraLink>
                    <Flex ml="35px" alignItems="center">
                        {loginStatus ? (
                            <>
                                <Button height="30px" fontSize="12px" px={3} >
                                    <PersonCircle /><Text ml={1}>마이 페이지</Text>
                                </Button>
                                <Button height="30px" fontSize="12px" px={3} ml={3}  onClick={() => dispatch(callLogoutAPI())}>
                                    <ChakraLink display="flex" as={ReactRouterLink} to='/'><Lock mr={1}/><Text ml={1}>로그아웃</Text></ChakraLink>
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button height="30px" fontSize="12px" px={3} onClick={onOpenLoginModal}>
                                    <Unlock /><Text ml={1}>로그인</Text>
                                </Button>
                                <Button height="30px" fontSize="12px" px={3} ml={3}>
                                    <ChakraLink display="flex" as={ReactRouterLink} to='/'><PersonPlus mr={1}/><Text ml={1}>회원가입</Text></ChakraLink>
                                </Button>
                            </>
                        )}
                    </Flex>
                </Flex>
            </Flex>
        </Center>
    );
}

export default Header;
