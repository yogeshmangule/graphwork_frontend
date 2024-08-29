// import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import EditBuenasP from './EditBuenasPracticas';
// import React from 'react';
// import '../App.css';

// class ShowModalEdit extends React.Component{
//   state={
//     abierto: false,
//   }

//   abrirModal=()=>{
//     this.setState({abierto: !this.state.abierto});
//   }

//   render(){
//     const { id } = this.props;
//     const modalStyles = {
//       width: "80%", // Ajusta el ancho del modal
//       maxWidth: "800px", // Establece el ancho máximo del modal
//     };
//     return(
//       <>
//       <div className="principal">
//         <div className="secundario">
//           <Button className='parent-rigth btn btn-success btn-info' onClick={this.abrirModal}><i className="fas fa-edit"></i></Button>

//         </div>
//       </div>

//       <Modal isOpen={this.state.abierto} style={modalStyles}>
//         <ModalHeader >

//           <Button  style={{ marginLeft: '500px', marginRight: '20px' }} color="secondary" onClick={this.abrirModal}>Cerrar</Button>
//         </ModalHeader>
//         <ModalBody>
//         <>
//           {id && <EditBuenasP id={id} />}

//             </>
//         </ModalBody>

//       </Modal>
//       </>
//     )
//   }
// }

// export default ShowModalEdit;


import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import EditBuenasP from './EditBuenasPracticas';
import React from 'react';
import '../App.css';

class ShowModalEdit extends React.Component {
  state = {
    abierto: false,
  };

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  render() {
    const { id } = this.props;
    const modalStyles = {
      width: "90%", // Adjusts the modal width to be more responsive
      maxWidth: "800px", // Maximum width for larger screens
      margin: "auto", // Centers the modal horizontally
    };

    return (
      <>
        <div className="d-flex justify-content-center mb-3">
          <Button
            className="btn btn-success btn-info"
            onClick={this.abrirModal}
          >
            <i className="fas fa-edit"></i>
          </Button>
        </div>

        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader>
            <div className="d-flex justify-content-between w-100">
              <h5>Edit Buenas Practicas</h5>
              <Button
                className="btn btn-secondary"
                onClick={this.abrirModal}
              >
                Cerrar
              </Button>
            </div>
          </ModalHeader>
          <ModalBody>
            {id && <EditBuenasP id={id} />}
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default ShowModalEdit;
