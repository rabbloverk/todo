
import { Route , Routes } from "react-router-dom";
import "./style.css"
import { Container } from "react-bootstrap";
import Home from "./Commpont/Home";
import Store from "./Commpont/Store";
import About from "./Commpont/About";
import Navbar from "./Commpont/Navbar";
import ShopingCartpProvider from "./Context/ShopingCartContex"





const App = () => {
  return (
    <ShopingCartpProvider>
      <Navbar/>
     <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="store" element= {<Store/>}/>
        <Route path="about" element= {<About/>}/>
      </Routes>
    </Container>
    </ShopingCartpProvider>
  
  );
};

export default App
