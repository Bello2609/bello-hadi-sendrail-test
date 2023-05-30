import { Box, Input, Text, Image, Heading } from "@chakra-ui/react";
import { MdNotificationsNone } from "react-icons/md";
import * as images from "../../../images";
import { BiSearch } from "react-icons/bi";
const Header = ()=>{
    return (
        <>
            <Box p={3} h="15vh" width="80vw" bgColor="#fff" display="flex" alignItems="center" justifyContent="space-between">
                <Box w="500px" height="50px"  display="flex" alignItems="center" boxShadow="lg" borderRadius="10px">
                    <Text fontSize="25px" mx={5}><BiSearch /></Text>
                    <Input placeholder='search by tracking number or location' border="none" height="100%" w="500px" size='md' />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" width="200px">
                    <Box display="flex" alignItems="center" justifyContent="center" fontSize="15px" color="#fff" width="52px" height="32px" bgColor="#AAAAAA" borderRadius="10px">
                        <Text><MdNotificationsNone /></Text>
                        <Text ml={2}>3</Text>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Image src={images.Ellipse70} alt="john doe" />
                        <Box ml={3} fontFamily="Gilroy">
                            <Heading as="h5" fontSize="sm" color="#7C7C88">John Tae</Heading>
                            <Text fontSize="xs" color="#7C7C88">Admin</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
export default Header;