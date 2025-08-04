import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import testMethodImage from "../assets/images/features-2.png";

const PentestPurpose = () => {
  return (
    <div id="pentest-purpose" className="py-5 bg-light">
      <Container>
        <Row className="mb-4">
          <Col lg={8}>
            <h2 className="fw-bold text-primary">
              Tujuan Pentest & Kriteria yang Kami Terima
            </h2>
            <p className="mt-3">
              Pentest (penetration testing) bertujuan untuk melindungi bisnis kamu
              dengan:
            </p>
            <ul>
              <li>✅ Mengidentifikasi dan mengatasi risiko keamanan.</li>
              <li>✅ Menjamin keamanan sistem aplikasi & infrastruktur.</li>
              <li>✅ Meningkatkan ketahanan terhadap serangan nyata.</li>
            </ul>
            <p className="mt-3">Layanan yang kami sediakan:</p>
            <ul>
              <li>🔍 Vulnerability Assessment</li>
              <li>🛡️ Penetration Testing</li>
            </ul>
          </Col>

          <Col lg={4} className="text-center">
            <img
              src={testMethodImage}
              alt="Metode Pengujian Pentest"
              className="img-fluid mb-3"
            />
            <p className="fw-semibold mb-1">BLACK-BOX & GREY-BOX TESTING</p>
            <small className="text-muted">
              Zero & Partial Knowledge Approaches
            </small>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PentestPurpose;
