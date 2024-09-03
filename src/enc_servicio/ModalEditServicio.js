// import React from 'react';
// import '../App.css';
// import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import EditServicio from './EditServicio';

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
//           {id && <EditServicio id={id} />}

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
import EditServicio from './EditServicio';

class ShowModalEdit extends React.Component {
  state = {
    abierto: false,
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  }

  render() {
    const { id, getEncuestas } = this.props;
    const modalStyles = {
      width: "80%", // Adjusts the width of the modal
      maxWidth: "100%", // Sets the maximum width of the modal
      // margin: "auto", // Centers the modal on the screen
    };

    return (
      <>
        <div className="d-flex justify-content-center my-2">
          <Button className="btn btn-success btn-info" onClick={this.abrirModal}>
            <i className="fas fa-edit"></i>
          </Button>
        </div>

        <Modal isOpen={this.state.abierto} style={modalStyles} toggle={this.abrirModal}>
          <ModalHeader toggle={this.abrirModal} >
          </ModalHeader>
          <ModalBody>
            {id && <EditServicio id={id} getEncuestas={getEncuestas} abrirModal={this.abrirModal} />}
          </ModalBody>
        </Modal>
      </>
    )
  }
}

export default ShowModalEdit;
