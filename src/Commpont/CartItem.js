import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import storeItem from './data.json'
import FormatCurrency from './Formatcurrency'
import { useShopingCart } from '../Context/ShopingCartContex'

const CartItem = ({id,quantity}) => {
    const {removeItemfromCart} = useShopingCart();

    const item = storeItem.find((i)=>i.id===id)
    if(item==null) return null;
    
  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
        <img src={item.imgurl} alt='imgcart' style={{width:"125px" , height:"75px", objectFit:"cover"}}/>
        <div className='me-auto'>
        <div>
            {item.name} {" "}
            {quantity > 1 && <span className='text-muted' style={{fontSize:"0.65rem"}}>x{quantity}</span> }

            <div className='text-muted' style={{fontSize:"0.75rem"}}>{FormatCurrency(item.price)}</div>
        </div>
        </div>

        <div>{FormatCurrency(item.price * quantity)}</div>

        <Button variant='outline-danger' size='sm' onClick={()=>removeItemfromCart(id)}>
            &times;
        </Button>
    </Stack>
  )
}

export default CartItem
