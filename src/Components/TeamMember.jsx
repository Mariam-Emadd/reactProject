import React from 'react'
import Team from '../Asset/team.jpeg'
import './TeamMember.css'
import member1 from "../Asset/member1.jpg";
import member2 from "../Asset/member2.jpg";
import member3 from "../Asset/member3.jpg";
import member4 from "../Asset/member4.jpg";
import member5 from "../Asset/member5.jpg";
import member6 from "../Asset/member6.jpg";
import member7 from "../Asset/member7.jpg";
import member8 from "../Asset/member8.jpg";
import { Card,  Container, Row, Col } from 'react-bootstrap';
function TeamMember() {
  return (
    <div className="team-member">
      <div>
        <img src={Team} alt="" className="team_img" />
        <div className="About">About Us</div>
        <div className='brief'>We are Mansoura University Students , <br/>
          we decided to serve our country and society via this project.
        </div>
      </div>

      <div>
        <h2 className="our-team">Our Team</h2>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img
                  variant="top"
                  src={member1}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "black", fontWeight: "600" }}>
                    Ahmed Abdelwahed
                  </Card.Title>
                  <hr />
                  <Card.Text>Back-End Developer</Card.Text>
                  <hr />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img
                  variant="top"
                  src={member2}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "black", fontWeight: "600" }}>
                    Malek
                  </Card.Title>
                  <hr />
                  <Card.Text>Back-End Developer</Card.Text>
                  <hr />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img
                  variant="top"
                  src={member3}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "black", fontWeight: "600" }}>
                    Ismail Fathy
                  </Card.Title>
                  <hr />
                  <Card.Text>Flutter Developer</Card.Text>
                  <hr />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img
                  variant="top"
                  src={member4}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "black", fontWeight: "600" }}>
                    Amr
                  </Card.Title>
                  <hr />
                  <Card.Text>Business Analyst</Card.Text>
                  <hr />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img
                  variant="top"
                  src={member5}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "black", fontWeight: "600" }}>
                    Mariam Emad
                  </Card.Title>
                  <hr />
                  <Card.Text>Front-End Developer</Card.Text>
                  <hr />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img
                  variant="top"
                  src={member6}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "black", fontWeight: "600" }}>
                    Shams Gamal
                  </Card.Title>
                  <hr />
                  <Card.Text>AI Developer</Card.Text>
                  <hr />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img
                  variant="top"
                  src={member7}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "black", fontWeight: "600" }}>
                    Hoda Yousef
                  </Card.Title>
                  <hr />
                  <Card.Text>Ui-Ux Designer</Card.Text>
                  <hr />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img
                  variant="top"
                  src={member8}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "black", fontWeight: "600" }}>
                    Mohamed Fathy
                  </Card.Title>
                  <hr />
                  <Card.Text>Flutter Developer</Card.Text>
                  <hr />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default TeamMember;

