import React from 'react';
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import EditUser from '../users/EditUser';

class ShowModalEdit extends React.Component {
  state = {
    abierto: false,
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  }

  render() {
    const { id, getUsers } = this.props;
    console.log(id);
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
            <Button className='parent-rigth btn btn-success btn-info' onClick={this.abrirModal}><i className="fas fa-edit"></i></Button>

          </div>
        </div>

        <Modal isOpen={this.state.abierto} className='custom-modal'>
          <ModalHeader toggle={this.abrirModal}>

            {/* <Button style={{ marginLeft: '500px', marginRight: '20px' }} color="secondary" onClick={this.abrirModal}>Cerrar</Button> */}
          </ModalHeader>
          <ModalBody>
            <>
              {id && <EditUser id={id} getUsers={getUsers} abrirModal={this.abrirModal}/>}
              {console.log("Valor de id:", id)}

            </>
          </ModalBody>

        </Modal>
        <style jsx>{`  
          .custom-modal {
            width: 80%;
            max-width: 100%;
              margin-right: auto;
           margin-left: auto;
          }
              @media (min-width: 576px){
              
          }

          @media (max-width: 768px) {
           .custom-modal {
            width: 80%;  
             }
            }

            
          @media (max-width: 480px) {
           .custom-modal {
            width: 80%;
        }
            }

         `}</style>
      </>
    )
  }
}

export default ShowModalEdit;