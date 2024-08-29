// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import ModalCreate from './CreateMarketing';

// class ModalCreateMarketing extends React.Component {
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
//             <Button className='parent-rigth btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>Agregar Marketing</Button>

//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           <ModalHeader toggle={this.abrirModal}>

//           </ModalHeader>
//           <ModalBody>
//             <>
//               <ModalCreate />
//             </>
//           </ModalBody>

//         </Modal>
//       </>
//     )
//   }
// }

// export default ModalCreateMarketing;


// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import ModalCreate from './CreateMarketing';

// class ModalCreateMarketing extends React.Component {
//   state = {
//     abierto: false,
//   };

//   abrirModal = () => {
//     this.setState({ abierto: !this.state.abierto });
//   };

//   render() {
//     const modalStyles = {
//       width: "90%", // Ajusta el ancho del modal para dispositivos móviles
//       maxWidth: "800px", // Establece el ancho máximo del modal para dispositivos más grandes
//       margin: "0 auto", // Centra el modal horizontalmente
//       top: "10%", // Da un pequeño margen superior en la pantalla
//     };

//     return (
//       <>
//         <div className="principal">
//           <div className="secundario">
//             <Button
//               className="parent-rigth btn btn-success btn-ladda"
//               color="success"
//               onClick={this.abrirModal}
//             >
//               Agregar Marketing
//             </Button>
//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           {/* <ModalHeader toggle={this.abrirModal}></ModalHeader> */}
//           <ModalBody>
//             <ModalCreate />
//           </ModalBody>
//         </Modal>
//       </>
//     );
//   }
// }

// export default ModalCreateMarketing;

import React, { useCallback, useState } from 'react';
import '../App.css';
import { Button, Modal, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ModalCreate from './CreateMarketing';
import ModalCreatePrecio from '../enc_precio/ShowCreatePrecio';

const ModalCreateMarketing = ({ isOpen, setCreateMarketingOpen }) => {

  const [isCreatePrecioOpen, setCreatePrecioOpen] = useState(false);

  const toggleCreatePrecioModel = useCallback(() => {
    setCreatePrecioOpen((prevState) => !prevState);
  }, []);

  const openCreatePrecioModel = useCallback(() => {
    setCreateMarketingOpen(false);
    setCreatePrecioOpen(true);
  }, []);

  const closeCreatePrecioModel = useCallback(() => {
    setCreateMarketingOpen(false);
  }, []);


  const modalStyles = {
    width: "80%", // Ajusta el ancho del modal para dispositivos móviles
    maxWidth: "800px", // Establece el ancho máximo del modal para dispositivos más grandes
    margin: "0 auto", // Centra el modal horizontalmente
    top: "10%", // Da un pequeño margen superior en la pantalla
  };

  return (
    <>
      <Modal isOpen={isOpen} style={modalStyles} centered>
        <ModalBody>
          <ModalCreate abrirModal={toggleCreatePrecioModel} setCreatePrecioOpen={setCreatePrecioOpen} openCreatePrecioModel={openCreatePrecioModel} />
        </ModalBody>
      </Modal>
      <ModalCreatePrecio isOpen={isCreatePrecioOpen} onClose={closeCreatePrecioModel} setCreatePrecioOpen={setCreatePrecioOpen} />

    </>
  );
};

export default ModalCreateMarketing;
