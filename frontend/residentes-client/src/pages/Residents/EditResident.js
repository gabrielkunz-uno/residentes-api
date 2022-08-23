import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import Request from "../../request"
import {
    Button,
    Card,
    Form,
    Row,
    Col,
  } from "react-bootstrap";

function EditResident(props){

    const [resident, setResident] = useState([]);
    const { state } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
            Request.getById("residents", state)
            .then((resident) => setResident(resident))
            .catch((err) => console.log(`Error: ${err}`));
        }, []);

        const handleSubmit = (() => {
                Request.putMethod("residents", state,
                {resident: {
                    name: resident.name,
                    email: resident.email,
                    whatsapp: resident.whatsapp,
                    registration_id: resident.registration_id,
                    initial_date: resident.initial_date,
                    final_date: resident.final_date
                    }
                })
            .then(() => navigate(-2))
            .catch((err) => console.log(`Error: ${err}`));
        });

        return (
        <div>
            <Card className="m-4">
            <Card.Header>
                <Card.Title as="h4">Editando Residente</Card.Title>
            </Card.Header>
            <Card.Body className="mx-3">
                <Form>
                    <div className="form-floating mb-3 col-md-6 w-100">
                        <input 
                            type="text" defaultValue={resident.name}
                            className="form-control  " 
                            id="register_name" 
                            onChange={(e) => resident.name = e.target.value}
                            placeholder="Nome Completo"/>
                        <label htmlFor="register_name">NOME</label>
                    </div>
                    <div className="form-floating mb-3 col-md-6 w-100">
                        <input 
                            type="email" defaultValue={resident.email}
                            className="form-control " 
                            id="register_email" 
                            onChange={(e) => resident.email = e.target.value}
                            placeholder="name@example.com"/>
                        <label htmlFor="register_email">EMAIL</label>
                    </div>
                    <div className="form-floating mb-3 col-md-6 w-100">
                        <input 
                            type="tel" defaultValue={resident.whatsapp}
                            className="form-control  " 
                            id="register_whatsapp" 
                            onChange={(e) => resident.whatsapp = e.target.value}
                            placeholder="(12) 1234-1234"/>
                        <label htmlFor="register_whatsapp">WHATSAPP</label>
                    </div>
                    <div className="form-floating mb-3 col-md-6 w-100">
                        <input 
                            type="number" defaultValue={resident.registration_id}
                            className="form-control  " 
                            id="register_registration_id" 
                            onChange={(e) => resident.registration_id = e.target.value}
                            placeholder="123412123"/>
                        <label htmlFor="register_registration_id">MATRÍCULA</label>
                    </div>
                    <div className="form-floating mb-3 col-md-6 w-100">
                        <input 
                            type="date" defaultValue={resident.initial_date}
                            className="form-control  " 
                            id="register_initial_date" 
                            onChange={(e) => resident.initial_date = e.target.value}/>
                        <label htmlFor="register_initial_date">DATA INICIAL</label>
                    </div>
                    <div className="form-floating mb-3 col-md-6 w-100">
                        <input 
                            type="date" defaultValue={resident.final_date}
                            className="form-control  " 
                            id="register_final_date" 
                            onChange={(e) => resident.final_date = e.target.value}/>
                        <label htmlFor="register_final_date">DATA FINAL</label>
                    </div>
                <Button
                    onClick={handleSubmit}
                className="btn-fill btn-dark pull-right"
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

export default EditResident;