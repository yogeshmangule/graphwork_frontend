import React from 'react';
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CreateUser from '../users/CreateUser';

class ShowModal extends React.Component {
  state = {
    abierto: false,
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  }

  render() {

    const modalStyles = {
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-60%, -50%)',
      width: '80%', // Ajusta el ancho del modal
      maxWidth: '100%', // Establece el ancho máximo del modal
    }
    return (
      <>
        <div className="principal">
          <div className="secundario">
            <Button className='parent-rigth btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>Agregar Nuevo Usuario</Button>

          </div>
        </div>

        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader >

            <Button style={{ marginLeft: '500px', marginRight: '20px' }} color="secondary" onClick={this.abrirModal}>Cerrar</Button>
          </ModalHeader>
          <ModalBody>
            <>
              <CreateUser />
            </>
          </ModalBody>

        </Modal>
      </>
    )
  }
}

export default ShowModal;