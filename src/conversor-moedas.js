import React from "react";
import './conversor-moedas.css';
import { Jumbotron, Form, Col, Button, Spinner, Alert, Modal } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import ListarMoedas from "./listar-moedas";

function ConversorMoedas() {
  return (
    <div>
      <h1>Conversor Moedas</h1>
      <Alert variant="danger" show={false}>
        Error obtendo dados de conversao, tente novamente !!
      </Alert>
      <Jumbotron>
        <Form>
            <Form.Row>
              <Col sm="3">
                <Form.Control placeholder="0" value={1} required/>
              </Col>

              <Col sm="3">
                  <Form.Control as="select">
                     <ListarMoedas />
                  </Form.Control>
              </Col>

              <Col sm="1" className="text-center" style={{paddingTop:'5px'}}>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </Col>

              <Col sm="3">
                <Form.Control as="select">
                  <ListarMoedas />
                </Form.Control>
              </Col>

              <Col sm="2">
                <Button variant="success" type="submit">
                  <Spinner animation="border" size="sm" />
                  Converter
                </Button>
              </Col>
            </Form.Row>
        </Form>
        <Modal show={false}>
          <Modal.Header closeButton>
            <Modal.Title>Conversão</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Resultado da conversao...
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success">
              Nova Conversao
            </Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>
    </div>
  );
}

export default ConversorMoedas;
