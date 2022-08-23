import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"
import {
    Button,
    Card,
    Form,
    Col,
    Row
  } from "react-bootstrap";

import Request from "../../request"

function CreateCompany(){
    const [content, setContent] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (() => {
        Request.postMethod("reports", {report: {content: content}})
        .then(() => navigate(-1))
      });

    return (
      <div>
        <Card className="m-4">
            <Card.Header>
                <Card.Title as="h4">Criando Relato</Card.Title>
            </Card.Header>
            <Card.Body className="mx-3">
                <Form>
                    <div className="form-floating mb-3 col-md-6 w-100">
                        <input 
                            type="text"
                            className="form-control  " 
                            id="register_name" 
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Nome Completo"/>
                        <label htmlFor="register_name">Relato</label>
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

export default CreateCompany