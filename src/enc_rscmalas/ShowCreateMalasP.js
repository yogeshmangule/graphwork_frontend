// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateMalas from './CreateMalasPracticas';

// class ModalCreateMalas extends React.Component {
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
//             <Button className='parent-rigth btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>Agregar RSC Malas</Button>

//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           <ModalHeader toggle={this.abrirModal}>

//           </ModalHeader>
//           <ModalBody>
//             <>
//               <CreateMalas />
//             </>
//           </ModalBody>

//         </Modal>
//       </>
//     )
//   }
// }

// export default ModalCreateMalas;


// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateMalas from './CreateMalasPracticas';

// class ModalCreateMalas extends React.Component {
//   state = {
//     abierto: false,
//   }

//   abrirModal = () => {
//     this.setState({ abierto: !this.state.abierto });
//   }

//   render() {

//     const modalStyles = {
//       maxWidth: '100%', // Ensure the modal takes full width on mobile
//       width: '90%', // Adjust the width of the modal for responsiveness
//       margin: '0 auto', // Center the modal
//     };

//     return (
//       <>
//         <div className="d-flex justify-content-end">
//           <Button className='btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>
//             Agregar RSC Malas
//           </Button>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles} centered>
//           {/* <ModalHeader toggle={this.abrirModal}>
//           </ModalHeader> */}
//           <ModalBody>
//             <CreateMalas />
//           </ModalBody>
//         </Modal>
//       </>
//     )
//   }
// }

// export default ModalCreateMalas;


import React, { useCallback, useState } from 'react';
import '../App.css';
import { Button, Modal, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CreateMalas from './CreateMalasPracticas';
import ModalCreateValoracion from '../enc_valoracion/ShowCreateValoracion';

const ModalCreateMalas = ({ isOpen, setCreateMalasOpen }) => {

  const [isCreateValoracionOpen, setCreateValoracionOpen] = useState(false);

  const toggleCreateValoracionModel = useCallback(() => {
    setCreateValoracionOpen((prevState) => !prevState);
  }, []);

  const openCreateValoracionModel = useCallback(() => {
    setCreateMalasOpen(false);
    setCreateValoracionOpen(true);
  }, []);

  const closeCreateValoracionModel = useCallback(() => {
    setCreateMalasOpen(false);
  }, []);


  const modalStyles = {
    maxWidth: '100%', // Ensure the modal takes full width on mobile
    width: '80%', // Adjust the width of the modal for responsiveness
    // margin: '0 auto', // Center the modal
  };

  return (
    <>

      {/* <Modal isOpen={isOpen} style={modalStyles} centered>
        <ModalBody>
          <CreateMalas />
        </ModalBody>
      </Modal> */}

      <Modal isOpen={isOpen} style={modalStyles} centered >
        <ModalBody>
          <CreateMalas abrirModal={toggleCreateValoracionModel} setCreateValoracionOpen={setCreateValoracionOpen} openCreateValoracionModel={openCreateValoracionModel} />
        </ModalBody>
      </Modal>
      <ModalCreateValoracion isOpen={isCreateValoracionOpen} onClose={closeCreateValoracionModel} setCreateValoracionOpen={setCreateValoracionOpen} />
    </>
  );
};

export default ModalCreateMalas;

