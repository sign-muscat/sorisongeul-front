import { Box, HStack, Switch, Text, VStack } from "@chakra-ui/react";

function QuestSection({ questVisible, setQuestVisible }) {
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
                    🔥 일일 퀘스트
                </Text>
                <Switch
                    colorScheme="teal"
                    isChecked={questVisible}
                    onChange={() => setQuestVisible(!questVisible)}
                />
            </HStack>
            {questVisible ? (
                <VStack align="stretch" spacing={2}>
                    {["퀘스트1", "퀘스트2", "퀘스트3", "퀘스트4"].map((quest, index) => (
                        <HStack
                            key={index}
                            p={3}
                            bg="white"
                            borderRadius="md"
                            boxShadow="sm"
                        >
                            <Text>{quest}</Text>
                        </HStack>
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

export default QuestSection;
