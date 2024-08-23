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
                    🔥 불타오르는 우정
                </Text>
                <Switch
                    colorScheme="teal"
                    isChecked={questVisible}
                    onChange={() => setQuestVisible(!questVisible)}
                />
            </HStack>
            {questVisible ? (
                <VStack align="stretch" spacing={2}>
                    {["칭구1", "칭구2", "칭구3", "칭구4"].map((quest, index) => (
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
