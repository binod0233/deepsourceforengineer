import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const ManagerEngineer = ({
  title,
  titleDescription,
  image,
  special,
  specialDetail,
  personnelTitle,
  personnelDetails,
  skillText,
  averageTitle,
  averageDetails,
  jobDescription,
  smallTitle1,
  smallTitle2,
  smallTitle3,
  tasks,
  specialization,
  specializationList,
  smallTitle1Details,
  smallTitle2Details,
}) => {
  return (
    <Container>
      <PurpleHeading title={title} />
      <TextParagraph content={titleDescription} family="Arial" />

      <Row>
        <img src={image} alt={personnelTitle} />
      </Row>
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
        {personnelTitle}
      </h1>
      <TextParagraph content={personnelDetails} family="Arial" />

      <h1
        className="managerEngineerPersonalTitle"
        style={{
          fontSize: "20px",
          color: "#370C64",
          fontFamily: "Cambria",
          fontWeight: "700",
          marginTop: "10px",
        }}
      >
        {skillText}
      </h1>

      {special && (
        <h1
          className="managerEngineerPersonalTitle"
          style={{
            fontSize: "20px",
            color: "#370C64",
            fontFamily: "Cambria",
            fontWeight: "700",
            marginTop: "10px",
          }}
        >
          {special}
        </h1>
      )}
      {specialDetail && (
        <TextParagraph content={specialDetail} family="Arial" />
      )}

      <h1
        className="managerEngineerPersonalTitle"
        style={{
          fontSize: "35px",
          color: "#370C64",
          fontFamily: "Cambria",
          fontWeight: "700",
          marginTop: "10px",
        }}
      >
        {averageTitle}
      </h1>
      <TextParagraph content={averageDetails} family="Arial" />
      <h1
        className="managerEngineerPersonalTitle"
        style={{
          fontSize: "35px",
          color: "#370C64",
          fontFamily: "Cambria",
          fontWeight: "700",
          marginTop: "10px",
        }}
      >
        {jobDescription}
      </h1>

      <h1
        className="managerEngineerPersonalTitle"
        style={{
          fontSize: "20px",
          color: "#370C64",
          fontFamily: "Cambria",
          fontWeight: "700",
          marginTop: "10px",
        }}
      >
        {smallTitle1}
      </h1>

      <TextParagraph content={smallTitle1Details} family="Arial" />

      <h1
        className="managerEngineerPersonalTitle"
        style={{
          fontSize: "20px",
          color: "#370C64",
          fontFamily: "Cambria",
          fontWeight: "700",
          marginTop: "10px",
        }}
      >
        {smallTitle2}
      </h1>

      <TextParagraph content={smallTitle2Details} family="Arial" />

      <h1
        className="managerEngineerPersonalTitle"
        style={{
          fontSize: "20px",
          color: "#370C64",
          fontFamily: "Cambria",
          fontWeight: "700",
          marginTop: "10px",
        }}
      >
        Task and responsibilities Involve
      </h1>

      <div>
        {tasks?.map((t, index) => (
          <Row key={index}>
            <Col md={1}></Col>
            <Col md={11} className="d-flex">
              <CheckCircleRoundedIcon className="fa-regular fa-circle-check mx-2 text-danger mt-2" />
              <TextParagraph content={t} family="Arial" />
            </Col>
          </Row>
        ))}
      </div>
      <h1
        className="managerEngineerPersonalTitle"
        style={{
          fontSize: "35px",
          color: "#370C64",
          fontFamily: "Cambria",
          fontWeight: "700",
          marginTop: "50px",
        }}
      >
        {specialization}
      </h1>
      <Row style={{ marginBottom: "40px" }}>
        <div
          style={{
            background: "#5F259C",
            color: "white",
            padding: "15px 0 5px 10px",
            fontSize: "20px",
          }}
        >
          <p className="mobileText">On the Occupation List:</p>
        </div>
        <div className="py-4" style={{ background: "#F2F9FF" }}>
          {specializationList.map((s, index) => (
            <Row className="rounded occupationListItem" key={index}>
              <Col xs={1} md={1}>
                {" "}
                <img
                  src="/images/ANZSCO/Vector.jpg"
                  alt="vector"
                  style={{ float: "right" }}
                />
              </Col>
              <Col xs={11} md={11}>
                <TextParagraph content={s} family="Arial" />
              </Col>
            </Row>
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default ManagerEngineer;
