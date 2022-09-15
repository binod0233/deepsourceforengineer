import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  Container,
  Button,
  Row,
  Col,
  Stack,
  Pagination,
  Form,
  Nav,
  ToggleButton,
  Figure,
} from "react-bootstrap";
import Hero from "../../components/Hero";
import PurpleHeading from "../../components/PurpleHeading";
import SearchBox from "../../components/Samples/SearchBox";
import TextParagraph from "../../components/TextParagraph";
import axios from "axios";
import { jsx } from "@emotion/react";
import Image from "next/image";
import Select from "react-select";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import moment from "moment";

const getBlogs = async (key) => {
  const keyValue = key.queryKey[1].titleSlug;
  if (keyValue) {
    keyValue === 1 ? keyValue : keyValue * 3;
    const res = await fetch(
      `https://cdrskill.herokuapp.com/api/blogs?sort[0]=id&pagination[start]=${keyValue}&pagination[limit]=3&populate=deep`
    );
    const data = await res.json();
    return data;
  }
  const res = await fetch(
    "https://cdrskill.herokuapp.com/api/blogs?sort[0]=id&pagination[start]=0&pagination[limit]=3&populate=deep"
  );
  const data = await res.json();
  return data;
};

const Blogs = ({ rdata }) => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState(1);
  const [pData, setpData] = useState(1);
  const [title, setTitle] = useState(null);
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const queryClient = useQueryClient();
  const { data, status } = useQuery(["blogs", { titleSlug: pData }], getBlogs, {
    initialData: rdata,
    keepPreviousData: true,
  });
  // const query = useQuery(['todos'], getBlogs)
  // const [data, setData] = useState([]);
  let active = pData;
  let items = [];
  for (let number = 1; number <= 7; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setpData(number)}
        className=" mx-1 rounded-circle"
      >
        {number}
      </Pagination.Item>
    );
  }

  const handleTitle = (values) => {};

  return (
    <div>
      <>
        {/* <Head>
          <title>Blogs | CDR For Engineer</title>
          <meta
            name="description"
            content="Articles on and about cdr with cdrforengineer | CDR For Engineer"
          />
          <link rel="canonical" href={canonicalUrl} />
        </Head> */}
      </>

      <div
        style={{
          background:
            "linear-gradient(90deg, #60269E 0%, #4C1980 35.73%, #360B62 100%)",
        }}
      >
        <Container>
          <Stack gap={1} style={{ color: "white" }}>
            <div>
              <h1 className="my-5 "> CDRforengineer Blogs</h1>
            </div>
            <div className="pb-5">Home/blog</div>
          </Stack>
        </Container>
      </div>
      <Container>
        <hr className="bg-danger border-2 border-top border-danger" />
        <Nav className="container m-auto">
          <Nav.Item className="bg-white ">
            <Nav.Link
            // href="/blogs"
            >
              <ToggleButton
                size="lg"
                style={{
                  color: "#370C64",
                  backgroundColor: "white",
                  border: "none",
                  hover: {
                    backgroundColor: "red",
                    color: "red",
                  },
                }}
                value="1"
              >
                All Blogs
              </ToggleButton>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="bg-white ">
            <Nav.Link
            // href="/blogs"
            >
              <ToggleButton
                size="lg"
                style={{
                  color: "#370C64",
                  backgroundColor: "white",
                  border: "none",
                }}
                variant="secondary"
                checked={checked}
                value="2"
                onChange={(e) => setChecked(e.currentTarget.checked)}
              >
                Recent Blogs
              </ToggleButton>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="bg-white ">
            <Nav.Link
            // href="/blogs"
            >
              <ToggleButton
                size="lg"
                style={{
                  color: "#370C64",
                  backgroundColor: "white",
                  border: "none",
                }}
                active
              >
                All Blogs
              </ToggleButton>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="bg-white ">
            <Nav.Link href="/blogs">
              <Button
                size="lg"
                style={{
                  color: "#370C64",
                  backgroundColor: "white",
                  border: "none",
                }}
                active
              >
                All Blogs
              </Button>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="bg-white ">
            <Nav.Link href="/blogs">
              <Button
                size="lg"
                style={{
                  color: "#370C64",
                  backgroundColor: "white",
                  border: "none",
                }}
                active
              >
                All Blogs
              </Button>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="bg-white ms-auto">
            <Nav.Link href="/blogs">
              <Button
                size="lg"
                style={{
                  color: "#370C64",
                  backgroundColor: "white",
                  border: "none",
                }}
                active
              >
                Search
              </Button>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <hr className="bg-danger border-2 border-top border-danger" />
        <Row>
          <Col lg={true}>
            <img
              src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
              // lalyout="fill"
              // width={20}
              // height={20}
              // src="../../public/images/blog/BLOgs3.png"
              style={{ width: "100%", height: "40%" }}
            />
            <div className=" shadow-sm">
              <div className="card-body card-body-hover">
                <p
                  className="card-text"
                  style={{
                    fontFamily: "Arial",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "17px",
                    color: "#370C64",
                  }}
                >
                  Australia Migration
                </p>
                <p
                  className="card-text random"
                  style={{
                    fontFamily: "Century Gothic",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: "25px",
                  }}
                >
                  Best CDR writing services for engineers Australia{" "}
                </p>
                <p
                  className="card-text"
                  style={{
                    fontFamily: "Arial",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "17px",
                    color: "#666666",
                  }}
                >
                  Competency Demonstration Report (CDR) is an essential document
                  that showcases your engineering skills and Knowledge to meet
                  Australian standards. EA is the central authority that
                  examines the CDR Report of Engineering Applicants.
                </p>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{
                    fontFamily: "Arial",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "17px",
                    color: "#370C64",
                  }}
                >
                  <small className="text-muted">99 mins</small>
                  <button type="button" className="btn btn-sm hide">
                    continue reading --&gt;
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <Stack gap={3}>
              <div className="">
                <h6>Send us a Mail</h6>{" "}
                <Form.Control
                  className="float-sm-start"
                  placeholder="Add your item here..."
                  style={{ width: "70%" }}
                />
                <Button variant="primary ">contact us</Button>
              </div>
              <div className="">
                <h6>Most Popular</h6>{" "}
                <Figure className="">
                  <Figure.Image
                    width={148}
                    height={140}
                    alt="171x180"
                    src="images/blog/BLOgs-10.png"
                    className="float-sm-start p-md-2"
                  />
                  <Figure.Caption className="">
                    <p
                      className="card-text "
                      style={{
                        fontFamily: "Arial",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "17px",
                        color: "#370C64",
                      }}
                    >
                      Australia Migration
                    </p>
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Century Gothic",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "25px",
                        color: "#370C64",
                      }}
                    >
                      Best CDR writing services for engineers Australia{" "}
                    </p>
                  </Figure.Caption>
                </Figure>
                <Figure className="">
                  <Figure.Image
                    width={200}
                    height={280}
                    alt="171x180"
                    src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
                    className="float-sm-start p-md-2"
                  />
                  <Figure.Caption className="">
                    <p
                      className="card-text "
                      style={{
                        fontFamily: "Arial",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "17px",
                        color: "#370C64",
                      }}
                    >
                      Australia Migration
                    </p>
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Century Gothic",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "25px",
                        color: "#370C64",
                      }}
                    >
                      Best CDR writing services for engineers Australia{" "}
                    </p>
                  </Figure.Caption>
                </Figure>
                <Figure className="">
                  <Figure.Image
                    width={200}
                    height={280}
                    alt="171x180"
                    src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
                    className="float-sm-start p-md-2"
                  />
                  <Figure.Caption className="">
                    <p
                      className="card-text "
                      style={{
                        fontFamily: "Arial",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "17px",
                        color: "#370C64",
                      }}
                    >
                      Australia Migration
                    </p>
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Century Gothic",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "25px",
                        color: "#370C64",
                      }}
                    >
                      Best CDR writing services for engineers Australia{" "}
                    </p>
                  </Figure.Caption>
                </Figure>
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
      <Select
        getOptionLabel={(option) => option.attributes.title}
        getOptionValue={(option) => option.attributes.slug}
        options={rdata.data}
        instanceId="custom-select"
        placeholder="Select a title"
        onChange={(values) => setTitle(values.attributes.slug)}
      />

      <div className="album py-5 ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {status === "success" &&
              data.data.map((item, index) => {
                {
                  /* setTitle(item.attributes.title); */
                }
                return (
                  <>
                    <div key={item.id}>
                      <div className="col card-body-hover">
                        <img
                          src={item?.attributes?.image?.data?.attributes?.url}
                          // lalyout="fill"
                          // width={20}
                          // height={20}
                          // src="../../public/images/blog/BLOgs3.png"
                          style={{ width: "100%", height: "40%" }}
                        />
                        <div className=" shadow-sm">
                          <div className="card-body ">
                            <p
                              className="card-text"
                              style={{
                                fontFamily: "Arial",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "15px",
                                lineHeight: "17px",
                                color: "#370C64",
                              }}
                            >
                              Australia Migration
                            </p>
                            <p
                              className="card-text random"
                              style={{
                                fontFamily: "Century Gothic",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "20px",
                                lineHeight: "25px",
                              }}
                            >
                              {item.attributes.title}
                            </p>
                            <p
                              className="card-text"
                              style={{
                                fontFamily: "Arial",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "15px",
                                lineHeight: "17px",
                                color: "#666666",
                              }}
                            >
                              Competency Demonstration Report (CDR) is an
                              essential document that showcases your engineering
                              skills and Knowledge to meet Australian standards.
                              EA is the central authority that examines the CDR
                              Report of Engineering Applicants.
                            </p>
                            <div
                              className="d-flex justify-content-between align-items-center"
                              style={{
                                fontFamily: "Arial",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "15px",
                                lineHeight: "17px",
                                color: "#370C64",
                              }}
                            >
                              <small className="text-muted">
                                {" "}
                                {moment(item.attributes.createdAt).fromNow()}
                              </small>
                              <button type="button" className="btn btn-sm hide">
                                continue reading --&gt;
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <Container className="p-5">
        <Stack
          direction="horizontal"
          gap={3}
          className="col-md-5 mx-auto position-relative"
        >
          <div className="position-absolute  top-50 start-50 translate-middle">
            <Pagination style={{ color: "red" }}>
              <Pagination.Prev
                className="danger bg-secondary mx-5  "
                onClick={() => setpData(pData - 1)}
                disabled={pData === 1}
              >
                previous
              </Pagination.Prev>
              {items}
              <Pagination.Next
                className="danger bg-secondary mx-5 "
                onClick={() => setpData(pData + 1)}
                disabled={pData === 7}
              >
                next
              </Pagination.Next>
            </Pagination>
          </div>
        </Stack>
      </Container>
      <div
        style={{
          background:
            "linear-gradient(90deg, #60269E 0%, #4C1980 35.73%, #360B62 100%)",
        }}
      >
        <Stack direction="horizontal" gap={3} style={{ color: "white" }}>
          <div className="m-5 p-4">
            <h5>World-class articles, delivered weekly.</h5>
          </div>
          <Form.Control
            className=""
            placeholder="Add your item here..."
            style={{ width: "50%" }}
          />
          <Button variant="danger">Suscribe</Button>
          <div className="m-5 p-4 ms-auto">Second item</div>
        </Stack>
      </div>
      <div className="album py-5 ">
        <div className="container">
          <h2 className="pb-5">Most-read Articles</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <img
                src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
                // lalyout="fill"
                // width={20}
                // height={20}
                // src="../../public/images/blog/BLOgs3.png"
                style={{ width: "100%", height: "40%" }}
              />
              <div className=" shadow-sm">
                <div className="card-body">
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    Australia Migration
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Century Gothic",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "25px",
                      color: "#370C64",
                    }}
                  >
                    Best CDR writing services for engineers Australia{" "}
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#666666",
                    }}
                  >
                    Competency Demonstration Report (CDR) is an essential
                    document that showcases your engineering skills and
                    Knowledge to meet Australian standards. EA is the central
                    authority that examines the CDR Report of Engineering
                    Applicants.
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    <small className="text-muted">9 lllmins</small>
                    <button
                      type="button"
                      className="btn btn-sm bg-white visible"
                    >
                      continue readsssing --&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
                // lalyout="fill"
                // width={20}
                // height={20}
                // src="../../public/images/blog/BLOgs3.png"
                style={{ width: "100%", height: "40%" }}
              />
              <div className=" shadow-sm">
                <div className="card-body">
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    Australia Migration
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Century Gothic",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "25px",
                      color: "#370C64",
                    }}
                  >
                    Best CDR writing services for engineers Australia{" "}
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#666666",
                    }}
                  >
                    Competency Demonstration Report (CDR) is an essential
                    document that showcases your engineering skills and
                    Knowledge to meet Australian standards. EA is the central
                    authority that examines the CDR Report of Engineering
                    Applicants.
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    <small className="text-muted">9 mins</small>
                    <button type="button" className="btn btn-sm btn-secondary">
                      continue reading --&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
                // lalyout="fill"
                // width={20}
                // height={20}
                // src="../../public/images/blog/BLOgs3.png"
                style={{ width: "100%", height: "40%" }}
              />
              <div className=" shadow-sm">
                <div className="card-body">
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    Australia Migration
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Century Gothic",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "25px",
                      color: "#370C64",
                    }}
                  >
                    Best CDR writing services for engineers Australia{" "}
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#666666",
                    }}
                  >
                    Competency Demonstration Report (CDR) is an essential
                    document that showcases your engineering skills and
                    Knowledge to meet Australian standards. EA is the central
                    authority that examines the CDR Report of Engineering
                    Applicants.
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    <small className="text-muted">9 mins</small>
                    <button type="button" className="btn btn-sm btn-secondary">
                      continue reading --&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>next</h1>
      <div className="album py-5 ">
        <div className="container">
          <Stack gap={3}>
            <div className="">
              <div className="row">
                <img
                  src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
                  // lalyout="fill"
                  // width={20}
                  // height={20}
                  // src="../../public/images/blog/BLOgs3.png"
                  className="col-1"
                  style={{ width: "20%", height: "160px" }}
                />
                <div className=" shadow-sm col">
                  <div className="card-body">
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Arial",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "17px",
                        color: "#370C64",
                      }}
                    >
                      Australia Migration
                    </p>
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Century Gothic",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "25px",
                        color: "#370C64",
                      }}
                    >
                      Best CDR writing services for engineers Australia{" "}
                    </p>
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Arial",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "17px",
                        color: "#666666",
                      }}
                    >
                      Competency Demonstration Report (CDR) is an essential
                      document that showcases your engineering skills and
                      Knowledge to meet Australian standards. EA is the central
                      authority that examines the CDR Report of Engineering
                      Applicants.
                    </p>
                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{
                        fontFamily: "Arial",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "17px",
                        color: "#370C64",
                      }}
                    >
                      <small className="text-muted">9 mins</small>
                      <button type="button" className="btn btn-sm bg-white">
                        continue reading --&gt;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <img
                src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
                // lalyout="fill"
                // width={20}
                // height={20}
                // src="../../public/images/blog/BLOgs3.png"
                className="col-1"
                style={{ width: "20%", height: "160px" }}
              />
              <div className=" shadow-sm col">
                <div className="card-body">
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    Australia Migration
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Century Gothic",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "25px",
                      color: "#370C64",
                    }}
                  >
                    Best CDR writing services for engineers Australia{" "}
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#666666",
                    }}
                  >
                    Competency Demonstration Report (CDR) is an essential
                    document that showcases your engineering skills and
                    Knowledge to meet Australian standards. EA is the central
                    authority that examines the CDR Report of Engineering
                    Applicants.
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    <small className="text-muted">9 mins</small>
                    <button type="button" className="btn btn-sm bg-white">
                      continue reading --&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <img
                src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
                // lalyout="fill"
                // width={20}
                // height={20}
                // src="../../public/images/blog/BLOgs3.png"
                className="col-1"
                style={{ width: "20%", height: "160px" }}
              />
              <div className=" shadow-sm col">
                <div className="card-body">
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    Australia Migration
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Century Gothic",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "25px",
                      color: "#370C64",
                    }}
                  >
                    Best CDR writing services for engineers Australia{" "}
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#666666",
                    }}
                  >
                    Competency Demonstration Report (CDR) is an essential
                    document that showcases your engineering skills and
                    Knowledge to meet Australian standards. EA is the central
                    authority that examines the CDR Report of Engineering
                    Applicants.
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    <small className="text-muted">9 mins</small>
                    <button type="button" className="btn btn-sm bg-white">
                      continue reading --&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <img
                src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
                // lalyout="fill"
                // width={20}
                // height={20}
                // src="../../public/images/blog/BLOgs3.png"
                className="col-1"
                style={{ width: "20%", height: "160px" }}
              />
              <div className=" shadow-sm col">
                <div className="card-body">
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    Australia Migration
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Century Gothic",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "25px",
                      color: "#370C64",
                    }}
                  >
                    Best CDR writing services for engineers Australia{" "}
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#666666",
                    }}
                  >
                    Competency Demonstration Report (CDR) is an essential
                    document that showcases your engineering skills and
                    Knowledge to meet Australian standards. EA is the central
                    authority that examines the CDR Report of Engineering
                    Applicants.
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    <small className="text-muted">9 mins</small>
                    <button type="button" className="btn btn-sm bg-white">
                      continue reading --&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className=" shadow-sm col">
                <div className="card-body">
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    Australia Migration
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Century Gothic",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "25px",
                      color: "#370C64",
                    }}
                  >
                    Best CDR writing services for engineers Australia{" "}
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#666666",
                    }}
                  >
                    Competency Demonstration Report (CDR) is an essential
                    document that showcases your engineering skills and
                    Knowledge to meet Australian standards. EA is the central
                    authority that examines the CDR Report of Engineering
                    Applicants.
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    <small className="text-muted">9 mins</small>
                    <button type="button" className="btn btn-sm bg-white">
                      continue reading --&gt;
                    </button>
                  </div>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
                // lalyout="fill"
                // width={20}
                // height={20}
                // src="../../public/images/blog/BLOgs3.png"
                className="col"
                style={{ width: "20%", height: "260px" }}
              />
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    "https://cdrskill.herokuapp.com/api/blogs?sort[0]=id&pagination[start]=0&pagination[limit]=3&populate=deep"
  );
  const resdata = await res.json();
  return { props: { rdata: resdata } };
}

export default Blogs;

// export const getStaticProps = async () => {
//   const dat = axios.get(
//     `https://cdrdashboardbackend.herokuapp.com/api/blogs/blog-list/cdrforengineer`
//   );

//   return {
//     props: { dat: [] },
//   };
// };
