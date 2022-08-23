import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"
import {
    Button,
    Card,
    Form,
    Row,
    Col,
  } from "react-bootstrap";

function CreateCompany(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [telephone, setTelephone] = useState("");
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (() => {
        fetch('http://127.0.0.1:3001/api/v1/companies',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              company: {
                    name: name,
                    email: email,
                    telephone: telephone,
                    website: website,
                    lat: lat,
                    long: long 
                } 
            })
          }
        )
        .then(() => navigate(-1))
      });

    return (
      <div>
        <Card className="m-4">
              <Card.Header>
                <Card.Title as="h4">Criar Empresa</Card.Title>
              </Card.Header>
              <Card.Body className="mx-3">
                <Form>
                  <Row className="my-2">
                    <Col className="pr-1" md="5"> 
                      <Form.Group>
                        <label>Company</label>
                        <Form.Control
                          type="text" value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="my-2">
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control 
                          type="email" value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your Email"
                        />
                        
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="my-2">
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Website</label>
                        <Form.Control
                          type="text" value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          placeholder="Your Site"
                        />
                        
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="my-2">
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Telephone</label>
                        <Form.Control 
                          type="tel" value={telephone}
                          onChange={(e) => setTelephone(e.target.value)}
                          placeholder="Your Phone"
                        />
                        
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="my-2">
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Cordinates</label>
                        <Form.Control 
                          className="my-1"
                          type="number" value={lat} 
                          onChange={(e) => setLat(e.target.value)} 
                          placeholder="Your Lat"
                        />
                        
                        <Form.Control 
                          type="number" value={long} 
                          onChange={(e) => setLong(e.target.value)} 
                          placeholder="Your Long"
                        />
                        
                      </Form.Group>
                    </Col>
                  </Row>
                  <button type="button" onClick={handleSubmit} className="btn btn-lg btn-dark mt-3 col-md-6">Enviar</button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
        </Card>
      </div>
    );
}

export default CreateCompany