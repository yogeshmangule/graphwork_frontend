// import React from 'react';
// import '../App.css';
// import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import EditMarketing from './EditMarketing';

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
//           {id && <EditMarketing id={id} />}

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
import EditMarketing from './EditMarketing';

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
      width: "80%", // Ajusta el ancho del modal para que ocupe un 90% del viewport en dispositivos pequeños
      maxWidth: "100%", // Establece el ancho máximo del modal
      // margin: "0 auto", // Centra el modal horizontalmente
      // top: "10%", // Da un pequeño margen superior en la pantalla
    };

    return (
      <>
        <div >
          <Button
            className=" btn-success btn-info w-auto"
            onClick={this.abrirModal}
          >
            <i className="fas fa-edit"></i>
          </Button>
        </div>

        <Modal isOpen={this.state.abierto} className='custom-modal'>
          <ModalHeader toggle={this.abrirModal}>
          </ModalHeader>
          <ModalBody>
            <>
              {id && <EditMarketing id={id} getEncuestas={getEncuestas} abrirModal={this.abrirModal} />}
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
    );
  }
}

export default ShowModalEdit;
