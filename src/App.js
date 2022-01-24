import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Box, useDisclosure } from "@chakra-ui/react"
import Navbar from "./components/Navbar";
import Planet from './pages/Planet'
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";


const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <BrowserRouter>
      <Box bgImage="/assets/background-stars.svg" bgColor="#070724" minHeight="100vh" color="#FFFFFF" fontFamily="Antonio">
        <Navbar btnRef={btnRef} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <Sidebar btnRef={btnRef} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
          
        <Routes>
          <Route path="/planet/:name" element={<Planet />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
