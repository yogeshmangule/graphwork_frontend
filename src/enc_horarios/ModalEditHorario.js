import React from 'react';
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import EditHorario from './EditHorario';

class ShowModalEdit extends React.Component {
  state = {
    abierto: false,
  };

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  render() {
    const { id, getEncuestas } = this.props;
    const modalStyles = {
      width: "80%", // Adjust the modal width
      maxWidth: "100%", // Set the maximum width of the modal
      // margin: "0 auto", // Center the modal horizontally
    };

    return (
      <>
        <div >
          <div className="">
            <Button
              className=" btn btn-success btn-info w-auto"
              onClick={this.abrirModal}
            >
              <i className="fas fa-edit"></i>
            </Button>
          </div>
        </div>

        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader toggle={this.abrirModal}></ModalHeader>
          <ModalBody>
            {id && <EditHorario id={id} getEncuestas={getEncuestas} abrirModal={this.abrirModal} />}
          </ModalBody>
        </Modal>

        <style jsx>{`
          .principal {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }

          .secundario {
            display: flex;
            justify-content: flex-end;
            width: 100%;
          }

          @media (max-width: 768px) {
            .principal {
              padding: 10px;
            }

            .secundario {
              justify-content: center;
            }

            .btn-info {
              width: 100%;
             
            }

            .modal-content {
              width: 100%;
              max-width: 100%;
            }
          }

          @media (max-width: 480px) {
            .principal {
              padding: 5px;
            }

            .btn-info {
              width: 100%;
              font-size: 14px;
              padding: 10px;
            }

            .modal-content {
              width: 100%;
              max-width: 100%;
            }
          }
        `}</style>
      </>
    );
  }
}

export default ShowModalEdit;
