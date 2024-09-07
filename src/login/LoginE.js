import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container, Col, Row, Card, CardBody, CardGroup, Form, InputGroup, Input } from 'reactstrap';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../servicios/api"
import { Navigate } from 'react-router-dom';


const Login = () => {
  const [email, setUsername] = useState('');
  const [passwd, setPassword] = useState('');
  const history = useNavigate();
  const [redirectToPrincipal, setRedirectToPrincipal] = useState(false);


  // Procedimiento de inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Realizar la solicitud de inicio de sesión al servidor
      const response = await axios.post(api + 'usuarios/login/', {
        email,
        passwd,
      });

      // Verificar si la autenticación fue exitosa
      //console.log(response.data.userInfo)
      if (response.data && response.data.userInfo) {
        const { ID, username, role, isAutenticado } = response.data.userInfo;
        localStorage.setItem('userId', ID);
        console.log("estoy en el login" + ID)
        localStorage.setItem('userRol', role);
        localStorage.setItem('username', username);
        localStorage.setItem('isAutenticado', isAutenticado);
        if (isAutenticado) {
          // Establecer el estado para redirigir a la página principal
          history("/principal");
          window.location.reload();
        }


      } else {
        // Manejar el caso en el que la autenticación falla
        window.alert('Credenciales inválidas');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        window.alert('Credenciales inválidas');
        // Provide feedback to the user, e.g., display an error message
      } else {
        console.error('Error al intentar iniciar sesión', error);
        window.alert('Error al intentar iniciar sesión. Por favor, inténtelo de nuevo.');
      }

    }



  };

  return (
    <div className="app vh-100 d-flex align-items-center">

      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form onSubmit={handleLogin}>
                    <h1>Acceso restringido</h1>
                    <p className="text-muted">Bienvenido</p>

                    <InputGroup className="mb-3"
                      value={email}
                      onChange={(e) => setUsername(e.target.value)}
                      type='text'>
                      <div className="input-group-prepend">
                        <span className="input-group-text" style={{ borderRadius: '0', fontSize: '1.5em' }}><i class="fa fa-user" aria-hidden="true"></i></span>
                      </div>
                      <Input name="address" value={email}
                        onChange={(e) => setUsername(e.target.value)}
                        type='text' />
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text" style={{ borderRadius: '0', fontSize: '1.5em' }}><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
                      </div>
                      <Input name="password"
                        value={passwd}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password' />
                    </InputGroup>

                    <Row>
                      <Col xs="6">
                        {/* Botón de inicio de sesión eliminado */}
                      </Col>
                      <Col xs="6" className="text-right">
                        <Link to="/" className="px-0"></Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="6">
                        <button
                          type="submit"
                          className="btn btn-success btn-ladda">
                          Ingresar
                        </button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Link to="/" className="px-0">Ayuda! No puedo acceder</Link>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md="6" style={{ textAlign: 'left' }}>
            {/* <strong>{Lang[this.props.session.language].Login.producedBy}</strong><br /> */}
            <strong>Producido por</strong><br />
            <img src={'/images/nochemadrid.png'} />
          </Col>
          <Col md="6" style={{ textAlign: 'right' }}>
            {/* <strong>{Lang[this.props.session.language].Login.financedBy}</strong><br /> */}
            <strong>Cofinanciado por</strong><br />
            <img src={'/images/logomadrid.png'} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Login;