// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateSeguridad from './CreateSeguridad';

// class ModalCreateSeguridad extends React.Component {
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
//             <Button className='parent-rigth btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>Agregar Seguridad</Button>

//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           <ModalHeader toggle={this.abrirModal}>

//           </ModalHeader>
//           <ModalBody>
//             <>
//               <CreateSeguridad />
//             </>
//           </ModalBody>

//         </Modal>
//       </>
//     )
//   }
// }

// export default ModalCreateSeguridad;

// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateSeguridad from './CreateSeguridad';

// class ModalCreateSeguridad extends React.Component {
//   state = {
//     abierto: false,
//   }

//   abrirModal = () => {
//     this.setState({ abierto: !this.state.abierto });
//   }

//   render() {
//     const modalStyles = {
//       maxWidth: "800px", // Establish the maximum width of the modal
//       width: "100%", // Ensure the modal width is responsive to screen size
//     };

//     return (
//       <>
//         <div className="d-flex justify-content-end mb-3">
//           <Button className='btn btn-success' color="success" onClick={this.abrirModal}>
//             Agregar Seguridad
//           </Button>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles} centered>
//           {/* <ModalHeader toggle={this.abrirModal}></ModalHeader> */}
//           <ModalBody>
//             <CreateSeguridad />
//           </ModalBody>
//         </Modal>
//       </>
//     );
//   }
// }

// export default ModalCreateSeguridad;


import React, { useCallback, useState } from 'react';
import '../App.css';
import { Button, Modal, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CreateSeguridad from './CreateSeguridad';
import ModalCreateEntorno from '../enc_entorno/ShowCreateEntorno';

const ModalCreateSeguridad = ({ isOpen, setcreateSeguridadOpen }) => {

  const [isCreateEntornoOpen, setCreateEntornoOpen] = useState(false);

  const toggleCreateEntornoModel = useCallback(() => {
    setCreateEntornoOpen((prevState) => !prevState);
  }, []);

  const openCreateEntornoModel = useCallback(() => {
    setcreateSeguridadOpen(false);
    setCreateEntornoOpen(true);
  }, []);

  const closeCreateEntornoModel = useCallback(() => {
    setcreateSeguridadOpen(false);
  }, []);

  const modalStyles = {
    maxWidth: "100%", // Establish the maximum width of the modal
    width: "80%", // Ensure the modal width is responsive to screen size
  };

  return (
    <>

      <Modal isOpen={isOpen} style={modalStyles} centered>
        <ModalBody>
          <CreateSeguridad abrirModal={toggleCreateEntornoModel} setCreateEntornoOpen={setCreateEntornoOpen} openCreateEntornoModel={openCreateEntornoModel} />
        </ModalBody>
      </Modal>

      <ModalCreateEntorno isOpen={isCreateEntornoOpen} onClose={closeCreateEntornoModel} setCreateEntornoOpen={setCreateEntornoOpen} />
    </>
  );
};

export default ModalCreateSeguridad;
