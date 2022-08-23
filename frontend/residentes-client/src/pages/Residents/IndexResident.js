import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"  
import Request from "../../request"
import {
    Button,
    Card,
    Container,
    Row,
    Modal,
  } from "react-bootstrap";

function IndexResident(){
    const [residents, setResidents]= useState(null);
    const [resident_id, setResidentId] = useState(null);
    const navigate = useNavigate();

    const deleteResident = () => {
        Request.deleteMethod(`residents`, resident_id);
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    function handleShow(id) {
        setResidentId(id)
        setShow(true);
    }

    useEffect(() => {
            Request.getAll("residents")
            .then((residents) => setResidents(residents))
            .catch((err) => console.log(`Error: ${err}`));
        }, []);
      
    return(
        <div>
            <Container >
                <div className="d-flex flex-row">
                    <div className="col-sm-6"><h2>Residentes:</h2></div>
                </div>
                <hr ></hr>
                <div className="container">
                    <Row>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">Ação</th>
                                </tr>

                            </thead>
                            <tbody>
                            {residents &&(
                                residents.map((resident, key) => (
                                <tr key={key}>
                                    <th scope="row">{ resident.name }</th>
                                    <th>{ resident.email }</th>
                                    <th>{ resident.whatsapp }</th>
                                    <th>

                                    <Button 
                                    className="btn-sm"
                                    onClick={() => navigate("show", {state: resident.id})}><i className="fa-solid fa-eye"></i></Button>
                                    <Button
                                    className="btn-sm m-1"
                                    variant="danger"
                                    onClick={() => handleShow(resident.id)}                                    
                                    ><i className="fa-solid fa-trash-can"></i></Button></th>
                                </tr>
                            ))
                        )}
                            </tbody>
                        </table>
                    </Row>
                </div>
            </Container>

                <Modal show={show}>
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
                            <Button variant="danger" onClick={deleteResident}>
                                Deletar
                            </Button>
                        </div>
                    </Modal.Footer>
                </Modal>
        </div>

        
    );
}

export default IndexResident;
//                 <Button onClick={() => navigate("show", {state: resident.id})}>