import React from 'react'
import Cardinfo from '../components/Cardinfo';
import { Container, Row, Col } from 'react-bootstrap';


const Card = (props) => {
    return ( 
        <Col className=" border" md={4} onClick={(e) => props.click(props.item)}>
           
            <img className="card-img" style={{}} src={props.item.imgSrc} alt ={props.item.imgSrc}/>
            
            { props.item.selected && <Cardinfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}  /> }
        </Col>
    )
}




export default Card;