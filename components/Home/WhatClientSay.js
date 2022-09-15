import React, { useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import "./componentStyles.css";

const WhatClientSay = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    if (counter === 4) setCounter(0);
    else {
      setCounter(counter + 1);
    }
  };

  const decreaseCounter = () => {
    if (counter === 0) setCounter(4);
    else {
      setCounter(counter - 1);
    }
  };
  const sayings = [
    {
      image: "/images/step-1.jpg",
      name: "Nischal Bohara",
      country: "England",
      stars: 5,
      saying: `Very impressed with their work. Detailed writing without missing a 
  thing. Very happy with the customer care team. Will use your 
service again.`,
    },
    {
      image: "/images/step-1.jpg",
      name: "shiva khatri",
      country: "England",
      stars: 5,
      saying: `Very impressed with their work. Detailed writing without missing a 
thing. Very happy with the customer care team. Will use your 
service again.`,
    },
    {
      image: "/images/step-1.jpg",
      name: "Jessica Gates",
      country: "England",
      stars: 5,
      saying: `Very impressed with their work. Detailed writing without missing a 
thing. Very happy with the customer care team. Will use your 
service again.`,
    },
    {
      image: "/images/step-1.jpg",
      name: "Bibek Lamichhane",
      country: "England",
      stars: 5,
      saying: `Very impressed with their work. Detailed writing without missing a 
thing. Very happy with the customer care team. Will use your 
service again.`,
    },
    {
      image: "/images/step-1.jpg",
      name: "prashanna gaire",
      country: "England",
      stars: 5,
      saying: `Very impressed with their work. Detailed writing without missing a 
thing. Very happy with the customer care team. Will use your 
service again.`,
    },
  ];
  return (
    <div style={{ background: "#EFF7FF" }}>
      <Container className="pt-1">
        <PurpleHeading title="What Our Clients Say" />
        <Row
          className="position-relative d-flex justify-content-center align-items-center pt-1 pb-5 whatClientSayComponent"
          style={{ height: "80vh", width: "100%" }}
        >
          <Button
            className="position-absolute whatClientSayRightButton"
            style={{
              top: "50%",
              right: "10%",
              width: "fit-content",
              background: "#3C0F6A",
              fontSize: "20px",
              padding: "3px 10px",
            }}
            onClick={increaseCounter}
          >
            <ChevronLeftRoundedIcon />
          </Button>
          <Button
            className="position-absolute  whatClientSayLeftButton"
            style={{
              top: "50%",
              left: "10%",
              width: "fit-content",
              background: "#3C0F6A",
              fontSize: "20px",
              padding: "3px 10px",
            }}
            onClick={decreaseCounter}
          >
            <ChevronRightRoundedIcon />
          </Button>

          <Card
            className="px-0 px-md-0 whatClientSayCard"
            style={{
              height: "80%",
              width: "55%",
              marginTop: "100px",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 4px 5px rgba(0, 0, 0, 0.25)",
              zIndex: "-1",
            }}
          >
            <div
              className="position-absolute whatClientSayImage"
              style={{
                height: "150px",
                width: "150px",
                marginTop: "-75px",
              }}
            >
              <img
                src={sayings[counter].image}
                alt="Client"
                style={{ objectFit: "contain", borderRadius: "100%" }}
                className="img-fluid"
              />
            </div>
            <div
              className="whatClientSayName"
              style={{
                marginTop: "75px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ color: "red", fontWeight: "700" }}>
                {sayings[counter].name}
              </p>
              <span> {sayings[counter].country}</span>
              <div
                style={{
                  background: "red",
                  borderRadius: "100%",
                  color: "white",
                  width: "fit-content",
                  padding: "3px 10px",
                  marginBottom: "10px",
                }}
              >
                <FormatQuoteRoundedIcon />
              </div>
              <span>⭐⭐⭐⭐⭐</span>
              <p
                className="text-center mt-2 mx-0 mx-md-5 whatClientSaySaying"
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Century Gothic",
                  marginBottom: "10px",
                }}
              >
                {sayings[counter].saying}
              </p>
            </div>
          </Card>
          <div className="d-flex justify-content-center mt-3 mb-3 mb-md-0">
            <div style={{ display: "flex" }}>
              <div
                style={{
                  height: "5px",
                  width: "40px",
                  background: counter === 0 ? "#3C0F6A" : "#3C0F6A80",
                  marginRight: "5px",
                  borderRadius: "5px",
                }}
              ></div>
              <div
                style={{
                  height: "5px",
                  width: "40px",
                  background: counter === 1 ? "#3C0F6A" : "#3C0F6A80",
                  marginRight: "5px",
                  borderRadius: "5px",
                }}
              ></div>
              <div
                style={{
                  height: "5px",
                  width: "40px",
                  background: counter === 2 ? "#3C0F6A" : "#3C0F6A80",
                  marginRight: "5px",
                  borderRadius: "5px",
                }}
              ></div>
              <div
                style={{
                  height: "5px",
                  width: "40px",
                  background: counter === 3 ? "#3C0F6A" : "#3C0F6A80",
                  marginRight: "5px",
                  borderRadius: "5px",
                }}
              ></div>
              <div
                style={{
                  height: "5px",
                  width: "40px",
                  background: counter === 4 ? "#3C0F6A" : "#3C0F6A80",
                  marginRight: "5px",
                  borderRadius: "5px",
                }}
              ></div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default WhatClientSay;
