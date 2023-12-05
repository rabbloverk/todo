import { Offcanvas, Stack } from 'react-bootstrap';
import React from 'react'
import { useShopingCart } from '../Context/ShopingCartContex'
import CartItem from './CartItem';
import storeitem from './data.json'
import FormatCurrency from './Formatcurrency';

const ShopingCar = ({isOpen}) => {
    const {cartitems,CloseCart} = useShopingCart();
  return (
    <Offcanvas show={isOpen} onHide={CloseCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <Stack gap={3}>
        {cartitems.map((item)=>(
            <CartItem key={item.id} {...item}/>
        ))}
            <div className='ms-auto fw-bold fs-5'>
            Total : {"  "}
            {FormatCurrency(
                cartitems.reduce((total , cartitem)=>{
                    const item = storeitem.find((i)=>i.id===cartitem.id);
                    return total + (item?.price || 0) * cartitem.quantity;
    
                },0)
            )}
            </div>
        </Stack>
      </Offcanvas.Body>

    </Offcanvas>
  );
}

export default ShopingCar
