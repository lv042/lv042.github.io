import React from 'react';
import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <div
          className="logo-container"
          style={{
            width: '350px',
            height: '180px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            margin: '0 auto',
          }}
        >
          <img
            className="company-logo"
            src={data.companylogo}
            alt=""
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          />
        </div>
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
}

export default ExperienceCard;
