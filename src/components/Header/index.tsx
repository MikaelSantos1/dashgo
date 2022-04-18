import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { Logo } from '../Header/Logo'
import { NotificationsNav } from '../Header/NotificationsNav'
import { Profile } from '../Header/Profile'
import { SearchBox } from '../Header/SearchBox'
export function Header() {
    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="28"
            mx="auto"
            mt="4"
            align='center'
            px="6"
        >
            {
                !isWideVersion && (
                    <IconButton icon={<Icon as={RiMenuLine}/>}
                    aria-label="Open navigation"
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                    >

                    </IconButton>
                )
            }
            <Logo />
            {isWideVersion && <SearchBox />}


            <Flex align='center' ml='auto'>
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}