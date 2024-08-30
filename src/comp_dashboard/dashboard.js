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
        <Sidebar>
          <div className="dashboard-main">

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


            <div className="data-table-container">
              <DataTable />
            </div>
          </div>

        </Sidebar>
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
          padding: 0px;
          border-bottom: 2px solid #ccc;
              display: flex;
    justify-content: space-between;
    padding: 20px 0 30px;
    margin-bottom: 19px;
        }

        .titulo_cuadro {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0px;
              text-align: left;
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
          }

        
        }

        @media (max-width: 480px) {
          .titulo_cuadro {
            font-size: 1rem;
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

