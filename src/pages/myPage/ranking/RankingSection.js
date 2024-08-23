import { Box, HStack, Switch, Text, VStack } from "@chakra-ui/react";

function RankingSection({ rankingVisible, setRankingVisible }) {
    return (
        <Box border="1px solid" borderColor="gray.300" p={5} borderRadius="md" boxShadow="sm">
            <HStack justifyContent="space-between" mb={3}>
                <Text fontWeight="bold" fontSize="lg">
                    🏆 오늘 나의 랭킹
                </Text>
                <Switch
                    colorScheme="teal"
                    isChecked={rankingVisible}
                    onChange={() => setRankingVisible(!rankingVisible)}
                />
            </HStack>
            {rankingVisible ? (
                <HStack justifyContent="space-between" spacing={10}>
                    <VStack>
                        <Text fontWeight="bold">맞.수.수</Text>
                        <Text>🥇 80점</Text>
                    </VStack>
                    <VStack>
                        <Text fontWeight="bold">도.소.탐</Text>
                        <Text>🥈 95점</Text>
                    </VStack>
                    <VStack>
                        <Text fontWeight="bold">너.목.보</Text>
                        <Text>4등 60점</Text>
                    </VStack>
                    <VStack>
                        <Text fontWeight="bold">고요 속의 외침</Text>
                        <Text>오늘 기록이 없어요.</Text>
                    </VStack>
                </HStack>
            ) : (
                <Text color="gray.500" fontStyle="italic">
                    비공개입니다.
                </Text>
            )}
        </Box>
    );
}

export default RankingSection;
