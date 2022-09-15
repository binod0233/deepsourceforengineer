import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

const FrequentlyAsked = () => {
  const [firstActive, setFirstActive] = useState(false);
  const [secondActive, setSecondActive] = useState(false);
  const [thirdActive, setThirdActive] = useState(false);
  const [fourthActive, setFourthActive] = useState(false);
  const [fifthActive, setFifthActive] = useState(false);
  const [sixthActive, setSixthActive] = useState(false);

  return (
    <Container className="mb-5">
      <PurpleHeading title="Frequently asked questions" />
      <Row className="mt-md-5">
        <Col xs={12} md={6} className="p-4 my-2 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{ height: firstActive ? "300px" : 0 }}
          >
            <div
              className="pe-3 d-flex justify-content-between "
              style={{
                background: firstActive ? "#4E1A83" : "white",
                border: "1px solid #4E1A83",
                borderRadius: "5px",
              }}
              onClick={() => setFirstActive(!firstActive)}
            >
              <p
                style={{
                  color: firstActive ? "white" : "#613D86",

                  padding: "10px",
                  fontFamily: "Arial",
                  fontWeight: "400",
                }}
              >
                <strong>Do I need to submit my academic project?</strong>
              </p>
              <span className="frequentlyAskedTitleParagraph">
                {firstActive ? (
                  <ExpandLessRoundedIcon />
                ) : (
                  <ExpandMoreRoundedIcon />
                )}
              </span>
            </div>
            <Row
              className="frequentlyAskedRow"
              style={{ display: firstActive ? "block" : "none" }}
            >
              <p className="frequentlyAskedParagraph">
                Yes, you can submit your academic projects done during your
                professional studies as a Career Episode in your CDR with
                relevant documentary evidences.
              </p>
            </Row>
          </div>
        </Col>

        <Col xs={12} md={6} className="p-4 mt-2 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{ height: secondActive ? "300px" : 0 }}
          >
            <div
              className="pe-3 d-flex justify-content-between "
              style={{
                background: secondActive ? "#4E1A83" : "white",
                border: "1px solid #4E1A83",
                borderRadius: "5px",
              }}
              onClick={() => setSecondActive(!secondActive)}
            >
              <p
                style={{
                  color: secondActive ? "white" : "#613D86",

                  padding: "10px",
                  fontFamily: "Arial",
                  fontWeight: "400",
                }}
              >
                <strong>
                  Should I provide employment reference letter for my CDR?
                </strong>
              </p>
              <span className="frequentlyAskedTitleParagraph">
                {secondActive ? (
                  <ExpandLessRoundedIcon />
                ) : (
                  <ExpandMoreRoundedIcon />
                )}
              </span>
            </div>
            <Row
              className="frequentlyAskedRow"
              style={{ display: secondActive ? "block" : "none" }}
            >
              <p className="frequentlyAskedParagraph">
                Yes, an employer reference letter is compulsory to provide if
                you have relevant experience of one or more years and also if
                you used the projects from CDR based on the work experience.
              </p>
            </Row>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs={12} md={6} className="p-4 mb-2 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{ height: thirdActive ? "300px" : 0 }}
          >
            <div
              className="pe-3 d-flex justify-content-between "
              style={{
                background: thirdActive ? "#4E1A83" : "white",
                border: "1px solid #4E1A83",
                borderRadius: "5px",
              }}
              onClick={() => setThirdActive(!thirdActive)}
            >
              <p
                style={{
                  color: thirdActive ? "white" : "#613D86",

                  padding: "10px",
                  fontFamily: "Arial",
                  fontWeight: "400",
                }}
              >
                <strong>
                  How much time does it take for a CDR to be delivered?
                </strong>
              </p>
              <span className="frequentlyAskedTitleParagraph">
                {thirdActive ? (
                  <ExpandLessRoundedIcon />
                ) : (
                  <ExpandMoreRoundedIcon />
                )}
              </span>
            </div>
            <Row
              className="frequentlyAskedRow"
              style={{ display: thirdActive ? "block" : "none" }}
            >
              <p className="frequentlyAskedParagraph">
                The components of the CDR Report include 3 Career Episodes, a
                Summary Statement, and Continuing Professional Development
                (CPD). Each of them plays an important role in your CDR skill
                assessment process.
              </p>
            </Row>
          </div>
        </Col>

        <Col xs={12} md={6} className="p-4 my-2 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{ height: fourthActive ? "300px" : 0 }}
          >
            <div
              className="pe-3 d-flex justify-content-between "
              style={{
                background: fourthActive ? "#4E1A83" : "white",
                border: "1px solid #4E1A83",
                borderRadius: "5px",
              }}
              onClick={() => setFourthActive(!fourthActive)}
            >
              <p
                style={{
                  color: fourthActive ? "white" : "#613D86",

                  padding: "10px",
                  fontFamily: "Arial",
                  fontWeight: "400",
                }}
              >
                <strong>
                  What are the requirements for CDR report writing service? Do I
                  need to submit any document?
                </strong>
              </p>
              <span className="frequentlyAskedTitleParagraph">
                {fourthActive ? (
                  <ExpandLessRoundedIcon />
                ) : (
                  <ExpandMoreRoundedIcon />
                )}
              </span>
            </div>
            <Row
              className="frequentlyAskedRow"
              style={{ display: fourthActive ? "block" : "none" }}
            >
              <p className="frequentlyAskedParagraph">
                Engineers Australia requires that all applicants provide
                evidence of their English language proficiency as part of their
                skill assessment. EngineersAustralia accepts IELTS, TOEFL iBT
                and PTE Academic English test results no more than three years
                from the test date at the time of receiving your application.
              </p>
            </Row>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs={12} md={6} className="p-4 my-3 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{ height: fifthActive ? "300px" : 0 }}
          >
            <div
              className="pe-3 d-flex justify-content-between "
              style={{
                background: fifthActive ? "#4E1A83" : "white",
                border: "1px solid #4E1A83",
                borderRadius: "5px",
              }}
              onClick={() => setFifthActive(!fifthActive)}
            >
              <p
                style={{
                  color: fifthActive ? "white" : "#613D86",

                  padding: "10px",
                  fontFamily: "Arial",
                  fontWeight: "400",
                }}
              >
                <strong>
                  How much time does it take for a CDR to be delivered?
                </strong>
              </p>
              <span className="frequentlyAskedTitleParagraph">
                {fifthActive ? (
                  <ExpandLessRoundedIcon />
                ) : (
                  <ExpandMoreRoundedIcon />
                )}
              </span>
            </div>
            <Row
              className="frequentlyAskedRow"
              style={{ display: fifthActive ? "block" : "none" }}
            >
              <p className="frequentlyAskedParagraph">
                Normally assistance in the complete CDR preparation takes about
                3 weeks.
              </p>
            </Row>
          </div>
        </Col>

        <Col xs={12} md={6} className="p-4 my-4 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{ height: sixthActive ? "550px" : 0 }}
          >
            <div
              className="pe-3 d-flex justify-content-between "
              style={{
                background: sixthActive ? "#4E1A83" : "white",
                border: "1px solid #4E1A83",
                borderRadius: "5px",
              }}
              onClick={() => setSixthActive(!sixthActive)}
            >
              <p
                style={{
                  color: sixthActive ? "white" : "#613D86",

                  padding: "10px",
                  fontFamily: "Arial",
                  fontWeight: "400",
                }}
              >
                <strong>
                  What are the requirements for CDR report writing service? Do I
                  need to submit any document?
                </strong>
              </p>
              <span className="frequentlyAskedTitleParagraph">
                {sixthActive ? (
                  <ExpandLessRoundedIcon />
                ) : (
                  <ExpandMoreRoundedIcon />
                )}
              </span>
            </div>
            <Row
              className="frequentlyAskedRow"
              style={{
                display: sixthActive ? "block" : "none",
              }}
            >
              <p className="frequentlyAskedParagraph">
                Different credentials or documents which are important to assess
                your engineering degree through Competency Demonstration Report
                (CDR) are given below:
                <br />
                <br />
                – One Passport Size Photograph
                <br />
                – Bio Page of Identity Proof
                <br />
                – CV / Resume
                <br />
                – English Test Result Card
                <br />
                – Three Career Episodes
                <br />
                – Certificate of Degree
                <br />
                – Certified Academic Transcripts
                <br />
                – 3 Career Episodes
                <br />
                – Continual Professional Development (CPD) Report
                <br />
                – Summary Statement
                <br />
              </p>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FrequentlyAsked;
