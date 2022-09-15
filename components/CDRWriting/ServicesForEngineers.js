import React from "react";
import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";

const ServicesForEngineers = () => {
  return (
    <Container>
      <PurpleHeading title="Continuing professional development Services." />
      <p className="cdrWritingP">
        The term CPD refers to Continuing Professional Development, the process
        of recording, documenting, and tracking all of your skills, knowledge,
        and experience that you achieved formally or informally as you work
        beyond any initial training. CDP is a term used to describe a portfolio
        documenting your professional development. CPD Report Writing for
        Engineers Australia is also one of the crucial parts of the CDR writing
        for Engineers. It shows that the engineer is up to date with knowledge
        of developments in engineering.
      </p>
      <Row className="">
        <img
          src="/images/cdr-writing.png"
          alt="Competency Demonstration Report"
        />
      </Row>
      <PurpleHeading title="Want your CPD Report to get Accepted by Engineers Australia (EA)?" />

      <p className="cdrWritingP" style={{ textAlign: "center" }}>
        Renowned for the service we provide of CPD report writing in Australia,
        CDRXpert offers help preparing flawless CDR that Engineers Australia
        will assess at a reasonable price. Save your time and money by working
        with us as CdrXperts is the best CPD report writing service provider in
        Australia.
      </p>
    </Container>
  );
};

export default ServicesForEngineers;
