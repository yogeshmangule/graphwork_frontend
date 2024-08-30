/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import AddEstablishmentModal from './AddEstablishmentModal';
import './EstablishmentsList.css';
import Map from './Map';
import EditEstablishmentModal from './Editor';
import { api } from '../servicios/api';


const URI = api + 'establishments/';

function EstablishmentsList() {
   const [establishments, setEstablishments] = useState([]);
   const [selectedEstablishments, setSelectedEstablishments] = useState([]);
   const [showCount, setShowCount] = useState(10);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

   const [filters, setFilters] = useState({
      name: '',
      description: '',
      full_address: ''
   });
   const [currentEstablishment, setCurrentEstablishment] = useState('');

   useEffect(() => {

      fetchData();
   }, [filters, showCount]);
   const fetchData = async () => {
      try {
         // const response = await fetch('https://apiquality.fiestaismadrid.net/establishments/', {
         const response = await fetch(`${URI}`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               filters: {
                  name: {
                     filterVal: filters.name,
                     filterType: 'TEXT',
                     comparator: 'LIKE',
                     caseSensitive: false
                  },
                  description: {
                     filterVal: filters.description,
                     filterType: 'TEXT',
                     comparator: 'LIKE',
                     caseSensitive: false
                  },
                  full_address: {
                     filterVal: filters.full_address,
                     filterType: 'TEXT',
                     comparator: 'LIKE',
                     caseSensitive: false
                  }
               },
               language: 'es_ES',
               page: 1,
               sizePerPage: showCount,
               sortField: 'name',
               sortOrder: 'asc'
            })
         });

         if (!response.ok) {
            throw new Error('Network response was not ok');
         }

         const data = await response.json();
         setEstablishments(data.items);
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   };


   const handleSelectAll = (e) => {
      if (e.target.checked) {
         setSelectedEstablishments(establishments.map(est => est.ID));
      } else {
         setSelectedEstablishments([]);
      }
   };

   const handleSelect = (ID) => {
      if (selectedEstablishments.includes(ID)) {
         setSelectedEstablishments(selectedEstablishments.filter(id => id !== ID));
      } else {
         setSelectedEstablishments([...selectedEstablishments, ID]);
      }
   };

   const handleShowCountChange = (e) => {
      setShowCount(Number(e.target.value));
   };

   const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
      setCurrentEstablishment(null); // Reset current establishment when closing the modal
   };

   const handleFilterChange = (e) => {
      const { name, value } = e.target;
      setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
   };

   const handleEditClick = async (ID) => {
      console.log(ID, "ID")
      setCurrentEstablishment(ID);
      setIsEditModalOpen(true);
   };

   // Utility function to strip HTML tags, HTML entities and limit text length
   const truncateDescription = (description, maxLength = 100) => {
      let strippedDescription = description.replace(/<[^>]*>/g, ''); // Remove HTML tags
      strippedDescription = strippedDescription.replace(/&nbsp;/g, ' '); // Replace &nbsp;
      strippedDescription = strippedDescription.replace(/&amp;/g, '&'); // Replace &amp;
      strippedDescription = strippedDescription.replace(/&lt;/g, '<'); // Replace &lt;
      strippedDescription = strippedDescription.replace(/&gt;/g, '>'); // Replace &gt;
      strippedDescription = strippedDescription.replace(/&quot;/g, '"'); // Replace &quot;
      strippedDescription = strippedDescription.replace(/&#39;/g, "'"); // Replace &#39;

      return strippedDescription.length > maxLength
         ? strippedDescription.substring(0, maxLength) + "..."
         : strippedDescription;
   };

   return (
      <div>
         <Header />
         <Sidebar>
            <div className='mt-2 row'>
               <div className='cuadro_princal'>
                  <div className='parent-label titulo_cuadro'>Establishments: Establecimientos</div>
               </div>
            </div>
            <div className="table-container">
               <div className="table-header">
                  <button className="btn-export">Exportar a CSV</button>
                  <button className="btn-add" onClick={toggleModal}>+ Añadir establecimiento</button>
                  <button className="btn-delete-selected">Eliminar seleccionados</button>
               </div>
               <table className="table">
                  <thead>
                     <tr>
                        <th>
                           <input
                              type="checkbox"
                              onChange={handleSelectAll}
                              checked={selectedEstablishments.length === establishments.length}
                           />
                        </th>
                        <th>
                           <input
                           className='w-100'
                              type="text"
                              name="name"
                              placeholder="Enter Nombre del establecimiento..."
                              value={filters.name}
                              onChange={handleFilterChange}
                           />
                        </th>
                        <th  className='d-md-table-cell d-none'>
                           <input
                              type="text"
                              name="description"
                              placeholder="Enter Descripción..."
                              value={filters.description}
                              onChange={handleFilterChange}
                           />
                        </th>
                        <th  className='d-md-table-cell d-none'>
                           <input
                              type="text"
                              name="full_address"
                              placeholder="Enter Dirección completa..."
                              value={filters.full_address}
                              onChange={handleFilterChange}
                           />
                        </th>
                        <th>
                           <button className="btn-filter-clear" onClick={() => setFilters({ name: '', description: '', full_address: '' })}>Limpiar</button>
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {establishments.slice(0, showCount).map(est => (
                        <tr key={est.ID}>
                           <td>
                              <input
                                 type="checkbox"
                                 checked={selectedEstablishments.includes(est.ID)}
                                 onChange={() => handleSelect(est.ID)}
                              />
                           </td>
                           <td >{est.name}</td>
                           <td className='d-md-table-cell d-none'>{truncateDescription(est.description)}</td>
                           <td className='d-md-table-cell d-none'>{est.full_address}</td>
                           <td style={{ display: 'flex' }}>
                              <button className="btn btn-edit" onClick={() => handleEditClick(est.ID)}>✎</button>
                              <button className="btn btn-delete">🗑</button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
               <div className="table-footer">
                  <select value={showCount} onChange={handleShowCountChange}>
                     <option value="10">10</option>
                     <option value="20">20</option>
                     <option value="30">30</option>
                     <option value="40">40</option>
                  </select>
                  <span>Mostrando un total de {establishments.length} establecimientos</span>
               </div>
            </div>
         </Sidebar>
         <AddEstablishmentModal
            isOpen={isModalOpen}
            // toggle={toggleModal}
            setIsModalOpen={setIsModalOpen}
            establishment={currentEstablishment}
         />

         <EditEstablishmentModal
            isOpen={isEditModalOpen}
            // toggle={toggleModal}
            setIsEditModalOpen={setIsEditModalOpen}
            establishmentId={currentEstablishment}
            fetchData={fetchData}
         />

         {/* <Map /> */}
      </div>
   );
}

export default EstablishmentsList;


