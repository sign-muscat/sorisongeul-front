import {Box, Center, Text} from "@chakra-ui/react";
import IonIcon from "@reacticons/ionicons";

function SoundGameQuestion() {

    // TODO: 문제(음성 파일) 로딩 로직 (with BE)
    // TODO: return 내부에 음성 파일 실행 로직 추가

    return (
        <Box borderWidth='1px' borderRadius='lg' my={4}>
            <Center color='red.400' py={10}>
                <IonIcon name='play-circle' style={{fontSize:64}}/>
            </Center>
        </Box>
    );
}

export default SoundGameQuestion;