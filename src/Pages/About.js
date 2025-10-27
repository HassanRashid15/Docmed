import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SEO from "../Component/SEO.js";
import { FaUserMd, FaHeartbeat, FaAward, FaUsers, FaStethoscope, FaHospital } from 'react-icons/fa';

function About() {
  useEffect(() => {
    document.title = "About DOCMED | Medical Center - Your Trusted Healthcare Partner";
  }, []);

  return (
    <>
      <SEO
        title={`About DOCMED | Medical Center - Your Trusted Healthcare Partner`}
        description="Learn about DOCMED Medical Center - your trusted healthcare partner with 15+ years of experience, 150+ expert doctors, and 50K+ happy patients. Discover our mission, team, and values."
        keywords="about docmed, medical center about, healthcare team, medical professionals, hospital mission, medical values, healthcare experience, doctor team, medical center history"
        canonical="/about"
      />
      <div className="about-page">
      {/* Hero Banner Section */}
      <div className="about-hero-banner">
        <div className="banner-image">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Medical team working together"
            className="w-100 h-100"
          />
          <div className="heart-overlay">
            <FaHeartbeat />
          </div>
        </div>
        <div className="banner-title">
          <h1>About DOCMED</h1>
          <p>Your Trusted Healthcare Partner</p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="about-stats-section py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-4 fw-bold text-primary mb-3">Our Impact</h2>
              <p className="lead text-muted">Numbers that speak for our commitment to healthcare excellence</p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={3} sm={6}>
              <Card className="h-100 border-0 shadow-sm text-center p-4">
                <Card.Body>
                  <FaUserMd className="text-primary mb-3" style={{fontSize: '3rem'}} />
                  <h3 className="fw-bold text-primary">150+</h3>
                  <p className="text-muted mb-0">Expert Doctors</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="h-100 border-0 shadow-sm text-center p-4">
                <Card.Body>
                  <FaUsers className="text-primary mb-3" style={{fontSize: '3rem'}} />
                  <h3 className="fw-bold text-primary">50K+</h3>
                  <p className="text-muted mb-0">Happy Patients</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="h-100 border-0 shadow-sm text-center p-4">
                <Card.Body>
                  <FaHospital className="text-primary mb-3" style={{fontSize: '3rem'}} />
                  <h3 className="fw-bold text-primary">25+</h3>
                  <p className="text-muted mb-0">Medical Centers</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="h-100 border-0 shadow-sm text-center p-4">
                <Card.Body>
                  <FaAward className="text-primary mb-3" style={{fontSize: '3rem'}} />
                  <h3 className="fw-bold text-primary">15+</h3>
                  <p className="text-muted mb-0">Years Experience</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission-section py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Medical professionals in consultation"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col lg={6}>
              <div className="ps-lg-4">
                <h2 className="display-5 fw-bold text-dark mb-4">Our Mission</h2>
                <p className="lead text-muted mb-4">
                  At DOCMED, we are committed to providing exceptional healthcare services 
                  that prioritize patient well-being and medical excellence.
                </p>
                <p className="text-muted mb-4">
                  Our mission is to make quality healthcare accessible to everyone through 
                  innovative medical solutions, compassionate care, and cutting-edge technology. 
                  We believe in treating not just the symptoms, but the whole person.
                </p>
                <Button variant="primary" size="lg" className="px-4 py-3">
                  Learn More About Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="about-team-section py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-4 fw-bold text-primary mb-3">Meet Our Team</h2>
              <p className="lead text-muted">Dedicated professionals committed to your health</p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <div className="team-image">
                  <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Dr. Sarah Johnson - Chief Medical Officer"
                    className="card-img-top"
                  />
                </div>
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold text-dark">Dr. Sarah Johnson</h5>
                  <p className="text-primary mb-2">Chief Medical Officer</p>
                  <p className="text-muted small">
                    Board-certified physician with 15+ years of experience in internal medicine.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <div className="team-image">
                  <img 
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Dr. Michael Chen - Head of Cardiology"
                    className="card-img-top"
                  />
                </div>
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold text-dark">Dr. Michael Chen</h5>
                  <p className="text-primary mb-2">Head of Cardiology</p>
                  <p className="text-muted small">
                    Renowned cardiologist specializing in minimally invasive procedures.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <div className="team-image">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Dr. Emily Rodriguez - Director of Emergency Medicine"
                    className="card-img-top"
                  />
                </div>
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold text-dark">Dr. Emily Rodriguez</h5>
                  <p className="text-primary mb-2">Director of Emergency Medicine</p>
                  <p className="text-muted small">
                    Emergency medicine specialist with expertise in trauma care and critical care.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="about-values-section py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-4 fw-bold text-primary mb-3">Our Values</h2>
              <p className="lead text-muted">The principles that guide everything we do</p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={3} md={6}>
              <div className="text-center p-4">
                <div className="value-icon mb-3">
                  <FaStethoscope className="text-primary" style={{fontSize: '3rem'}} />
                </div>
                <h5 className="fw-bold text-dark mb-3">Excellence</h5>
                <p className="text-muted">
                  We strive for the highest standards in medical care and patient outcomes.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="text-center p-4">
                <div className="value-icon mb-3">
                  <FaHeartbeat className="text-primary" style={{fontSize: '3rem'}} />
                </div>
                <h5 className="fw-bold text-dark mb-3">Compassion</h5>
                <p className="text-muted">
                  We treat every patient with empathy, respect, and genuine care.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="text-center p-4">
                <div className="value-icon mb-3">
                  <FaAward className="text-primary" style={{fontSize: '3rem'}} />
                </div>
                <h5 className="fw-bold text-dark mb-3">Innovation</h5>
                <p className="text-muted">
                  We embrace cutting-edge technology and medical advancements.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="text-center p-4">
                <div className="value-icon mb-3">
                  <FaUsers className="text-primary" style={{fontSize: '3rem'}} />
                </div>
                <h5 className="fw-bold text-dark mb-3">Community</h5>
                <p className="text-muted">
                  We are committed to serving and improving our local community.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section py-5 bg-primary text-white">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="display-5 fw-bold mb-4">Ready to Experience Quality Healthcare?</h2>
              <p className="lead mb-4">
                Join thousands of satisfied patients who trust DOCMED for their healthcare needs.
              </p>
              <Button variant="light" size="lg" className="px-5 py-3 me-3">
                Make an Appointment
              </Button>
              <Button variant="outline-light" size="lg" className="px-5 py-3">
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
    </>
  );
}

export default About;
