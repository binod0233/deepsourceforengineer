import Chatra from "@chatra/chatra";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import "./componentStyles.css";

const WorkProgress = () => {
  return (
    <Container className="pt-4">
      <h1 className="workProgressHeading">
        CDR For Engineer&apos;s Work Process
      </h1>
      <Row>
        <Col xs={6}>
          <div className="mb-md-5 px-md-3 mt-5 mt-md-0">
            <img
              src="/images/step-1.png"
              alt="CDR For Engineer's Work Process"
              style={{ marginLeft: "5vw" }}
              className="img-fluid"
            />
          </div>
        </Col>
        <Col xs={6} className="px-md-5">
          <h4 className="stepsHeading">Step 01</h4>
          <h4 className="stepsSubHeading">Let us know</h4>
          <p className="stepsParagraph">
            First of all, you need to fill up the submission form or directly
            interact with our agent view chat by providing all the necessary
            information and details for the CDR Report Writing.
          </p>
          <p
            className="getStartedLink"
            style={{
              marginTop: "20px",
              fontSize: "18px",
              color: "#3E106D",
              cursor: "pointer",
            }}
            // onClick={() => Chatra("openChat", true)}
          >
            <div data-id="a454874ff4" class="livechat_button">
              <a href="https://www.livechat.com/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_14286585">
                <strong>
                  Get Started <ArrowForwardRoundedIcon />
                </strong>
              </a>
            </div>
            {/* <strong>
              Get Started <ArrowForwardRoundedIcon/>
            </strong> */}
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={6} className="px-md-5">
          <h4 className="stepsHeading">Step 02</h4>
          <h4 className="stepsSubHeading">Confirm Your Commitment</h4>
          <p className="stepsParagraph">
            As you submit all the necessary information and details for CDR
            writing, you need to discuss your project with our top Expert
            writers and then complete the payment process of the order as
            mentioned on the pricing page.
          </p>
          <p
            className="getStartedLink"
            style={{
              marginTop: "20px",
              fontSize: "18px",
              color: "#3E106D",
              cursor: "pointer",
            }}
            // onClick={() => Chatra("openChat", true)}
          >
            <div data-id="a454874ff4" class="livechat_button">
              <a href="https://www.livechat.com/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_14286585">
                <strong>
                  Get Started <ArrowForwardRoundedIcon />
                </strong>
              </a>
            </div>
            {/* <strong>
              Get Started <ArrowForwardRoundedIcon/>
            </strong> */}
          </p>
        </Col>
        <Col xs={6}>
          <img
            src="/images/step-2.png"
            alt="discuss your project with our top Expert
            writers"
            style={{ marginRight: "5vw", objectFit: "contain" }}
            className="img-fluid mt-5"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6} className="pt-5">
          <img
            src="/images/step-3.jpg"
            alt="Confirm the payment"
            style={{
              marginLeft: "5vw",
              marginTop: "5vh",
              objectFit: "contain",
            }}
            className="img-fluid"
          />
        </Col>
        <Col xs={6} className="px-md-5">
          <h4 className="stepsHeading">Step 03</h4>
          <h4 className="stepsSubHeading">Provide Draft Copy</h4>
          <p className="stepsParagraph">
            As soon as your payment is confirmed, we will send you a Draft Copy
            of CDR Writing to verify and check all the details carefully and pin
            point the changes you want in the report.
          </p>
          <p
            className="getStartedLink"
            style={{
              marginTop: "20px",
              fontSize: "18px",
              color: "#3E106D",
              cursor: "pointer",
            }}
            // onClick={() => Chatra("openChat", true)}
          >
            <div data-id="a454874ff4" class="livechat_button">
              <a href="https://www.livechat.com/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_14286585">
                <strong>
                  Get Started <ArrowForwardRoundedIcon />
                </strong>
              </a>
            </div>
            {/* <strong>
              Get Started <ArrowForwardRoundedIcon/>
            </strong> */}
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={6} className="px-md-5">
          <h4 className="stepsHeading">Step 04</h4>
          <h4 className="stepsSubHeading">Get your Quality CDR Report</h4>
          <p className="stepsParagraph">
            Have a look at your top-quality CDR Report before your deadline at
            the Best Prices. Also, you can ask for further changes if required.
          </p>
          <p
            className="getStartedLink"
            style={{
              marginTop: "20px",
              fontSize: "18px",
              color: "#3E106D",
              cursor: "pointer",
            }}
            // onClick={() => Chatra("openChat", true)}
          >
            <div data-id="a454874ff4" class="livechat_button">
              <a href="https://www.livechat.com/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_14286585">
                <strong>
                  Get Started <ArrowForwardRoundedIcon />
                </strong>
              </a>
            </div>
            {/* <strong>
              Get Started <ArrowForwardRoundedIcon/>
            </strong> */}
          </p>
        </Col>
        <Col xs={6}>
          <div className="mb-5 px-3">
            <img
              src="/images/step-4.png"
              alt="top-quality CDR Report"
              style={{
                marginLeft: "5vw",
                marginTop: "5vh",
                objectFit: "contain",
              }}
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkProgress;
