import React from "react";
import {
  Button,
  Container,
} from "react-bootstrap";
import { MDBCard, MDBCardBody, MDBCardText, MDBCardHeader, MDBCardFooter } from 'mdb-react-ui-kit';


function CardReport(props){
    
    return (
      <div>
        <Container>
          <MDBCard alignment='center' className="card-report"
            style={{ width: '20rem', height: '15rem', marginBottom: "15px" }}>
            <MDBCardHeader>Relato de {props.report.name}</MDBCardHeader>
            <MDBCardBody>
              <MDBCardText>{props.report.content.substring(0, 85)}...</MDBCardText>
            </MDBCardBody>
                  <Button className="btn btn-report btn-sm mg-report" 
                      onClick= {() => {
                        props.show_relato()
                        props.set_relatos(props.report)
                      }
                    }>Ver relato</Button>
            <MDBCardFooter className='text-muted'>Criado em {props.report.created}</MDBCardFooter>
          </MDBCard>
        </Container>
      </div>
    );
}

export default CardReport; 