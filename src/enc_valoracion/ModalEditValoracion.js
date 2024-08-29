// import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import EditValoracion from './EditValoracion';
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
//           {id && <EditValoracion id={id} />}

//             </>
//         </ModalBody>

//       </Modal>
//       </>
//     )
//   }
// }

// export default ShowModalEdit;


import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import EditValoracion from './EditValoracion';
import '../App.css';

class ShowModalEdit extends React.Component {
  state = {
    abierto: false,
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  }

  render() {
    const { id } = this.props;
    const modalStyles = {
      width: "90%", // Adjusted width to be more responsive
      maxWidth: "800px", // Sets the maximum width
      margin: "0 auto", // Centers the modal on mobile
    };

    const headerButtonStyles = {
      marginLeft: 'auto', // Pushes the close button to the right
    };

    return (
      <>
        <div className="d-flex justify-content-end mb-2">
          <Button
            className="btn btn-success btn-info"
            onClick={this.abrirModal}
          >
            <i className="fas fa-edit"></i>
          </Button>
        </div>

        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader>
            <Button
              color="secondary"
              onClick={this.abrirModal}
              style={headerButtonStyles}
            >
              Cerrar
            </Button>
          </ModalHeader>
          <ModalBody>
            {id && <EditValoracion id={id} />}
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default ShowModalEdit;
