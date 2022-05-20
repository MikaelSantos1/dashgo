import { Box,Button,Checkbox,Flex, Heading, Icon, Table, Tbody, Th, Td,Thead, Tr, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddBoxLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
export default function UserList(){
  const  isWideVersion = useBreakpointValue({
        base:false,
        lg:true
    })

    useEffect(()=>{
        fetch('http:localhost:3000/api/users')
        .then(response=>response.json())
        .then(data=>console.log(data))
    },[])
    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar/>
            
          
            <Box flex='1' borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify='space-between' align='center'>
                        <Heading size="lg" fontWeight='normal'>Usuarios</Heading>
                        <Link href='/users/create' passHref>
                       
                        <Button 
                        as="a" 
                        size="sm" 
                        fontSize="sm" 
                        colorScheme="pink"
                        leftIcon={<Icon as={RiAddBoxLine} fontSize="20"/>}
                        >
                            Criar novo usuario
                        </Button>
                        </Link>
                        
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4","4","6"]} color="gray.300" w="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Usuario</Th>
                                {isWideVersion &&(
                                    <Th>Data de cadastro</Th>
                                )}
                                <Th w="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4","4","6"]}>
                                <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                       <Text fontWeight='bold'>Mikael Santos</Text>
                                       <Text fontSize='sm' color="gray.300">mikaelsantos120@outlook.com</Text>
                                    </Box>
                                </Td>
                                {
                                    isWideVersion && (
                                        <Td>
                                        04 de abril de 2021
                                    </Td>
                                    )
                                }
                               
                     
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>
            </Box>
            </Flex>

        </Box>
    )
}