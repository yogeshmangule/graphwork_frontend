// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateValoracion from './CreateValoracion';

// class ModalCreateValoracion extends React.Component {
//   state = {
//     abierto: false,
//   }

//   abrirModal = () => {
//     this.setState({ abierto: !this.state.abierto });
//   }

//   render() {

//     const modalStyles = {
//       width: "80%", // Ajusta el ancho del modal
//       maxWidth: "800px", // Establece el ancho máximo del modal
//     };

//     return (
//       <>
//         <div className="principal">
//           <div className="secundario">
//             <Button className='parent-rigth btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>Agregar Valoracion</Button>

//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           <ModalHeader toggle={this.abrirModal}>

//           </ModalHeader>
//           <ModalBody>
//             <>
//               <CreateValoracion />
//             </>
//           </ModalBody>

//         </Modal>
//       </>
//     )
//   }
// }

// export default ModalCreateValoracion;


// import React from 'react';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateValoracion from './CreateValoracion';
// import '../App.css';

// class ModalCreateValoracion extends React.Component {
//   state = {
//     abierto: false,
//   }

//   abrirModal = () => {
//     this.setState({ abierto: !this.state.abierto });
//   }

//   render() {

//     const modalStyles = {
//       width: "90%", // Adjusted width to be more responsive
//       maxWidth: "800px", // Sets the maximum width for larger screens
//       margin: "0 auto", // Centers the modal horizontally on mobile
//     };

//     return (
//       <>
//         <div className="d-flex justify-content-end mb-2">
//           <Button
//             className='btn btn-success'
//             onClick={this.abrirModal}
//           >
//             Agregar Valoración
//           </Button>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           {/* <ModalHeader toggle={this.abrirModal}>
//             <Button color="secondary" onClick={this.abrirModal} className="ms-auto">
//               Cerrar
//             </Button>
//           </ModalHeader> */}
//           <ModalBody>
//             <CreateValoracion />
//           </ModalBody>
//         </Modal>
//       </>
//     );
//   }
// }

// export default ModalCreateValoracion;


import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CreateValoracion from './CreateValoracion';
import '../App.css';

const ModalCreateValoracion = ({ isOpen, setCreateValoracionOpen }) => {



  const modalStyles = {
    width: "80%", // Adjusted width to be more responsive
    maxWidth: "800px", // Sets the maximum width for larger screens
    margin: "0 auto", // Centers the modal horizontally on mobile
  };

  return (
    <>

      <Modal isOpen={isOpen} style={modalStyles}>
        <ModalBody>
          <CreateValoracion setCreateValoracionOpen={setCreateValoracionOpen} />
        </ModalBody>
      </Modal>


    </>
  );
};

export default ModalCreateValoracion;
