import { Stack ,Box, Text} from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps{
    totalCountOfRegister:number;
    registerPerPage?:number;
    currentPage?:number;
    onPageChange?:(page:number)=>void;
}

const sibilingsCount=1;
generatePageArray(2,5)

function generatePageArray(from:number, to:number){
   return [...new Array(to - from)]
    .map((_,index)=>{
        return from + index + 1
    })
    .filter((page)=>page>0)
}


export function Pagination({
    totalCountOfRegister,
    onPageChange,
    registerPerPage=10,
    currentPage=1
}:PaginationProps){
    const lastPage= Math.floor(totalCountOfRegister / registerPerPage);

    const previousPages=  currentPage > 1
   ? generatePageArray(currentPage -1- sibilingsCount, currentPage-1)
   :[]
    
    const nextPages= currentPage < lastPage
    ? generatePageArray(currentPage,Math.min(currentPage + sibilingsCount,lastPage))
    :[]
    console.log(nextPages)
    return(
        <Stack
        direction={['column','row']}
        mt="8"
        justify='space-between'
        align='center'
        spacing="6"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>


            <Stack direction='row' spacing="2">
            {currentPage > (1+sibilingsCount) && (
                <>
                <PaginationItem number={1} onPageChange={onPageChange} />
                {currentPage>(2 + sibilingsCount) && (
                     <Text color="gray.300" width="8" textAlign="center">...</Text>
                )}
                </>
                
            )}
                {previousPages.length>0 && previousPages.map((page)=>{
                    return <PaginationItem 
                    number={page} 
                    key={page} 
                    onPageChange={onPageChange} />

                    
                })}

            <PaginationItem
             number={currentPage} 
             isCurrent 
             onPageChange={onPageChange} />

                 {nextPages.length>0 && nextPages.map((page)=>{
                    return <PaginationItem 
                    number={page} 
                    key={page} 
                    onPageChange={onPageChange} />
                    
                    
                })}

            {(currentPage  +sibilingsCount) < lastPage && (
                <>
                {(currentPage+1 + sibilingsCount)< lastPage&& (
                <Text color="gray.300" width="8" textAlign="center">...</Text>)}
                <PaginationItem number={lastPage} onPageChange={onPageChange}  />
                </>
                            
                        )}  
               
            </Stack>
            
        </Stack>
    )
}