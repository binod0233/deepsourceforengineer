import React from "react";
import Router from "next/router";

const SampleCard = ({ image, code, field, link }) => {
  return (
    <div
      className="p-0 d-flex flex-row rounded sampleCardContainer"
      style={{ borderRadius: "10px", zIndex: "-1" }}
    >
      <div style={{ width: "50%", height: "200px" }}>
        <img
          src={image}
          alt="sample card"
          className="img-fluid"
          style={{ height: "100%", width: "100%", objectFit: "fill" }}
        />
      </div>
      <div style={{ width: "50%", height: "200px" }}>
        <div
          className="sampleCodeContainer"
          style={{
            height: "80%",
            background: "#8F47D7",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Arial",
              fontSize: "19px",
              fontWeight: "400",
              lineHeight: "26px",
              color: "white",
            }}
          >
            {code}
          </span>

          <span
            style={{
              fontFamily: "Century Gothic",
              fontSize: "19px",
              fontStyle: "normal",
              fontWeight: "700",
              color: "white",
              textAlign: "center",
            }}
          >
            {field}
          </span>
        </div>
        <div
          className="d-flex justify-content-center align-items-center viewSampleContainer"
          style={{
            height: "20%",
            fontFamily: "Century Gothic",
            fontSize: "20px",
            fontWeight: "700",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <div
            onClick={() => {
              Router.push(`${link}`);
            }}
            style={{ color: "black" }}
          >
            View Sample
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleCard;
