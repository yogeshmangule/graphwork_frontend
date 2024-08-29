// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateEncuesta from './CreateEncuesta';

// class ModalCreateEncuesta extends React.Component {
//   state = {
//     abierto: false,
//   }

//   abrirModal = () => {
//     this.setState({ abierto: !this.state.abierto });
//   }

//   render() {

//     console.log("encustaModel", this.state.abierto);
//     const modalStyles = {
//       width: "80%", // Ajusta el ancho del modal
//       maxWidth: "800px", // Establece el ancho máximo del modal
//     };

//     return (
//       <>
//         <div className="principal">
//           <div className="secundario">
//             <Button className='parent-rigth btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>Agregar Nueva Encuesta</Button>

//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           {/* <ModalHeader >

//         </ModalHeader> */}
//           <ModalHeader toggle={this.abrirModal}>
//             {/* <Button close onClick={this.abrirModal} /> */}
//           </ModalHeader>

//           <ModalBody>
//             <>
//               <CreateEncuesta />
//               {/* open={this.state.abierto} abrirModal1={this.abrirModal} */}
//             </>
//           </ModalBody>

//         </Modal>
//       </>
//     )
//   }
// }

// export default ModalCreateEncuesta;

//===========================================================

// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateEncuesta from './CreateEncuesta';

// class ModalCreateEncuesta extends React.Component {
//   state = {
//     abierto: false,
//   };

//   abrirModal = () => {
//     this.setState({ abierto: !this.state.abierto });
//   };

//   render() {
//     const modalStyles = {
//       width: '80%',
//       maxWidth: '800px',
//       margin: '0 auto', // Center the modal
//     };

//     return (
//       <>
//         <div className="principal">
//           <div className="secundario">
//             <Button
//               className="parent-right btn btn-success btn-ladda"
//               color="success"
//               onClick={this.abrirModal}
//             >
//               Agregar Nueva Encuesta
//             </Button>
//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           <ModalHeader toggle={this.abrirModal}></ModalHeader>
//           <ModalBody>
//             <CreateEncuesta />
//           </ModalBody>
//         </Modal>

//         <style jsx>{`
//           .principal {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             padding: 20px;
//           }

//           .secundario {
//             display: flex;
//             justify-content: flex-end;
//             width: 100%;
//           }

//           .parent-right {
//             display: flex;
//             justify-content: flex-end;
//           }

//           @media (max-width: 768px) {
//             .principal {
//               padding: 10px;
//             }

//             .secundario {
//               justify-content: center;
//             }

//             .parent-right {
//               justify-content: center;
//             }

//             .btn-ladda {
//               width: 100%;
//               font-size: 16px;
//             }

//             .modal-content {
//               width: 100%;
//               max-width: 100%;
//             }
//           }

//           @media (max-width: 480px) {
//             .principal {
//               padding: 5px;
//             }

//             .btn-ladda {
//               width: 100%;
//               font-size: 14px;
//               padding: 10px;
//             }

//             .modal-content {
//               width: 100%;
//               max-width: 100%;
//               padding: 20px;
//             }
//           }
//         `}</style>
//       </>
//     );
//   }
// }

// export default ModalCreateEncuesta;

//=====================================================
// import React, { useState, useCallback } from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateEncuesta from './CreateEncuesta';

// const ModalCreateEncuesta = () => {
//   const [abierto, setAbierto] = useState(false);

//   const abrirModal = useCallback(() => {
//     setAbierto(prevState => !prevState);
//   }, []);

//   const modalStyles = {
//     width: '80%',
//     maxWidth: '800px',
//     margin: '0 auto', // Center the modal
//   };

//   return (
//     <>
//       <div className="principal">
//         <div className="secundario">
//           <Button
//             className="parent-right btn btn-success btn-ladda"
//             color="success"
//             onClick={abrirModal}
//           >
//             Agregar Nueva Encuesta
//           </Button>
//         </div>
//       </div>

//       <Modal isOpen={abierto} style={modalStyles}>
//         <ModalHeader toggle={abrirModal}></ModalHeader>
//         <ModalBody>
//           <CreateEncuesta abrirModal={abrirModal} />
//         </ModalBody>
//       </Modal>

//       <style jsx>{`
//         .principal {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           padding: 20px;
//         }

//         .secundario {
//           display: flex;
//           justify-content: flex-end;
//           width: 100%;
//         }

//         .parent-right {
//           display: flex;
//           justify-content: flex-end;
//         }

//         @media (max-width: 768px) {
//           .principal {
//             padding: 10px;
//           }

//           .secundario {
//             justify-content: center;
//           }

//           .parent-right {
//             justify-content: center;
//           }

//           .btn-ladda {
//             width: 100%;
//             font-size: 16px;
//           }

//           .modal-content {
//             width: 100%;
//             max-width: 100%;
//           }
//         }

//         @media (max-width: 480px) {
//           .principal {
//             padding: 5px;
//           }

//           .btn-ladda {
//             width: 100%;
//             font-size: 14px;
//             padding: 10px;
//           }

//           .modal-content {
//             width: 100%;
//             max-width: 100%;
//             padding: 20px;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default ModalCreateEncuesta;


import React, { useState, useCallback } from 'react';
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CreateEncuesta from './CreateEncuesta';
import ModalCreateHorario from '../enc_horarios/ShowCreateHorario';

const ModalCreateEncuesta = () => {
  const [isEncuestaModalOpen, setEncuestaModalOpen] = useState(false);
  const [isHorarioModalOpen, setHorarioModalOpen] = useState(false);

  const toggleEncuestaModal = useCallback(() => {
    setEncuestaModalOpen((prevState) => !prevState);
  }, []);

  const openHorarioModal = useCallback(() => {
    setEncuestaModalOpen(false);
    setHorarioModalOpen(true);
  }, []);

  const closeHorarioModal = useCallback(() => {
    setHorarioModalOpen(false);
  }, []);


  return (
    <>
      <div className="principal">
        <div className="secundario">
          <Button
            className="parent-right btn btn-success btn-ladda"
            color="success"
            onClick={toggleEncuestaModal}
          >
            Agregar Nueva Encuesta
          </Button>
        </div>
      </div>

      <Modal isOpen={isEncuestaModalOpen} style={{ width: '80%', maxWidth: '800px' }}>
        <ModalHeader toggle={toggleEncuestaModal}></ModalHeader>
        <ModalBody>
          <CreateEncuesta abrirModal={toggleEncuestaModal} setEncuestaModalOpen={setEncuestaModalOpen} openHorarioModal={openHorarioModal} />
        </ModalBody>
      </Modal>

      <ModalCreateHorario isOpen={isHorarioModalOpen} onClose={closeHorarioModal} setHorarioModalOpen={setHorarioModalOpen} />

      <style jsx>{`
        .principal {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .secundario {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }

        .parent-right {
          display: flex;
          justify-content: flex-end;
        }

        @media (max-width: 768px) {
          .principal {
            padding: 10px;
          }

          .secundario {
            justify-content: center;
          }

          .parent-right {
            justify-content: center;
          }

          .btn-ladda {
            width: 100%;
            font-size: 16px;
          }

          .modal-content {
            width: 100%;
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .principal {
            padding: 5px;
          }

          .btn-ladda {
            width: 100%;
            font-size: 14px;
            padding: 10px;
          }

          .modal-content {
            width: 100%;
            max-width: 100%;
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default ModalCreateEncuesta;

