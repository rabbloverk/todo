import React from 'react'
import { Button, Card } from 'react-bootstrap'
import FormatCurrency from './Formatcurrency'
import { useShopingCart } from '../Context/ShopingCartContex'

const Storeitem = ({id,name,price,imgurl}) => {
    const{getItemQuantity ,increaseCartQuantity ,decreaseCartQuantity ,removeItemfromCart} = useShopingCart();

    const quantity = getItemQuantity(id) ;
  return (
        <Card>
            
            <Card.Img 
            src={imgurl}
            variant='top'
            style={{height:"200px", objectFit:"cover"}} />

            <Card.Body>
                <Card.Title className='d-flex justify-content-between align-items-baseline'>
                    <span className='fs-2'>{name}</span>
                    <span className='text-muted me-2' >{FormatCurrency(price)}</span>
                </Card.Title>

                <div className='mt-auto'>
                {quantity === 0 ? <Button className='w-100' onClick={()=>increaseCartQuantity(id)}>Add TO Card</Button> : 
                
                <div className='d-flex align-items-center flex-column' style={{gap:"16px"}}>

                <div className='d-flex align-items-center justify-content-center' style={{gap:"16px"}}>
                <Button onClick={()=> decreaseCartQuantity(id)}>-</Button>
                <span className='fs-3'>{quantity} in Cart</span>
                <Button onClick= {()=> increaseCartQuantity(id)}>+</Button>

                </div>
                <Button variant='danger' size='ms' onClick={()=> removeItemfromCart(id)}>Remove</Button>

                </div>}


                </div>
            </Card.Body>
        </Card>
  )
}

export default Storeitem
