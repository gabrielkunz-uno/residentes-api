import React, {useState, useEffect} from "react";
import {
    Button,
    Card,
    Form,
    Row,
    Col,
  } from "react-bootstrap";

function CreateBond(){
    const [companies, setCompanies] = useState([]);
    const [residents, setResidents]= useState([]);
    const [role, setRole] = useState("");
    const [date, setDate] = useState("");
    const [resident_id, setResidentId] = useState("");
    const [company_id, setCompanyId] = useState("");
    

    useEffect(() => {
        fetch(`http://127.0.0.1:3001/api/v1/companies`)
            .then((res) => res.json())
            .then((companies) => setCompanies(companies))
            .catch((err) => console.log(`Error: ${err}`));

        fetch('http://127.0.0.1:3001/api/v1/residents')
            .then((res) => res.json())
            .then((residents) => setResidents(residents))
            .catch((err) => console.log(`Error: ${err}`));
        }, []);

    const handleSubmit = (() => {
        fetch('http://127.0.0.1:3001/api/v1/bonds',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              bond: {
                    role: role,
                    date: date,
                    resident_id: resident_id,
                    company_id: company_id
                } 
            })
          }
        )
      });

    return (
      <div>
        <Card className="m-4">
              <Card.Header>
                <Card.Title as="h4">Criar Vínculo</Card.Title>
              </Card.Header>
              <Card.Body className="mx-3">
                <Form onSubmit={handleSubmit}>
                  <Row className="my-2">
                    <Col className="pr-1" md="5">
                        <Form.Group className="my-2">
                            <Form.Label>Selecione a empresa</Form.Label>
                            <Form.Control
                                as="select"
                                value={company_id}
                                onChange={e => {
                                    console.log(e.target.value)
                                    setCompanyId(e.target.value);
                                }}
                                >
                                {companies &&(
                                    companies.map(company => (
                                    <option value={company.id}>{company.name}</option>
                                )))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Selecione o residente</Form.Label>
                            <Form.Control
                                as="select"
                                value={resident_id}
                                onChange={e => {
                                    console.log(e.target.value)
                                    setResidentId(e.target.value);
                                }}
                                >
                                {residents &&(
                                    residents.map(resident => (
                                    <option value={resident.id}>{resident.name}</option>
                                )))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                  </Row>
                  <Row className="my-2">
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>
                          Cargo
                        </label>
                        <Form.Control 
                          type="text" value={role}
                          onChange={(e) => setRole(e.target.value)}
                          placeholder="Insira o cargo"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="my-2">
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Data de Encargo</label>
                        <Form.Control
                          type="date" value={date}
                          onChange={(e) => setDate(e.target.value)}
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
              </Card.Body>
        </Card>
      </div>
    );
}

export default CreateBond;