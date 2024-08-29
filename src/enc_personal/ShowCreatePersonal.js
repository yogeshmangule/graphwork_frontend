// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreatePersonal from './CreatePersonal';

// class ModalCreatePersonal extends React.Component {
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
//             <Button className='parent-rigth btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>Agregar Personal</Button>

//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           <ModalHeader toggle={this.abrirModal}>

//           </ModalHeader>
//           <ModalBody>
//             <>
//               <CreatePersonal />
//             </>
//           </ModalBody>

//         </Modal>
//       </>
//     )
//   }
// }

// export default ModalCreatePersonal;


// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreatePersonal from './CreatePersonal';

// class ModalCreatePersonal extends React.Component {
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
//             <Button className='parent-right btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>
//               Agregar Personal
//             </Button>
//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           {/* <ModalHeader toggle={this.abrirModal} /> */}
//           <ModalBody>
//             <CreatePersonal />
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
//     );
//   }
// }

// export default ModalCreatePersonal;

import React, { useCallback, useState } from 'react';
import '../App.css';
import { Button, Modal, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CreatePersonal from './CreatePersonal';
import ModalCreateMarketing from '../enc_marketing/ShowCreateMarketing';

const ModalCreatePersonal = ({ isOpen, setCreatePersonalOpen }) => {

  const [isCreateMarketingOpen, setCreateMarketingOpen] = useState(false);

  const toggleCreateMarketingModel = useCallback(() => {
    setCreateMarketingOpen((prevState) => !prevState);
  }, []);

  const openCreateMarketingModel = useCallback(() => {
    setCreatePersonalOpen(false);
    setCreateMarketingOpen(true);
  }, []);

  const closeCreateMarketingModel = useCallback(() => {
    setCreatePersonalOpen(false);
  }, []);


  const modalStyles = {
    width: "80%", // Adjusts modal width
    maxWidth: "800px", // Sets the maximum modal width
    margin: 'auto',
  };

  return (
    <>

      <Modal isOpen={isOpen} style={modalStyles} centered>
        <ModalBody>
          <CreatePersonal abrirModal={toggleCreateMarketingModel} setCreateMarketingOpen={setCreateMarketingOpen} openCreateMarketingModel={openCreateMarketingModel} />
        </ModalBody>
      </Modal>
      <ModalCreateMarketing isOpen={isCreateMarketingOpen} onClose={closeCreateMarketingModel} setCreateMarketingOpen={setCreateMarketingOpen} />

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

export default ModalCreatePersonal;

