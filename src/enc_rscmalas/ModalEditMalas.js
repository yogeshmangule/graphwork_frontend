// import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import EditMlasP from './EditMalasPracticas';
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
//           {id && <EditMlasP id={id} />}

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
import EditMlasP from './EditMalasPracticas';
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
    const { id, getEncuestas } = this.props;
    const modalStyles = {
      maxWidth: '100%', // Ensure the modal takes full width on mobile
      width: '80%', // Adjust the width of the modal
      // margin: '0 auto', // Center the modal
    };

    const closeButtonStyles = {
      marginLeft: 'auto',
      marginRight: '20px',
    };

    return (
      <>
        <div >
          <Button
            className=" btn-success btn-info w-auto"
            onClick={this.abrirModal}
          >
            <i className="fas fa-edit"></i>
          </Button>
        </div>

        <Modal isOpen={this.state.abierto} className='custom-modal' centered>
          <ModalHeader toggle={this.abrirModal}>

          </ModalHeader>
          <ModalBody>
            {id && <EditMlasP id={id} getEncuestas={getEncuestas} abrirModal={this.abrirModal} />}
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
