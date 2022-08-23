import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    Form,
    Row,
    Col,
  } from "react-bootstrap";

function EditBond(){
    const id = 1;
    const [bond, setBond]= useState([]);
    const [company, setCompany] = useState([]);
    const [resident, setResident]= useState([]);
    const [companies, setCompanies]= useState(null);


    useEffect(() => {
        fetch(`http://127.0.0.1:3001/api/v1/bonds/${id}`)
            .then((res) => res.json())
            .then((bond) => setBond(bond))
            .then(fetch('http://127.0.0.1:3001/api/v1/companies')
                .then((res) => res.json())
                .then((companies) => setCompanies(companies))
                .catch((err) => console.log(`Error: ${err}`)))
            .then(fetch(`http://127.0.0.1:3001/api/v1/companies/${bond.company_id}`)
                .then((res) => res.json())
                .then((company) => setCompany(company))
                .catch((err) => console.log(`Error: ${err}`)))
            .then(fetch(`http://127.0.0.1:3001/api/v1/residents/${bond.resident_id}`)
                .then((res) => res.json())
                .then((resident) => setResident(resident))
                .catch((err) => console.log(`Error: ${err}`)))
            .catch((err) => console.log(`Error: ${err}`));
        }, []);

    const handleSubmit = (() => {
        fetch(`http://127.0.0.1:3001/api/v1/bonds/${id}`,{
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bond: {
                      role: bond.role
                  } 
              })
        })
    });

    
    return(
        <>
            <Card className="m-4">
                <Card.Header>
                    <Card.Title as="h4">Deletando Cargo de {resident.name}</Card.Title>
                </Card.Header>
                <Card.Body className="mx-3 container">
                    <h4>Nome:</h4><p>{resident.name}</p><hr/>
                    <h4>Whatsapp:</h4><p>{resident.whatsapp}</p><hr/>
                    <h4>Matrícula:</h4><p>{resident.registration_id}</p><hr/>
                    <Form onSubmit={handleSubmit}>
                <Row className="my-2">
                  <Col className="pr-1" md="5"> 
                    <Form.Group className="my-2">
                        <Form.Label>Selecione a empresa</Form.Label>
                        <Form.Control
                            as="select"
                            defaultValue={company.name}
                            onChange={(e) => bond.role = e.target.value}
                            >
                            {company &&(
                                company.map(company => (
                                <option value={company.id}>{company.name}</option>
                            )))}
                        </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col className="pl-1" md="4">
                    <Form.Group>
                      <label htmlFor="exampleInputEmail1">
                        Cargo
                      </label>
                      <Form.Control 
                        type="email" defaultValue={bond.role}
                        onChange={(e) => bond.role = e.target.value}    
                        placeholder="Selecione o cargo">
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="my-2">
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Data de Encargo</label>
                        <Form.Control
                          type="date" defaultValue={bond.date}
                          onChange={(e) => bond.date = e.target.value}  
                        />
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
                    <h4>Empresa:</h4><p>{company.name}</p><hr/>
                    <h4>Telefone:</h4><p>{company.telephone}</p><hr/>
                    <h4>Email:</h4><p>{company.email}</p><hr/>
                    <h4>Cargo:</h4><p>{bond.role}</p><hr/>
                    <h4>Data de Ingresso:</h4><p>{bond.date}</p><hr/>
                    <h5>Tem certeza que deseja deletar essa empresa?</h5>
                </Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Button
                        className="m-4 btn-fill btn-dark pull-right"
                        type="submit"
                        variant="info"
                    >
                        Enviar
                    </Button>
                </Form>
            </Card>
        </>
    );
}

export default EditBond;