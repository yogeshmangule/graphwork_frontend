// import React from 'react';
// import '../App.css';
// import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import EditEspectaculo from './EditEspectaculo';

// class ShowModalEdit extends React.Component{
//   state={
//     abierto: false,
//   }

//   abrirModal=()=>{
//     this.setState({abierto: !this.state.abierto});
//   }

//   render(){
//     const { id } = this.props;
//     const modalStyles = {
//       width: "80%", // Ajusta el ancho del modal
//       maxWidth: "800px", // Establece el ancho máximo del modal
//     };
//     return(
//       <>
//       <div className="principal">
//         <div className="secundario">
//           <Button className='parent-rigth btn btn-success btn-info' onClick={this.abrirModal}><i className="fas fa-edit"></i></Button>

//         </div>
//       </div>

//       <Modal isOpen={this.state.abierto} style={modalStyles}>
//         <ModalHeader >

//           <Button  style={{ marginLeft: '500px', marginRight: '20px' }} color="secondary" onClick={this.abrirModal}>Cerrar</Button>
//         </ModalHeader>
//         <ModalBody>
//         <>
//           {id && <EditEspectaculo id={id} />}

//             </>
//         </ModalBody>

//       </Modal>
//       </>
//     )
//   }
// }

// export default ShowModalEdit;


import React from 'react';
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import EditEspectaculo from './EditEspectaculo';

class ShowModalEdit extends React.Component {
  state = {
    abierto: false,
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  }

  render() {
    const { id, getEncuestas } = this.props;
    const modalStyles = {
      width: "80%",
      maxWidth: "100%",
      // margin: 'auto',
    };

    const buttonStyles = {
      float: 'right',
      margin: '0 10px',
    };

    return (
      <>
        <div className="principal">
          <div className="secundario">
            <Button className='parent-rigth btn btn-success btn-info' onClick={this.abrirModal} style={buttonStyles}>
              <i className="fas fa-edit"></i>
            </Button>
          </div>
        </div>

        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader toggle={this.abrirModal}>
            {/* <Button color="secondary" onClick={this.abrirModal} style={{ marginLeft: 'auto' }}>Cerrar</Button> */}
          </ModalHeader>
          <ModalBody>
            {id && <EditEspectaculo id={id} getEncuestas={getEncuestas} abrirModal={this.abrirModal} />}
          </ModalBody>
        </Modal>

        <style jsx>{`
          .principal {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }

          .secundario {
            text-align: center;
          }

          @media (max-width: 768px) {
            .secundario {
              width: 100%;
              display: flex;
              justify-content: center;
              margin: 0 auto;
            }

            .modal-dialog {
              width: 95%;
              margin: auto;
            }

            .btn {
              width: 100%;
              margin-bottom: 10px;
            }
          }

          @media (max-width: 480px) {
            .modal-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px;
            }

            .btn {
              width: 100%;
              margin: 0 auto;
            }
          }
        `}</style>
      </>
    )
  }
}

export default ShowModalEdit;
