import {Td, Tr} from "@chakra-ui/react";

function SimilarityTableItem({data, id}) {

    return (
        <Tr>
            <Td>{id}</Td>
            <Td>{data.inputText}</Td>
            <Td>{data.similarity}</Td>
        </Tr>
    );
}

export default SimilarityTableItem;