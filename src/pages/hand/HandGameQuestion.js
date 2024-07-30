import {Box, Flex, Text, Image, keyframes} from "@chakra-ui/react";
import Webcam from "react-webcam";
import {useRef, useState} from "react";

function HandGameQuestion({gameInfo, questionList, webcam, capturedImage, isFlashing}) {

    const canvasRef = useRef(null);

    const flash = keyframes`
        from { opacity: 1; }
        to { opacity: 0; }
    `;

    return (
        <Box borderWidth='1px' borderRadius='lg' overflow='hidden' mt={4}>
            <Box p='4' borderBottom='1px solid' borderColor='gray.200'
                 fontWeight={600} color='gray.600'
            >
                <Flex justifyContent='space-between' alignItems='center'>
                    <Text>
                        문제 {gameInfo.currentQuestion}. {questionList[gameInfo.currentQuestion - 1]}
                    </Text>

                    <Text fontSize='13px'>
                        맞춘 문제 수 {gameInfo.correctedAnswer}/{gameInfo.currentQuestion - 1}
                        ({gameInfo.correctedAnswer === 0 ? 0
                        : gameInfo.correctedAnswer/(gameInfo.currentQuestion - 1) * 100}%)
                    </Text>
                </Flex>
            </Box>

            <Box>
                {!capturedImage ?
                    <>
                        <Webcam ref={webcam} screenshotFormat="image/jpeg"/>
                        <canvas ref={canvasRef}
                                style={{ position: "absolute" }}
                        />
                    </>
                    : <Image src={capturedImage}/>
                }
                {isFlashing &&
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        width="100%"
                        height="100%"
                        bg="white"
                        animation={`${flash} 0.3s ease-out`}
                    />
                }
            </Box>
        </Box>
    );
}

export default HandGameQuestion;