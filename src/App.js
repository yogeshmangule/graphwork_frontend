
import './App.css';

//importamos los componentes
import CompLogin from './login/LoginE';
import CompShowUsers from './users/ShowUsers';
import CompDatosEnc from './enc_datos_generales/ShowDatosGenerales';
import CompDash from './comp_dashboard/dashboard';
import New from './users/showmodal';
import CompDatosHora from './enc_horarios/ShowHorarios';
import CompDatosAmbiente from './enc_ambiente/ShowAmbiente';
import CompDatosInstalacion from './enc_instalacion/ShowInstalacion';
import CompDatosSeguridad from './enc_seguridad/ShowSeguridad';
import CompDatosEntorno from './enc_entorno/ShowEntorno';
import CompDatosServicio from './enc_servicio/ShowServicio';
import CompDatosEspectaculo from './enc_espectaculos/ShowEspectaculo';
import CompDatosPersonal from './enc_personal/ShowPersonal';
import CompDatosMarketing from './enc_marketing/ShowMarketing';
import CompDatosPrecio from './enc_precio/ShowPrecio';
import CompDatosBuenas from './enc_rscbuenas/ShowBuenasPracticas'
import CompDatosMalas from './enc_rscmalas/ShowMalasPracticas'
import CompDatosValoracion from './enc_valoracion/ShowValoracion'
import Establishments from './Establishments/List'

//importamos el router
import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';
import DataTable from './comp_dashboard/dash';

const isLoggedIn = () => {
  const userId = localStorage.getItem('userId');
  console.log(userId);
  return userId !== null && !isNaN(Number(userId));

};
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn() ? (
          <Routes className="contene">
            <Route path='/principal' element={<CompDash />} />
            <Route path='*' element={<Navigate to='/principal' />} />
            <Route path='/viewusers' element={<CompShowUsers />} />
            <Route path='/datatable' element={<DataTable />} />
            {/* Otras rutas */}
            <Route path='/xx' element={<New />} />
            <Route path='/viewenc' element={<CompDatosEnc />} />
            <Route path='/viewhor' element={<CompDatosHora />} />
            <Route path='/viewamb' element={<CompDatosAmbiente />} />
            <Route path='/viewins' element={<CompDatosInstalacion />} />
            <Route path='/viewseg' element={<CompDatosSeguridad />} />
            <Route path='/viewent' element={<CompDatosEntorno />} />
            <Route path='/viewser' element={<CompDatosServicio />} />
            <Route path='/viewesp' element={<CompDatosEspectaculo />} />
            <Route path='/viewpers' element={<CompDatosPersonal />} />
            <Route path='/viewmar' element={<CompDatosMarketing />} />
            <Route path='/viewprec' element={<CompDatosPrecio />} />
            <Route path='/viewrscbuena' element={<CompDatosBuenas />} />
            <Route path='/viewrscmala' element={<CompDatosMalas />} />
            <Route path='/viewval' element={<CompDatosValoracion />} />
            <Route path='/establishments' element={<Establishments />} />
          </Routes>
        ) : (
          <Routes className="contene">
            <Route path='/login' element={<CompLogin />} />
            <Route path='*' element={<Navigate to='/login' />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );



}


export default App;