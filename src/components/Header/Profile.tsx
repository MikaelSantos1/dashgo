import { Box, Flex,Text,Avatar } from "@chakra-ui/react";


interface ProfileProps{
    showProfileData:boolean
}

export function Profile({showProfileData = true}:ProfileProps){
    return(
        <Flex
        align='center'
        >
            {showProfileData && (
                  <Box mr='4' textAlign='right'>
                  <Text>Mikael Santos</Text>
                  <Text 
                  color="gray.300" 
                  fontSize='small'>email@asdas.com</Text>
              </Box>
            )
            }
          
            <Avatar size='md' name="Mikael Santos" src="https://github.com/MikaelSantos1.png"/>
        </Flex>
    )
}