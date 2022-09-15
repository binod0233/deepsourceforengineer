import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const FrequentlyAsked = () => {
  const [firstActive, setFirstActive] = useState(false);
  const [secondActive, setSecondActive] = useState(false);
  const [thirdActive, setThirdActive] = useState(false);
  const [fourthActive, setFourthActive] = useState(false);
  const [fifthActive, setFifthActive] = useState(false);
  const [sixthActive, setSixthActive] = useState(false);

  return (
    <Container>
      <PurpleHeading title="Frequently asked questions" />
      <Row className="mt-md-5">
        <Col xs={12} md={6} className="p-4 my-2 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{
              height: firstActive ? "fit-content" : 0,
              paddingBottom: "10px",
            }}
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
                <strong>What is CDR Report, and why it is Required?</strong>
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
                A competency Demonstration report, also known as CDR, is a
                document that reflects your engineering knowledge, skills,
                abilities, and experience to get selected as an engineer for an
                Australian immigration visa. CDR Report is prepared for
                Engineers Australia to prove that you are an eligible candidate
                for the position you applied for on an Australian immigration
                visa.
              </p>
            </Row>
          </div>
        </Col>

        <Col xs={12} md={6} className="p-4 mt-2 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{
              height: secondActive ? "fit-content" : 0,
              paddingBottom: "10px",
            }}
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
                  How do I write My perfect competency Demonstration (CDR)
                  Report?
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
                A perfect CDR Report is written by following all the strict
                guidelines of Engineers Australia mentioned in the MSA booklet.
                Engineers Australia Expects you to write an ideal CDR Report on
                your own; However, you might be an inexperienced writer so you
                can take professional help from reliable Service providers.
              </p>
            </Row>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs={12} md={6} className="p-4 mb-2 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{
              height: thirdActive ? "fit-content" : 0,
              paddingBottom: "10px",
            }}
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
                  Do you offer complete CDRs report writing services for an
                  Australian immigration visa?
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
                We offer our complete CDRs report writing and reviewing
                services, including a Summary statement Report, three career
                Episode Reports, continuing Professional development (CPD)
                Report, and Cv-Resume Report for an Australian immigration visa.{" "}
              </p>
            </Row>
          </div>
        </Col>

        <Col xs={12} md={6} className="p-4 my-2 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{
              height: fourthActive ? "fit-content" : 0,
              paddingBottom: "10px",
            }}
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
                  What are the documents required for the CDR writing service?
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
                The Documents Required for CDR writing services are as follows:
                <br />
                • Three Career Episodes Report (Academic/project/work bases)
                <br />
                • Summary Statement Report
                <br />
                • Continuing Professional Development (CPD) Report
                <br />
                • Cv-Resume Report
                <br />
                • Recent passport size photograph
                <br />
                • Bio page of your identity
                <br />
                • English language test Report
                <br />
                • Academic Transcripts Certificate
                <br />
              </p>
            </Row>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs={12} md={6} className="p-4 my-3 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{
              height: fifthActive ? "fit-content" : 0,
              paddingBottom: "10px",
            }}
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
                  Which English language tests do Engineers Australia accept?
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
                The English Language tests that Engineers Australia accepts are:
                <br />
                • IELTS
                <br />
                • TOEFL iBT <br />
              </p>
            </Row>
          </div>
        </Col>

        <Col xs={12} md={6} className="p-4 my-4 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{
              height: sixthActive ? "fit-content" : 0,
              zIndex: "-1",
              paddingBottom: "10px",
            }}
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
                <strong>How fast can you deliver my CDRs Report?</strong>
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
              style={{ display: sixthActive ? "block" : "none" }}
            >
              <p className="frequentlyAskedParagraph">
                We will deliver you a complete CDR Report within Three weeks.
              </p>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FrequentlyAsked;
