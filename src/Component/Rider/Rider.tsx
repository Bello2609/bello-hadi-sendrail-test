import { useEffect, useState } from "react";
import { Box, Heading, Input, Text, Button, TableContainer, Thead, Tbody, Tr, Th, Td, Table, Image } from "@chakra-ui/react";
import { BiSearch, BiFilter } from "react-icons/bi";
// import * as images from "../../../images";
import { AiFillMessage } from "react-icons/ai";
import { BsFillTelephoneFill, BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
type Product = {
    name: string,
    region: string,
    status: string,
    contact: string,
    image: string
}
const Rider = ()=>{
    const [ allProduct, setAllProduct ] = useState<Product[]>([]);
    const [ search, setSearch ] = useState<string | null>();
    const fetchProduct = async ()=>{
        let prod = await axios.get(`http://localhost:5000/api/v1/products`);
        let info: Product[] = prod.data.data;
        setAllProduct(info);
    }
    const searchHandler = async()=>{
        const result = await axios.get(`http://localhost:5000/api/v1/products?search=${search}`);
        let searchResult: Product[] = result.data.data;
        setAllProduct(searchResult);
    }
    useEffect(()=>{
            fetchProduct();
    }, [])
    return(
        <>
            <Box display="flex" flexDirection="column" p={4}>
                <Heading as="h5" fontFamily="Gilroy">
                    Manage Rider
                </Heading>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box display="flex" alignItems="center">
                        <Box w="300px" height="50px"  display="flex" alignItems="center" boxShadow="lg" borderRadius="10px">
                            <Input placeholder='Search by name' border="none" height="100%" w="500px" onChange={(e)=>setSearch(e.target.value)} size='md' />
                            <Text fontSize="25px" mx={5} cursor="pointer" onClick={searchHandler}><BiSearch /></Text>
                        </Box>
                        <Box display="flex"  ml={3} width="200px">
                            <Text as="b" fontSize="25px">
                                <BiFilter /> 
                            </Text>
                            <Text as="b" fontSize="16px">
                                Filter
                            </Text>
                        </Box>
                    </Box>
                    <Button bg="rgba(7, 5, 41, 0.9)" color="#fff">Add rider</Button>
                </Box>
                <Box mt={10}  height="58vh" overflowY="scroll"  >
                <TableContainer overflowY="hidden">
                    <Table overflow="scroll">
                    <Thead>
                        <Tr bg="rgba(7, 5, 41, 0.07)">
                            <Th>Name</Th>
                            <Th>Region</Th>
                            <Th>Status</Th>
                            <Th>Contact</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody fontFamily="poppins">
                        {
                            allProduct && allProduct.map((prod, i)=>(
                                <Tr key={i}>
                            <Td>
                                <Box display="flex" alignItems="center">
                                    <Image borderRadius="full" src={prod.image} boxSize="50px" alt="john doe" />
                                    <Box ml={3} fontFamily="Gilroy">
                                        <Heading as="h5" fontSize="sm" color="#7C7C88">{prod.name}</Heading>
                                    </Box>
                                </Box>
                            </Td>
                            <Td color="#ABA7A7">{prod.region}</Td>
                            <Td>
                                {
                                    prod.status === "assigned" ? 
                                    <Box p={1} width="80px" height="25px" fontWeight="bold" display="flex" justifyContent="center" bgColor="rgba(230, 253, 238, 0.764706)" color="#079638">{prod.status}</Box>
                                    : <Box p={1} width="80px" height="25px" fontWeight="bold" display="flex" justifyContent="center" bgColor="rgba(247, 216, 223, 0.772549)" color="#CD0B3A">{prod.status}</Box>
                                }
                            </Td>
                            <Td display="flex" alignItems="center">
                                <Text mx={5} my={5} fontSize="20px"><BsFillTelephoneFill /></Text>
                                <Text mx={5} my={5} fontSize="20px"><AiFillMessage /></Text>
                            </Td>
                            <Td><BsThreeDotsVertical /></Td>
                        </Tr>
                            ))
                        }
                        
                    </Tbody>
                    </Table> 
                  
                </TableContainer>
                </Box>
            </Box>
        </>
    );
}
export default Rider;