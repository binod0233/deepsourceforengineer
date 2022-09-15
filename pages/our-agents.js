import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const OurAgents = () => {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const agents = [
    {
      name: "Sirja Ksetri",
      image: "/images/ourAgents/1.png",
      facebookLink: "https://www.facebook.com/profile.php?id=100080927829387",
      linkedInLink: "",
      instagramLink: "",
      phone: "61482072510",
    },
    {
      name: "Binu Mishra",
      image: "/images/ourAgents/2.png",
      facebookLink: "https://www.facebook.com/profile.php?id=100082172346949",
      linkedInLink: "https://www.linkedin.com/in/binu-mishra-103168241/",
      instagramLink: "https://www.instagram.com/binu.cdrforengineer/",
      phone: "61482070864",
    },
    {
      name: "Adhira Maharjan",
      image: "/images/ourAgents/3.png",
      facebookLink: "https://www.facebook.com/profile.php?id=100080942528620",
      linkedInLink: "https://www.linkedin.com/in/adhira-mahajan-/",
      instagramLink: "https://www.instagram.com/cdr_with_adhira/",
      phone: "61482070521",
    },
    {
      name: "Maira Thapa",
      image: "/images/ourAgents/4.png",
      facebookLink: "https://www.facebook.com/profile.php?id=100080996556778",
      linkedInLink: "https://www.linkedin.com/in/maira-thapa-536259241/",
      instagramLink: "https://www.instagram.com/cdr_with_maira/",
      phone: "61482072733",
    },
    {
      name: "Samaira Singh",
      image: "/images/ourAgents/5.png",
      facebookLink: "https://www.facebook.com/profile.php?id=100080772975496",
      linkedInLink: "https://www.linkedin.com/in/samaira-singh-a790b1241/",
      instagramLink: "https://www.instagram.com/samaira.cdrforengineer/",
      phone: "61482071295",
    },
  ];
  return (
    <div>
      <Head>
        <title>Meet Our Agents | CDR For Engineer</title>
        <meta name="description" content="Meet Our Agents | CDR For Engineer" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      {/* <div className='d-flex flex-column justify-content-center align-items-center'>
        <h1 style={{fontFamily:"Arial",fontSize:"34px",textAlign:'center', fontWeight:"700"}}>OOPS THIS PAGE IS </h1>
        <h1 style={{fontFamily:"Arial",fontSize:"34px",textAlign:'center',color:"#360b62 ", fontWeight:"700"}}> UNDER CONSTRUCTION</h1>
        <p>Sorry for the inconvenience. This Page will be avaiable Soon</p>
        <img src="/images/comming-soon.png" alt="under construction"/>
      </div> */}
      <div
        style={{
          background: `linear-gradient(
        90deg,
        #60269e 0%,
        #4c1980 35.73%,
        #360b62 100%
      )`,
          minHeight: "6rem",
        }}
      >
        <div className="container px-3 px-md-5">
          <Row>
            <Col md={6} xs={12} className="text-white mt-md-5 pt-md-5 mb-5">
              <h1 className="mt-1  text-center text-md-start">
                Meet Our Agents{" "}
              </h1>
              <p className="text-center text-md-start my-4">
                CDR For Engineer Writer Australia &gt;
                <strong> Meet Our Agents</strong>
              </p>
            </Col>

            <Col className="mt-5" md={6} xs={12}></Col>
          </Row>
        </div>
      </div>
      <Container>
        <Row className="mt-5">
          {agents.map((a, index) => {
            return (
              <Col key={index} md={3} className="p1-2 py-3">
                <div
                  className="mb-2"
                  style={{
                    background: "#FAFAFA",
                    boxShadow: "0.5px 0.5px 30px rgba(0, 0, 0, 0.3)",
                    borderRadius: "10px",
                    zIndex: "-1",
                  }}
                >
                  <Row className="p-2">
                    <img
                      src={a.image}
                      alt="agent"
                      className=" img-fluid"
                      style={{ height: "300px", width: "300px" }}
                    />
                  </Row>
                  <Row className="ps-2 my-2">
                    <Col
                      style={{
                        fontFamily: "Century Gothic",
                        textAlign: "center",
                        fontSize: "22px",
                        color: "#370C64",
                        fontWeight: "600",
                      }}
                    >
                      {a.name}
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      style={{
                        fontFamily: "Arial",
                        textAlign: "center",
                        fontSize: "18px",
                        color: "#5A5757",
                        fontWeight: "400",
                      }}
                    >
                      CDR Agent
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-center align-items-center mb-2">
                    <div className="d-flex justify-content-center align-items-center">
                      <div
                        style={{
                          background: "#370C64",
                          padding: "5px 5px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "white",
                          margin: "5px 3px",
                          borderRadius: "100%",
                        }}
                      >
                        <a href={a.facebookLink}>
                          <FacebookRoundedIcon />
                        </a>
                      </div>
                      <div
                        style={{
                          background: "#370C64",
                          padding: "5px 5px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "white",
                          margin: "5px 3px",
                          borderRadius: "100%",
                        }}
                      >
                        <a href={a.linkedInLink}>
                          <LinkedInIcon />
                        </a>
                      </div>
                      <div
                        style={{
                          background: "#370C64",
                          padding: "5px 5px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "white",
                          margin: "5px 3px",
                          borderRadius: "100%",
                        }}
                      >
                        <a href={a.instagramLink}>
                          <InstagramIcon />
                        </a>
                      </div>
                    </div>
                  </Row>
                </div>
                <Row className="d-flex justify-content-center align-items-center">
                  <Button
                    className="px-4"
                    style={{
                      fontSize: "18px",
                      width: "fit-content",
                      borderRadius: "10px",
                      background: "#0EAF00",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href={`https://api.whatsapp.com/send?phone=${a.phone}`}
                    >
                      <>
                        {" "}
                        <WhatsAppIcon
                          style={{ fontSize: "20px", marginBottom: "3px" }}
                        />
                        Talk with {a.name}
                      </>
                    </a>
                  </Button>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default OurAgents;
