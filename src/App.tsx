"use client"
import { Box } from "@chakra-ui/react";
//component
import Sidebar from './Component/Sidebar/Sidebar';
import Header from "./Component/Header/Header";
import Rider from "./Component/Rider/Rider";
import { Routes, Route } from "react-router-dom";

const App = ()=>{
  return(
    <>
      <Box w="100vw" h="100vh" display="flex">
        <Sidebar />
        <Box>
            <Header />
            {/* <Rider /> */}
            <Routes>
            <Route path="/" element={<Rider />} />
            </Routes>
            
        </Box>
      </Box>
    </>
  );
}

export default App
