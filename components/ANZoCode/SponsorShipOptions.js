import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const SponsorShipOptions = ({
  NTParagraphs,
  NTTick1,
  NTTick2,
  NTHeading,
  SATick1,
  SATick2,
  SAParagraphs1,
  SAParagraphs2,
  SAParagraphsTick1,
  SAParagraphsTick2,

  VICParagraphs,
  VICHeading,
  WAParagraphs,
  NSWHeading,
  NSWParagraph2,
  QLDHeading,
  QLDParagraphs,
  ACTParagraph1,
  ACTParagraph2,
  ACTTick1,
  ACTTick2,
  TASParagraph1,
  TASParagraph2,
}) => {
  const [active, showActive] = useState("");
  return (
    <Container>
      <h1
        className="managerEngineerPersonalTitle"
        style={{
          fontSize: "34px",
          color: "#370C64",
          fontFamily: "Cambria",
          fontWeight: "700",
          marginTop: "50px",
        }}
      >
        Sponsorship Options for Engineering Manager - ANZSCO 133211
      </h1>
      <Row>
        <Col>
          <Row>
            <Col className="p-1">
              <div
                onClick={() => showActive("NT")}
                style={{
                  background: active === "NT" ? "#349E3F" : "#5F259C",
                  height: "180px",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  borderRadius: "5px",
                  color: "white",
                  fontSize: "20px",
                  padding: "0 15px",
                  fontFamily: "Arial",
                  alignItems: "center",
                }}
              >
                Northern Territory (NT)
              </div>
            </Col>
            <Col className="p-1">
              <div
                onClick={() => showActive("SA")}
                style={{
                  background: active === "SA" ? "#349E3F" : "#5F259C",
                  height: "180px",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  borderRadius: "5px",
                  color: "white",
                  fontSize: "20px",
                  padding: "0 15px",
                  fontFamily: "Arial",
                  alignItems: "center",
                }}
              >
                South Australia (SA) (Adelaide)
              </div>
            </Col>
            <Col className="p-1">
              <div
                onClick={() => showActive("WA")}
                style={{
                  background: active === "WA" ? "#349E3F" : "#5F259C",
                  height: "180px",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  borderRadius: "5px",
                  color: "white",
                  fontSize: "20px",
                  padding: "0 15px",
                  fontFamily: "Arial",
                  alignItems: "center",
                }}
              >
                Western Australia (WA) (Perth)
              </div>
            </Col>
            <Col className="p-1">
              <div
                onClick={() => showActive("VIC")}
                style={{
                  background: active === "VIC" ? "#349E3F" : "#5F259C",
                  height: "180px",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  borderRadius: "5px",
                  color: "white",
                  fontSize: "20px",
                  padding: "0 15px",
                  fontFamily: "Arial",
                  alignItems: "center",
                }}
              >
                Victoria (VIC) (Melbourne)
              </div>
            </Col>
          </Row>
        </Col>

        <Col>
          <Row>
            <Col className="p-1">
              <div
                onClick={() => showActive("NSW")}
                style={{
                  background: active === "NSW" ? "#349E3F" : "#5F259C",
                  height: "180px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: "5px",
                  color: "white",
                  fontSize: "20px",
                  padding: "0 15px",
                  fontFamily: "Arial",
                }}
              >
                New South Wales (NSW) (Sydney)
              </div>
            </Col>
            <Col className="p-1">
              <div
                onClick={() => showActive("QLD")}
                style={{
                  background: active === "QLD" ? "#349E3F" : "#5F259C",
                  height: "180px",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  borderRadius: "5px",
                  color: "white",
                  fontSize: "20px",
                  padding: "0 15px",
                  fontFamily: "Arial",
                  alignItems: "center",
                }}
              >
                Queensland (QLD) (Brisbane)
              </div>
            </Col>
            <Col className="p-1">
              <div
                onClick={() => showActive("ACT")}
                style={{
                  background: active === "ACT" ? "#349E3F" : "#5F259C",
                  height: "180px",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  borderRadius: "5px",
                  color: "white",
                  fontSize: "20px",
                  padding: "0 15px",
                  fontFamily: "Arial",
                  alignItems: "center",
                }}
              >
                Australian Capital Territory (ACT) (Canberra)
              </div>
            </Col>
            <Col className="p-1">
              <div
                onClick={() => showActive("TAS")}
                style={{
                  background: active === "TAS" ? "#349E3F" : "#5F259C",
                  height: "180px",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  borderRadius: "5px",
                  color: "white",
                  fontSize: "20px",
                  padding: "0 15px",
                  fontFamily: "Arial",
                  alignItems: "center",
                }}
              >
                Tasmanian (TAS) (Hobart){" "}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      {active === "NT" && (
        <>
          <Row className="mt-5 mb-2">
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center text-white py-2"
              style={{ background: "#5F259C", borderRight: "1px solid white" }}
            >
              190 Visa Sponsorship
            </Col>
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center text-white"
              style={{ background: "#5F259C" }}
            >
              489 Visa Sponsorship
            </Col>
          </Row>
          {NTHeading && (
            <Row
              className="mobileText"
              style={{ border: "1.5px solid #8D8D8D" }}
            >
              <Col xs={1} className=" d-flex p-0">
                <div
                  className="mobileText"
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                    padding: "10px",
                  }}
                >
                  NT
                </div>
                <div
                  className="mobileText"
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {NTTick1 ? (
                    <CheckIcon className="text-success" />
                  ) : (
                    <CloseIcon className="text-danger" />
                  )}
                </div>
              </Col>
              <Col xs={5} className="mt-3 "></Col>
              <Col xs={1} className=" d-flex p-0">
                <div
                  className="mobileText"
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    borderLeft: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                  }}
                >
                  NT
                </div>
                <div
                  className="mobileText"
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {NTTick2 ? (
                    <CheckIcon className="text-success" />
                  ) : (
                    <CloseIcon className="text-danger" />
                  )}
                </div>
              </Col>
              <Col xs={5} className="mt-3 "></Col>
            </Row>
          )}
          {NTParagraphs.map((n, i) => (
            <Row
              key={i}
              className="mobileText"
              style={{ border: "1.5px solid #8D8D8D" }}
            >
              <Col xs={2} md={1} className=" d-flex px-0">
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                  }}
                >
                  NT
                </div>
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {n.tick1 ? (
                    <CheckIcon className="text-success" />
                  ) : (
                    <CloseIcon className="text-danger" />
                  )}
                </div>
              </Col>
              <Col xs={4} md={5} className="mt-3 sponsorshipTextColumn">
                {n.NTParagraphs1?.map((n, i) => (
                  <p key={i} className="text-md-center mb-md-5 px-0 mx-0">
                    {n}
                  </p>
                ))}
              </Col>
              <Col xs={2} md={1} className="d-flex px-0">
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    borderLeft: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                  }}
                >
                  NT
                </div>
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {n.tick2 ? (
                    <CheckIcon className="text-success" />
                  ) : (
                    <CloseIcon className="text-danger" />
                  )}
                </div>
              </Col>
              <Col xs={4} md={5} className="mt-3 sponsorshipTextColumn">
                {n.NTParagraphs2?.map((n, i) => (
                  <p key={i} className=" text-md-center mb-md-5 px-0 mx-0">
                    {n}
                  </p>
                ))}
              </Col>
            </Row>
          ))}
        </>
      )}
      {active === "SA" && (
        <>
          <Row className="mt-5 mb-2 mobileText">
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center text-white py-2"
              style={{ background: "#5F259C", borderRight: "1px solid white" }}
            >
              190 Visa Sponsorship
            </Col>
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center text-white"
              style={{ background: "#5F259C" }}
            >
              489 Visa Sponsorship
            </Col>
          </Row>
          <Row className="mobileText" style={{ border: "1.5px solid #8D8D8D" }}>
            <Col xs={2} md={1} className=" d-flex px-0">
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "700",
                }}
              >
                SA
              </div>
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {SATick1 ? (
                  <CheckIcon className="text-success" />
                ) : (
                  <CloseIcon className="text-danger" />
                )}
              </div>
            </Col>
            <Col xs={4} md={5} className="mt-3 sponsorshipTextColumn">
              <p className="text-center ">List current as of 21/05/2019</p>
            </Col>
            <Col xs={2} md={1} className=" d-flex px-0">
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  borderLeft: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "700",
                }}
              >
                SA
              </div>
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {SATick2 ? (
                  <CheckIcon className="text-success" />
                ) : (
                  <CloseIcon className="text-danger" />
                )}
              </div>
            </Col>
            <Col xs={4} md={5} className="mt-3 sponsorshipTextColumn">
              <p className="text-center ">List current as of 21/05/2019</p>
            </Col>
          </Row>
          <Row className="mobileText" style={{ border: "1.5px solid #8D8D8D" }}>
            <Col xs={2} md={1} className=" d-flex px-0">
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "700",
                }}
              >
                SA
              </div>
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {SAParagraphsTick1 ? (
                  <CheckIcon className="text-success" />
                ) : (
                  <CloseIcon className="text-danger" />
                )}
              </div>
            </Col>
            <Col xs={4} md={5} className="mt-3 sponsorshipTextColumn">
              {SAParagraphs1?.map((n, i) => (
                <p key={i} className="text-md-center mb-md-5">
                  {n}
                </p>
              ))}
            </Col>
            <Col xs={2} md={1} className=" d-flex px-0">
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  borderLeft: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "700",
                }}
              >
                SA
              </div>
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {SAParagraphsTick2 ? (
                  <CheckIcon className="text-success" />
                ) : (
                  <CloseIcon className="text-danger" />
                )}
              </div>
            </Col>
            <Col xs={4} md={5} className="mt-3 sponsorshipTextColumn">
              {SAParagraphs2?.map((n, i) => (
                <p key={i} className="text-md-center mb-md-5">
                  {n}
                </p>
              ))}
            </Col>
          </Row>
        </>
      )}

      {active === "VIC" && (
        <>
          <Row className="mt-5 mb-2 mobileText">
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center text-white py-2"
              style={{ background: "#5F259C", borderRight: "1px solid white" }}
            >
              190 Visa Sponsorship
            </Col>
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center text-white"
              style={{ background: "#5F259C" }}
            >
              489 Visa Sponsorship
            </Col>
          </Row>
          {VICHeading && (
            <Row
              className="mobileText"
              style={{ border: "1.5px solid #8D8D8D" }}
            >
              <Col xs={2} md={1} className=" d-flex px-0">
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                  }}
                >
                  VIC
                </div>
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CloseIcon className="text-danger" />
                </div>
              </Col>
              <Col xs={4} md={5} className="mt-3 mobileText">
                <p className="text-center ">List current as of 21/05/2019</p>
              </Col>
              <Col xs={2} md={1} className="d-flex px-0">
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    borderLeft: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                  }}
                >
                  VIC
                </div>
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CloseIcon className="text-danger" />
                </div>
              </Col>
              <Col xs={4} md={5} className="mt-3 mobileText">
                <p className="text-center ">List current as of 21/05/2019</p>
              </Col>
            </Row>
          )}
          {VICParagraphs.map((v, i) => (
            <Row
              key={i}
              className="mobileText"
              style={{ border: "1.5px solid #8D8D8D" }}
            >
              <Col xs={2} md={1} className="d-flex px-0">
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                  }}
                >
                  VIC
                </div>
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {v.tick1 ? (
                    <CheckIcon className="text-success" />
                  ) : (
                    <CloseIcon className="text-danger" />
                  )}
                </div>
              </Col>
              <Col xs={4} md={5} className="mt-3 sponsorshipTextColumn">
                <p className="text-center mb-md-5">
                  <strong>For Graduates in Victoria:</strong>
                </p>
                {v.VICParagraphs1?.map((n, i) => (
                  <p key={i} className="text-md-center mb-md-5">
                    {n}
                  </p>
                ))}
              </Col>
              <Col xs={2} md={1} className="d-flex px-0 ">
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    borderLeft: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                  }}
                >
                  VIC
                </div>
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {v.tick2 ? (
                    <CheckIcon className="text-success" />
                  ) : (
                    <CloseIcon className="text-danger" />
                  )}
                </div>
              </Col>
              <Col xs={4} md={5} className="mt-3 sponsorshipTextColumn">
                <p className="text-center mb-md-5">
                  <strong>For Graduates in Victoria:</strong>
                </p>

                {v.VICParagraphs2?.map((n, index) => (
                  <p key={index} className="text-md-center mb-md-5">
                    {n}
                  </p>
                ))}
              </Col>
            </Row>
          ))}
        </>
      )}

      {active === "WA" && (
        <>
          <Row className="mt-5 mb-2  mobileText">
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center text-white py-2"
              style={{ background: "#5F259C", borderRight: "1px solid white" }}
            >
              190 Visa Sponsorship
            </Col>
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center text-white"
              style={{ background: "#5F259C" }}
            >
              489 Visa Sponsorship
            </Col>
          </Row>
          <Row className="mobileText" style={{ border: "1.5px solid #8D8D8D" }}>
            <Col xs={2} md={1} className=" d-flex px-0">
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "700",
                }}
              >
                WA
              </div>
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CloseIcon className="text-danger" />
              </div>
            </Col>
            <Col xs={4} md={5} className="mt-3 mobileText">
              <p className="text-md-center ">List current as of 21/05/2019</p>
            </Col>
            <Col xs={2} md={1} className=" d-flex px-0">
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  borderLeft: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "700",
                }}
              >
                WA
              </div>
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "red",
                }}
              >
                <CloseIcon className="text-success" />
              </div>
            </Col>
            <Col xs={4} md={5} className="mt-3  mobileText">
              <p className="text-md-center ">List current as of 21/05/2019</p>
            </Col>
          </Row>
          {WAParagraphs?.map((n, index) => (
            <Row key={index} style={{ border: "1.5px solid #8D8D8D" }}>
              <Col xs={2} md={1} className=" d-flex px-0">
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                  }}
                >
                  WA
                </div>
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#0EAF00",
                  }}
                >
                  {n.WA1tick ? (
                    <CheckIcon className="text-success" />
                  ) : (
                    <CloseIcon className="text-danger" />
                  )}
                </div>
              </Col>
              <Col xs={4} md={5} className="mt-3 sponsorshipTextColumn">
                {n.WAParagraph1?.map((n, index) => (
                  <p key={index} className="text-center mb-5">
                    {n}
                  </p>
                ))}
              </Col>
              <Col xs={2} md={1} className=" d-flex px-0">
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    borderLeft: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                  }}
                >
                  WA
                </div>
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#0EAF00",
                  }}
                >
                  {n.WA2tick ? (
                    <CheckIcon className="text-success" />
                  ) : (
                    <CloseIcon className="text-danger" />
                  )}
                </div>
              </Col>
              <Col xs={4} md={5} className="mt-3 sponsorshipTextColumn">
                {n.WAParagraph2?.map((n, index) => (
                  <p key={index} className="text-md-center mb-md-5">
                    {n}
                  </p>
                ))}
              </Col>
            </Row>
          ))}
        </>
      )}

      {active === "NSW" && (
        <>
          <Row className="mt-5 mb-2 mobileText">
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center text-white py-2"
              style={{ background: "#5F259C", borderRight: "1px solid white" }}
            >
              190 Visa Sponsorship
            </Col>
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center text-white"
              style={{ background: "#5F259C" }}
            >
              489 Visa Sponsorship
            </Col>
          </Row>
          <Row className="mobileText" style={{ border: "1.5px solid #8D8D8D" }}>
            <Col
              xs={6}
              className="pt-3 "
              style={{ borderRight: "1px solid #8D8D8D" }}
            >
              <div>
                <strong
                  style={{
                    borderRight: "1px solid #8D8D8D",
                    paddingRight: "5px",
                    marginRight: "5px",
                  }}
                >
                  NSW
                </strong>{" "}
                {NSWHeading ? (
                  <CheckIcon className="text-success" />
                ) : (
                  <CloseIcon className="text-danger" />
                )}
              </div>
            </Col>

            <Col xs={6} className="pt-3 ">
              <p className="text-center ">
                <strong>NSW</strong>
              </p>
            </Col>
          </Row>
          {NSWParagraph2?.map((n, index) => (
            <Row
              className="mobileText"
              key={index}
              style={{ border: "1.5px solid #8D8D8D" }}
            >
              <Col
                xs={6}
                className="pt-3 "
                style={{ borderRight: "1px solid #8D8D8D" }}
              ></Col>

              <Col xs={6}>
                <Row>
                  <Col xs={1} style={{ borderRight: "1px solid #8D8D8D" }}>
                    {" "}
                  </Col>
                  <Col
                    xs={1}
                    style={{
                      borderRight: "1px solid #8D8D8D",
                      padding: "10px 0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    {n.tick ? (
                      <CheckIcon className="text-success" />
                    ) : (
                      <CloseIcon className="text-danger" />
                    )}
                  </Col>
                  <Col
                    xs={9}
                    style={{
                      padding: "10px 10px",
                      alignItems: "center",
                    }}
                  >
                    {n.location}
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}
        </>
      )}

      {active === "QLD" && (
        <>
          <Row className="mt-5 mb-2 mobileText">
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center text-white py-2"
              style={{ background: "#5F259C", borderRight: "1px solid white" }}
            >
              190 Visa Sponsorship
            </Col>
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center text-white"
              style={{ background: "#5F259C" }}
            >
              489 Visa Sponsorship
            </Col>
          </Row>

          {QLDHeading && (
            <Row
              className="mobileText"
              style={{ border: "1.5px solid #8D8D8D" }}
            >
              <Col xs={2} md={1} className="d-flex px-0">
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                  }}
                >
                  QLD
                </div>
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "red",
                  }}
                >
                  <CloseIcon className="text-danger" />
                </div>
              </Col>
              <Col xs={4} md={5} className="mt-3 ">
                <p className="text-center ">List current as of 21/05/2019</p>
              </Col>
              <Col xs={2} md={1} className=" d-flex px-0">
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    borderLeft: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                  }}
                >
                  QLD
                </div>
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "red",
                  }}
                >
                  <CloseIcon className="text-danger" />
                </div>
              </Col>
              <Col xs={4} md={5} className="mt-3 ">
                <p className="text-center ">List current as of 21/05/2019</p>
              </Col>
            </Row>
          )}

          {QLDParagraphs?.map((q, index) => (
            <Row
              className="mobileText"
              key={index}
              style={{ border: "1.5px solid #8D8D8D" }}
            >
              <Col xs={2} md={1} className=" d-flex px-0">
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                  }}
                >
                  QLD
                </div>
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#0EAF00",
                  }}
                >
                  {q.QLD1Tick ? (
                    <CheckIcon className="text-success" />
                  ) : (
                    <CloseIcon className="text-danger" />
                  )}
                </div>
              </Col>
              <Col xs={4} md={5} className="mt-3 sponsorshipTextColumn">
                {q.QLDParagraph1?.map((n, index) => (
                  <p className="text-md-center mb-md-5" key={index}>
                    {n}
                  </p>
                ))}
              </Col>
              <Col xs={2} md={1} className=" d-flex px-0">
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    borderLeft: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                  }}
                >
                  QLD
                </div>
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    borderRight: "1px solid #8D8D8D",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#0EAF00",
                  }}
                >
                  {q.QLD2Tick ? (
                    <CheckIcon className="text-success" />
                  ) : (
                    <CloseIcon className="text-danger" />
                  )}
                </div>
              </Col>
              <Col xs={4} md={5} className="mt-3 sponsorshipTextColumn">
                {q.QLDParagraph2?.map((n, i) => (
                  <p key={i} className="text-md-center mb-md-5">
                    {n}
                  </p>
                ))}
              </Col>
            </Row>
          ))}
        </>
      )}

      {active === "ACT" && (
        <>
          <Row className="mt-5 mb-2 mobileText">
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center text-white py-2"
              style={{ background: "#5F259C", borderRight: "1px solid white" }}
            >
              190 Visa Sponsorship
            </Col>
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center text-white"
              style={{ background: "#5F259C" }}
            >
              489 Visa Sponsorship
            </Col>
          </Row>

          <Row className="mobileText" style={{ border: "1.5px solid #8D8D8D" }}>
            <Col xs={2} md={1} className=" d-flex px-0">
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "700",
                }}
              >
                ACT
              </div>
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#0EAF00",
                }}
              >
                {ACTTick1 ? (
                  <CheckIcon className="text-success" />
                ) : (
                  <CloseIcon className="text-danger" />
                )}
              </div>
            </Col>
            <Col xs={4} md={5} className="mt-3 sponsorshipTextColumn">
              {ACTParagraph1.map((a, i) => (
                <p key={i} className="text-md-center mb-md-5">
                  {a}
                </p>
              ))}
            </Col>
            <Col xs={2} md={1} className=" d-flex px-0">
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  borderLeft: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "700",
                }}
              >
                ACT
              </div>
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#0EAF00",
                }}
              >
                {ACTTick2 ? (
                  <CheckIcon className="text-success" />
                ) : (
                  <CloseIcon className="text-danger" />
                )}
              </div>
            </Col>
            <Col xs={4} md={5} className="mt-3 sponsorshipTextColumn">
              {ACTParagraph2?.map((a, i) => (
                <p key={i} className="text-md-center mb-md-5">
                  {a}
                </p>
              ))}
            </Col>
          </Row>
        </>
      )}

      {active === "TAS" && (
        <>
          <Row className="mt-5 mb-2 mobileText">
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center text-white py-2"
              style={{ background: "#5F259C", borderRight: "1px solid white" }}
            >
              190 Visa Sponsorship
            </Col>
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center text-white"
              style={{ background: "#5F259C" }}
            >
              489 Visa Sponsorship
            </Col>
          </Row>

          <Row className="mobileText" style={{ border: "1.5px solid #8D8D8D" }}>
            <Col xs={2} md={1} className="d-flex px-0">
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "700",
                }}
              >
                TAS
              </div>
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#0EAF00",
                }}
              >
                <CheckIcon className="text-success" />
              </div>
            </Col>
            <Col xs={4} md={5} className="mt-3 sponsorshipTextColumn">
              <p className="text-md-center mb-md-5">
                <strong>Nomination Criteria:</strong>
              </p>
              {TASParagraph1.map((a, i) => (
                <p key={i} className="text-md-center mb-md-5">
                  {a}
                </p>
              ))}
            </Col>
            <Col xs={2} md={1} className="d-flex px-0">
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  borderLeft: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "700",
                }}
              >
                TAS
              </div>
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  borderRight: "1px solid #8D8D8D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#0EAF00",
                }}
              >
                <CheckIcon className="text-success" />
              </div>
            </Col>
            <Col xs={4} md={5} className="mt-3 sponsorshipTextColumn">
              <p className="text-md-center mb-md-5">
                <strong>Nomination Criteria:</strong>
              </p>

              {TASParagraph2.map((a, i) => (
                <p key={i} className="text-md-center mb-md-5">
                  {a}
                </p>
              ))}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default SponsorShipOptions;
