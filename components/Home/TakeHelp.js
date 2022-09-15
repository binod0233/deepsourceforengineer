import Chatra from "@chatra/chatra";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./componentStyles.css";

const TakeHelp = () => {
  return (
    <Container>
      <Row className="mt-3">
        <h1 className="takeHelpHeading">
          Take help From a Licensed professional CDR Writers for your CDR report
          writing.
        </h1>

        <p className="takeHelpParagraph">
          Your search for a trusted CDR report writing service provider is over.
          Professional CDR report writers with years of experience are here to
          assist you in writing your CDR that will get assessed by Engineers
          Australia. We offer high-quality CDR report from licensed Professional
          CDR Report Writers at a reasonable price.
        </p>
      </Row>
      <Row className="d-flex justify-content-center">
        <Button
          style={{
            width: "fit-content",
            background: "#5A2295",
            color: "white",
            border: "none",
          }}
          // onClick={() => Chatra("openChat", true)}
        >
          <div data-id="a454874ff4" class="livechat_button">
            <a href="https://www.livechat.com/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_14286585">
              Talk to our Experts
            </a>
          </div>
          {/* Talk to our Experts */}
        </Button>
      </Row>
      <Row>
        <Col
          md={4}
          className="px-0 mx-0 d-flex justify-content-center align-items-center"
        >
          <img
            src="/images/group-7.jpg"
            alt="Boy operating his tablet computer"
            className="mx-0 img-fluid"
          />
        </Col>
        <Col md={8}>
          {/* <Row>
            <h1 className="takeHelpHeading text-center text-md-start">
              CDR For Engineer Work process
            </h1>
          </Row> */}
          <Row>
            <Col md={1}></Col>
            <Col md={11}>
              <Row>
                <Col
                  md={2}
                  className="d-flex justify-content-center align-items-center"
                >
                  <div
                    style={{
                      borderRadius: "100%",
                      background: "#FA2545",
                      padding: "25px 15px",
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    100%
                  </div>
                </Col>
                <Col md={10} className="mt-2 px-3">
                  <h5 className=" text-center text-md-start">
                    <strong>Plagiarism Free Report</strong>
                  </h5>
                  <p className="bestCDRParagraph text-center text-md-start">
                    We provide the Best CDR Writing Services to assist
                    Engineering applicants in obtaining an Australian migration
                    visa. Our team goes through various steps of file
                    qualification using special software and also our team
                    includes licensed professional writers and experienced
                    engineers making your file 100% unique and free of
                    plagiarism.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col
                  md={2}
                  className=" d-flex justify-content-center align-items-center"
                >
                  <div
                    style={{
                      borderRadius: "100%",
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    <img
                      src="/images/take-help3.png"
                      alt="Best CDR Writing Services"
                      style={{ borderRadius: "100%" }}
                    />
                  </div>
                </Col>
                <Col md={10} className="mt-2 px-3">
                  {" "}
                  <h5 className=" text-center text-md-start">
                    <strong>Professional Report</strong>
                  </h5>
                  <p className="bestCDRParagraph text-center text-md-start">
                    With years of experience,our writers prepare CDR with clear
                    and concise content in professional structure and format to
                    deliver the best CDR writing services here in Australia.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col
                  md={2}
                  className="d-flex justify-content-center align-items-center"
                >
                  <div
                    style={{
                      borderRadius: "100%",
                      background: "#FA2545",
                      padding: "18px 20px",
                    }}
                  >
                    <img
                      src="/images/take-help2.png"
                      alt="prepare CDR with clear
                    and concise content"
                    />
                  </div>
                </Col>
                <Col md={10} className="mt-2 px-3">
                  {" "}
                  <h5 className=" text-center text-md-start">
                    <strong>Professional Experienced Writers:</strong>
                  </h5>
                  <p className="bestCDRParagraph text-center text-md-start">
                    Professional writers at CDR For Engineer will help you avoid
                    clichés and overworked angles and find a fresh way of
                    describing your information, identify missing material and
                    take the time to do the job right. Experienced writers will
                    use their skill and knowledge to your advantage to prepare
                    professional CDR report.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TakeHelp;
