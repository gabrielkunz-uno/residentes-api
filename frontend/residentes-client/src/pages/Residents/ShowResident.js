import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import Request from "../../request"
import {
    Button,
    Card,
    Modal,      
  } from "react-bootstrap";


function ShowResident(id){
    const [resident, setresident]= useState(0);
    const navigate = useNavigate()
    const { state } = useLocation()

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)



    const deleteResident = () => {
        Request.deleteMethod(`residents`, state)
        .then(() => navigate(-1))
    }

    useEffect(() => {
            Request.getById("residents", state)
            .then((resident) => setresident(resident))
            .catch((err) => console.log(`Error: ${err}`));
        }, []);

    return(
        <div>
            <Card className="m-4">
                <Card.Header>
                    <Card.Title as="h4">Residente {resident.name}</Card.Title>
                </Card.Header>
                <Card.Body className="mx-3 container">
                    <h5>Residente:</h5><p>{resident.name}</p><hr/>
                    <h5>Email:</h5><p>{resident.email}</p><hr/>
                    <h5>Telefone:</h5><p>{resident.whatsapp}</p><hr/>
                </Card.Body>
                <Card.Footer>
                    <div className="d-flex flex-row">

                        <div className="float-start col-sm-6 text-center">
                            <Button size="lg" 
                                onClick={() => navigate("edit", {state: resident.id})}>
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
                    <h5>Tem certeza que deseja deletar este residente?</h5>
                </Modal.Body>
                <Modal.Footer className="flex-row">
                    <div className="float-start col-sm-5 text-center">  
                        <Button onClick={handleClose}>
                            Fechar
                        </Button>
                    </div>
                    <div className="align-center col-sm-6 text-center">
                        <Button variant="danger" onClick={() => deleteResident()}>
                            Deletar
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );

}

export default ShowResident;