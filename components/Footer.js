import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className={styles.allFooter}>
      <Row className={`${styles.upperFooter} px-md-5 px-2`}>
        <Col
          xs={6}
          md={3}
          style={{ fontFamily: "Century Gothic", fontWeight: "400" }}
        >
          <img
            className={styles.footerImage}
            src="/images/footerLogo.png"
            alt="Logo of CDR For Engineer"
            style={{ height: "100px", marginLeft: "-50px", marginTop: "-20px" }}
          />
          <br />
          Melbourne, Australia
          <br />
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="mailto:info@cdrforenginner.com"
          >
            info@cdrforenginner.com
          </a>
          <br />
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://api.whatsapp.com/send?phone=61482070521"
          >
            +61 482 070 521
          </a>
          <br />
          <strong className="text-center ms-3">Social Links</strong>
          <br />
          <div
            className="d-flex justify-content-start ms-3"
            style={{ fontSize: "20px" }}
          >
            <a
              className="m-1"
              href="https://www.facebook.com/cdrforengineer001"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FacebookIcon />
            </a>
            <a
              className="m-1"
              href=" https://www.instagram.com/cdrforengineer/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <InstagramIcon />
            </a>
            <a
              className="m-1"
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <TwitterIcon />
            </a>
          </div>
        </Col>
        <Col
          xs={6}
          md={3}
          className={`mb-4 ${styles.footerServicesTitle}`}
          style={{ fontFamily: "Century Gothic", fontWeight: "400" }}
        >
          <strong className={styles.footerTitle}>Services</strong>
          <br />
          <Link
            className={styles.footerServices}
            href="/services/cdr-writing-service-australia"
          >
            CDR Writing Service
          </Link>
          <br />
          <Link
            className={styles.footerServices}
            href="/services/career-episode-writing-australia"
          >
            Career Episode Writing Service
          </Link>
          <br />
          <Link
            className={styles.footerServices}
            href="/services/summary-statement-writing-australia"
          >
            Summary Statement Writing Service
          </Link>
          <br />
          <Link
            className={styles.footerServices}
            href="/services/stage-1-competency-assessment-australia"
          >
            Stage 1 Competency Assessment Service
          </Link>
          <br />
          <Link
            className={styles.footerServices}
            href="/services/stage-2-competency-assessment-australia"
          >
            Stage 2 Competency Assessment Service
          </Link>
          <br />
          <Link
            className={styles.footerServices}
            href="/services/cdr-reviewing-australia"
          >
            CDR Reviewing Service
          </Link>
          <br />
          <Link
            className={styles.footerServices}
            href="/services/cpd-writing-australia"
          >
            CPD Writing Service
          </Link>
          <br />
          <Link
            className={styles.footerServices}
            href="/services/plagiarism-checking-and-removal"
          >
            CDR Plagiarism Checking & Removal Service
          </Link>
          <br />
          <Link
            className={styles.footerServices}
            href="/services/professional-resume-writing-australia"
          >
            Resume Writing Service
          </Link>
        </Col>
        <Col
          xs={6}
          md={3}
          style={{ fontFamily: "Century Gothic", fontWeight: "400" }}
        >
          <strong>Important Links</strong>
          <br />
          <Link className={styles.footerServices} href="/blogs">
            Blog
          </Link>

          <br />
          <Link className={styles.footerServices} href="/contactus">
            Contact Us
          </Link>

          <br />
          <Link className={styles.footerServices} href="/our-agents">
            Meet Our Advisors
          </Link>

          <br />
          <Link className={styles.footerServices} href="/testimonials">
            Customer Testimonials
          </Link>

          <br />
          <Link className={styles.footerServices} href="/disclaimer">
            Disclaimer
          </Link>

          <br />
          <Link className={styles.footerServices} href="/refund-policy">
            Refund Policy
          </Link>

          <br />
        </Col>
        <Col
          xs={6}
          md={3}
          style={{
            fontFamily: "Century Gothic",
            fontWeight: "400",
            paddingRight: "30px",
          }}
          className={styles.footerAboutUs}
        >
          <strong>Who we are</strong>
          <br />
          cdrforengineer.com is not associated or endorsed by Engineers
          Australia. The Services we provide should be used for guideline
          purposes only or to be used to make your own reports as per your need.
        </Col>
      </Row>
      <Row className={`${styles.lowerFooter} text-white`}>
        <p style={{ textAlign: "center" }}>
          {" "}
          © 2022 CDR For Engineer All Rights Reserved
        </p>
      </Row>
    </div>
  );
};

export default Footer;
