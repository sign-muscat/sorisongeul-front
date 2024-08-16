import { Box, HStack, Switch, Text, VStack } from "@chakra-ui/react";

function GuestBookSection({ guestBookVisible, setGuestBookVisible }) {
    return (
        <Box
            border="1px solid"
            borderColor="gray.300"
            p={5}
            borderRadius="md"
            boxShadow="sm"
            minW="250px"
            minH="300px" // Ensure the same height
        >
            <HStack justifyContent="space-between" mb={3}>
                <Text fontWeight="bold" fontSize="lg">
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
                    {[
                        { username: "asdf12", comment: "점수 많이 올랐다~ 화이팅해!" },
                        { username: "qwe983", comment: "오늘 같이 해서 재미있었어~~" },
                    ].map((entry, index) => (
                        <Box
                            key={index}
                            p={3}
                            bg="white"
                            borderRadius="md"
                            boxShadow="sm"
                        >
                            <Text fontWeight="bold">{entry.username}</Text>
                            <Text>{entry.comment}</Text>
                        </Box>
                    ))}
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
