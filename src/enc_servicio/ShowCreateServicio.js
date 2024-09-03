// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateServicio from './CreateServicio';

// class ModalCreateServicio extends React.Component {
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
//             <Button className='parent-rigth btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>Agregar Servicio</Button>

//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           <ModalHeader toggle={this.abrirModal}>

//           </ModalHeader>
//           <ModalBody>
//             <>
//               <CreateServicio />
//             </>
//           </ModalBody>

//         </Modal>
//       </>
//     )
//   }
// }

// export default ModalCreateServicio;

// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateServicio from './CreateServicio';

// class ModalCreateServicio extends React.Component {
//   state = {
//     abierto: false,
//   }

//   abrirModal = () => {
//     this.setState({ abierto: !this.state.abierto });
//   }

//   render() {

//     const modalStyles = {
//       width: "90%", // Adjusts the width of the modal for responsiveness
//       maxWidth: "800px", // Sets the maximum width of the modal
//       margin: "auto", // Centers the modal on the screen
//     };

//     return (
//       <>
//         <div className="d-flex justify-content-center my-2">
//           <Button className='btn btn-success' color="success" onClick={this.abrirModal}>
//             Agregar Servicio
//           </Button>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles} toggle={this.abrirModal}>
//           {/* <ModalHeader toggle={this.abrirModal} className="d-flex justify-content-between">
//             <span>Agregar Servicio</span>
//             <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
//           </ModalHeader> */}
//           <ModalBody>
//             <CreateServicio />
//           </ModalBody>
//         </Modal>
//       </>
//     )
//   }
// }

// export default ModalCreateServicio;


import React, { useCallback, useState } from 'react';
import '../App.css';
import { Button, Modal, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CreateServicio from './CreateServicio';
import ModalCreateEspectaculo from '../enc_espectaculos/ShowCreateEspectaculo';

const ModalCreateServicio = ({ isOpen, setCreateServicioOpen }) => {

  const [isCreateEspectaculoOpen, setCreateEspectaculoOpen] = useState(false);

  const toggleCreateEspectaculoModel = useCallback(() => {
    setCreateEspectaculoOpen((prevState) => !prevState);
  }, []);

  const openCreateEspectaculoModel = useCallback(() => {
    setCreateServicioOpen(false);
    setCreateEspectaculoOpen(true);
  }, []);

  const closeCreateEspectaculoModel = useCallback(() => {
    setCreateServicioOpen(false);
  }, []);

  const modalStyles = {
    width: "80%", // Adjusts the width of the modal for responsiveness
    maxWidth: "100%", // Sets the maximum width of the modal
    // margin: "auto", // Centers the modal on the screen
  };

  return (
    <>

      <Modal isOpen={isOpen} style={modalStyles} centered>
        <ModalBody>
          <CreateServicio abrirModal={toggleCreateEspectaculoModel} setCreateEspectaculoOpen={setCreateEspectaculoOpen} openCreateEspectaculoModel={openCreateEspectaculoModel} />
        </ModalBody>
      </Modal>
      <ModalCreateEspectaculo isOpen={isCreateEspectaculoOpen} onClose={closeCreateEspectaculoModel} setCreateEspectaculoOpen={setCreateEspectaculoOpen} />
    </>
  );
};

export default ModalCreateServicio;
