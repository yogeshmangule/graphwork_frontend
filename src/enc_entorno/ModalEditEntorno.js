// import React from 'react';
// import '../App.css';
// import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import EditEntorno from './EditEntorno';

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
//           {id && <EditEntorno id={id} />}

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
import EditEntorno from './EditEntorno';

class ShowModalEdit extends React.Component {
  state = {
    abierto: false,
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  }

  render() {
    const { id, getEntornos } = this.props;
    const modalStyles = {
      maxWidth: "100%", // Establish the maximum width of the modal
      width: "80%", // Ensure the modal width is responsive to screen size
    };

    return (
      <>
        <div className="">
          <Button
            className=" btn btn-success btn-info w-auto"
            onClick={this.abrirModal}
          >
            <i className="fas fa-edit"></i>
          </Button>
        </div>

        <Modal isOpen={this.state.abierto} className='custom-modal' centered>
          <ModalHeader toggle={this.abrirModal}>

          </ModalHeader>
          <ModalBody>
            {id && <EditEntorno id={id} getEntornos={getEntornos} abrirModal={this.abrirModal} />}
          </ModalBody>
        </Modal>
        <style jsx>{`  
          .custom-modal {
            width: 80%;
            max-width: 100%;
              margin-right: auto;
           margin-left: auto;
          }
              @media (min-width: 576px){
              
          }

          @media (max-width: 768px) {
           .custom-modal {
            width: 80%;  
             }
            }

            
          @media (max-width: 480px) {
           .custom-modal {
            width: 80%;
        }
            }

         `}</style>
      </>
    );
  }
}

export default ShowModalEdit;
