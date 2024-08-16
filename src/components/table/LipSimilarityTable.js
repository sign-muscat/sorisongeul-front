// import { Badge, Box, HStack, Table, TableContainer, Tbody, Td, Text, Thead, Tr } from "@chakra-ui/react";
// import IonIcon from "@reacticons/ionicons";
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import LipSimilarityTableItem from "../item/LipSimilarityTableItem";
//
// function LipSimilarityTable({ dataList }) {
//     console.log("유사도!!!!! 데이터 넘어오냐???! : ",dataList )
//     const recordGameVoiceResponseList = dataList?.payload?.getVoiceAnswerCheck?.recordGameVoiceResponseList;
//     const recordGameVoiceResponse = dataList?.payload?.getVoiceAnswerCheck;
//
//     console.log("유사도!!!!! 배열 리스트 느으은!!!!???! : ",recordGameVoiceResponseList )
//     console.log("유사도!!!!! 배열은!!!!???! : ",recordGameVoiceResponse )
//
//     return (
//         <Box border='1px' borderColor='gray.200' borderRadius='md' mt={4}>
//             <TableContainer>
//                 <Table variant='simple'>
//                     <Thead>
//                         <Tr fontWeight={600} color='gray.700'>
//                             <Td>제출한 답안</Td>
//                             <Td>유사도</Td>
//                             <Td>
//                                 <HStack>
//                                     <Box color='yellow.400'>
//                                         <IonIcon name={"diamond"} />
//                                     </Box>
//                                     <Text>AI 힌트</Text>
//                                     <Badge colorScheme='orange'>PREMIUM</Badge>
//                                 </HStack>
//                             </Td>
//                         </Tr>
//                     </Thead>
//                     <Tbody>
//                         {dataList ? (
//                             // recordGameVoiceResponseList.map((data, index) => (
//                             //     <LipSimilarityTableItem key={index} data={data} id={index + 1} />
//                             //))
//                             <LipSimilarityTableItem data={recordGameVoiceResponse} />
//                         ) : (
//                             <Tr>
//                                 <Td colSpan={3}>아직 제출한 답안이 없습니다.</Td>
//                             </Tr>
//                         )}
//                     </Tbody>
//                 </Table>
//             </TableContainer>
//         </Box>
//     );
// }
//
// export default LipSimilarityTable;
//


import { Badge, Box, HStack, Table, TableContainer, Tbody, Td, Text, Thead, Tr } from "@chakra-ui/react";
import IonIcon from "@reacticons/ionicons";
import React, { useEffect, useState } from 'react';
import LipSimilarityTableItem from "../item/LipSimilarityTableItem";

function LipSimilarityTable({ dataList }) {
    const [recordGameVoiceResponseList, setRecordGameVoiceResponseList] = useState([]);

    useEffect(() => {
        if (dataList) {
            const newRecord = dataList?.payload?.getVoiceAnswerCheck;
            setRecordGameVoiceResponseList(prevList => [newRecord, ...prevList]);
        }
    }, [dataList]);

    return (
        <Box border='1px' borderColor='gray.200' borderRadius='md' mt={4}>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr fontWeight={600} color='gray.700'>
                            <Td>제출한 답안</Td>
                            <Td>유사도</Td>
                            <Td>
                                <HStack>
                                    <Box color='yellow.400'>
                                        <IonIcon name={"diamond"} />
                                    </Box>
                                    <Text>AI 힌트</Text>
                                    <Badge colorScheme='orange'>PREMIUM</Badge>
                                </HStack>
                            </Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {recordGameVoiceResponseList.length > 0 ? (
                            recordGameVoiceResponseList.map((data, index) => (
                                <LipSimilarityTableItem key={index} data={data} id={index + 1} />
                            ))
                        ) : (
                            <Tr>
                                <Td colSpan={3}>아직 제출한 답안이 없습니다.</Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default LipSimilarityTable;
