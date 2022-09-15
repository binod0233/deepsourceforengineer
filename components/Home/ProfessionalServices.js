import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import "./componentStyles.css";

const ProfessionalServices = () => {
  const content = [
    {
      image: "/images/professional-services4.png",
      heading: "Complete CDR Package",
      data: `We  provide  you  with  a  Complete  CDR  package.  It  contains CDRreport  Writing, Career  Episode,  Summary  Statement  Writing,  and  other  top-notch services we will help you with.`,
    },
    {
      image: "/images/professional-services3.png",
      heading: "Complete RPL Package",
      data: `When it comes to quality, we always focus on all essential areas of knowledge and project report preparation for engineers’ skill assessment.`,
    },

    {
      image: "/images/professional-services5.png",
      heading: "CDR Reviewing",
      data: `This is one of the best and most offered services in CDR Report         Writing, whereas  we  view  your  Competency  Demonstration  Report-CDR  for  getting  a  100% positive assessment from EA.`,
    },
    {
      image: "/images/professional-2.png",
      heading: "CV-Resume Writing",
      data: `We  offer  experts writers  to  make  your  CV  stand  out  top  from  the competition and leave a good impression on engineers Australia -EA.`,
    },
    {
      image: "/images/professional-services6.png",
      heading: "Plagiarism Checking",
      data: `Your  CDR  reports  need  to  be  100  %  plagiarism-free,  and  it  is  the main  reason  for  rejection  by  Engineers  Australia -EA. We  are  here  to  make  Your  CDR report 100% plagiarism-free.`,
    },
    {
      image: "/images/professional-services1.png",
      heading: "Free Consultation",
      data: `We  provide  you  with  a  free  consultation  about  migration  skill assessment from our Expert advisors. You can request and get help for a free consultation.`,
    },
  ];
  return (
    <Container>
      <PurpleHeading title="CDR For Engineer has answers for all Your CDR Report Queries." />

      <p
        className="professionalParagraph"
        style={{
          fontFamily: "Century Gothic",
          fontWeignt: "400",
          fontSize: "18px",
          marginTop: "10px",
          color: "#666666",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        CDR For Engineer is one of Australia&apos;s best CDR writing service
        providers. To get help, contact us, and our experienced CDR writers
        would be pleased to help you at any time.
      </p>

      <p
        style={{
          fontFamily: "Century Gothic",
          fontWeignt: "700",
          fontSize: "18px",
          marginTop: "10px",
          color: "#666666",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <strong>Explore our Top-Notch Services. </strong>
      </p>
      <Row className="p-4">
        {content.map((c, index) => (
          <Col md={4} xs={6} key={index} className="p-md-4 p-1">
            <Card className="professionalServicesCard">
              <div className="d-flex justify-content-center ">
                <div
                  className="professionalMobileImage"
                  style={{
                    width: "80px",
                    height: "90px",
                    background: "#FA2545",
                    borderRadius: "10px",
                    margin: "15px 0 25px 0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={c.image}
                    alt={c.heading}
                    style={{ height: "80%", width: "80%" }}
                  />
                </div>
              </div>
              <h6 className="cardHeading">
                <strong>{c.heading}</strong>
              </h6>
              <p className="cardParagraph">{c.data}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProfessionalServices;
