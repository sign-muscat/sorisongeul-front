import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Collapse, HStack, IconButton, Text } from "@chakra-ui/react";

function DashboardSection({ dashBordVisible, setDashBordVisible }) {
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
                    대시보드
                </Text>
                <IconButton
                    aria-label="Toggle dashboard"
                    icon={dashBordVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    onClick={() => setDashBordVisible(!dashBordVisible)}
                />
            </HStack>
            <Collapse in={dashBordVisible}>
                <Box h="150px" bg="white" borderRadius="md" boxShadow="sm">
                    {/* Placeholder for Dashboard */}
                    <Text color="gray.500" fontStyle="italic" p={5}>
                        대시보드 자리입니다.
                    </Text>
                </Box>
            </Collapse>
        </Box>
    );
}

export default DashboardSection;
