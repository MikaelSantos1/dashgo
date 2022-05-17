import { Button, Flex,  Stack} from "@chakra-ui/react"
import { Input } from "../components/Form/Input"
import { SubmitHandler, useForm} from 'react-hook-form'

interface SignInFormData{
  email:string;
  password:string;
}

export default function SignIn() {
  const{ register,handleSubmit, formState} = useForm()

    const {errors}= formState
    console.log(errors)
    const handleSign:SubmitHandler<SignInFormData> = async(values)=>{
    await new Promise(resolve=>setTimeout(resolve,2000))
    console.log(values)
  }

  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify="center">

      <Flex
        as='form'
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSign)}
      >
        <Stack spacing='4'>
          <Input
          type='email'
          name="email"
          label="E-mail"
          error={errors.email}
          {...register('email',{
            required:'Email é um campo obrigatario'
          })}
       
          />
          <Input
          type='password'
          name="password"
          label="Senha"
          error={errors.password}
          {...register('password',{
            required:'Senha é um campo obrigatorio'
          })}
          />
          
        
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme='pink'
          size={'lg'}
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
