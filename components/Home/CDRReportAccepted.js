import Chatra from "@chatra/chatra";
import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";

// import { useNavigate } from "react-router-dom";
// import "./CDRReportAccepted.css";

const CDRReportAccepted = ({ title, data, buttonName, contentBelow, link }) => {
  const router = useRouter();

  // const navigate = useNavigate();
  return (
    <div
      className="acceptedBackgrounded "
      style={{
        background:
          "linear-gradient( 90deg,#60269e 0%,#4c1980 35.73%,#360b62 100%)",
      }}
    >
      <Container className="pt-3">
        <h1 className="CDRReportAcceptedHeading">{title}</h1>
        <p className="CDRReportAcceptParagraph">{data}</p>
        <Row className="d-flex justify-content-center">
          <Button
            className="CDRReportAcceptButton"
            style={{
              width: "fit-content",
              color: "white",
              padding: "4px 20px",
              background: "#FA2545",
              border: "none",
              fontSize: "20px",
              marginBottom: !contentBelow && "20px",
            }}
            onClick={() => {
              if (link) router.push(link);
              // else {
              //    Chatra("openChat", true)
              // }
            }}
          >
            {buttonName}
          </Button>
        </Row>

        {contentBelow && (
          <Row>
            <p className="mt-1 CDRReportAcceptParagraph">
              Want to know more about CDR For Engineer
              <Button
                style={{
                  border: "1px solid white",
                  marginLeft: "10px",
                  background: "transparent",
                  borderRadius: "10px",
                  padding: "3px 15px",
                }}
              >
                <a
                  href="https://www.youtube.com/channel/UCF1z62V5Lgq1iFpgbe0ORyw"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Watch Video
                </a>
              </Button>
            </p>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default CDRReportAccepted;
