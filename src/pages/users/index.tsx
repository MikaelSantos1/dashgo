import { Spinner, Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Th, Td, Thead, Tr, Text, useBreakpointValue, Link } from "@chakra-ui/react";
import  NextLink from "next/link";
import { useEffect, useState } from "react";

import { RiAddBoxLine } from "react-icons/ri";
import { QueryClient } from "react-query";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination/Index";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";


export default function UserList() {
    const [page,setPage]= useState(1)
    console.log(page)
    const { data, isLoading,isFetching,error} = useUsers(page)
   
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    useEffect(() => {

    }, [])

  async  function handlePrefetchUser(userId:string){
        await queryClient.prefetchQuery(['user',userId], async ()=>{
            const response = await api.get(`users/${userId}`)
            return response.data
        },{
            staleTime: 1000+60*10   // 10 minutes
        })
    }
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />


                <Box flex='1' borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify='space-between' align='center'>
                        <Heading size="lg" fontWeight='normal'>
                            Usuarios 
                            {!isLoading && isFetching && <Spinner size='sm' color="gray.500" ml="4"/>}
                            </Heading>
                        <NextLink href='/users/create' passHref>

                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddBoxLine} fontSize="20" />}
                            >
                                Criar novo usuario
                            </Button>
                        </NextLink>

                    </Flex>

                    {
                        isLoading ? (
                            <Flex justify='center'>
                                <Spinner />
                            </Flex>
                        )
                            : error ? (
                                <Flex justify='center'>
                                    Falha ao obter dados do usuario
                                </Flex>
                            ) : (
                                <>

                                    <Table colorScheme="whiteAlpha">
                                        <Thead>
                                            <Tr>
                                                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                                                    <Checkbox colorScheme="pink" />
                                                </Th>
                                                <Th>Usuario</Th>
                                                {isWideVersion && (
                                                    <Th>Data de cadastro</Th>
                                                )}
                                                <Th w="8"></Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {
                                                data.users.map(user=>{
                                                    return(
                                                        <Tr key={user.id}>
                                                <Td px={["4", "4", "6"]}>
                                                    <Checkbox colorScheme="pink" />
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Link color="purple.400" onMouseEnter={()=>handlePrefetchUser(user.id)}>
                                                        <Text fontWeight='bold'>{user.name}</Text>
                                                        </Link>
                                                       
                                                        <Text fontSize='sm' color="gray.300">{user.email}</Text>
                                                    </Box>
                                                </Td>
                                                {
                                                    isWideVersion && (
                                                        <Td>
                                                            {user.createdAt}
                                                        </Td>
                                                    )
                                                }
                                            </Tr>
                                                    )
                                                })
                                            }
                                        </Tbody>
                                    </Table>
                                    <Pagination 
                                    totalCountOfRegister={data.totalCount}
                                    currentPage={page}
                                    onPageChange={setPage}
                                    />
                                </>
                            )
                    }
                </Box>
            </Flex>

        </Box>
    )
}