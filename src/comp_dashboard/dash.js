//===============================================================================================================

// import React, { useState, useEffect, useCallback } from 'react';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import axios from 'axios';
// import { api } from '../servicios/api';

// import marketing from '../img/images/Marketing.png';
// import ambientacion from '../img/images/Ambientacion.png';
// import horarios from '../img/images/Horarios.png';
// import datosGenerales from '../img/images/DatosGenerales.png';
// import entorno from '../img/images/Entorno.png';
// import espectaculo from '../img/images/Espectaculo.png';
// import instalacion from '../img/images/Instalacion.png';
// import personal from '../img/images/Personal.png';
// import precios from '../img/images/Precios.png';
// import rCSbuenasPracticas from '../img/images/RCSbuenasPracticas.png';
// import rCSmalasPracticas from '../img/images/RCSmalasPracticas.png';
// import seguridad from '../img/images/Seguridad.png';
// import servicio from '../img/images/Servicio.png';
// import valoracion from '../img/images/valoracion.png';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const tabImages = {
//   FICHA_Marketing: marketing,
//   FICHA_AMBIENTE: datosGenerales,
//   FICHA_ENCUESTA: ambientacion,
//   horarios: horarios,
//   FICHA_Entorno: entorno,
//   FICHA_Espectaculos: espectaculo,
//   instalaciones_funcionamiento: instalacion,
//   FICHA_personal: personal,
//   FICHA_Precio: precios,
//   FICHA_BuenasPracticas: rCSbuenasPracticas,
//   FICHA_MalasPracticas: rCSmalasPracticas,
//   FICHA_Seguridad: seguridad,
//   FICHA_Servicios: servicio,
//   FICHA_Valoracion: valoracion
// };

// const tabNames = {
//   FICHA_Marketing: "Marketing",
//   FICHA_AMBIENTE: "Ambientación",
//   FICHA_ENCUESTA: "Encuesta",
//   horarios: "Horarios",
//   FICHA_Entorno: "Entorno",
//   FICHA_Espectaculos: "Espectáculos",
//   instalaciones_funcionamiento: "Instalaciones",
//   FICHA_personal: "Personal",
//   FICHA_Precio: "Precios",
//   FICHA_BuenasPracticas: "Buenas Prácticas",
//   FICHA_MalasPracticas: "Malas Prácticas",
//   FICHA_Seguridad: "Seguridad",
//   FICHA_Servicios: "Servicios",
//   FICHA_Valoracion: "Valoración"
// };

// const DataTable = () => {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [selectedTab, setSelectedTab] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(api + 'survey-list/');
//         const jsonData = response.data;
//         const firstTab = Object.keys(jsonData)[0] || '';
//         setData(jsonData);
//         setSelectedTab(firstTab);
//         setLoading(false);
//       } catch (error) {
//         console.log('Error fetching data:', error);
//         setError(true);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const generateColors = useCallback((dataLength) => {
//     return Array.from({ length: dataLength }, () => {
//       const r = Math.floor(Math.random() * 256);
//       const g = Math.floor(Math.random() * 256);
//       const b = Math.floor(Math.random() * 256);
//       return `rgba(${r}, ${g}, ${b}, 0.6)`;
//     });
//   }, []);

