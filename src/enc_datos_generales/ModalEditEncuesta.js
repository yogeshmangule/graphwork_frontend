// import React from 'react';
// import '../App.css';
// import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import EditEncuesta from './EditEncuesta';

// class ShowModalEdit extends React.Component {
//   state = {
//     abierto: false,
//   };

//   abrirModal = () => {
//     this.setState({ abierto: !this.state.abierto });
//   };

//   render() {
//     const { id, getEncuestas } = this.props;
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
//               className="parent-right btn btn-success btn-info"
//               onClick={this.abrirModal}
//             >
//               <i className="fas fa-edit"></i>
//             </Button>
//           </div>
//         </div>

//         <Modal isOpen={this.state.abierto} style={modalStyles}>
//           <ModalHeader toggle={this.abrirModal}>
//           </ModalHeader>
//           <ModalBody>
//             <>
//               {id && <EditEncuesta id={id} getEncuestas={getEncuestas} abrirModal={this.abrirModal} />}
//             </>
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
//             width: 100%;
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

//             .btn-info {
//               width: 100%;
//               font-size: 16px;
//             }

//             .modal-content {
//               width: 100%;
//               max-width: 100%;
//             }

//             .modal-header button {
//               margin-left: 0;
//             }
//           }

//           @media (max-width: 480px) {
//             .principal {
//               padding: 5px;
//             }

//             .btn-info {
//               width: 100%;
//               font-size: 14px;
//               padding: 10px;
//             }

//             .modal-content {
//               width: 100%;
//               max-width: 100%;
//               padding: 20px;
//             }

//             .modal-header button {
//               margin-left: 0;
//             }
//           }
//         `}</style>
//       </>
//     );
//   }
// }

// export default ShowModalEdit;


import React from 'react';
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import EditEncuesta from './EditEncuesta';

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
      width: '80%',
      maxWidth: '800px',
      margin: '0 auto', // Center the modal
    };

    return (
      <>
        <div className="principal">
          <div className="secundario">
            <Button
              className="parent-right btn btn-success btn-info"
              onClick={this.abrirModal}
            >
              <i className="fas fa-edit"></i>
            </Button>
          </div>
        </div>

        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader toggle={this.abrirModal}></ModalHeader>
          <ModalBody>
            {id && (
              <EditEncuesta
                id={id}
                getEncuestas={getEncuestas}
                abrirModal={this.abrirModal}
              />
            )}
          </ModalBody>
        </Modal>

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

          @media (max-width: 768px) {
            .principal {
              padding: 10px;
            }

            .secundario {
              justify-content: center;
            }

            .btn-info {
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

            .btn-info {
              width: 100%;
              font-size: 14px;
              padding: 10px;
            }

            .modal-content {
              width: 100%;
              max-width: 100%;
            }
          }
        `}</style>
      </>
    );
  }
}

export default ShowModalEdit;

