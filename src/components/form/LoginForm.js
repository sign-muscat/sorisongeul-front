import {
    Button,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    FormErrorMessage,
    Flex,
    InputLeftElement, InputGroup, Image, Link as ChakraLink
} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";
import {Envelope, Lock} from "react-bootstrap-icons";
import {Link as ReactRouterLink} from "react-router-dom";

function LoginForm (){
    return (
        <>
            <Formik
                initialValues={{ id: '', password: '' }} // 초기값 설정
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2)); // 폼 제출 후 값 확인
                        actions.setSubmitting(false); // 서브미션 상태 해제
                    }, 1000);
                }}
            >
                {(props) => (
                    <Flex w="100%" maxW="350px">
                        <Form style={{ width: '100%' }}>
                            <Heading textAlign="center" color="#90CDF4" mt="55px">로그인</Heading>
                            <Text textAlign="center" fontSize="12px" color="#828282" mt={2}>소리손글의 다양한 기능을 사용하고 싶다면 로그인해주세요.</Text>

                            <Button
                                mt={9}
                                w="100%"
                                variant='outline'
                                background="white"
                                overflow="hidden"
                                fontWeight="normal"
                                fontSize="12px"
                                color="#333"
                                isLoading={props.isSubmitting}
                                type="submit"
                            >
                                <Image src="/images/icon_google.png" mr={2}/> Google 로그인
                            </Button>

                            <Image src="/images/img_line_or.png" mt={10} mb={8}/>

                            <Field name="id">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.id && form.touched.id}>
                                        <FormLabel fontSize="12px" color="#333">아이디</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents="none">
                                                <Envelope color="#BDBDBD" />
                                            </InputLeftElement>
                                            <Input {...field} type="text" fontSize="12px" placeholder="아이디를 입력하세요" />
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.id}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Field name="password">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.password && form.touched.password} mt={5}>
                                        <FormLabel fontSize="12px" color="#333" display="flex" justifyContent="space-between" alignItems="flex-end">비밀번호<ChakraLink fontSize="12px" color="#90CDF4" as={ReactRouterLink} to='/verify/password'> 비밀번호를 잊으셨나요?</ChakraLink></FormLabel>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents="none">
                                                <Lock color="#BDBDBD" />
                                            </InputLeftElement>
                                            <Input {...field} type="password" fontSize="12px" placeholder="비밀번호를 입력하세요" />
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Button
                                mt={9}
                                w="100%"
                                variant='gradient'
                                color="white"
                                isLoading={props.isSubmitting}
                                type="submit"
                            >
                                Login
                            </Button>

                            <Text textAlign="center" fontSize="12px" color="#4F4F4F" mt={5}>아직 계정이 없으신가요? <ChakraLink color="#90CDF4" as={ReactRouterLink} to='/signup'> 회원가입.</ChakraLink></Text>
                        </Form>
                    </Flex>
                )}
            </Formik>
        </>
    );
}

export default LoginForm;