//   const getChartLabel = (chartKey) => {
//     const chartLabels = {
//       licenciadata: 'Licenses',
//       dimensionesdata: 'Dimensions',
//       horaLde: 'Monday Start Time',
//       horaLa: 'Monday End Time',
//       horaMde: 'Tuesday Start Time',
//       horaMa: 'Tuesday End Time',
//       horaXde: 'Wednesday Start Time',
//       horaXa: 'Wednesday End Time',
//       horaJde: 'Thursday Start Time',
//       horaJa: 'Thursday End Time',
//       horaVde: 'Friday Start Time',
//       horaVa: 'Friday End Time',
//       horaSde: 'Saturday Start Time',
//       horaSa: 'Saturday End Time',
//       horaDde: 'Sunday Start Time',
//       horaDa: 'Sunday End Time',
//       musicaLdata: 'Ambience Monday',
//       musicaMdata: 'Ambience Tuesday',
//       musicaXdata: 'Ambience Wednesday',
//       MusicaJdata: 'Ambience Thursday',
//       musicaVdata: 'Ambience Friday',
//       musicaSdata: 'Ambience Saturday',
//       musicaDdata: 'Ambience Sunday',
//       edaddata: 'Age',
//       poderdata: 'Power',
//       aspectodata: 'Aspect',
//       pistadata: 'Dance Floor',
//       escenariodata: 'Stage',
//       zonamesasdata: 'Table Area',
//       perc_mesasdata: 'Percentage of Tables',
//       barrasdata: 'Bars',
//       barrasmetrosdata: 'Bars Meters',
//       barraspersonsdata: 'Bar Persons',
//       decoraciondata: 'Decoration',
//       climatizaciondata: 'Air Conditioning',
//       climat_tempdata: 'Climate Temperature',
//       limp_durantedata: 'Cleanliness During',
//       limp_ensesiondata: 'Cleanliness In Session',
//       mantenimientodata: 'Maintenance',
//       evacuation_entry: 'evacuacion',
//       controlaforo: 'Sistema control aforos',
//       hora_actv: 'En que horario se produce el pico de mas activided',
//       camaras: 'Cameras de vigilancia',
//       ocupacion: 'Grado ocupation espacio',
//       Sistema_de_pago: 'Sistema de pago',
//       Cuno: 'Cuno salida',
//       urbanismo: 'Configuracion urbanistica:',
//       org_colas: 'Sistema organizacion Coals:',
//       espera_colas: 'Tiempo de espera en cola',
//       cola_reservas: 'Cola',
//       ruido_esterior: 'La actividad del local produce ruido en el exterior:',
//       botellon_ext: 'Hay lateros y/o gente haciendo bolellon en el exterior:',
//       protestas: 'Hay pancartas de protesta de los vecinos:',
//       marca_bebidas: 'Marcas bebidas:',
//       vajilla: 'Vajilla:',
//       hielo: 'Calidad hielo:',
//       refresco: 'Uso de refresco:',
//       amabilidad: 'Amabilidad Personal:',
//       esperabarra: 'Tiempo de espera en barra',
//       disp_alimentos: 'Dispensacion de alimentos:',
//       mesas_reservados: 'MESAS y reservados:',
//       mesas_num: 'Numero de mesas',
//       mesas_percent: '% superficie local',
//       venta_botellas: 'Venta por botellas',
//       shisas: 'Shishas',
//       amb_musical: 'Musical Ambience',
//       estilo_musical: 'Musical Style',
//       volumen_musica: 'Music Volume',
//       animacion: 'Animation',
//       visuales: 'Visuals',
//       bengalas: 'Sparklers',
//       ropia: 'Wardrobe',
//       ropia_precio: 'Wardrobe Price',
//       ropia_estado: 'Wardrobe Condition'
//     };
//     return chartLabels[chartKey] || chartKey.replace(/_/g, ' ');
//   };

//   const getXAxisLabels = (key) => {
//     const customLabels = {
//       vajilla: ['Vaso tubo extra', 'Vaso tubo estándar', 'Copa balón', 'Vaso sidra', 'Vasos plástico', 'Otros'],
//       hielo: ['Seleccionar', 'Macizo pequeño', 'Macizo grande', 'Hueco'],
//       refresco: ['Seleccionar', 'Botellín vidrio', 'Pistola', 'Plástico', 'Lata'],
//       amabilidad: ['Seleccionar', 'Muy Mala', 'Bastante mala', 'Bastante buena', 'Muy Buena'],
//       esperabarra: ['Seleccionar', 'De 1 a 3 min.', 'inmediata', 'De 3 a 5 min.', 'Más de 5 min.', 'Barra colapsada'],
//       disp_alimentos: ['Seleccionar', 'Degustación gratuita', 'Hamburguesería', 'No', 'Servicio de restauración', 'Vending'],
//       mesas_reservados: ['No', 'Sí'],
//       mesas_num: ['No Data', '10'],
//       mesas_percent: ['No Data', '10%'],
//       venta_botellas: ['No', 'Sí'],
//       shisas: ['No', 'Sí'],
//       amb_musical: ['No', 'Residente', 'Playlist', 'Live Set', 'Grupos M'],
//       estilo_musical: ['Comercial', 'Reggaeton', 'Electro', 'Remember', 'Other'],
//       volumen_musica: ['No Data', 'Bastante alto'],
//       animacion: ['No Data', 'Escenario'],
//       visuales: ['No', 'Sí'],
//       bengalas: ['No', 'Sí'],
//       ropia: ['No', 'Sí'],
//       ropia_precio: ['No Data'],
//       ropia_estado: ['No Data'],
//       evacuation_entry: ['entrada', 'pista', 'Acceso WC', 'Barras', 'Otras'],
//       ocupacion: ['Muy Saturado', 'Bastante Saturado', 'Poco Saturado', 'Nada Saturado'],
//       hora_actv: ['Por la tarde', 'De 24:00h a 2:00h', 'De 2:00h a 4:00h', 'De 4:00h a cierre'],
//       Sistema_de_pago: ['Efectivo', 'Tarjeta', 'Cashiess', 'Bizum'],
//       espera_colas: ['16 a 30 minutos', '6 a 15 minutos'],
//       marca_bebidas: ['Premium', 'Marcas estándar', 'Marcas blancas', 'Otras']
//     };
//     return customLabels[key] || [];
//   };

