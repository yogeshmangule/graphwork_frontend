// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateHorario from './CreateHorario';

// class ModalCreateHorario extends React.Component {
//   state = {
//     abierto: false,
//   }

//   abrirModal = () => {
//     this.setState({ abierto: !this.state.abierto });
//   }

//   render() {

//     const { open, abrirModal1 } = this.props;
//     console.log("horios:-", open, abrirModal1)
//     const modalStyles = {

//       width: "80%", // Ajusta el ancho del modal
//       maxWidth: "800px", // Establece el ancho máximo del modal
//     };

//     return (
//       <>
//         <div className="principal">
//           <div className="secundario">
//             <Button className='parent-rigth btn btn-success btn-ladda' color="success" onClick={this.abrirModal}>Agregar Horario</Button>

//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           <ModalHeader toggle={this.abrirModal}>

//           </ModalHeader>
//           <ModalBody>
//             <>
//               <CreateHorario />
//             </>
//           </ModalBody>

//         </Modal>
//       </>
//     )
//   }
// }

// export default ModalCreateHorario;

// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import CreateHorario from './CreateHorario';

// class ModalCreateHorario extends React.Component {
//   state = {
//     abierto: false,
//   }

//   abrirModal = () => {
//     this.setState(prevState => ({ abierto: !prevState.abierto }));
//     // Call abrirModal1 if it is provided
//     // if (this.props.abrirModal1) {
//     //   this.props.abrirModal1();
//     // }
//   }

//   render() {
//     // const { open, abrirModal1 } = this.props;
//     // console.log("horios:-", open, abrirModal1);

//     const modalStyles = {
//       width: "80%", // Adjust modal width
//       maxWidth: "800px", // Set maximum modal width
//     };

//     return (
//       <>
//         <div className="principal">
//           <div className="secundario">
//             <Button
//               className='parent-rigth btn btn-success btn-ladda'
//               color="success"
//               onClick={this.abrirModal}
//             >
//               Agregar Horario
//             </Button>
//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           {/* <ModalHeader /> */}
//           {/* toggle={this.abrirModal} */}
//           <ModalBody>
//             <CreateHorario />
//           </ModalBody>
//         </Modal>
//       </>
//     )
//   }
// }

// export default ModalCreateHorario;

import React, { useCallback, useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CreateHorario from './CreateHorario';
import ModalCreateAmbiente from '../enc_ambiente/ShowCreateAmbiente';

const ModalCreateHorario = ({ isOpen, setHorarioModalOpen }) => {

  console.log(isOpen, "ujs")
  const [isAmbiteModalOpen, setAmbiteModalOpen] = useState(false);

  const toggleHoriorModel = useCallback(() => {
    setHorarioModalOpen((prevState) => !prevState);
  }, []);

  const openAmbiteModel = useCallback(() => {
    setHorarioModalOpen(false);
    setAmbiteModalOpen(true);
  }, []);

  const closeAmbiteModel = useCallback(() => {
    setAmbiteModalOpen(false);
  }, []);


  return (
    <>
      <Modal isOpen={isOpen} style={{ width: '80%', maxWidth: '800px' }}>
        <ModalBody>
          <CreateHorario abrirModal={toggleHoriorModel} setHorarioModalOpen={setHorarioModalOpen} openAmbiteModel={openAmbiteModel} />

        </ModalBody>
      </Modal>

      <ModalCreateAmbiente isOpen={isAmbiteModalOpen} onClose={closeAmbiteModel} setAmbiteModalOpen={setAmbiteModalOpen} />
    </>
  );
};

export default ModalCreateHorario;


