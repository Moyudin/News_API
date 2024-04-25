import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Image } from "react-bootstrap";
import noimage from "../assets/noimage.jpg";

function Cards({ title, image, description, url }) {
  return (
    <>
      <Col sm={5} md={4} lg={3}>
        <Card
          className="my-2 mx-auto img-fluid border-secondary bg-dark text-white"
          style={{ width: "18rem", height: "480px" }}
        >
          {image ? (
            <Image
              className="img-fluid"
              alt={image}
              src={image}
              style={{ maxHeight: "150px" }}
            />
          ) : (
            <Image
              variant="top"
              className="card-images"
              src={noimage}
              style={{ maxHeight: "150px" }}
            />
          )}
          <Card.Body>
            <Card.Title className="text-danger">{title.slice(0,50)}...</Card.Title>
            {description ? (
              <Card.Text>{description.slice(0, 50)}...</Card.Text>
            ) : (
              <Card.Text className="text-danger" style={{ fontSize: "12px" }}>
                Sorry But there is no description about the news
              </Card.Text>
            )}
          </Card.Body>
          <div className="text-center img-fluid mb-3">
            <a
              href={url}
              className="btn w-50 rounded-pill border border-info text-warning"
              style={{ fontSize: "12px" }}
              target="_blank"
              rel="noreferrer"
            >
              Show Details
            </a>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default Cards;
