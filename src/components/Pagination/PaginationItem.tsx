import { Button } from "@chakra-ui/react";

interface PaginationProps {
    number:number;
    isCurrent?: boolean;
    onPageChange:(page:number)=>void;
}

export function PaginationItem({ isCurrent=false ,number,onPageChange}: PaginationProps) {
    if (isCurrent) {
        return (

            <Button
                size="sm"
                fontSize="xs"
                colorScheme="pink"
                disabled
                _disabled={
                    {
                        bgColor: 'pink.500',
                        cursor: 'default'
                    }
                }
            >
                {number}
            </Button>
        )
    }
    return (
        <Button
            size="sm"
            fontSize="xs"
            bgColor="gray.700"
            _hover={{
                bg: 'gray.500'
            }}
            onClick={()=>onPageChange(number)}
        >
            {number}
        </Button>
    )
}