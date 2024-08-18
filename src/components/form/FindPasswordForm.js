import {
    Button,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    FormErrorMessage,
    Flex,
    InputLeftElement, InputGroup
} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";
import {Envelope, Person} from "react-bootstrap-icons";
import {useState} from "react";

function FindPasswordForm (){

    //const dispatch = useDispatch();
    const [ form, setForm ] = useState({});
    const [ formChanged, setFormChanged ] = useState(false);

    const onChangeHandler = e => {
        setFormChanged(true);
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

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
                            <Heading textAlign="center" color="#90CDF4" mt="55px">비밀번호 찾기</Heading>
                            <Text textAlign="center" fontSize="12px" color="#828282" mt={2}>아이디와 이메일을 입력해주세요.</Text>

                            <Field name="findId">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.findId && form.touched.findId}>
                                        <FormLabel fontSize="12px" color="#333">아이디</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents="none">
                                                <Person color="#BDBDBD"/>
                                            </InputLeftElement>
                                            <Input {...field} type="text" fontSize="12px" placeholder="아이디를 입력하세요"
                                                   onChange={onChangeHandler} />
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.findId}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Field name="email">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.email && form.touched.email} mt={5}>
                                        <FormLabel fontSize="12px" color="#333" display="flex" justifyContent="space-between" alignItems="flex-end">이메일</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents="none">
                                                <Envelope color="#BDBDBD" />
                                            </InputLeftElement>
                                            <Input {...field} type="email" fontSize="12px" placeholder="이메일을 입력하세요"
                                                   onChange={onChangeHandler}/>
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Button
                                mt={9}
                                w="100%"
                                variant='gradient'
                                color="white"
                                isLoading={props.isSubmitting}
                            >
                                비밀번호 찾기
                            </Button>

                        </Form>
                    </Flex>
                )}
            </Formik>
        </>
    );
}

export default FindPasswordForm;