//   const renderChart = useCallback((data, labelKey, countKey, chartLabel, customLabels = []) => {
//     if (!data || data.length === 0) {
//       return <div>No Data</div>;
//     }

//     const labels = customLabels.length > 0 ? customLabels : data.map(item => item[labelKey] || 'Unknown');
//     const counts = data.map(item => parseInt(item[countKey], 10) || 0);

//     const chartData = {
//       labels: labels,
//       datasets: [
//         {
//           label: chartLabel,
//           data: counts,
//           backgroundColor: generateColors(counts.length),
//           borderWidth: 1
//         }
//       ]
//     };

//     return (
//       <Bar
//         data={chartData}
//         options={{
//           maintainAspectRatio: false,
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           }
//         }}
//         height={200}
//       />
//     );
//   }, [generateColors]);

//   const renderSingleChart = useCallback((dataObj, key) => {
//     if (!dataObj || dataObj.length === 0) {
//       return <div>No Data</div>;
//     }

//     const labels = Object.keys(dataObj[0]);
//     const counts = labels.map(label => parseInt(dataObj[0][label], 10) || 0);
//     const customLabels = getXAxisLabels(key);
//     const chartData = {
//       labels: customLabels.length > 0 ? customLabels : labels,
//       datasets: [{
//         label: getChartLabel(key),
//         data: counts,
//         backgroundColor: generateColors(counts.length),
//         borderWidth: 1
//       }]
//     };

//     return (
//       <div key={key} style={{ flex: '1 1 calc(50% - 10px)', marginBottom: '20px' }}>
//         <Bar
//           data={chartData}
//           options={{
//             maintainAspectRatio: false,
//             scales: {
//               y: {
//                 beginAtZero: true
//               }
//             }
//           }}
//           height={200}
//         />
//       </div>
//     );
//   }, [generateColors]);

//   const renderFICHA_Seguridad = (data) => {
//     return (
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//         {Object.keys(data).map(key => renderSingleChart(data[key], key))}
//       </div>
//     );
//   };

//   const renderFICHA_Servicios = (data) => {
//     return (
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//         {Object.keys(data).map(key => renderSingleChart(data[key], key))}
//       </div>
//     );
//   };

//   const renderFICHA_Espectaculos = (data) => {
//     return (
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//         {Object.keys(data).map(key => renderSingleChart(data[key], key))}
//       </div>
//     );
//   };

//   if (loading) {
//     return <div><p>Loading...</p></div>;
//   }

//   if (error) {
//     return <div><p>Error fetching data</p></div>;
//   }

//   const tabData = data[selectedTab] || {};

//   return (
//     <div style={{ width: '100%', padding: '20px' }}>
//       <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
//         {Object.keys(data).map(tab => (
//           <button
//             key={tab}
//             onClick={() => setSelectedTab(tab)}
//             style={{ marginRight: '10px', marginBottom: '10px', border: 'none', display: 'flex', alignItems: 'center' }}
//           >
//             <img src={tabImages[tab]} alt={tab} style={{ width: '20px', height: '20px', marginRight: '5px', marginLeft: '5px' }} />
//             {tabNames[tab]}
//           </button>
//         ))}
//       </div>
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//         {selectedTab === 'FICHA_Seguridad' ? (
//           renderFICHA_Seguridad(tabData)
//         ) : selectedTab === 'FICHA_Servicios' ? (
//           renderFICHA_Servicios(tabData)
//         ) : selectedTab === 'FICHA_Espectaculos' ? (
//           renderFICHA_Espectaculos(tabData)
//         ) : (
//           Object.keys(tabData).map((chartKey, index) => (
//             <div key={index} style={{ flex: '1 1 calc(50% - 10px)', marginBottom: '20px' }}>
//               {renderChart(
//                 tabData[chartKey],
//                 Object.keys(tabData[chartKey][0] || {})[0] || 'No Data',
//                 'count',
//                 getChartLabel(chartKey),
//                 getXAxisLabels(chartKey)
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default DataTable;



