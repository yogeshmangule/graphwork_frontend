// import React from 'react';
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import ShowModal from '../enc_datos_generales/ModalCreateEncuesta';
// import { useState } from 'react'
// import DataTable from './dash';

// const DashboardComponent = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   return (
//     <>
//       <div className='mt-2 row'>
//         <Header />
//         <Sidebar></Sidebar>
//         <div className='cuadro_princal'>
//           <div className='parent-label titulo_cuadro'>Encuesta: PRESTACION SERVICIOS, INSTALACIONES Y DIGITALIZACION </div>
//           {/* Aquí puedes agregar más contenido si es necesario */}
//           <ShowModal className='parent-rigth btn btn-success btn-ladda' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//         </div>
//       </div>
//       <div style={{ marginLeft: '45px' }}>
//         <DataTable />
//       </div>
//     </>
//   );
// };

// export default DashboardComponent;


import React, { useState } from 'react';
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import ShowModal from '../enc_datos_generales/ModalCreateEncuesta';
import DataTable from './dash';

const DashboardComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="dashboard-container">
        <Header />
        <div className="dashboard-main">
          <Sidebar />
          <div className="cuadro_princal">
            <div className="titulo_cuadro">
              Encuesta: PRESTACION SERVICIOS, INSTALACIONES Y DIGITALIZACION
            </div>
            <ShowModal
              className="btn btn-success btn-ladda"
              // isOpen={isModalOpen}
              // onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      </div>
      <div className="data-table-container">
        <DataTable />
      </div>

      <style jsx>{`
        .dashboard-container {
          display: flex;
          flex-direction: column;
        }

        .dashboard-main {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        .cuadro_princal {
          flex-grow: 1;
          padding: 20px;
          border-bottom: 2px solid #ccc;
        }

        .titulo_cuadro {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .data-table-container {
          margin-left: 45px;
          margin-top: 20px;
        }

        @media (max-width: 768px) {
          .dashboard-main {
            flex-direction: column;
          }

          .data-table-container {
            margin-left: 0;
            padding: 0 20px;
          }

          .titulo_cuadro {
            font-size: 1.25rem;
            margin-bottom: 15px;
          }

          .cuadro_princal {
            padding: 15px;
          }
        }

        @media (max-width: 480px) {
          .titulo_cuadro {
            font-size: 1rem;
          }

          .cuadro_princal {
            padding: 10px;
          }

          .data-table-container {
            padding: 0 10px;
          }
        }
      `}</style>
    </>
  );
};

export default DashboardComponent;

