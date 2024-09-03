// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateAmbiente from './CreateAmbiente';

// class ModalCreateAmbiente extends React.Component {
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
//             <Button className='parent-rigth btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>Agregar Ambiente</Button>

//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           <ModalHeader toggle={this.abrirModal}>

//             {/* <Button style={{ marginLeft: '500px', marginRight: '20px' }} color="secondary" onClick={this.abrirModal}>Cerrar</Button> */}
//           </ModalHeader>
//           <ModalBody>
//             <>
//               <CreateAmbiente />
//             </>
//           </ModalBody>

//         </Modal>
//       </>
//     )
//   }
// }

// export default ModalCreateAmbiente;


// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateAmbiente from './CreateAmbiente';

// class ModalCreateAmbiente extends React.Component {
//   state = {
//     abierto: false,
//   }

//   abrirModal = () => {
//     this.setState({ abierto: !this.state.abierto });
//   }

//   render() {
//     return (
//       <>
//         {/* <div className="principal">
//           <div className="secundario">
//             <Button className='parent-rigth btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>
//               Agregar Ambiente
//             </Button>
//           </div>
//         </div> */}

//         <Modal isOpen={this.state.abierto} className="custom-modal">
//           {/* toggle={this.abrirModal} */}
//           {/* <ModalHeader /> */}
//           <ModalBody>
//             <CreateAmbiente />
//           </ModalBody>
//         </Modal>

//         <style jsx>{`
//           .principal {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             margin-bottom: 10px;
//           }

//           .secundario {
//             display: flex;
//             justify-content: flex-end;
//             align-items: center;
//             width: 100%;
//           }

//           .custom-modal {
//             max-width: 800px;
//             width: 80%;
//             margin: 0 auto;
//           }

//           @media (max-width: 768px) {
//             .custom-modal {
//               width: 90%;
//               padding: 10px;
//             }

//             .principal {
//               margin-bottom: 15px;
//             }
//           }

//           @media (max-width: 480px) {
//             .custom-modal {
//               width: 95%;
//               padding: 5px;
//             }

//             .principal {
//               margin-bottom: 20px;
//             }

//             .secundario {
//               justify-content: center;
//             }
//           }
//         `}</style>
//       </>
//     )
//   }
// }

// export default ModalCreateAmbiente;


import React, { useCallback, useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CreateAmbiente from './CreateAmbiente';
import ModalCreateInstalacion from '../enc_instalacion/ShowCreateInstalacion';

const ModalCreateAmbiente = ({ isOpen, setAmbiteModalOpen }) => {

  const [iscreateInstalacionOpen, setcreateInstalacionOpen] = useState(false);
  const toggleAmbiteModel = useCallback(() => {
    setAmbiteModalOpen((prevState) => !prevState);
  }, []);

  const openCreateInstalacionModel = useCallback(() => {
    setcreateInstalacionOpen(true);
    setAmbiteModalOpen(false);
  }, []);

  const closeCreateInstalacionModel = useCallback(() => {
    setcreateInstalacionOpen(false);
  }, []);


  return (
    <>
      <Modal isOpen={isOpen} style={{ width: '80%', maxWidth: '100%' }}>
        <ModalBody>
          <CreateAmbiente abrirModal={toggleAmbiteModel} setAmbiteModalOpen={setAmbiteModalOpen} openCreateInstalacionModel={openCreateInstalacionModel} />

        </ModalBody>
      </Modal>

      <ModalCreateInstalacion isOpen={iscreateInstalacionOpen} onClose={closeCreateInstalacionModel} setcreateInstalacionOpen={setcreateInstalacionOpen} />

      <style jsx>{`
        .principal {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
        }

        .secundario {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
        }

        .custom-modal {
          max-width: 800px;
          width: 80%;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .custom-modal {
            width: 90%;
            padding: 10px;
          }

          .principal {
            margin-bottom: 15px;
          }
        }

        @media (max-width: 480px) {
          .custom-modal {
            width: 95%;
            padding: 5px;
          }

          .principal {
            margin-bottom: 20px;
          }

          .secundario {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default ModalCreateAmbiente;

