import { Box, Divider, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSection from "./DashboardSection";
import GuestBookSection from "./GuestBookSection";
import MedalSection from "./MedalSection";
import ProfileSection from "./ProfileSection";
import QuestSection from "./QuestSection";
import RankingSection from "./RankingSection";
import WordCloudSection from "./WordCloudSection";

function MypageHomePage() {
    const [questVisible, setQuestVisible] = useState(true);
    const [guestBookVisible, setGuestBookVisible] = useState(true);
    const [rankingVisible, setRankingVisible] = useState(true);
    const [medalVisible, setMedalVisible] = useState(true);
    const [wordCloudVisible, setWordCloudVisible] = useState(false);
    const [dashBordVisible, setDashBordVisible] = useState(false);

    const navigate = useNavigate();



    return (
        <Box bg="gray.100" p={5} minH="100vh">
            <Text
                fontWeight="bold"
                fontSize="2xl"
                color="blue.600"
                mb={6}
            >
                마이페이지
            </Text>
            <Box bg="white" borderRadius="lg" p={5} boxShadow="md">
                <ProfileSection />

                <Divider my={6} /> 

                <HStack spacing={5} mb={6}> 
                    <QuestSection
                        questVisible={questVisible}
                        setQuestVisible={setQuestVisible}
                    />
                    <GuestBookSection
                        guestBookVisible={guestBookVisible}
                        setGuestBookVisible={setGuestBookVisible}
                    />
                </HStack>

                <Divider my={6} /> {/* Increased margin to separate sections more clearly */}


                    <RankingSection
                        rankingVisible={rankingVisible}
                        setRankingVisible={setRankingVisible}
                    />
                    
                    <Divider my={6} />

                    <MedalSection
                        medalVisible={medalVisible}
                        setMedalVisible={setMedalVisible}
                    />


                <WordCloudSection
                    wordCloudVisible={wordCloudVisible}
                    setWordCloudVisible={setWordCloudVisible}
                    mb={6} // Add margin bottom to separate from below section
                />

                <DashboardSection
                    dashBordVisible={dashBordVisible}
                    setDashBordVisible={setDashBordVisible}
                />
            </Box>

            
        </Box>
    );
}

export default MypageHomePage;
