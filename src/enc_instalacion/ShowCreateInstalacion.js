// import React from 'react';
// import '../App.css';
// import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateInstalacion from './CreateInstalacion';

// class ModalCreateInstalacion extends React.Component{
//   state={
//     abierto: false,
//   }

//   abrirModal=()=>{
//     this.setState({abierto: !this.state.abierto});
//   }

//   render(){

//     const modalStyles = {
//         width: "80%", // Ajusta el ancho del modal
//         maxWidth: "800px", // Establece el ancho máximo del modal
//       };

//     return(
//       <>
//       <div className="principal">
//         <div className="secundario">
//           <Button className='parent-rigth btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>Agregar Instalacion</Button>

//         </div>
//       </div>

//       <Modal isOpen={this.state.abierto} style={modalStyles}>
//         <ModalHeader toggle={this.abrirModal}>

//         </ModalHeader>
//         <ModalBody>
//         <>
//           <CreateInstalacion />
//             </>
//         </ModalBody>

//       </Modal>
//       </>
//     )
//   }
// }

// export default ModalCreateInstalacion;


// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateInstalacion from './CreateInstalacion';

// class ModalCreateInstalacion extends React.Component {
//   state = {
//     abierto: false,
//   };

//   abrirModal = () => {
//     this.setState({ abierto: !this.state.abierto });
//   };

//   render() {
//     const modalStyles = {
//       width: "90%", // Adjust the width for responsiveness
//       maxWidth: "800px", // Set maximum width for the modal
//       margin: "0 auto", // Center the modal horizontally
//     };

//     return (
//       <>
//         <div className="principal">
//           <div className="secundario d-flex justify-content-end"> {/* Use Bootstrap utility classes */}
//             <Button
//               className="btn btn-success btn-ladda"
//               color="success"
//               onClick={this.abrirModal}
//             >
//               Agregar Instalacion
//             </Button>
//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           {/* <ModalHeader /> */}
//           {/* toggle={this.abrirModal} You can add a close button here if needed */}
//           {/* </ModalHeader> */}
//           <ModalBody>
//             <CreateInstalacion />
//           </ModalBody>
//         </Modal>
//       </>
//     );
//   }
// }

// export default ModalCreateInstalacion;

import React, { useCallback, useState } from 'react';
import '../App.css';
import { Button, Modal, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CreateInstalacion from './CreateInstalacion';
import ModalCreateSeguridad from '../enc_seguridad/ShowCreateSeguridad';

const ModalCreateInstalacion = ({ isOpen, setcreateInstalacionOpen }) => {

  const [iscreateSeguridadOpen, setcreateSeguridadOpen] = useState(false);

  const toggleCreateInstalacionModel = useCallback(() => {
    setcreateInstalacionOpen((prevState) => !prevState);
  }, []);

  const openCreateSeguridadModel = useCallback(() => {
    setcreateSeguridadOpen(true);
    setcreateInstalacionOpen(false);
  }, []);

  const closeCreateSeguridadModel = useCallback(() => {
    setcreateSeguridadOpen(false);
  }, []);


  const modalStyles = {
    width: "80%", // Adjust the width for responsiveness
    maxWidth: "800px", // Set maximum width for the modal
    margin: "0 auto", // Center the modal horizontally
  };

  return (
    <>
      <Modal isOpen={isOpen} style={modalStyles}>
        <ModalBody>
          <CreateInstalacion abrirModal={toggleCreateInstalacionModel} setcreateSeguridadOpen={setcreateSeguridadOpen} openCreateSeguridadModel={openCreateSeguridadModel} />
        </ModalBody>
      </Modal>

      <ModalCreateSeguridad isOpen={iscreateSeguridadOpen} onClose={closeCreateSeguridadModel} setcreateSeguridadOpen={setcreateSeguridadOpen} />

    </>
  );
};

export default ModalCreateInstalacion;

