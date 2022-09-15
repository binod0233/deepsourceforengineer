import { useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

const Header = ({ scrollToTop }) => {
  const router = useRouter();
  // const navigate = useNavigate();
  const menuItemsData = {
    label: "ANZSCO Code For CDR",
    items: [
      {
        label: "Unit Group 1332",
        items: [
          {
            label: "Engineering Manager (ANZSCO 133211)",
            callback: () => navigate("/engineering-manager-anzsco-133211"),
          },
        ],
      },
      {
        label: "Unit Group 2331",
        items: [
          {
            label: "Chemical Engineer (ANZSCO 233111)",
            callback: () => navigate("/chemical-engineer-anzsco-233111"),
          },
          {
            label: "Materials Engineer (ANZSCO 233112)",
            callback: () => navigate("/materials-engineer-anzsco-233112"),
          },
        ],
      },
      {
        label: "Unit Group 2332",
        items: [
          {
            label: "Civil Engineer (ANZSCO 233211)",
            callback: () => navigate("civil-engineer-anzsco-233211"),
          },
          {
            label: "Geotechnical Engineer (ANZSCO 233212)",
            callback: () => navigate("/geo-technical-engineer-anzsco-233212"),
          },
          {
            label: "Structural Engineer (ANZSCO 233214)",
            callback: () => navigate("/structural-engineer-anzsco-233214"),
          },
          {
            label: "Transport Engineer (ANZSCO 233215)",
            callback: () => navigate("/transport-engineer-anzsco-233215"),
          },
        ],
      },
      {
        label: "Unit Group 2333",
        items: [
          {
            label: "Electrical Engineer (ANZSCO 233311)",

            callback: () => navigate("/electrical-engineer-anzsco-233311"),
          },
        ],
      },
      {
        label: "Unit Group 2334",
        items: [
          {
            label: "Electronics Engineer (ANZSCO 233411)",

            callback: () => navigate("/electronics-engineer-anzsco-233411"),
          },
        ],
      },
      {
        label: "Unit Group 2335",
        items: [
          {
            label: "Industrial Engineer (ANZSCO 233511)",

            callback: () => navigate("/industrial-engineer-anzsco-233511"),
          },
          {
            label: "Mechanical Engineer (ANZSCO 233512)",

            callback: () => navigate("/mechanical-engineer-anzsco-233512"),
          },
          {
            label: "Production or Plant Engineer (ANZSCO 233513)",

            callback: () =>
              navigate("/production-or-plant-engineer-anzsco-233513"),
          },
        ],
      },
      {
        label: "Unit Group 2336",
        items: [
          {
            label: "Mining Engineer (ANZSCO 233611)",

            callback: () => navigate("/mining-engineer-anzsco-233611"),
          },
          {
            label: "Petroleum Engineer (ANZSCO 233612)",

            callback: () => navigate("/petroleum-engineer-anzsco-233612"),
          },
        ],
      },
      {
        label: "Unit Group 2339",
        items: [
          {
            label: "Aeronautical Engineer (ANZSCO 233911)",

            callback: () => navigate("/aeronautical-engineer-anzsco-233911"),
          },
          {
            label: "Agricultural Engineer (ANZSCO 233912)",

            callback: () => navigate("/agricultural-engineer-anzsco-233912"),
          },
          {
            label: " Biomedical Engineer (ANZSCO 233913)",

            callback: () => navigate("/biomedical-engineer-anzsco-233913"),
          },
          {
            label: "Engineering Technologist (ANZSCO 233914)",

            callback: () => navigate("/engineering-technologist-anzsco-233914"),
          },
          {
            label: "Environmental Engineer (ANZSCO 233915)",

            callback: () => navigate("environmental-engineer-anzsco-233915"),
          },
          {
            label: "Engineering Professsionals (ANZSCO 233999)",

            callback: () =>
              navigate("/engineering-professionals-nec-anzsco-233999"),
          },
        ],
      },
      {
        label: "Unit Group 2633",
        items: [
          {
            label: " Computer Network and Systems Engineer (ANZSCO 263111)",

            callback: () =>
              navigate("/computer-networks-and-system-engineers-anzsco-263111"),
          },
          {
            label: "Telecommunications Engineer (ANZSCO 263311)",

            callback: () =>
              navigate("/telecommunication-engineers-anzsco-263311"),
          },
          {
            label: "Telecommunications Network (ANZSCO 263312)",

            callback: () =>
              navigate("/telecommunication-network-engineers-anzsco-263312"),
          },
        ],
      },
      {
        label: "Unit Group 3122",
        items: [
          {
            label: "Civil Engineer Draftsperson(ANZSCO 312211)",

            callback: () =>
              navigate("/civil-engineering-draftsperson-anzsco-312211"),
          },
          {
            label: "Civil Engineering Technician (ANZSCO 312212)",

            callback: () =>
              navigate("/civil-engineering-technician-anzsco-312212"),
          },
        ],
      },
      {
        label: "Unit Group 3123",
        items: [
          {
            label: "Electrical Engineer Draftsperson(ANZSCO 312311)",

            callback: () =>
              navigate("/electrical-engineering-draftsperson-anzsco-312311"),
          },
          {
            label: "Electronic Engineering Technician (ANZSCO 312312)",

            callback: () =>
              navigate("/electrical-engineering-technician-anzsco-312312"),
          },
        ],
      },
      {
        label: "Unit Group 3132",
        items: [
          {
            label: "Telecommunications Field Engineer(ANZSCO 313211)",

            callback: () =>
              navigate("/telecommunication-field-engineer-anzsco-313212"),
          },
        ],
      },
    ],
  };

  useEffect(() => {
    scrollToTop();
  }, [router]);
  return (
    <div className="header">
      <Navbar bg="light" className="headernavbar px-5" expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{ marginLeft: "-80px" }}>
            <div className="headerImageContainer">
              <img
                src="/images/logo.png"
                className="img-fluid"
                alt="Logo of CDRforengineer"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Services"
                id="basic-nav-dropdown"
                style={{ color: "white", margin: "0 2rem" }}
              >
                <NavDropdown.Item
                  href="/services/cdr-writing-service-australia"
                  style={{
                    color: "white",
                    background: "#60269e",
                  }}
                >
                  CDR Writing
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  href=" /services/career-episode-writing-australia"
                  style={{ color: "white", background: "#60269e" }}
                >
                  Career Episode Writing
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  href="/services/summary-statement-writing-australia"
                  style={{ color: "white", background: "#60269e" }}
                >
                  Summary Statement Writing
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/services/cpd-writing-australia"
                  style={{ color: "white", background: "#60269e" }}
                >
                  CPD Writing
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  href=" /services/plagiarism-checking-and-removal"
                  style={{ color: "white", background: "#60269e" }}
                >
                  CDR Plagiarism Checking & Removal
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  href="/services/stage-1-competency-assessment-australia"
                  style={{ color: "white", background: "#60269e" }}
                >
                  Stage 1 Competency Assessment
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/services/stage-2-competency-assessment-australia"
                  style={{ color: "white", background: "#60269e" }}
                >
                  Stage 2 Competency Assessment
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/services/cdr-reviewing-australia"
                  style={{ color: "white", background: "#60269e" }}
                >
                  CDR Reviewing
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item
                  href="/services/professional-resume-writing-australia"
                  style={{ color: "white", background: "#60269e" }}
                >
                  CV/Resume Writing
                </NavDropdown.Item>
              </NavDropdown>

              <div
                className="relative tooltip1"
                id="basic-nav-dropdown"
                style={{ color: "white", margin: "8px 2rem 0" }}
              >
                ANZSCO Code
                <div
                  className="headerAnzsco"
                  style={{
                    width: "1000px",
                    height: "500px",
                    background: "#60269e",
                    borderRadius: "10px",
                    marginLeft: "-400px",
                    padding: "30px",
                    position: "absolute",
                    zIndex: "99",
                    visibility: "hidden",
                  }}
                >
                  <Row>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 1332</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/engineering-manager-anzsco-133211"
                        >
                          Engineering Manager (ANZSCO 133211)
                        </a>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2331</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/chemical-engineer-anzsco-233111"
                        >
                          Chemical Engineer (ANZSCO 233111)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/materials-engineer-anzsco-233112"
                        >
                          Materials Engineer (ANZSCO 233112)
                        </a>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/civil-engineer-anzsco-233211"
                        >
                          Civil Engineer (ANZSCO 233211)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/geo-technical-engineer-anzsco-233212"
                        >
                          Geotechnical Engineer (ANZSCO 233212)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/structural-engineer-anzsco-233214"
                        >
                          Structural Engineer (ANZSCO 233214)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/transport-engineer-anzsco-233215"
                        >
                          Transport Engineer (ANZSCO 233215)
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2333</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/electrical-engineer-anzsco-233311"
                        >
                          Electrical Engineer (ANZSCO 233311)
                        </a>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2334</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/electronics-engineer-anzsco-233411"
                        >
                          Electronics Engineer (ANZSCO 233411)
                        </a>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2335</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/industrial-engineer-anzsco-233511"
                        >
                          Industrial Engineer (ANZSCO 233511)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/mechanical-engineer-anzsco-233512"
                        >
                          Mechanical Engineer (ANZSCO 233512)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/production-or-plant-engineer-anzsco-233513"
                        >
                          Production or Plant Engineer (ANZSCO 233513)
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2336</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/mining-engineer-anzsco-233611"
                        >
                          Mining Engineer (ANZSCO 233611)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/petroleum-engineer-anzsco-233612"
                        >
                          Petroleum Engineer (ANZSCO 233612)
                        </a>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2339</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/aeronautical-engineer-anzsco-233911"
                        >
                          Aeronautical Engineer (ANZSCO 233911)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/agricultural-engineer-anzsco-233912"
                        >
                          Agricultural Engineer (ANZSCO 233912)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/biomedical-engineer-anzsco-233913"
                        >
                          Biomedical Engineer (ANZSCO 233913)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/engineering-technologist-anzsco-233914"
                        >
                          Engineering Technologist (ANZSCO 233914)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/environmental-engineer-anzsco-233915"
                        >
                          Environmental Engineer (ANZSCO 233915)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/engineering-professionals-nec-anzsco-233999"
                        >
                          Engineering Professionals (nec) (ANZSCO 233999)
                        </a>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2631</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/computer-networks-and-system-engineers-anzsco-263111"
                        >
                          Computer Network and Systems Engineer (ANZSCO 263111)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/telecommunication-engineers-anzsco-263311"
                        >
                          Telecommunications Engineer (ANZSCO 263311)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/telecommunication-network-engineers-anzsco-263312"
                        >
                          Telecommunications Network Engineer (ANZSCO 313212)
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 3122</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/civil-engineering-draftsperson-anzsco-312211"
                        >
                          Civil Engineering Draftsperson (ANZSCO 312211)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/civil-engineering-technician-anzsco-312212"
                        >
                          Civil Engineering Technician (ANZSCO 312212)
                        </a>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 3132</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/electrical-engineering-draftsperson-anzsco-312311"
                        >
                          Electrical Engineering Draftsperson (ANZSCO 312311)
                        </a>
                        {/* <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-312312-electrical-engineering-technician"
                        >
                          Electrical Engineering Technician (ANZSCO 312312)
                        </a> */}
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 3123</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/telecommunication-field-engineer-anzsco-313212"
                        >
                          Telecommunications Field Engineer (ANZSCO 312311)
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <Nav.Link
                href="/cdr-samples"
                style={{ color: "white", margin: "0 1.5rem" }}
              >
                Report Samples
              </Nav.Link>
              <Nav.Link
                href="/pricing"
                style={{ color: "white", margin: "0 1.5rem" }}
              >
                Pricing
              </Nav.Link>

              <Nav.Link
                href="/faq"
                style={{ color: "white", margin: "0 1.5rem" }}
              >
                FAQs
              </Nav.Link>
              <Nav.Link
                href="/blogs"
                style={{ color: "white", margin: "0 1.5rem" }}
              >
                Blog
              </Nav.Link>

              <Button
                className="px-4"
                style={{ background: "#FA2545" }}
                onClick={() => {
                  // navigate(`/our-agents`)
                  router.push("/meet-our-advisors");
                }}
              >
                Meet the Experts
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
