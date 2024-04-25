import React, { useEffect, useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import noimage from "../assets/noimagei.jpg";
import axios from "axios";

function Carsousel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiKey}`
        );
        setData(response.data.articles);
      } catch (error) {
        console.error("Error fetching Products data: ", error);
      }
    };
    fetchData();
  }, []);

  const slicedData = data.slice(0, 10);
  return (
    <>
      <div className="text-center mt-5 pt-5">
        <h1 className="text-white h1-head">Today's Headline</h1>
      </div>
      <Carousel className="mt-3">
        {slicedData.map((article) => (
          <Carousel.Item
            key={article.url}
            className="border border-secondary text-center "
          >
            <a href={article.url}>
              {article.urlToImage ? (
                <Image
                style={{height:"50vh"}}
                  className="img-fluid"
                  alt={article.urlToImage}
                  src={article.urlToImage}
                />
              ) : (
                <Image
                style={{height:"50vh"}}

                  variant="top"
                  className="card-images img-fluid"
                  src={noimage}
                />
              )}
              <Carousel.Caption>
                {article.urlToImage ? (
                  <h3 className="h1-text text">{article.title}</h3>
                ) : (
                  <h3 className="h1-text text-info">{article.title}</h3>
                )}
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
