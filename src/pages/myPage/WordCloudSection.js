import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Collapse, HStack, IconButton, Text } from "@chakra-ui/react";

function WordCloudSection({ wordCloudVisible, setWordCloudVisible }) {
    return (
        <Box
            bg="gray.50"
            p={5}
            borderRadius="md"
            boxShadow="sm"
            mt={5}
            border="1px solid"
            borderColor="gray.200"
        >
            <HStack justifyContent="space-between" mb={3}>
                <Text fontWeight="bold" fontSize="lg">
                    관심 키워드
                </Text>
                <IconButton
                    aria-label="Toggle word cloud"
                    icon={wordCloudVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    onClick={() => setWordCloudVisible(!wordCloudVisible)}
                />
            </HStack>
            <Collapse in={wordCloudVisible}>
                <Box h="150px" bg="white" borderRadius="md" boxShadow="sm">
                    {/* Placeholder for Word Cloud */}
                    <Text color="gray.500" fontStyle="italic" p={5}>
                        워드 클라우드 자리입니다.
                    </Text>
                </Box>
            </Collapse>
        </Box>
    );
}

export default WordCloudSection;
