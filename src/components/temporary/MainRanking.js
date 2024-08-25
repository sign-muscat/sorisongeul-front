import {Card, Flex, Heading, Text} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callTodayRanksAPI} from "../../apis/RankAPICalls";

function MainRanking() {

    const dispatch = useDispatch();
    const [todayRankings, setTodayRankings] = useState(null);
    const { today } = useSelector(state => state.rankReducer);

    useEffect(() => {
        // 처음 렌더링 시 랭킹 API 호출
        dispatch(callTodayRanksAPI());
    }, [dispatch]);


    useEffect(() => {
        if (today) {
            setTodayRankings(today);
        }
    }, [today]);

    const getCategoryName = (category) => {
        switch (category) {
            case "VOICE":
                return "너목보";
            case "CHALLENGE":
                return "도소탐";
            case "RIDDLE":
                return "맞수수";
            default:
                return category;
        }
    };

    return(
        <>
            <Card w="420px" h="90px" border="1px solid #E2E8F0" boxShadow="none" borderRadius="8px" backgroundColor="#F7FAFC" >
                <Flex w="100%" h="100%" flexDirection="column" justifyContent="center" alignItems="center">
                    <Heading fontSize="14px" color="#4F4F4F" mb="10px">🏆 오늘의 랭킹</Heading>
                    <Flex justifyContent="space-around">
                        { todayRankings && todayRankings.length !== 0 ?
                            todayRankings.map((data, index) =>
                            <Flex key={index} flexDirection="column" justifyContent="center" alignItems="center" px="40px">
                                <Heading fontSize="14px" color="#4F4F4">{getCategoryName(data.category)}</Heading>
                                <Text fontSize="12px" mt={2}>🥇 {data.score} 점</Text>
                            </Flex>
                            ) : <></>

                        }
                    </Flex>
                </Flex>
            </Card>
        </>
    );
}

export default MainRanking;