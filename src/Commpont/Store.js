import React from 'react';
import { Col, Row } from 'react-bootstrap';
import data from './data.json';
import Storeitem from './Storeitem';

const Store = () => {
  return (
    <div>
      <h1>Store</h1>

      <Row xs={1} sm={2} lg={4} className='gap-2'>
        {data.map((item)=>(
          <Col key={item.id}>

          <Storeitem {...item}/>          
          </Col>
        ))}
      
      </Row>
    </div>
  )
}

export default Store
