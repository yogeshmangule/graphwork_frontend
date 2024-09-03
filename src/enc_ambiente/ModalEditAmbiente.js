// import React from 'react';
// import '../App.css';
// import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import EditAmbiente from './EditAmbiente';

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
//           {id && <EditAmbiente id={id} />}

//             </>
//         </ModalBody>

//       </Modal>
//       </>
//     )
//   }
// }

// export default ShowModalEdit;


import React from 'react';
// import '../App.css';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import EditAmbiente from './EditAmbiente';

class ShowModalEdit extends React.Component {
  state = {
    abierto: false,
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  }

  render() {
    const { id, getEncuestas } = this.props;
    return (
      <>
        <div className="principal">
          <div className="secundario">
            <Button className="btn btn-success btn-info" onClick={this.abrirModal}>
              <i className="fas fa-edit"></i>
            </Button>
          </div>
        </div>

        <Modal isOpen={this.state.abierto} className="custom-modal">
          <ModalHeader toggle={this.abrirModal}></ModalHeader>
          <ModalBody>
            <>
              {id && <EditAmbiente id={id} getEncuestas={getEncuestas} abrirModal={this.abrirModal} />}
            </>
          </ModalBody>
        </Modal >

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

          .custom-modal {
            width: 80%;
            max-width: 100%;
            
          }

          .close-button {
            margin-left: auto;
          }

          @media (max-width: 768px) {
            .custom-modal {
              width: 80%;
              max-width: 100%;
              padding: 10px;
            }

            .close-button {
              margin-left: auto;
              margin-right: 10px;
            }
          }

          @media (max-width: 480px) {
            .custom-modal {
              width: 80%;
              max-width: 100%;
              padding: 5px;
            }

            .close-button {
              margin-left: auto;
              margin-right: 5px;
            }
          }
        `}</style>
      </>
    )
  }
}

export default ShowModalEdit;