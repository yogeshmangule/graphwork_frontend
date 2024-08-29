// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateEntorno from './CreateEntorno';

// class ModalCreateEntorno extends React.Component {
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
//             <Button className='parent-rigth btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>Agregar Entorno</Button>

//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           <ModalHeader toggle={this.abrirModal}>

//           </ModalHeader>
//           <ModalBody>
//             <>
//               <CreateEntorno />
//             </>
//           </ModalBody>

//         </Modal>
//       </>
//     )
//   }
// }

// export default ModalCreateEntorno;


// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateEntorno from './CreateEntorno';

// class ModalCreateEntorno extends React.Component {
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
//           <Button className='btn btn-success' onClick={this.abrirModal}>
//             Agregar Entorno
//           </Button>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles} centered>
//           {/* <ModalHeader toggle={this.abrirModal}></ModalHeader> */}
//           <ModalBody>
//             <CreateEntorno />
//           </ModalBody>
//         </Modal>
//       </>
//     );
//   }
// }

// export default ModalCreateEntorno;


import React, { useCallback, useState } from 'react';
import '../App.css';
import { Button, Modal, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CreateEntorno from './CreateEntorno';
import ModalCreateServicio from '../enc_servicio/ShowCreateServicio';

const ModalCreateEntorno = ({ isOpen, setCreateEntornoOpen }) => {

  const [isCreateServicioOpen, setCreateServicioOpen] = useState(false);

  const toggleCreateServicioModel = useCallback(() => {
    setCreateServicioOpen((prevState) => !prevState);
  }, []);

  const openCreateServicioModel = useCallback(() => {
    setCreateEntornoOpen(false);
    setCreateServicioOpen(true);
  }, []);

  const closeCreateServicioModel = useCallback(() => {
    setCreateEntornoOpen(false);
  }, []);

  const modalStyles = {
    maxWidth: "800px", // Establish the maximum width of the modal
    width: "80%", // Ensure the modal width is responsive to screen size
  };

  return (
    <>
      <Modal isOpen={isOpen} style={modalStyles} centered>
        <ModalBody>
          <CreateEntorno abrirModal={toggleCreateServicioModel} setCreateServicioOpen={setCreateServicioOpen} openCreateServicioModel={openCreateServicioModel} />
        </ModalBody>
      </Modal>
      <ModalCreateServicio isOpen={isCreateServicioOpen} onClose={closeCreateServicioModel} setCreateServicioOpen={setCreateServicioOpen} />
    </>
  );
};

export default ModalCreateEntorno;