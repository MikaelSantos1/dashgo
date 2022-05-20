import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { appendErrors, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Header } from "../../components/Header";

import { Sidebar } from "../../components/Sidebar";

interface CreateUserFormData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const CreateUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().required('Email obrigatório').email(),
    password: yup.string().required('Senha obrigatoria').min(6, 'No minimo 6 carecteres'),
    password_confirmation: yup.string().oneOf([
        null,
        yup.ref('password')
    ], 'As senhas precisam ser iguais')
})

const handleCreateUser:SubmitHandler<CreateUserFormData> = async (values)=>{
    await new Promise(resolve=>setTimeout(resolve,2000))
    console.log(values)
}

export default function CreateUser() {
    const { register, handleSubmit,formState } = useForm({
        resolver: yupResolver(CreateUserFormSchema)
    })
    const {errors}= formState
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box 
                as="form"
                flex='1' 
                borderRadius={8} 
                bg="gray.800" 
                p="8"
                onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="lg" fontWeight="normal">Criar Usuario</Heading>
                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth={240}
                            spacing="8"
                            w="100%"
                        >
                            <Input name="name" 
                            label="Nome completo"    
                            {...register('name')}
                             error={errors.name}/>
                            <Input 
                            name="email" 
                            label="Email" 
                            type="email"  
                            {...register('email')}
                            error={errors.email}/>
                            
                        </SimpleGrid>

                        <SimpleGrid minChildWidth={240}
                            spacing="8"
                            w="100%"
                        >
                            <Input 
                            name="password" 
                            label="Senha" 
                            type="password" 
                            {...register('password')} 
                             error={errors.password}
                             />

                            <Input
                             name="password_confirmation" 
                             label="Confirmação da senha" 
                             type="password" 
                             {...register('password_confirmation')}
                             error={errors.password_confirmation}
                             />
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify='flex-end'>
                        <HStack spacing="4">
                            <Link href='/users' passHref>
                                <Button as="a" colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            <Button colorScheme='pink' type="submit" isLoading={formState.isSubmitting}>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>

        </Box>
    )
}