// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreatePrecio from './CreatePrecio';

// class ModalCreatePrecio extends React.Component {
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
//             <Button className='parent-rigth btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>Agregar Precio</Button>

//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           <ModalHeader toggle={this.abrirModal}>

//           </ModalHeader>
//           <ModalBody>
//             <>
//               <CreatePrecio />
//             </>
//           </ModalBody>

//         </Modal>
//       </>
//     )
//   }
// }

// export default ModalCreatePrecio;


// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreatePrecio from './CreatePrecio';

// class ModalCreatePrecio extends React.Component {
//   state = {
//     abierto: false,
//   }

//   abrirModal = () => {
//     this.setState({ abierto: !this.state.abierto });
//   }

//   render() {
//     return (
//       <>
//         <div className="d-flex justify-content-end">
//           <Button className='btn btn-success btn-ladda' onClick={this.abrirModal}>
//             Agregar Precio
//           </Button>
//         </div>

//         <Modal isOpen={this.state.abierto} className="modal-dialog-centered">
//           {/* <ModalHeader toggle={this.abrirModal} className="d-flex justify-content-between align-items-center">
//             <Button color="secondary" onClick={this.abrirModal}>
//               Cerrar
//             </Button>
//           </ModalHeader> */}
//           <ModalBody>
//             <CreatePrecio />
//           </ModalBody>
//         </Modal>
//       </>
//     )
//   }
// }

// export default ModalCreatePrecio;

import React, { useCallback, useState } from 'react';
import '../App.css';
import { Button, Modal, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CreatePrecio from './CreatePrecio';
import ModalCreatePrecioBu from '../enc_rscbuenas/ShowCreateBuenasPractica'

const ModalCreatePrecio = ({ isOpen, setCreatePrecioOpen }) => {

  const [isCreatePrecioBuOpen, setCreatePrecioBuOpen] = useState(false);

  const toggleCreatePrecioBuModel = useCallback(() => {
    setCreatePrecioBuOpen((prevState) => !prevState);
  }, []);

  const openCreatePrecioBuModel = useCallback(() => {
    setCreatePrecioOpen(false);
    setCreatePrecioBuOpen(true);
  }, []);

  const closeCreatePrecioBuModel = useCallback(() => {
    setCreatePrecioOpen(false);
  }, []);

  const modalStyles = {
    width: "80%", // Ajusta el ancho del modal para dispositivos móviles
    maxWidth: "800px", // Establece el ancho máximo del modal para dispositivos más grandes
    margin: "0 auto", // Centra el modal horizontalmente
    top: "10%", // Da un pequeño margen superior en la pantalla
  };


  return (
    <>
      <Modal isOpen={isOpen} style={modalStyles} className="modal-dialog-centered" >
        <ModalBody>
          <CreatePrecio abrirModal={toggleCreatePrecioBuModel} setCreatePrecioBuOpen={setCreatePrecioBuOpen} openCreatePrecioBuModel={openCreatePrecioBuModel} />
        </ModalBody>
      </Modal>
      <ModalCreatePrecioBu isOpen={isCreatePrecioBuOpen} onClose={closeCreatePrecioBuModel} setCreatePrecioBuOpen={setCreatePrecioBuOpen} />
    </>
  );
};

export default ModalCreatePrecio;

