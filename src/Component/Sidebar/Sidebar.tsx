import { useState } from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import * as image from "../../../images";
import { NavLink } from "react-router-dom";
import * as images from "../../../images";
const data = [
        {
            image: images.component2,
            text: "Dashboard"
        },
        {
            image: images.component3,
            text: "Shipment"
        },
        {
            image: images.component4,
            text: "Customer"
        },
        {
            image: images.component7,
            text: "Courier"
        },
        {
            image: images.component6,
            text: "Payroll"
        },
        {
            image: images.component5,
            text: "Transaction"
        },
        {
            image: images.component8,
            text: "Setting"
        },
        {
            image: images.component1,
            text: "Logout"
        }
    ]
const Sidebar = ()=>{
    const [ click, setClick ] = useState<number>();

    const clickHandler = (id: number)=>{
        setClick(id)
    }
    
    return(
        <>
            <Box width="20vw" height="100vh" bgColor="#070529" p={5}>
                <Box display="flex" alignItems="center">
                    <Image src={image.sendrail} alt="sendrail" />
                    <Heading as="h5" color="#F9C567" fontSize="lg" ml={2} fontWeight="bold">
                        Sendrail
                    </Heading>
                </Box>
                <Box width="100%" position="relative" mt={50}>
                    {
                        data.map((info, i)=>(
                            <Box key={i} display="flex" alignItems="center" h={50}   p={3} color="#fff" fontFamily="Poppins" fontWeight="500px" fontSize="lg" onClick={()=>clickHandler(i)}>
                                <Image src={info.image} alt="sapa" mr={2} />
                                <NavLink to="/" style={({isActive}): any=> isActive && click === i  ? {color: "#F9C567"} : null}>{info.text}</NavLink>
                              {
                                click === i &&  (<Box position="absolute" left="225px" borderRadius="10px" bgColor="#F9C567" w="5px" h="40px"></Box>) 
                              }
                               
                            </Box>
                        ))
                    }
                </Box>
                
            </Box>
        </>
    );
}

export default Sidebar;