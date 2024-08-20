import {
    Button,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Flex,
    InputLeftElement, InputGroup, InputRightAddon, useToast
} from "@chakra-ui/react";
import {Envelope, Key} from "react-bootstrap-icons";
import {useState} from "react";
import {callCheckVerificationCodeAPI, callSendVerificationCodeAPI, callResetPasswordAPI} from "../../apis/AuthAPICalls";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function FindPasswordForm({onSuccess}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [verifyToken, setVerifyToken] = useState('');
    const [verifiedEmail, setVerifiedEmail] = useState(false);
    const [errors, setErrors] = useState({});
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPasswordInput, setShowPasswordInput] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = new RegExp(`[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?`);
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!validateEmail(e.target.value)) {
            setErrors({ ...errors, email: '유효하지 않은 이메일입니다.' });
        } else {
            setErrors({ ...errors, email: '' });
        }
    };

    const handleCodeChange = (e) => {
        setCode(e.target.value);
        setErrors({ ...errors, code: '' });
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const sendVerificationCode = async () => {
        if (validateEmail(email)) {
            const response = await dispatch(callSendVerificationCodeAPI(email));
            if (response.success) {
                toast({
                    title: "인증번호 전송 완료",
                    description: response.message,
                    status: "info",
                    duration: 5000,
                    isClosable: true,
                });
                setVerifyToken(response.result);
                setVerifiedEmail(false);
                setShowPasswordInput(false);
            } else {
                toast({
                    title: "오류 발생",
                    description: response.message,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        } else {
            toast({
                title: "유효하지 않은 이메일",
                description: "올바른 이메일을 입력해주세요.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const checkVerificationCode = async () => {
        const response = await dispatch(callCheckVerificationCodeAPI(verifyToken, code, email));
        if (response.success) {
            toast({
                title: "이메일 인증 성공",
                description: "이메일 인증이 완료되었습니다.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            setVerifiedEmail(true);
            setShowPasswordInput(true);
        } else {
            toast({
                title: "인증 실패",
                description: "인증 코드가 올바르지 않습니다.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            setErrors({ ...errors, code: "인증 코드가 올바르지 않습니다." });
        }
    };

    const resetPassword = async () => {
        if (newPassword !== confirmPassword) {
            toast({
                title: "비밀번호 불일치",
                description: "새 비밀번호와 확인 비밀번호가 일치하지 않습니다.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        const response = await dispatch(callResetPasswordAPI(email, { newPassword, confirmPassword }));
        if (response.success) {
            toast({
                title: "비밀번호 재설정 완료",
                description: "비밀번호가 성공적으로 재설정되었습니다.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            onSuccess();
            navigate("/");
        } else {
            toast({
                title: "오류 발생",
                description: response.message,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Flex w="100%" maxW="350px">
            <form style={{ width: '100%' }}>
                <Heading textAlign="center" color="#90CDF4" mt="55px">비밀번호 찾기</Heading>
                <Text textAlign="center" fontSize="12px" color="#828282" mt={2}>아이디와 이메일을 입력해주세요.</Text>

                {!showPasswordInput && (
                    <>
                        <FormControl mt={5} isInvalid={errors.email}>
                            <FormLabel fontSize="12px" color="#333">이메일</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none">
                                    <Envelope color="#BDBDBD" />
                                </InputLeftElement>
                                <Input type="email" fontSize="12px" placeholder="이메일을 입력하세요" value={email}
                                       onChange={handleEmailChange}/>
                                <InputRightAddon cursor="pointer" fontSize="12px" onClick={sendVerificationCode}>인증번호 전송</InputRightAddon>
                            </InputGroup>
                            {errors.email && <Text color="red.500" fontSize="12px">{errors.email}</Text>}
                        </FormControl>

                        <FormControl mt={2} isInvalid={errors.code}>
                            <FormLabel fontSize="12px" color="#333">인증번호</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none">
                                    <Key color="#BDBDBD" />
                                </InputLeftElement>
                                <Input type="text" fontSize="12px" placeholder="인증코드를 입력하세요" value={code}
                                       onChange={handleCodeChange} maxLength={6}/>
                                <InputRightAddon cursor="pointer" fontSize="12px" onClick={checkVerificationCode}>인증번호 확인</InputRightAddon>
                            </InputGroup>
                            {errors.code && <Text color="red.500" fontSize="12px">{errors.code}</Text>}
                        </FormControl>
                    </>
                )}

                {showPasswordInput && (
                    <>
                        <FormControl mt={5}>
                            <FormLabel fontSize="12px" color="#333">새 비밀번호</FormLabel>
                            <InputGroup>
                                <Input type="password" fontSize="12px" placeholder="새 비밀번호를 입력하세요" value={newPassword}
                                       onChange={handleNewPasswordChange}/>
                            </InputGroup>
                        </FormControl>

                        <FormControl mt={5}>
                            <FormLabel fontSize="12px" color="#333">비밀번호 확인</FormLabel>
                            <InputGroup>
                                <Input type="password" fontSize="12px" placeholder="비밀번호를 다시 입력하세요" value={confirmPassword}
                                       onChange={handleConfirmPasswordChange}/>
                            </InputGroup>
                        </FormControl>
                    </>
                )}

                <Button
                    mt={9}
                    w="100%"
                    variant='gradient'
                    color="white"
                    isDisabled={!verifiedEmail && !showPasswordInput}
                    onClick={showPasswordInput ? resetPassword : checkVerificationCode}
                >
                    {showPasswordInput ? "비밀번호 변경" : "다음으로"}
                </Button>
            </form>
        </Flex>
    );
}

export default FindPasswordForm;

