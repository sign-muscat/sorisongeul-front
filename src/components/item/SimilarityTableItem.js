import {Td, Tr} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons'

function SimilarityTableItem({data, id}) {

    return (
        <Tr>
            <Td>{id}</Td>
            <Td>{data.question}</Td>
            <Td>{data.isCorrect?
                    <CheckCircleIcon color='green.500'/> :
                    <WarningIcon color='red.500'/>}
            </Td>
        </Tr>
    );
}

export default SimilarityTableItem;