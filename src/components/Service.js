import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headingLine from '../assets/images/heading-line-dec.png';
import serviceImage from '../assets/images/12.-PTES.png';
import { CheckCircle } from 'lucide-react';

const Service = () => {
  const features = [
    "Pre-engagement Interactions",
    "Intelligence Gathering",
    "Threat Modeling",
    "Vulnerability Analysis",
    "Exploitation",
    "Post Exploitation",
    "Reporting"
  ];

  return (
    <div id="service" className="section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Konten Kiri */}
          <Col lg={6} className="mb-4" data-aos="fade-up">
            <div className="section-heading mb-4">
              <h4 className="fw-bold text-dark">
                <em className="text-primary">Penetration Testing</em> Standard (PTES)
              </h4>
              <img src={headingLine} alt="Heading Decoration" className="mb-3" />
              <p className="text-muted">
                PTES memberikan kerangka kerja komprehensif untuk melakukan pengujian penetrasi profesional yang sistematis dan konsisten.
              </p>
            </div>

            <Row className="g-3">
              {features.map((title, index) => (
                <Col xs={12} md={6} key={index}>
                  <div className="d-flex align-items-start bg-white p-3 rounded shadow-sm h-100">
                    <CheckCircle className="text-success me-2" size={20} />
                    <h6 className="mb-0 fw-semibold text-dark">{title}</h6>
                  </div>
                </Col>
              ))}
            </Row>

          </Col>

          {/* Gambar Kanan */}
          <Col lg={6} className="text-center" data-aos="fade-left">
            <img src={serviceImage} alt="Ilustrasi PTES" className="img-fluid rounded shadow" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
