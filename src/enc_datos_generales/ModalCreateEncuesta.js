// import React, { useState, useCallback } from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateEncuesta from './CreateEncuesta';
// import ModalCreateHorario from '../enc_horarios/ShowCreateHorario';

// const ModalCreateEncuesta = () => {
//   const [isEncuestaModalOpen, setEncuestaModalOpen] = useState(false);
//   const [isHorarioModalOpen, setHorarioModalOpen] = useState(false);

//   const toggleEncuestaModal = useCallback(() => {
//     setEncuestaModalOpen((prevState) => !prevState);
//   }, []);

//   const openHorarioModal = useCallback(() => {
//     setEncuestaModalOpen(false);
//     setHorarioModalOpen(true);
//   }, []);

//   const closeHorarioModal = useCallback(() => {
//     setHorarioModalOpen(false);
//   }, []);


//   return (
//     <>
//       <div className="principal" style={{ width: 'fit-content' }}>
//         <div className="secundario">
//           <Button
//             className="parent-right btn btn-success btn-ladda"
//             color="success"
//             onClick={toggleEncuestaModal}
//             style={{ width: 'auto' }}
//           >
//             Agregar Nueva Encuesta
//           </Button>
//         </div>
//       </div>

//       <Modal isOpen={isEncuestaModalOpen} style={{ width: '80%', maxWidth: '800px' }}>
//         <ModalHeader toggle={toggleEncuestaModal}></ModalHeader>
//         <ModalBody>
//           <CreateEncuesta abrirModal={toggleEncuestaModal} setEncuestaModalOpen={setEncuestaModalOpen} openHorarioModal={openHorarioModal} />
//         </ModalBody>
//       </Modal>

//       <ModalCreateHorario isOpen={isHorarioModalOpen} onClose={closeHorarioModal} setHorarioModalOpen={setHorarioModalOpen} />

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

