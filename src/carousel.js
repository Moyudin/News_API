import React, { useEffect, useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import noimage from "./assets/noimagei.jpg";
import axios from "axios";


function Carsousel(){
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7d348e1b5af7433a9a673e8877747e07')
        .then(response => {
            setData(response.data.articles);
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    },[]);

    const slicedData = data.slice(0, 10);
    return(
        <>
        <div className="text-center mt-5 pt-5">
            <h1 className="text-white h1-head">Today's Headline</h1>
        </div>
        <Carousel className="mt-3" >
            {slicedData.map((article) => (
            <Carousel.Item className="border border-secondary text-center ">
                <a href={article.url}>
                    {article.urlToImage ? <Image className="img-fluid" alt={article.urlToImage} src={article.urlToImage}/> : <Image variant="top" className="card-images" src={noimage}/> }
                    <Carousel.Caption>
                       {article.urlToImage ?  <h3 className="h1-text text">{article.title}</h3> :<h3 className="h1-text text-info">{article.title}</h3>}
                        <p className="d-none d-lg-block">{article.description}</p>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
        ))}
        </Carousel>
        </>
    );
}

export default Carsousel;