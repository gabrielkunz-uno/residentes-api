import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom"
import Request from "../../request"
import {
    Button,
    Card,
    Form,
    Row,
    Col,
  } from "react-bootstrap";

function EditCompany(id){
  const [company, setCompany]= useState(0);
  const { state } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
        Request.getById("companies", state)
        .then((company) => setCompany(company))
        .catch((err) => console.log(`Error: ${err}`));
    }, []);

    const handleSubmit = (() => {
        Request.putMethod("companies", state, {
        company: {
          name: company.name,
          email: company.email,
          telephone: company.telephone,
          website: company.website,
          lat: company.lat,
          long: company.long 
        }})
        .then(navigate(-2))
      });

    return (
      <div>
      <Card className="m-4">
        <Card.Header>
          <Card.Title as="h4">Editando Empresa</Card.Title>
        </Card.Header>
        <Card.Body className="mx-3">
          <Form onSubmit={handleSubmit}>
              <Row className="my-2">
                <Col className="pr-1" md="5"> 
                  <Form.Group>
                    <label>Company</label>
                    <Form.Control
                      type="text" defaultValue={company.name}
                      onChange={(e) => company.name = e.target.value}                        
                      placeholder="Your Name"
                    ></Form.Control>
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
                      type="email" defaultValue={company.email}
                      onChange={(e) => company.email = e.target.value}    
                      placeholder="Your Email">
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="my-2">
                <Col className="pr-1" md="6">
                  <Form.Group>
                    <label>Website</label>
                    <Form.Control
                      type="text" defaultValue={company.website}
                      onChange={(e) => company.website = e.target.value}     
                      placeholder="Your Site">
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="my-2">
                <Col className="pr-1" md="6">
                  <Form.Group>
                    <label>Telephone</label>
                    <Form.Control 
                      type="tel" defaultValue={company.telephone}
                      onChange={(e) => company.telephone = e.target.value}     
                      placeholder="Your Phone">
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="my-2">
                <Col className="pr-1" md="4">
                  <Form.Group>
                    <label>Cordinates</label>
                    <Form.Control 
                      className="my-1"
                      type="number" defaultValue={company.lat} 
                      onChange={(e) => company.lat = e.target.value}          
                      placeholder="Your Lat">
                    </Form.Control>
                    <Form.Control 
                      type="number" defaultValue={company.long} 
                      onChange={(e) => company.long = e.target.value}           
                      placeholder="Your Long">
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            <Button
            className="btn-fill btn-dark pull-right"
              type="submit"
              variant="info"
            >
              Enviar
            </Button>
            <div className="clearfix"></div>
          </Form>
        </Card.Body>
      </Card>
    </div>

    );
}

export default EditCompany;
