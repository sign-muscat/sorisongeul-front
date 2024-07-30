import { Button } from "@chakra-ui/react";

function SkipButton({gameInfo}) {
    return (
        <Button
            colorScheme='gray'
            size='sm'
            isDisabled={gameInfo.skipCount === 3}
            color='gray.600'
        >
            이 문제 건너뛰기({gameInfo.skipCount}/3)
        </Button>
    )
}

export default SkipButton;