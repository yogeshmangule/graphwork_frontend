// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateBuenaPr from './CreateBuenasPracticas';

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
//             <Button className='parent-rigth btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>Agregar RSC Buenas</Button>

//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           <ModalHeader toggle={this.abrirModal}>

//           </ModalHeader>
//           <ModalBody>
//             <>
//               <CreateBuenaPr />
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
// import CreateBuenaPr from './CreateBuenasPracticas';

// class ModalCreatePrecio extends React.Component {
//   state = {
//     abierto: false,
//   }

//   abrirModal = () => {
//     this.setState({ abierto: !this.state.abierto });
//   }

//   render() {

//     const modalStyles = {
//       width: "100%", // Use full width for smaller screens
//       maxWidth: "800px", // Maximum width for larger screens
//       margin: "0 auto" // Center the modal horizontally
//     };

//     return (
//       <>
//         <div className="d-flex justify-content-end p-2">
//           <Button className='btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>
//             Agregar RSC Buenas
//           </Button>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles} centered>
//           {/* <ModalHeader toggle={this.abrirModal}>

//           </ModalHeader> */}
//           <ModalBody>
//             <CreateBuenaPr />
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
import CreateBuenaPr from './CreateBuenasPracticas';
import ModalCreateMalas from '../enc_rscmalas/ShowCreateMalasP';

const ModalCreatePrecio = ({ isOpen, setCreatePrecioBuOpen }) => {

  const [isCreateMalasOpen, setCreateMalasOpen] = useState(false);

  const toggleCreateMalasModel = useCallback(() => {
    setCreateMalasOpen((prevState) => !prevState);
  }, []);

  const openCreateMalasModel = useCallback(() => {
    setCreatePrecioBuOpen(false);
    setCreateMalasOpen(true);
  }, []);

  const closeCreateMalasModel = useCallback(() => {
    setCreatePrecioBuOpen(false);
  }, []);


  const modalStyles = {
    width: "80%", // Use full width for smaller screens
    maxWidth: "100%", // Maximum width for larger screens
    // margin: "0 auto", // Center the modal horizontally
  };

  return (
    <>
      <Modal isOpen={isOpen} style={modalStyles} centered >
        <ModalBody>
          <CreateBuenaPr abrirModal={toggleCreateMalasModel} setCreateMalasOpen={setCreateMalasOpen} openCreateMalasModel={openCreateMalasModel} />
        </ModalBody>
      </Modal>
      <ModalCreateMalas isOpen={isCreateMalasOpen} onClose={closeCreateMalasModel} setCreateMalasOpen={setCreateMalasOpen} />
    </>
  );
};

export default ModalCreatePrecio;

