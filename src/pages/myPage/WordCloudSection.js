import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Collapse, HStack, IconButton, Image, Text } from "@chakra-ui/react";

function WordCloudSection({ wordCloudVisible, setWordCloudVisible, keywords }) {
    // 워드 클라우드 이미지 URL 생성
    const wordCloudImageUrl = keywords ? `/images/${keywords}_wordcloud.png` : '';

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
                <Box h="150px" bg="white" borderRadius="md" boxShadow="sm" p={2}>
                    {wordCloudImageUrl ? (
                        <Image
                            src={wordCloudImageUrl}
                            alt="워드 클라우드 이미지"
                            objectFit="cover"
                            w="full"
                            h="full"
                        />
                    ) : (
                        <Text color="gray.500" fontStyle="italic">
                            관심사를 입력하면 워드 클라우드가 생성됩니다.
                        </Text>
                    )}
                </Box>
            </Collapse>
        </Box>
    );
}

export default WordCloudSection;
