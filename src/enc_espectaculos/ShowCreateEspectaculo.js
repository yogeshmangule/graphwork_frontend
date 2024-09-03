// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateEspec from './CreateEspectaculo';

// class ModalCreateEspectaculo extends React.Component {
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
//             <Button className='parent-rigth btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>Agregar Espectaculo</Button>

//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           <ModalHeader toggle={this.abrirModal}>


//           </ModalHeader>
//           <ModalBody>
//             <>
//               <CreateEspec />
//             </>
//           </ModalBody>

//         </Modal>
//       </>
//     )
//   }
// }

// export default ModalCreateEspectaculo;


// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateEspec from './CreateEspectaculo';

// class ModalCreateEspectaculo extends React.Component {
//   state = {
//     abierto: false,
//   }

//   abrirModal = () => {
//     this.setState({ abierto: !this.state.abierto });
//   }

//   render() {

//     const modalStyles = {
//       width: "80%", // Adjusts modal width
//       maxWidth: "800px", // Sets the maximum modal width
//       margin: 'auto',
//     };

//     return (
//       <>
//         <div className="principal">
//           <div className="secundario">
//             <Button className='parent-rigth btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>
//               Agregar Espectaculo
//             </Button>
//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           {/* <ModalHeader toggle={this.abrirModal}></ModalHeader> */}
//           <ModalBody>
//             <CreateEspec />
//           </ModalBody>
//         </Modal>

//         <style jsx>{`
//           .principal {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100%;
//           }

//           .secundario {
//             text-align: center;
//           }

//           @media (max-width: 768px) {
//             .secundario {
//               width: 100%;
//               display: flex;
//               justify-content: center;
//               margin: 0 auto;
//             }

//             .modal-dialog {
//               width: 95%;
//               margin: auto;
//             }

//             .btn {
//               width: 100%;
//               margin-bottom: 10px;
//             }
//           }

//           @media (max-width: 480px) {
//             .modal-header {
//               display: flex;
//               justify-content: space-between;
//               align-items: center;
//               padding: 10px;
//             }

//             .btn {
//               width: 100%;
//               margin: 0 auto;
//             }
//           }
//         `}</style>
//       </>
//     )
//   }
// }

// export default ModalCreateEspectaculo;

import React, { useCallback, useState } from 'react';
import '../App.css';
import { Button, Modal, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CreateEspec from './CreateEspectaculo';
import ModalCreatePersonal from '../enc_personal/ShowCreatePersonal';

const ModalCreateEspectaculo = ({ isOpen, setCreateEspectaculoOpen }) => {

  const [isCreatePersonalOpen, setCreatePersonalOpen] = useState(false);

  const toggleCreatePersonalModel = useCallback(() => {
    setCreatePersonalOpen((prevState) => !prevState);
  }, []);

  const openCreatePersonalModel = useCallback(() => {
    setCreateEspectaculoOpen(false);
    setCreatePersonalOpen(true);
  }, []);

  const closeCreatePersonalModel = useCallback(() => {
    setCreateEspectaculoOpen(false);
  }, []);


  const modalStyles = {
    width: "80%", // Adjusts modal width
    maxWidth: "100%", // Sets the maximum modal width
    // margin: 'auto',
  };

  return (
    <>

      <Modal isOpen={isOpen} style={modalStyles} centered>
        <ModalBody>
          <CreateEspec abrirModal={toggleCreatePersonalModel} setCreatePersonalOpen={setCreatePersonalOpen} openCreatePersonalModel={openCreatePersonalModel} />
        </ModalBody>
      </Modal>
      <ModalCreatePersonal isOpen={isCreatePersonalOpen} onClose={closeCreatePersonalModel} setCreatePersonalOpen={setCreatePersonalOpen} />

      <style jsx>{`
        .principal {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .secundario {
          text-align: center;
        }

        @media (max-width: 768px) {
          .secundario {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 0 auto;
          }

          .modal-dialog {
            width: 95%;
            margin: auto;
          }

          .btn {
            width: 100%;
            margin-bottom: 10px;
          }
        }

        @media (max-width: 480px) {
          .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
          }

          .btn {
            width: 100%;
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  );
};

export default ModalCreateEspectaculo;

