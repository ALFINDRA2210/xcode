import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import testMethodImage from "../assets/images/features-2.png";

const PentestPurpose = () => {
  const services = [
    {
      icon: "🔍",
      title: "Vulnerability Assessment",
      description: "Identifikasi komprehensif kerentanan sistem"
    },
    {
      icon: "🛡️",
      title: "Penetration Testing",
      description: "Simulasi serangan untuk menguji ketahanan"
    }
  ];

  const benefits = [
    {
      icon: "🎯",
      text: "Mengidentifikasi dan mengatasi risiko keamanan"
    },
    {
      icon: "🔐",
      text: "Menjamin keamanan sistem aplikasi & infrastruktur"
    },
    {
      icon: "⚡",
      text: "Meningkatkan ketahanan terhadap serangan nyata"
    }
  ];

  return (
    <section id="pentest-purpose" className="py-5" style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007bff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.5
        }}
      />
      
      <Container className="position-relative">
        {/* Header Section */}
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold text-dark mb-3">
              Tujuan Pentest & 
              <span className="text-primary"> Kriteria Kami</span>
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Melindungi bisnis Anda dengan pendekatan keamanan siber yang komprehensif dan metodologi pengujian yang terpercaya
            </p>
          </Col>
        </Row>

        <Row className="align-items-center g-4">
          {/* Left Content */}
          <Col lg={7}>
            {/* Benefits Cards */}
            <div className="mb-4">
              <h4 className="fw-bold text-dark mb-4">
                Mengapa Pentest Penting?
              </h4>
              <Row className="g-3">
                {benefits.map((benefit, index) => (
                  <Col md={12} key={index}>
                    <Card 
                      className="border-0 shadow-sm h-100 hover-card"
                      style={{
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,123,255,0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                      }}
                    >
                      <Card.Body className="p-3">
                        <div className="d-flex align-items-center">
                          <div 
                            className="me-3 d-flex align-items-center justify-content-center"
                            style={{
                              width: '40px',
                              height: '40px',
                              background: 'linear-gradient(135deg, #007bff, #0056b3)',
                              borderRadius: '10px',
                              fontSize: '18px'
                            }}
                          >
                            {benefit.icon}
                          </div>
                          <p className="mb-0 fw-medium text-dark">
                            {benefit.text}
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>

            {/* Services Section */}
            <div>
              <h4 className="fw-bold text-dark mb-4">
                Layanan yang Kami Sediakan
              </h4>
              <Row className="g-3">
                {services.map((service, index) => (
                  <Col md={6} key={index}>
                    <Card 
                      className="border-0 shadow-sm h-100 service-card"
                      style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,123,255,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                      }}
                    >
                      <Card.Body className="p-4 text-center">
                        <div 
                          className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                          style={{
                            width: '60px',
                            height: '60px',
                            background: 'linear-gradient(135deg, #007bff, #0056b3)',
                            borderRadius: '15px',
                            fontSize: '24px'
                          }}
                        >
                          {service.icon}
                        </div>
                        <h6 className="fw-bold text-dark mb-2">
                          {service.title}
                        </h6>
                        <p className="text-muted small mb-0">
                          {service.description}
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          {/* Right Content */}
          <Col lg={5}>
            <Card 
              className="border-0 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                borderRadius: '20px'
              }}
            >
              <Card.Body className="p-4 text-center">
                <div className="mb-4">
                  <img 
                    src={testMethodImage} 
                    alt="Metode Pengujian Pentest" 
                    className="img-fluid"
                    style={{
                      maxHeight: '200px',
                      filter: 'drop-shadow(0 10px 20px rgba(0,123,255,0.1))'
                    }}
                  />
                </div>
                
                <Badge 
                  bg="primary" 
                  className="px-4 py-2 mb-3 fs-6 fw-normal"
                  style={{
                    background: 'linear-gradient(135deg, #007bff, #0056b3)',
                    borderRadius: '25px'
                  }}
                >
                  TESTING METHODOLOGY
                </Badge>
                
                <h5 className="fw-bold text-dark mb-2">
                  BLACK-BOX & GREY-BOX TESTING
                </h5>
                
                <p className="text-muted mb-4">
                  <small>Zero & Partial Knowledge Approaches</small>
                </p>
                
                <div className="row g-2">
                  <div className="col-6">
                    <div 
                      className="p-3 rounded"
                      style={{ background: 'rgba(0,123,255,0.1)' }}
                    >
                      <div className="fw-bold text-primary mb-1">BLACK-BOX</div>
                      <small className="text-muted">Zero Knowledge</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div 
                      className="p-3 rounded"
                      style={{ background: 'rgba(0,123,255,0.1)' }}
                    >
                      <div className="fw-bold text-primary mb-1">GREY-BOX</div>
                      <small className="text-muted">Partial Knowledge</small>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Bottom CTA Section */}
        
      </Container>
    </section>
  );
};

export default PentestPurpose;