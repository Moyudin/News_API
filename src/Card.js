import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Image } from "react-bootstrap";
import noimage from "./assets/noimage.jpg"

function Cards({title,image,description,url}){
    return(
        <>
        <Col lg={3}>
            <Card className="my-2 mx-auto img-fluid border-secondary bg-dark text-white" style={{width:'18rem', height:'450px' }}>
                {image ?
                <Image className="img-fluid" alt={image} src={image} style={{maxHeight:'150px' }} />
                :
                <Image variant="top" className="card-images" src={noimage} style={{maxHeight:'150px' }} />
                 }
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    {description ? (<Card.Text>{description.slice(0, 50)}...</Card.Text>) : (<Card.Text className="text-danger">Sorry But there is no description about the news</Card.Text>)}               
                </Card.Body>
                <div className="text-center img-fluid mb-3">
                    <a href={url} className="btn w-50 rounded-pill border border-info text-warning">Show Details</a>
                </div>
            </Card>
        </Col>
        </>
    );
}

export default Cards;