import React, { useState, useEffect, useCallback } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';
import { api } from '../servicios/api';

import marketing from '../img/images/Marketing.png';
import ambientacion from '../img/images/Ambientacion.png';
import horarios from '../img/images/Horarios.png';
import datosGenerales from '../img/images/DatosGenerales.png';
import entorno from '../img/images/Entorno.png';
import espectaculo from '../img/images/Espectaculo.png';
import instalacion from '../img/images/Instalacion.png';
import personal from '../img/images/Personal.png';
import precios from '../img/images/Precios.png';
import rCSbuenasPracticas from '../img/images/RCSbuenasPracticas.png';
import rCSmalasPracticas from '../img/images/RCSmalasPracticas.png';
import seguridad from '../img/images/Seguridad.png';
import servicio from '../img/images/Servicio.png';
import valoracion from '../img/images/valoracion.png';
import { Button } from 'react-bootstrap';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const tabImages = {
  FICHA_Marketing: marketing,
  FICHA_AMBIENTE: datosGenerales,
  FICHA_ENCUESTA: ambientacion,
  horarios: horarios,
  FICHA_Entorno: entorno,
  FICHA_Espectaculos: espectaculo,
  instalaciones_funcionamiento: instalacion,
  FICHA_personal: personal,
  FICHA_Precio: precios,
  FICHA_BuenasPracticas: rCSbuenasPracticas,
  FICHA_MalasPracticas: rCSmalasPracticas,
  FICHA_Seguridad: seguridad,
  FICHA_Servicios: servicio,
  FICHA_Valoracion: valoracion
};

const tabNames = {
  FICHA_Marketing: "Marketing",
  FICHA_AMBIENTE: "Ambientación",
  FICHA_ENCUESTA: "Encuesta",
  horarios: "Horarios",
  FICHA_Entorno: "Entorno",
  FICHA_Espectaculos: "Espectáculos",
  instalaciones_funcionamiento: "Instalaciones",
  FICHA_personal: "Personal",
  FICHA_Precio: "Precios",
  FICHA_BuenasPracticas: "Buenas Prácticas",
  FICHA_MalasPracticas: "Malas Prácticas",
  FICHA_Seguridad: "Seguridad",
  FICHA_Servicios: "Servicios",
  FICHA_Valoracion: "Valoración"
};

