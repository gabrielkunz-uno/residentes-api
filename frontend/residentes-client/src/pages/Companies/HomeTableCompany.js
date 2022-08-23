import React from "react";
import {  
    Container, 
    Row, 
    Col, 
    Card, 
    Button 
} from "react-bootstrap";
import { useNavigate } from "react-router-dom"

import ShowCompany from "./ShowCompany"

export default function Table({companies}){

    const navigate = useNavigate()

    return(
        <div>
            <Container >
                <div className="d-flex flex-row">
                    <div className="col-sm-6"><h2>Empresas:</h2></div>
                </div>
                <hr ></hr>
                <div className="container">
                    <Row className="">
                        {
                            companies &&(
                            companies.map((company, key) => (
                                <Col md={6} key={ key }>
                                    <div className="mt-4  coluna-center letra size" >
                                        <Card className="table table-hover shadow p-3 mb-5 bg-body rounded-5 ">
                                            <Card.Header className="bg-black">
                                                <h3 className="text-center mb-0 text-white">{company.name}</h3>
                                            </Card.Header>
                                            <Card.Body className="">
                                                    <h5>Email: {company.email}</h5>
                                                    <h5>Telefone: {company.telephone}</h5>
                                                    <h5>Website: {company.website}</h5>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            ))
                            )
                        }
                    </Row>
                </div>
            </Container>
        </div>
    )

}
