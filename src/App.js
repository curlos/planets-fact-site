import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Box } from "@chakra-ui/react"
import Navbar from "./components/Navbar";
import Planet from './pages/Planet'
import Home from "./pages/Home";


const App = () => {
  return (
    <BrowserRouter>
      <Box bgImage="/assets/background-stars.svg" bgColor="#070724" minHeight="100vh" color="#FFFFFF" fontFamily="Antonio">
        <Navbar />
          
        <Routes>
          <Route path="/planet/:name" element={<Planet />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
