import { Button, Td, Tr } from "@chakra-ui/react";
import {useEffect, useState} from "react";
import SuccessModal from "../../pages/lip/SuccessModal";

function LipSimilarityTableItem({data, id}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const formatSimilarity = (similarity) => {
        if (similarity === 0) {
            return "정답";
        }
        return Number(similarity).toFixed(2);
    };

    useEffect(() => {
        if (data.isCorrect) {
            setIsModalOpen(true);
        }
    }, [data.isCorrect]);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Tr>
                <Td>{data.inputText}</Td>
                <Td>{formatSimilarity(data.similarity)}</Td>
                <Td>
                    <Button size="sm">AI 힌트</Button>
                </Td>
            </Tr>
            {isModalOpen && (
                <SuccessModal isOpen={isModalOpen} onClose={handleCloseModal}/>
            )}
        </>
    );
}

export default LipSimilarityTableItem;