import { Box, HStack, Switch, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import GestBookList from './GuestBookList';

function GuestBookSection({ guestBookVisible, setGuestBookVisible }) {
    const navigate = useNavigate();

    const handleTextClick = () => {
        navigate('/myPage/gestBookList'); // 클릭 시 이동할 경로
    }

    return (
        <Box
            border="1px solid"
            borderColor="gray.300"
            p={5}
            borderRadius="md"
            boxShadow="sm"
            minW="250px"
            minH="300px"
        >
            <HStack justifyContent="space-between" mb={3}>
                <Text 
                    fontWeight="bold" 
                    fontSize="lg"
                    onClick={handleTextClick} 
                    cursor="pointer" 
                >
                    ❤️ 방명록
                </Text>
                <Switch
                    colorScheme="teal"
                    isChecked={guestBookVisible}
                    onChange={() => setGuestBookVisible(!guestBookVisible)}
                />
            </HStack>
            {guestBookVisible ? (
                <VStack align="stretch" spacing={2}>
                    <GestBookList /> {/* 메시지 데이터는 GestBookList 내에서 정의 */}
                </VStack>
            ) : (
                <Text color="gray.500" fontStyle="italic">
                    비공개입니다.
                </Text>
            )}
        </Box>
    );
}

export default GuestBookSection;
