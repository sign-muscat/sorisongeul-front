import { Badge, Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ProfileSection() {
    const navigate = useNavigate();

    const handleDeleteClick = () => {
        navigate("/users/delete");
    };

    const handleEditClick = () => {
        navigate("/users/edit");
    };

    return (
        <Box border="1px solid" borderColor="gray.300" p={5} borderRadius="md" boxShadow="sm">
            <HStack spacing={5} align="center">
                <Box position="relative">
                    <Image
                        boxSize="100px"
                        borderRadius="full"
                        src="/path/to/avatar.png"
                        alt="Profile Picture"
                        border="2px solid"
                        borderColor="gray.200"
                    />
                    <Button
                        size="xs"
                        position="absolute"
                        bottom="-5px"
                        right="-5px"
                        bg="gray.200"
                        color="gray.600"
                        fontSize="xs"
                        _hover={{ bg: "gray.300" }}
                        onClick={handleEditClick}
                    >
                        회원정보 수정
                    </Button>
                </Box>

                <VStack align="flex-start" spacing={1}>
                    <HStack spacing={2} align="center">
                        <Badge colorScheme="orange" px={2} py={1} borderRadius="md">
                            레벨
                        </Badge>
                        <HStack spacing={2} align="center">
                            <Badge colorScheme="blue" px={2} py={1} borderRadius="md">
                                🔑 인증 완료
                            </Badge>
                            <Button
                                size="sm" // 크기를 조정합니다
                                colorScheme="red" // 빨간색으로 설정
                                variant="solid" // 배경색을 채우기
                                onClick={handleDeleteClick}
                                px={2} // 패딩을 조정하여 크기 맞추기
                                py={1.5} // 패딩을 조정하여 크기 맞추기
                                fontSize="xs" // 폰트 사이즈 조정
                                fontWeight="normal" // 텍스트의 굵기를 일반으로 설정
                                borderRadius="md" // 모서리 둥글게
                                minWidth="auto" // 버튼 너비 조정
                                height="auto" // 버튼 높이 조정
                            >
                                회원탈퇴
                            </Button>
                        </HStack>
                    </HStack>
                    <Text fontWeight="bold" fontSize="md">
                        아이디:{" "}
                        <Text as="span" color="gray.700">
                            cococoding_123
                        </Text>
                    </Text>
                    <Text fontWeight="bold" fontSize="md">
                        닉네임:{" "}
                        <Text as="span" color="gray.700">
                            코코코딩
                        </Text>
                    </Text>
                    <Text fontWeight="bold" fontSize="md">
                        이메일:{" "}
                        <Text as="span" color="gray.700">
                            email@gmail.com
                        </Text>
                    </Text>
                </VStack>
            </HStack>
        </Box>
    );
}

export default ProfileSection;
