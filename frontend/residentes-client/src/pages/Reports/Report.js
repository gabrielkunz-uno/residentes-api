import React, {useEffect, useState}  from "react"
import { useNavigate } from "react-router-dom"
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Form
} from "react-bootstrap"

import CardReport from "./CardReport"
import "../../assets/css/report.css"
import Loader from "../../components/Loader/Loader"
import Request from "../../request"


function Report() {

  const [reportList, setReportList] = useState([])
  const [currentRelato, setcurrentRelato] = useState([])
  const [loading, setLoading] = useState({display: 'block', tamanho: 'max'})
  const navigate = useNavigate()

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleOpen = () => setShow(true)


    useEffect(() => {
      (async () => {
        setReportList(await Request.getAll('reports_list'))
        setLoading({display: 'none', tamanho: 'max'})
      })()
    }, []);


  return(
    <div className="report-card">

    <Container className="fluid">

      <Loader display={loading} />
      <div className="d-flex flex-row">
          <div className="col-sm-6"><h2>Relatos:</h2></div>
          <div className="col-sm-6 text-end"><Button style={{margin: "35px"}} size="sm" onClick={() => navigate("create")}><i class="fa-solid fa-plus"></i> Relato</Button></div>
      </div>


      <Row> 

        {reportList.map((relato, key) => {
              return(
                  <Col sm="6" key={key}>
                    <CardReport show_relato={()=>handleOpen()} set_relatos={setcurrentRelato} report={relato}/>
                  </Col>
              )
          })} 
      </Row>
    </Container>

    <Modal show={show} 
        aria-labelledby="contained-modal-title-vcenter"
        className="report-modal">
        <div className="modal-content-customized">
          <Modal.Header style={{display: "flex",justifyContent: "center",}}>
            <h5 className="modal-title">Relato de <span className="relato-name">{currentRelato.name}</span></h5>
          </Modal.Header>
          <Modal.Body>
            <p className="modal-paragraph">{currentRelato.content}</p>
          </Modal.Body>
          <Modal.Footer style={{ display: "flex", justifyContent: "center"}}>
            <Button variant="primary" className="close btn btn-report btn-sm" onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  )
}

export default Report;