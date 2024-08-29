// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
// // import QrCode from 'react-qrcode-svg';

// import Config from './config';
// import Lang from './languages';

// import Map from "./Map";


// class EstablishmentsView extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       establishment: {},
//       editorWindow: false
//     };
//   }

//   componentDidMount() {
//     this.props.reqAPI(Config.apiURI + '/api/establishments/' + this.props.location.pathname.split('/')[2] + '?full').then(establishment => {
//       this.setState({ establishment });
//     });
//   }

//   render() {
//     if (Object.keys(this.state.establishment).length > 0) {
//       var description = this.state.establishment.description ?
//         this.state.establishment.description[this.props.session.language]
//           ? this.state.establishment.description[this.props.session.language].replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br />$2')
//           : this.state.establishment.description[Config.defaultLanguage].replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br />$2')
//         : null
//       return (
//         <div>
//           <Card>
//             <CardHeader>
//               <div style={{ paddingTopp: '30px' }}>
//                 <h4>{this.state.establishment.name}</h4>
//                 <span>{this.state.establishment.full_address}</span>
//                 {
//                   this.state.establishment.token
//                     ? <Link className='float-right' to={'/?qrscanner=' + this.state.establishment.token} target="_blank" rel="noopener noreferrer">QRscanner LINK</Link>
//                     : null
//                 }
//               </div>
//               {/* <QrCode data={Config.apiURI + '/?qrscanner=' + this.state.establishment.token} width="90%" bgColor="#f0f3f5" style={{ margin: '0px' }} /> */}
//             </CardHeader>

//             <Map zoom={15} height="300px" center={{ lat: parseFloat(this.state.establishment.latitude), lng: parseFloat(this.state.establishment.longitude) }} />

//             <CardBody dangerouslySetInnerHTML={{ __html: description }} />

//             <CardHeader>
//               <div className="fileContainer">
//                 <div className="uploadPicturesWrapper">
//                   {
//                     this.state.establishment.pictures ? this.state.establishment.pictures.map((picture, index) => {
//                       return (
//                         <div key={index} className="uploadPictureContainer">
//                           <img src={picture} className="uploadPicture" alt="preview" />
//                         </div>
//                       )
//                     }) : null
//                   }
//                 </div>
//               </div>
//             </CardHeader>
//           </Card>
//         </div>
//       )
//     } else {
//       return (<Card />)
//     }
//   }
// }

// export default EstablishmentsView;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
// import QrCode from 'react-qrcode-svg';

import Config from './config';
import Lang from './languages';

import Map from "./Map";

const EstablishmentsView = (props) => {
  const [establishment, setEstablishment] = useState({});
  const establishmentId = props.location.pathname.split('/')[2];

  useEffect(() => {
    props.reqAPI(`${Config.apiURI}/api/establishments/${establishmentId}?full`)
      .then(establishment => setEstablishment(establishment));
  }, [establishmentId, props]);

  if (Object.keys(establishment).length > 0) {
    const description = establishment.description
      ? establishment.description[props.session.language]
        ? establishment.description[props.session.language].replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br />$2')
        : establishment.description[Config.defaultLanguage].replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br />$2')
      : null;

    return (
      <div>
        <Card>
          <CardHeader>
            <div style={{ paddingTopp: '30px' }}>
              <h4>{establishment.name}</h4>
              <span>{establishment.full_address}</span>
              {
                establishment.token
                  ? <Link className='float-right' to={`/?qrscanner=${establishment.token}`} target="_blank" rel="noopener noreferrer">QRscanner LINK</Link>
                  : null
              }
            </div>
            {/* <QrCode data={Config.apiURI + '/?qrscanner=' + establishment.token} width="90%" bgColor="#f0f3f5" style={{ margin: '0px' }} /> */}
          </CardHeader>

          <Map zoom={15} height="300px" center={{ lat: parseFloat(establishment.latitude), lng: parseFloat(establishment.longitude) }} />

          <CardBody dangerouslySetInnerHTML={{ __html: description }} />

          <CardHeader>
            <div className="fileContainer">
              <div className="uploadPicturesWrapper">
                {
                  establishment.pictures ? establishment.pictures.map((picture, index) => (
                    <div key={index} className="uploadPictureContainer">
                      <img src={picture} className="uploadPicture" alt="preview" />
                    </div>
                  )) : null
                }
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    );
  } else {
    return (<Card />);
  }
}

export default EstablishmentsView;
