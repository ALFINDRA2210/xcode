import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headingLine from "../assets/images/heading-line-dec.png";

const Contact = () => {
  return (
    <div id="contact" className="services section py-5 bg-light">
      <Container>
        {/* Section Heading */}
        <Row className="mb-5">
          <Col lg={8} className="offset-lg-2 text-center">
            <div className="section-heading">
              <h4>
                <em>Contact Us</em>
              </h4>
              <img src={headingLine} alt="Heading Line" />
              <p className="text-muted mt-3">
                Silakan hubungi kami atau kunjungi kantor kami melalui informasi dan peta berikut:
              </p>
            </div>
          </Col>
        </Row>

        {/* Contact Info + Map */}
        <Row className="align-items-start">
          {/* Alamat & Kontak */}
          <Col lg={6} className="mb-4">
            <div className="text-start text-black fs-6 px-2">
              <h5 className="fw-bold mb-3">PT. Teknologi Server Indonesia</h5>

              <p className="mb-3">
                <strong>Office 1 Address:</strong><br />
                Minggiran MJ2 RT 58 RW 16<br />
                Yogyakarta, Indonesia
              </p>

              <p className="mb-3">
                <strong>Office 2 Address:</strong><br />
                Jl Kebun Raya Gg. Terate No. 29 – Lantai 2<br />
                (Timur Gembira Loka Zoo)
              </p>

              <p className="mb-2">
                <strong>Kontak WA:</strong> <a href="https://wa.me/6285803946032" target="_blank" rel="noreferrer">0858 0394 6032</a>
              </p>

              <p className="mb-0">
                <strong>Email:</strong> <a href="mailto:admin@xcodetraining.com">admin@xcodetraining.com</a>
              </p>
            </div>
          </Col>

          {/* Map Section */}
          <Col lg={6}>
            {/* Map 1 - Xcode Minggiran */}
            <div className="mb-4 shadow-sm rounded overflow-hidden">
              <iframe
                title="Xcode Minggiran"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.3359345378808!2d110.3593390051232!3d-7.824512043791608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b3e9f91d8850850!2sXcode+Minggiran!5e0!3m2!1sen!2sid!4v1546463703200"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Map 2 - Head Office */}
            <div className="shadow-sm rounded overflow-hidden">
              <iframe
                title="Xcode Head Office"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63245.5674126158!2d110.398625!3d-7.805915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5712e2bf3795%3A0x86cf09b8db7abac9!2sHead%20office%20-%20PT.%20Teknologi%20Server%20Indonesia%20(X-code%20Training%202)!5e0!3m2!1sen!2sid!4v1703877661256!5m2!1sen!2sid"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
