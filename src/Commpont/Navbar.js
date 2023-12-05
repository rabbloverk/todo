import React from 'react'
import { Button, Container, Nav, Navbar as Navbarbo } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import storyimg from './imges/grocery-store.png'
import './Navbar.css'
import { useShopingCart } from '../Context/ShopingCartContex'

const Navbar = () => {
  const {openCart , Quantitycart} = useShopingCart();
  return (
    <div>
      <Navbarbo sticky='top'className='bg-white shadow-sm mb-3'> {/* sticky => navbar top with the scrool */ }
        <Container>
          <Nav className='me-auto'>
            <Nav.Link to="/" as={Link}>Home</Nav.Link>
            <Nav.Link to="/store" as={Link}>Store</Nav.Link>
            <Nav.Link to="/about" as={Link}>About</Nav.Link>
        
          </Nav>
          <Button variant='outline-primary'
           className='rounded-circle'
            style={{width:"48px",height:"48px",position:"relative"}} 
            onClick={openCart}>

            <img className='storyimg' src={storyimg} alt='img'/>
            
            <div className='nmbercart'>
            {Quantitycart}
            </div>
          </Button>
        </Container>
     </Navbarbo>
     
    </div>
  )
}

export default Navbar
