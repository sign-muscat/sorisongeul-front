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
                                size="sm" 
                                colorScheme="red" 
                                variant="solid" 
                                onClick={handleDeleteClick}
                                px={2} 
                                py={1.5} 
                                fontSize="xs" 
                                fontWeight="normal" 
                                borderRadius="md" 
                                minWidth="auto" 
                                height="auto"
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
