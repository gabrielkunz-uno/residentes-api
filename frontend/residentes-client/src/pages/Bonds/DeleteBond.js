import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    Form,
    Row,
    Col,
  } from "react-bootstrap";

function DeleteBond(id){
    const [bond, setBond]= useState(0);
    const [company, setCompany] = useState([]);
    const [resident, setResident]= useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:3001/api/v1/bonds/${id}`)
            .then((res) => res.json())
            .then((bond) => setBond(bond))
            .catch((err) => console.log(`Error: ${err}`));
        
        fetch(`http://127.0.0.1:3001/api/v1/companies/${bond.company_id}`)
            .then((res) => res.json())
            .then((company) => setCompany(company))
            .catch((err) => console.log(`Error: ${err}`));

        fetch(`http://127.0.0.1:3001/api/v1/residents/${bond.resident_id}`)
            .then((res) => res.json())
            .then((resident) => setResident(resident))
            .catch((err) => console.log(`Error: ${err}`));
        }, []);

    const handleSubmit = (() => {
        fetch(`http://127.0.0.1:3001/api/v1/bonds/${id}`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
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

export default DeleteBond;