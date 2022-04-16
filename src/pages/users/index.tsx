import { Box,Button,Checkbox,Flex, Heading, Icon, Table, Tbody, Th, Td,Thead, Tr, Text } from "@chakra-ui/react";
import { RiAddBoxLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
export default function UserList(){
    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar/>

            <Box flex='1' borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify='space-between' align='center'>
                        <Heading size="lg" fontWeight='normal'>Usuarios</Heading>
                        <Button 
                        as="a" 
                        size="sm" 
                        fontSize="sm" 
                        colorScheme="pink"
                        leftIcon={<Icon as={RiAddBoxLine} fontSize="20"/>}
                        >
                            Criar novo usuario
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" w="8">
                                    <Checkbox colorScheme="PINK"/>
                                </Th>
                                <Th>Usuario</Th>
                                <Th>Data de cadastro</Th>
                                <Th w="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                <Checkbox colorScheme="PINK"/>
                                </Td>
                                <Td>
                                    <Box>
                                       <Text fontWeight='bold'>Mikael Santos</Text>
                                       <Text fontSize='sm' color="gray.300">mikaelsantos120@outlook.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    04 de abril de 2021
                                </Td>
                                <Td>
                                <Button 
                        as="a" 
                        size="sm" 
                        fontSize="sm" 
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                        >
                            Editar
                        </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>
            </Box>
            </Flex>

        </Box>
    )
}