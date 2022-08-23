import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import {
    Button,
    Card,
    Modal,      
  } from "react-bootstrap";

import Request from "../../request"


function ShowCompany(props){
    const [company, setCompany]= useState(0);
    const navigate = useNavigate()
    const { state } = useLocation()

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    

    const deleteCompany = () => {
        Request.deleteMethod(`companies`, state)
        .then(() => navigate(-1))
    }

    useEffect(() => {
            Request.getById("companies", state)
            .then((company) => setCompany(company))
            .catch((err) => console.log(`Error: ${err}`));
        }, []);

    return(
        <div>
            <Card className="m-4">
                <Card.Header>
                    <Card.Title as="h4">Empresa {company.name}</Card.Title>
                </Card.Header>
                <Card.Body className="mx-3 container">
                    <h5>Empresa:</h5><p>{company.name}</p><hr/>
                    <h5>Email:</h5><p>{company.email}</p><hr/>
                    <h5>Telefone:</h5><p>{company.telephone}</p><hr/>
                    <h5>Website:</h5><p>{company.website}</p>
                </Card.Body>
                <Card.Footer>
                    <div className="d-flex flex-row">

                        <div className="float-start col-sm-6 text-center">
                            <Button size="lg" 
                                onClick={() => navigate("edit", {state: company.id})}>
                                Editar
                            </Button>
                        </div>

                        <div className="align-center col-sm-6 text-center">
                            <Button variant="danger" size="lg"
                                onClick={handleShow}>
                                Deletar
                            </Button>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
            <Modal centered show={show}>
                <Modal.Body>
                    <h5>Tem certeza que deseja deletar esta empresa?</h5>
                </Modal.Body>
                <Modal.Footer className="flex-row">
                    <div className="float-start col-sm-5 text-center">  
                        <Button onClick={handleClose}>
                            Fechar
                        </Button>
                    </div>
                    <div className="align-center col-sm-6 text-center">
                        <Button variant="danger" onClick={() => deleteCompany()}>
                            Deletar
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );

}

export default ShowCompany;
