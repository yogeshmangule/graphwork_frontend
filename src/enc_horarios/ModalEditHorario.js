import React from 'react';
import '../App.css';
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import EditHorario from './EditHorario';

class ShowModalEdit extends React.Component{
  state={
    abierto: false,
  }

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }

  render(){
    const { id } = this.props;
    const modalStyles = {
      width: "80%", // Ajusta el ancho del modal
      maxWidth: "800px", // Establece el ancho máximo del modal
    };
    return(
      <>
      <div className="principal">
        <div className="secundario">
          <Button className='parent-rigth btn btn-success btn-info' onClick={this.abrirModal}><i className="fas fa-edit"></i></Button>

        </div>
      </div>

      <Modal isOpen={this.state.abierto} style={modalStyles}>
        <ModalHeader >
         
          <Button  style={{ marginLeft: '500px', marginRight: '20px' }} color="secondary" onClick={this.abrirModal}>Cerrar</Button>
        </ModalHeader>
        <ModalBody>
        <>
          {id && <EditHorario id={id} />}

            </>
        </ModalBody>

      </Modal>
      </>
    )
  }
}

export default ShowModalEdit;