import { Stack } from "@chakra-ui/react";
import { RiDashboardLine,RiContactsLine ,RiInputMethodLine,RiGitMergeLine} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    return (
        <Stack spacing='12' align='flex-start'>
            <NavSection title="Geral">
                <NavLink icon={RiDashboardLine} >Dashboard </NavLink>
                <NavLink icon={RiContactsLine} >Usuarios </NavLink>
            </NavSection>

            <NavSection title="Automação">
                <NavLink icon={RiInputMethodLine} >Formularios </NavLink>
                <NavLink icon={RiGitMergeLine} >Automoção </NavLink>
            </NavSection>
        </Stack>
    )
}