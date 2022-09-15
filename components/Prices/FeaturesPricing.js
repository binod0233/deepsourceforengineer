import Chatra from "@chatra/chatra";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const FeaturesPricing = () => {
  const [firstActive, setFirstActive] = useState(false);
  const [secondActive, setSecondActive] = useState(false);
  const [thirdActive, setThirdActive] = useState(false);
  const [fourthActive, setFourthActive] = useState(false);

  return (
    <Container className="mb-5">
      <Row className="displayDesktopScreen">
        <Col md={3} xs={6} className="p-3">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #FFAD05",
              height: firstActive ? "fit-content" : "380px",
              paddingBottom: "10px",
              borderRadius: "20px 20px 0 0",
            }}
          >
            <div
              style={{
                height: "150px",
                background: "#FFAD05",
                borderRadius: "20px 20px 0 0",
              }}
              className="d-flex flex-column justify-content-center"
            >
              <div>
                <img
                  src="/images/titanium.png"
                  alt=""
                  style={{
                    height: "100px",
                    width: "100px",
                    margin: "20px 0 0 75px",
                  }}
                />
              </div>
              <p
                style={{
                  color: "white",
                  fontWeight: "700",
                  textAlign: "center",
                  fontFamily: "Century Gothic",
                  marginTop: "",
                }}
              >
                GOLD
              </p>
            </div>
            <div
              style={{ height: "160px" }}
              className=" pt-5 d-flex flex-column justify-content-center"
            >
              <div className="d-flex mt-4  justify-content-center">
                <div
                  style={{
                    color: "#2D2046",
                    fontWeight: "700",
                    textAlign: "center",
                    display: "flex",
                  }}
                  className="py-2"
                >
                  <div style={{ fontSize: "18px" }}>$</div>
                  <span style={{ fontSize: "45px" }}>439</span>{" "}
                </div>{" "}
              </div>
              <p
                style={{
                  color: "#787878",
                  fontWeight: "700",
                  textAlign: "center",
                  paddingBottom: "50px",
                  fontSize: "18px",
                }}
              >
                Delivered within 14 Days
              </p>
            </div>
            <div
              // onClick={() => Chatra("openChat", true)}
              className="d-flex justify-content-center align-items-center orderNowButton"
              style={{
                height: "15%",
                background: "#FFAD05",
                marginBottom: "-20px",
                cursor: "pointer",
              }}
            >
              <div data-id="a454874ff4" class="livechat_button">
                <a href="https://www.livechat.com/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_14286585">
                  <p
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    Order Now
                  </p>
                </a>
              </div>
              {/* <p style={{color:'white',fontSize:"20px",fontWeight:'700'}}>Order Now</p> */}
            </div>
            <div
              className="pt-4 px-3"
              style={{ display: firstActive ? "block" : "none" }}
            >
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#EAA20F",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>3 Career Episode</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFBF2",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#EAA20F",
                    background: "#FFFBF2",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Summary Statement</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#EAA20F",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>CPD</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFBF2",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#EAA20F",
                    background: "#FFFBF2",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Delivery Date</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#EAA20F",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Quality Assured</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFBF2",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#EAA20F",
                    background: "#FFFBF2",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Plagiarism Free Reports</Col>
              </Row>

              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#EAA20F",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Professional Writers</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFBF2",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#EAA20F",
                    background: "#FFFBF2",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>File Status Update</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#EAA20F",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Handling Unlimited Contents</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFBF2",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#EAA20F",
                    background: "#FFFBF2",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Comments from EA</Col>
              </Row>

              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#EAA20F",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Review Of Clients Projects</Col>
              </Row>
            </div>
          </div>
          <Button
            className="pricingViewFeaturesButton"
            onClick={() => setFirstActive(!firstActive)}
            style={{
              color: "#fff",
              outline: "none",
              background: "#F9C967",
              fontWeight: "400",
              border: "#fff",
              width: "100%",
              marginTop: firstActive ? "0px" : "-50px",
              padding: "0",
            }}
          >
            View Features{" "}
            {firstActive ? (
              <ExpandLessRoundedIcon />
            ) : (
              <ExpandMoreRoundedIcon />
            )}
          </Button>
        </Col>
        <Col md={3} xs={6} className="p-3">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #3D9AA1",
              height: secondActive ? "fit-content" : "380px",
              paddingBottom: "10px",
              borderRadius: "20px 20px 0 0",
            }}
          >
            <div
              style={{
                height: "150px",
                background: "#3D9AA1",
                borderRadius: "20px 20px 0 0",
              }}
              className="d-flex flex-column justify-content-center"
            >
              <div>
                <img
                  src="/images/diamond.png"
                  alt=""
                  style={{
                    height: "100px",
                    width: "100px",
                    margin: "20px 0 0 75px",
                  }}
                />
              </div>
              <p
                style={{
                  color: "white",
                  fontWeight: "700",
                  textAlign: "center",
                  fontFamily: "Century Gothic",
                  marginTop: "",
                }}
              >
                PLATINIUM
              </p>
            </div>
            <div
              style={{ height: "160px" }}
              className=" pt-5 d-flex flex-column justify-content-center"
            >
              <div className="d-flex mt-4  justify-content-center">
                <div
                  style={{
                    color: "#2D2046",
                    fontWeight: "700",
                    textAlign: "center",
                    display: "flex",
                  }}
                  className="py-2"
                >
                  <div style={{ fontSize: "18px" }}>$</div>
                  <span style={{ fontSize: "45px" }}>639</span>{" "}
                </div>{" "}
              </div>
              <p
                style={{
                  color: "#787878",
                  fontWeight: "700",
                  textAlign: "center",
                  paddingBottom: "50px",
                  fontSize: "18px",
                }}
              >
                Delivered within 10 Days
              </p>
            </div>
            <div
              // onClick={() => Chatra("openChat", true)}
              className="d-flex justify-content-center align-items-center orderNowButton"
              style={{
                height: "15%",
                background: "#3D9AA1",
                marginBottom: "-20px",
                cursor: "pointer",
              }}
            >
              <div data-id="a454874ff4" class="livechat_button">
                <a href="https://www.livechat.com/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_14286585">
                  <p
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    Order Now
                  </p>
                </a>
              </div>
              {/* <p style={{color:'white',fontSize:"20px",fontWeight:'700'}}>Order Now</p> */}
            </div>
            <div
              className="pt-4 px-3"
              style={{ display: secondActive ? "block" : "none" }}
            >
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#3D9AA1",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>3 Career Episode</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#CBFBFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#3D9AA1",
                    background: "#CBFBFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Summary Statement</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#3D9AA1",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>CPD</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#CBFBFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#3D9AA1",
                    background: "#CBFBFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Delivery Date</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#3D9AA1",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Quality Assured</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#CBFBFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#3D9AA1",
                    background: "#CBFBFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Plagiarism Free Reports</Col>
              </Row>

              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#3D9AA1",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Professional Writers</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#CBFBFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#3D9AA1",
                    background: "#CBFBFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>File Status Update</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#3D9AA1",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Handling Unlimited Contents</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#CBFBFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#3D9AA1",
                    background: "#CBFBFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Comments from EA</Col>
              </Row>

              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#3D9AA1",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Review Of Clients Projects</Col>
              </Row>
            </div>
          </div>

          <Button
            onClick={() => setSecondActive(!secondActive)}
            style={{
              color: "#fff",
              outline: "none",
              background: "#76D3DA",
              fontWeight: "400",
              border: "#fff",
              width: "100%",
              marginTop: secondActive ? "0" : "-50px",
              padding: "0",
            }}
          >
            View Features
            {secondActive ? (
              <ExpandLessRoundedIcon />
            ) : (
              <ExpandMoreRoundedIcon />
            )}
          </Button>
        </Col>
        <Col md={3} xs={6} className="p-3">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #D63E3E",
              height: thirdActive ? "fit-content" : "380px",
              paddingBottom: "10px",
              borderRadius: "20px 20px 0 0",
            }}
          >
            <div
              style={{
                height: "150px",
                background: "#D63E3E",
                borderRadius: "20px 20px 0 0",
              }}
              className="d-flex flex-column justify-content-center"
            >
              <div>
                <img
                  src="/images/platinium.png"
                  alt=""
                  style={{
                    height: "100px",
                    width: "100px",
                    margin: "20px 0 0 75px",
                  }}
                />
              </div>
              <p
                style={{
                  color: "white",
                  fontWeight: "700",
                  textAlign: "center",
                  fontFamily: "Century Gothic",
                  marginTop: "",
                }}
              >
                DIAMOND
              </p>
            </div>
            <div
              style={{ height: "160px" }}
              className=" pt-5 d-flex flex-column justify-content-center"
            >
              <div className="d-flex mt-4  justify-content-center">
                <div
                  style={{
                    color: "#2D2046",
                    fontWeight: "700",
                    textAlign: "center",
                    display: "flex",
                  }}
                  className="py-2"
                >
                  <div style={{ fontSize: "18px" }}>$</div>
                  <span style={{ fontSize: "45px" }}>939</span>{" "}
                </div>{" "}
              </div>
              <p
                style={{
                  color: "#787878",
                  fontWeight: "700",
                  textAlign: "center",
                  paddingBottom: "50px",
                  fontSize: "18px",
                }}
              >
                Delivered within 7 Days
              </p>
            </div>
            <div
              //  onClick={() => Chatra("openChat", true)}
              className="d-flex justify-content-center align-items-center orderNowButton"
              style={{
                height: "15%",
                background: "#D63E3E",
                marginBottom: "-20px",
                cursor: "pointer",
              }}
            >
              <div data-id="a454874ff4" class="livechat_button">
                <a href="https://www.livechat.com/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_14286585">
                  <p
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    Order Now
                  </p>
                </a>
              </div>
              {/* <p style={{color:'white',fontSize:"20px",fontWeight:'700',}}>Order Now</p> */}
            </div>
            <div
              className="px-3 mt-4"
              style={{ display: thirdActive ? "block" : "none" }}
            >
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#D63E3E",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>3 Career Episode</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFE3E3",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#D63E3E",
                    background: "#FFE3E3",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Summary Statement</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#D63E3E",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>CPD</Col>
              </Row>

              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFE3E3",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#D63E3E",
                    background: "#FFE3E3",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Quality Assured</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#D63E3E",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Plagiarism Free Reports</Col>
              </Row>

              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFE3E3",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#D63E3E",
                    background: "#FFE3E3",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Professional Writers</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#D63E3E",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>File Status Update</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFE3E3",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#D63E3E",
                    background: "#FFE3E3",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Handling Unlimited Contents</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#D63E3E",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Comments from EA</Col>
              </Row>

              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFE3E3",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#D63E3E",
                    background: "#FFE3E3",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Review Of Clients Projects</Col>
              </Row>

              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#D63E3E",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>EA Portal Upload</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFE3E3",
                }}
              >
                <Col
                  md={2}
                  className="ms-3 d-flex justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#D63E3E",
                    background: "#FFE3E3",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Documentation Guideline Help</Col>
              </Row>
            </div>
          </div>
          <Button
            onClick={() => setThirdActive(!thirdActive)}
            style={{
              color: "#fff",
              outline: "none",
              background: "#EB6D6D",
              fontWeight: "400",
              border: "#fff",
              width: "100%",
              marginTop: thirdActive ? "0px" : "-50px",
              padding: "0",
            }}
          >
            View Features
            {thirdActive ? (
              <ExpandLessRoundedIcon />
            ) : (
              <ExpandMoreRoundedIcon />
            )}
          </Button>
        </Col>
        <Col md={3} xs={6} className="p-3">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #40116F",
              height: fourthActive ? "fit-content" : "380px",
              paddingBottom: "10px",
              borderRadius: "20px 20px 0 0",
            }}
          >
            <div
              style={{
                height: "150px",
                background: "#40116F",
                borderRadius: "20px 20px 0 0",
              }}
              className="d-flex flex-column justify-content-center"
            >
              <div>
                <img
                  src="/images/gold.png"
                  alt=""
                  style={{
                    height: "100px",
                    width: "100px",
                    margin: "20px 0 0 75px",
                  }}
                />
              </div>
              <p
                style={{
                  color: "white",
                  fontWeight: "700",
                  textAlign: "center",
                  fontFamily: "Century Gothic",
                  marginTop: "",
                }}
              >
                TITANIUM
              </p>
            </div>
            <div
              style={{ height: "160px" }}
              className=" pt-5 d-flex flex-column justify-content-center"
            >
              <div className="d-flex mt-4  justify-content-center">
                <div
                  style={{
                    color: "#2D2046",
                    fontWeight: "700",
                    textAlign: "center",
                    display: "flex",
                  }}
                  className="py-2"
                >
                  <div style={{ fontSize: "18px" }}>$</div>
                  <span style={{ fontSize: "45px" }}>1239</span>{" "}
                </div>{" "}
              </div>
              <p
                style={{
                  color: "#787878",
                  fontWeight: "700",
                  textAlign: "center",
                  paddingBottom: "50px",
                  fontSize: "18px",
                }}
              >
                Delivered within 5 Days
              </p>
            </div>
            <div
              //  onClick={() => Chatra("openChat", true)}
              className="d-flex justify-content-center align-items-center orderNowButton"
              style={{
                height: "15%",
                background: "#40116F",
                marginBottom: "-20px",
                cursor: "pointer",
              }}
            >
              <div data-id="a454874ff4" class="livechat_button">
                <a href="https://www.livechat.com/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_14286585">
                  <p
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    Order Now
                  </p>
                </a>
              </div>
              {/* <p style={{color:'white',fontSize:"20px",fontWeight:'700'}}>Order Now</p> */}
            </div>
            <div
              className="px-3 mt-4"
              style={{ display: fourthActive ? "block" : "none" }}
            >
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="d-flex ms-3 justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#2D2046",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>3 Career Episode</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#F5EAFF",
                }}
              >
                <Col
                  md={2}
                  className="d-flex ms-3 justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#2D2046",
                    background: "#F5EAFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Summary Statement</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="d-flex ms-3 justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#2D2046",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>CPD</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#F5EAFF",
                }}
              >
                <Col
                  md={2}
                  className="d-flex ms-3 justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#2D2046",
                    background: "#F5EAFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Delivery Date</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="d-flex ms-3 justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#2D2046",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Quality Assured</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#F5EAFF",
                }}
              >
                <Col
                  md={2}
                  className="d-flex ms-3 justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#2D2046",
                    background: "#F5EAFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Plagiarism Free Reports</Col>
              </Row>

              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="d-flex ms-3 justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#2D2046",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Professional Writers</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#F5EAFF",
                }}
              >
                <Col
                  md={2}
                  className="d-flex ms-3 justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#2D2046",
                    background: "#F5EAFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>File Status Update</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="d-flex ms-3 justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#2D2046",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Handling Unlimited Contents</Col>
              </Row>

              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#F5EAFF",
                }}
              >
                <Col
                  md={2}
                  className="d-flex ms-3 justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#2D2046",
                    background: "#F5EAFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Review Of Clients Projects</Col>
              </Row>

              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="d-flex ms-3 justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#2D2046",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>EA Portal Upload</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#F5EAFF",
                }}
              >
                <Col
                  md={2}
                  className="d-flex ms-3 justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#2D2046",
                    background: "#F5EAFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Documentation Guideline Help</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="d-flex ms-3 justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#2D2046",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Rewrite CE on EA comment</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#F5EAFF",
                }}
              >
                <Col
                  md={2}
                  className="d-flex ms-3 justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#2D2046",
                    background: "#F5EAFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>Rewrite project on EA comment</Col>
              </Row>
              <Row
                className="d-flex align-items-center "
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "18px",
                  height: "50px",
                  background: "#FFFFFF",
                }}
              >
                <Col
                  md={2}
                  className="d-flex ms-3 justify-content-center align-items-center text-center px-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    height: "50px",
                    color: "#2D2046",
                    background: "#FFFFFF",
                  }}
                >
                  <CheckIcon />
                </Col>
                <Col>3 Reports Inclusive</Col>
              </Row>
            </div>
          </div>
          <Button
            onClick={() => setFourthActive(!fourthActive)}
            style={{
              color: "#fff",
              outline: "none",
              background: "#6A2DA7",
              fontWeight: "400",
              border: "#fff",
              width: "100%",
              marginTop: fourthActive ? "0px" : "-50px",
              padding: "0",
            }}
          >
            View Features
            {fourthActive ? (
              <ExpandLessRoundedIcon />
            ) : (
              <ExpandMoreRoundedIcon />
            )}
          </Button>
        </Col>
      </Row>

      <div className="displayMobieScreen ">
        <Row className="mt-md-5">
          <Col xs={12} className="p-4 my-3">
            <div
              className=""
              style={{
                height: firstActive ? "fit-content" : 0,
                paddingBottom: "10px",
              }}
            >
              <div
                className="py-2 px-3"
                style={{ background: "#FFAD05", borderRadius: "5px" }}
              >
                <div
                  className="pe-3 d-flex justify-content-between pricingFirst"
                  style={{
                    borderRadius: "5px",
                  }}
                  onClick={() => setFirstActive(!firstActive)}
                >
                  <div
                    style={{
                      color: "white",
                      fontWeight: "700",
                      textAlign: "center",
                      fontFamily: "Century Gothic",
                      marginTop: "23px",
                    }}
                  >
                    GOLD
                  </div>
                  <div>
                    <img
                      src="/images/titanium.png"
                      alt="basic pricing"
                      className="img-fluid"
                      style={{
                        height: "70px",
                        width: "70px",
                        marginRight: "20px",
                      }}
                    />
                    <span
                      className="text-white fs-2"
                      style={{ marginTop: "14px" }}
                    >
                      {firstActive ? (
                        <ExpandLessRoundedIcon />
                      ) : (
                        <ExpandMoreRoundedIcon />
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <Row
                className="frequentlyAskedRow"
                style={{ display: firstActive ? "block" : "none" }}
              >
                <Row>
                  <Col>
                    <div className="d-flex mt-4  justify-content-center">
                      <div
                        style={{
                          color: "#2D2046",
                          fontWeight: "700",
                          textAlign: "center",
                          display: "flex",
                        }}
                        className=""
                      >
                        <div style={{ fontSize: "18px" }}>$</div>
                        <span style={{ fontSize: "45px" }}>439</span>{" "}
                      </div>{" "}
                    </div>
                  </Col>
                  <Col>
                    <p
                      style={{
                        color: "#787878",
                        fontWeight: "700",
                        textAlign: "center",
                        paddingBottom: "50px",
                        fontSize: "18px",
                      }}
                    >
                      Delivered within 14 Days
                    </p>
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>3 Career Episode</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Summary Statement</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>CPD</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Delivery Date</Col>
                  <Col>15 Working Days</Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Quality Assured</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Plagiarism Free Reports</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>

                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Professional Writers</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>File Status Update</Col>
                  <Col>Once a week via call/message</Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Handling Unlimited Contents From EA</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>

                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Review Of Clients Projects</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>

                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>EA Portal Upload</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#FA2545",
                      background: "#FFFFFF",
                    }}
                  >
                    <CloseIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Documentstion Guideline Help</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#FA2545",
                      background: "#FFFFFF",
                    }}
                  >
                    <CloseIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Rewrite any CE upon EA comment</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#FA2545",
                      background: "#FFFFFF",
                    }}
                  >
                    <CloseIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Rewrite any project upon EA comment</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#FA2545",
                      background: "#FFFFFF",
                    }}
                  >
                    <CloseIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>3 Reports Inclusive</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#FA2545",
                      background: "#FFFFFF",
                    }}
                  >
                    <CloseIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Place your Order</Col>
                  <Col>
                    <div
                      className="d-flex justify-content-center align-items-center text-center colBottom1 text-white"
                      style={{
                        fontFamily: "sans-serif",
                        fontWeight: "600",
                        cursor: "pointer",
                        flex: "0.2",
                      }}
                      // onClick={() => Chatra("openChat", true)}
                    >
                      <div data-id="a454874ff4" class="livechat_button">
                        <a href="https://www.livechat.com/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_14286585">
                          Order Now
                        </a>
                      </div>
                      {/* Order Now */}
                    </div>
                  </Col>
                </Row>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12} className="p-4 my-3 ">
            <div
              className=""
              style={{
                height: secondActive ? "fit-content" : 0,
                paddingBottom: "10px",
              }}
            >
              <div
                className="py-2 px-3"
                style={{ background: "#3D9AA1", borderRadius: "5px" }}
              >
                <div
                  className="pe-3 d-flex justify-content-between "
                  style={{
                    borderRadius: "5px",
                  }}
                  onClick={() => setSecondActive(!secondActive)}
                >
                  <div
                    style={{
                      color: "white",
                      fontWeight: "700",
                      textAlign: "center",
                      fontFamily: "Century Gothic",
                      marginTop: "23px",
                    }}
                  >
                    PLATINIUM
                  </div>
                  <div>
                    <img
                      src="/images/diamond.png"
                      alt="basic pricing"
                      className="img-fluid"
                      style={{
                        height: "70px",
                        width: "70px",
                        marginRight: "20px",
                      }}
                    />
                    <span
                      className="text-white fs-2"
                      style={{ marginTop: "14px" }}
                    >
                      {secondActive ? (
                        <ExpandLessRoundedIcon />
                      ) : (
                        <ExpandMoreRoundedIcon />
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <Row
                className="frequentlyAskedRow"
                style={{ display: secondActive ? "block" : "none" }}
              >
                <Row>
                  <Col>
                    <div className="d-flex mt-4  justify-content-center">
                      <div
                        style={{
                          color: "#2D2046",
                          fontWeight: "700",
                          textAlign: "center",
                          display: "flex",
                        }}
                        className=""
                      >
                        <div style={{ fontSize: "18px" }}>$</div>
                        <span style={{ fontSize: "45px" }}>639</span>{" "}
                      </div>{" "}
                    </div>
                  </Col>
                  <Col>
                    <p
                      style={{
                        color: "#787878",
                        fontWeight: "700",
                        textAlign: "center",
                        paddingBottom: "50px",
                        fontSize: "18px",
                      }}
                    >
                      Delivered within 10 Days
                    </p>
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>3 Career Episode</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Summary Statement</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>CPD</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Delivery Date</Col>
                  <Col>10 Working Days</Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Quality Assured</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Plagiarism Free Reports</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>

                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Professional Writers</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>File Status Update</Col>
                  <Col>Twice a week via call/message</Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Handling Unlimited Contents From EA</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>

                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Review Of Clients Projects</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>

                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>EA Portal Upload</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#FA2545",
                      background: "#FFFFFF",
                    }}
                  >
                    <CloseIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Documentstion Guideline Help</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#FA2545",
                      background: "#FFFFFF",
                    }}
                  >
                    <CloseIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Rewrite any CE upon EA comment</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#FA2545",
                      background: "#FFFFFF",
                    }}
                  >
                    <CloseIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Rewrite any project upon EA comment</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#FA2545",
                      background: "#FFFFFF",
                    }}
                  >
                    <CloseIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>3 Reports Inclusive</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#FA2545",
                      background: "#FFFFFF",
                    }}
                  >
                    <CloseIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Place your Order</Col>
                  <Col>
                    <div
                      className="d-flex justify-content-center align-items-center text-center colBottom2 text-white"
                      style={{
                        fontFamily: "sans-serif",
                        fontWeight: "600",
                        cursor: "pointer",
                        flex: "0.2",
                      }}
                      // onClick={() => Chatra("openChat", true)}
                    >
                      <div data-id="a454874ff4" class="livechat_button">
                        <a href="https://www.livechat.com/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_14286585">
                          Order Now
                        </a>
                      </div>
                      {/* Order Now */}
                    </div>
                  </Col>
                </Row>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12} className="p-4 my-3 ">
            <div
              className=""
              style={{
                height: thirdActive ? "fit-content" : 0,
                paddingBottom: "10px",
              }}
            >
              <div
                className="py-2 px-3"
                style={{ background: "#D63E3E", borderRadius: "5px" }}
              >
                <div
                  className="pe-3 d-flex justify-content-between"
                  style={{
                    borderRadius: "5px",
                  }}
                  onClick={() => setThirdActive(!thirdActive)}
                >
                  <div
                    style={{
                      color: "white",
                      fontWeight: "700",
                      textAlign: "center",
                      fontFamily: "Century Gothic",
                      marginTop: "23px",
                    }}
                  >
                    DIAMOND
                  </div>
                  <div>
                    <img
                      src="/images/platinium.png"
                      alt="basic pricing"
                      className="img-fluid"
                      style={{
                        height: "70px",
                        width: "70px",
                        marginRight: "20px",
                      }}
                    />
                    <span
                      className="text-white fs-2"
                      style={{ marginTop: "14px" }}
                    >
                      {firstActive ? (
                        <ExpandLessRoundedIcon />
                      ) : (
                        <ExpandMoreRoundedIcon />
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <Row
                className="frequentlyAskedRow"
                style={{ display: thirdActive ? "block" : "none" }}
              >
                <Row>
                  <Col>
                    <div className="d-flex mt-4  justify-content-center">
                      <div
                        style={{
                          color: "#2D2046",
                          fontWeight: "700",
                          textAlign: "center",
                          display: "flex",
                        }}
                        className=""
                      >
                        <div style={{ fontSize: "18px" }}>$</div>
                        <span style={{ fontSize: "45px" }}>939</span>{" "}
                      </div>{" "}
                    </div>
                  </Col>
                  <Col>
                    <p
                      style={{
                        color: "#787878",
                        fontWeight: "700",
                        textAlign: "center",
                        paddingBottom: "50px",
                        fontSize: "18px",
                      }}
                    >
                      Delivered within 7 Days
                    </p>
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>3 Career Episode</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Summary Statement</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>CPD</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Delivery Date</Col>
                  <Col>7 Working Days</Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Quality Assured</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Plagiarism Free Reports</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>

                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Professional Writers</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>File Status Update</Col>
                  <Col>Daily in a week via call/message</Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Handling Unlimited Contents From EA</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>

                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Review Of Clients Projects</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>

                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>EA Portal Upload</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Documentation Guideline Help</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Rewrite any CE upon EA comment</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#FA2545",
                      background: "#FFFFFF",
                    }}
                  >
                    <CloseIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Rewrite any project upon EA comment</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#FA2545",
                      background: "#FFFFFF",
                    }}
                  >
                    <CloseIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>3 Reports Inclusive</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#FA2545",
                      background: "#FFFFFF",
                    }}
                  >
                    <CloseIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Place your Order</Col>
                  <Col>
                    <div
                      className="d-flex justify-content-center align-items-center text-center colBottom3 text-white"
                      style={{
                        fontFamily: "sans-serif",
                        fontWeight: "600",
                        cursor: "pointer",
                        flex: "0.2",
                      }}
                      // onClick={() => Chatra("openChat", true)}
                    >
                      <div data-id="a454874ff4" class="livechat_button">
                        <a href="https://www.livechat.com/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_14286585">
                          Order Now
                        </a>
                      </div>
                      {/* Order Now */}
                    </div>
                  </Col>
                </Row>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 ">
          <Col xs={12} className="p-4 my-3 ">
            <div
              className=""
              style={{
                height: fourthActive ? "fit-content" : 0,
                paddingBottom: "10px",
              }}
            >
              <div
                className="py-2 px-3"
                style={{ background: "#40116F", borderRadius: "5px" }}
              >
                <div
                  className="pe-3 d-flex justify-content-between "
                  style={{
                    borderRadius: "5px",
                  }}
                  onClick={() => setFourthActive(!fourthActive)}
                >
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <img
                      src="/crown.png"
                      alt="basic pricing"
                      className="img-fluid"
                      style={{
                        height: "20px",
                        width: "25px",
                        marginRight: "20px",
                      }}
                    />
                    <div
                      style={{
                        color: "white",
                        fontWeight: "700",
                        textAlign: "center",
                        fontFamily: "Century Gothic",
                      }}
                    >
                      TITANIUM
                    </div>
                  </div>

                  <div>
                    <img
                      src="/images/gold.png"
                      alt="basic pricing"
                      className="img-fluid"
                      style={{
                        height: "70px",
                        width: "70px",
                        marginRight: "20px",
                      }}
                    />
                    <span
                      className="text-white fs-2"
                      style={{ marginTop: "14px" }}
                    >
                      {fourthActive ? (
                        <ExpandLessRoundedIcon />
                      ) : (
                        <ExpandMoreRoundedIcon />
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <Row
                className="frequentlyAskedRow"
                style={{ display: fourthActive ? "block" : "none" }}
              >
                <Row>
                  <Col>
                    <div className="d-flex mt-4  justify-content-center">
                      <div
                        style={{
                          color: "#2D2046",
                          fontWeight: "700",
                          textAlign: "center",
                          display: "flex",
                        }}
                        className=""
                      >
                        <div style={{ fontSize: "18px" }}>$</div>
                        <span style={{ fontSize: "45px" }}>1239</span>{" "}
                      </div>{" "}
                    </div>
                  </Col>
                  <Col>
                    <p
                      style={{
                        color: "#787878",
                        fontWeight: "700",
                        textAlign: "center",
                        paddingBottom: "50px",
                        fontSize: "18px",
                      }}
                    >
                      Delivered within 5 Days
                    </p>
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>3 Career Episode</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Summary Statement</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>CPD</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Delivery Date</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Quality Assured</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Plagiarism Free Reports</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>

                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Professional Writers</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>File Status Update</Col>
                  <Col>Daily in a week via call/message</Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Handling Unlimited Contents From EA</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>

                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Review Of Clients Projects</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>

                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>EA Portal Upload</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Documentstion Guideline Help</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Rewrite any CE upon EA comment</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Rewrite any project upon EA comment</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>3 Reports Inclusive</Col>
                  <Col
                    className="d-flex justify-content-center align-items-center text-center px-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      height: "50px",
                      color: "#0EAF00",
                      background: "#FFFFFF",
                    }}
                  >
                    <CheckIcon />
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center "
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "18px",
                    height: "50px",
                    background: "#FFFFFF",
                  }}
                >
                  <Col>Place your Order</Col>
                  <Col>
                    <div
                      className="d-flex justify-content-center align-items-center text-center colBottom4 text-white"
                      style={{
                        fontFamily: "sans-serif",
                        fontWeight: "600",
                        cursor: "pointer",
                        flex: "0.2",
                      }}
                      // onClick={() => Chatra("openChat", true)}
                    >
                      <div data-id="a454874ff4" class="livechat_button">
                        <a href="https://www.livechat.com/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_14286585">
                          Order Now
                        </a>
                      </div>
                      {/* Order Now */}
                    </div>
                  </Col>
                </Row>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default FeaturesPricing;
