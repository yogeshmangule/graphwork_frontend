// import React from 'react';
// import '../App.css';
// import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import EditInstalacion from './EditInstalacion';

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
//           {id && <EditInstalacion id={id} />}

//             </>
//         </ModalBody>

//       </Modal>
//       </>
//     )
//   }
// }

// export default ShowModalEdit;


import React from 'react';
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import EditInstalacion from './EditInstalacion';

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
      width: "90%", // Adjust the width for responsiveness
      maxWidth: "800px", // Set maximum width for the modal
      margin: "0 auto", // Center the modal horizontally
    };

    return (
      <>
        <div className="principal">
          <div className="secundario d-flex justify-content-end"> {/* Use Bootstrap utility classes */}
            <Button
              className='btn btn-success btn-info'
              onClick={this.abrirModal}>
              <i className="fas fa-edit"></i>
            </Button>
          </div>
        </div>

        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader toggle={this.abrirModal}>
            {/* Remove the additional close button */}
          </ModalHeader>
          <ModalBody>
            {id && <EditInstalacion id={id} />}
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default ShowModalEdit;