const DataTable = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedTab, setSelectedTab] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api + 'survey-list/');
        const jsonData = response.data;
        const firstTab = Object.keys(jsonData)[0] || '';
        setData(jsonData);
        setSelectedTab(firstTab);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const generateColors = useCallback((dataLength) => {
    return Array.from({ length: dataLength }, () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgba(${r}, ${g}, ${b}, 0.6)`;
    });
  }, []);

  const getChartLabel = (chartKey) => {
    const chartLabels = {
      licenciadata: 'Licenses',
      dimensionesdata: 'Dimensions',
      horaLde: 'Monday Start Time',
      horaLa: 'Monday End Time',
      horaMde: 'Tuesday Start Time',
      horaMa: 'Tuesday End Time',
      horaXde: 'Wednesday Start Time',
      horaXa: 'Wednesday End Time',
      horaJde: 'Thursday Start Time',
      horaJa: 'Thursday End Time',
      horaVde: 'Friday Start Time',
      horaVa: 'Friday End Time',
      horaSde: 'Saturday Start Time',
      horaSa: 'Saturday End Time',
      horaDde: 'Sunday Start Time',
      horaDa: 'Sunday End Time',
      musicaLdata: 'Ambience Monday',
      musicaMdata: 'Ambience Tuesday',
      musicaXdata: 'Ambience Wednesday',
      MusicaJdata: 'Ambience Thursday',
      musicaVdata: 'Ambience Friday',
      musicaSdata: 'Ambience Saturday',
      musicaDdata: 'Ambience Sunday',
      edaddata: 'Age',
      poderdata: 'Power',
      aspectodata: 'Aspect',
      pistadata: 'Dance Floor',
      escenariodata: 'Stage',
      zonamesasdata: 'Table Area',
      perc_mesasdata: 'Percentage of Tables',
      barrasdata: 'Bars',
      barrasmetrosdata: 'Bars Meters',
      barraspersonsdata: 'Bar Persons',
      decoraciondata: 'Decoration',
      climatizaciondata: 'Air Conditioning',
      climat_tempdata: 'Climate Temperature',
      limp_durantedata: 'Cleanliness During',
      limp_ensesiondata: 'Cleanliness In Session',
      mantenimientodata: 'Maintenance',
      evacuation_entry: 'evacuacion',
      controlaforo: 'Sistema control aforos',
      hora_actv: 'En que horario se produce el pico de mas activided',
      camaras: 'Cameras de vigilancia',
      ocupacion: 'Grado ocupation espacio',
      Sistema_de_pago: 'Sistema de pago',
      Cuno: 'Cuno salida',
      urbanismo: 'Configuracion urbanistica:',
      org_colas: 'Sistema organizacion Coals:',
      espera_colas: 'Tiempo de espera en cola',
      cola_reservas: 'Cola',
      ruido_esterior: 'La actividad del local produce ruido en el exterior:',
      botellon_ext: 'Hay lateros y/o gente haciendo bolellon en el exterior:',
      protestas: 'Hay pancartas de protesta de los vecinos:',
      marca_bebidas: 'Marcas bebidas:',
      vajilla: 'Vajilla:',
      hielo: 'Calidad hielo:',
      refresco: 'Uso de refresco:',
      amabilidad: 'Amabilidad Personal:',
      esperabarra: 'Tiempo de espera en barra',
      disp_alimentos: 'Dispensacion de alimentos:',
      mesas_reservados: 'MESAS y reservados:',
      mesas_num: 'Numero de mesas',
      mesas_percent: '% superficie local',
      venta_botellas: 'Venta por botellas',
      shisas: 'Shishas',
      amb_musical: 'Musical Ambience',
      estilo_musical: 'Musical Style',
      volumen_musica: 'Music Volume',
      animacion: 'Animation',
      visuales: 'Visuals',
      bengalas: 'Sparklers',
      ropia: 'Wardrobe',
      ropia_precio: 'Wardrobe Price',
      ropia_estado: 'Wardrobe Condition'
    };
    return chartLabels[chartKey] || chartKey.replace(/_/g, ' ');
  };

  const getXAxisLabels = (key) => {
    const customLabels = {
      vajilla: ['Vaso tubo extra', 'Vaso tubo estándar', 'Copa balón', 'Vaso sidra', 'Vasos plástico', 'Otros'],
      hielo: ['Seleccionar', 'Macizo pequeño', 'Macizo grande', 'Hueco'],
      refresco: ['Seleccionar', 'Botellín vidrio', 'Pistola', 'Plástico', 'Lata'],
      amabilidad: ['Seleccionar', 'Muy Mala', 'Bastante mala', 'Bastante buena', 'Muy Buena'],
      esperabarra: ['Seleccionar', 'De 1 a 3 min.', 'inmediata', 'De 3 a 5 min.', 'Más de 5 min.', 'Barra colapsada'],
      disp_alimentos: ['Seleccionar', 'Degustación gratuita', 'Hamburguesería', 'No', 'Servicio de restauración', 'Vending'],
      mesas_reservados: ['No', 'Sí'],
      mesas_num: ['No Data', '10'],
      mesas_percent: ['No Data', '10%'],
      venta_botellas: ['No', 'Sí'],
      shisas: ['No', 'Sí'],
      amb_musical: ['No', 'Residente', 'Playlist', 'Live Set', 'Grupos M'],
      estilo_musical: ['Comercial', 'Reggaeton', 'Electro', 'Remember', 'Other'],
      volumen_musica: ['No Data', 'Bastante alto'],
      animacion: ['No Data', 'Escenario'],
      visuales: ['No', 'Sí'],
      bengalas: ['No', 'Sí'],
      ropia: ['No', 'Sí'],
      ropia_precio: ['No Data'],
      ropia_estado: ['No Data'],
      evacuation_entry: ['entrada', 'pista', 'Acceso WC', 'Barras', 'Otras'],
      ocupacion: ['Muy Saturado', 'Bastante Saturado', 'Poco Saturado', 'Nada Saturado'],
      hora_actv: ['Por la tarde', 'De 24:00h a 2:00h', 'De 2:00h a 4:00h', 'De 4:00h a cierre'],
      Sistema_de_pago: ['Efectivo', 'Tarjeta', 'Cashiess', 'Bizum'],
      espera_colas: ['16 a 30 minutos', '6 a 15 minutos'],
      marca_bebidas: ['Premium', 'Marcas estándar', 'Marcas blancas', 'Otras']
    };
    return customLabels[key] || [];
  };

  const renderChart = useCallback((data, labelKey, countKey, chartLabel, customLabels = []) => {
    if (!data || data.length === 0) {
      return <div>No Data</div>;
    }

    const labels = customLabels.length > 0 ? customLabels : data.map(item => item[labelKey] || 'Unknown');
    const counts = data.map(item => parseInt(item[countKey], 10) || 0);

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: chartLabel,
          data: counts,
          backgroundColor: generateColors(counts.length),
          borderWidth: 1
        }
      ]
    };

    return (
      <Bar
        data={chartData}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }}
        height={200}
      />
    );
  }, [generateColors]);

  const renderSingleChart = useCallback((dataObj, key) => {
    if (!dataObj || dataObj.length === 0) {
      return <div>No Data</div>;
    }

    const labels = Object.keys(dataObj[0]);
    const counts = labels.map(label => parseInt(dataObj[0][label], 10) || 0);
    const customLabels = getXAxisLabels(key);
    const chartData = {
      labels: customLabels.length > 0 ? customLabels : labels,
      datasets: [{
        label: getChartLabel(key),
        data: counts,
        backgroundColor: generateColors(counts.length),
        borderWidth: 1
      }]
    };

    return (
      <div key={key} style={{ flex: '1 1 calc(50% - 10px)', marginBottom: '20px' }}>
        <Bar
          data={chartData}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }}
          height={200}
        />
      </div>
    );
  }, [generateColors]);

  const renderFICHA_Seguridad = (data) => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {Object.keys(data).map(key => renderSingleChart(data[key], key))}
      </div>
    );
  };

  const renderFICHA_Servicios = (data) => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {Object.keys(data).map(key => renderSingleChart(data[key], key))}
      </div>
    );
  };

  const renderFICHA_Espectaculos = (data) => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {Object.keys(data).map(key => renderSingleChart(data[key], key))}
      </div>
    );
  };

  if (loading) {
    return <div><p>Loading...</p></div>;
  }

  if (error) {
    return <div><p>Error fetching data</p></div>;
  }

  const tabData = data[selectedTab] || {};

  return (
    <div style={{ width: '100%', }}>
      <div className='gap-3  ' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
        {Object.keys(data).map(tab => (
          <Button
            className={selectedTab === tab ? "BtnActivechart d-flex justify-content-center align-items-center gap-2" : "d-flex justify-content-center align-items-center gap-2"}
            variant="light"
            key={tab}
            style={{
              border: '1px solid #e6e6e6',
              backgroundColor: '#ffffff',
              boxShadow: 'rgb(124 122 122 / 25%) 0px 0px 7px 0px',
            }}

            onClick={() => setSelectedTab(tab)}
          // style={{ marginRight: '10px', marginBottom: '10px', border: 'none', display: 'flex', alignItems: 'center' }}
          >
            <img src={tabImages[tab]} alt={tab} style={{ width: '20px', height: '20px' }} />
            {tabNames[tab]}
          </Button >
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {selectedTab === 'FICHA_Seguridad' ? (
          renderFICHA_Seguridad(tabData)
        ) : selectedTab === 'FICHA_Servicios' ? (
          renderFICHA_Servicios(tabData)
        ) : selectedTab === 'FICHA_Espectaculos' ? (
          renderFICHA_Espectaculos(tabData)
        ) : (
          Object.keys(tabData).map((chartKey, index) => (
            <div key={index} style={{ flex: '1 1 calc(50% - 10px)', marginBottom: '20px' }}>
              {renderChart(
                tabData[chartKey],
                Object.keys(tabData[chartKey][0] || {})[0] || 'No Data',
                'count',
                getChartLabel(chartKey),
                getXAxisLabels(chartKey)
              )}
            </div>
          ))
        )}
      </div>

      <style jsx>{`
        .BtnActivechart {
        background-color: #198754 !important;
            color: #fff;
        } 
      `}</style>
    </div >

  );
};

export default DataTable;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++