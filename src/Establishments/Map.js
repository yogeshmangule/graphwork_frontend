// import React, { Component } from "react";
// import { withGoogleMap, GoogleMap, withScriptjs, Marker } from "react-google-maps";

// import Config from './config';

// class Map extends Component {
//  constructor(props) {
//   super(props);
//   this.state = {
//    mapPosition: {
//     lat: this.props.center.lat,
//     lng: this.props.center.lng
//    },
//    markerPosition: {
//     lat: this.props.center.lat,
//     lng: this.props.center.lng
//    }
//   };
//  }

//  onChange(event) {
//   this.setState({ [event.target.name]: event.target.value });
//  };

//  shouldComponentUpdate(nextProps, nextState) {
//   if (this.state.markerPosition.lat !== this.props.center.lat) {
//    return true;
//   } else if (this.props.center.lat === nextProps.center.lat) {
//    return false;
//   }
//  }

//  render() {
//   const AsyncMap = withScriptjs(
//    withGoogleMap(props => (
//     <GoogleMap
//      google={this.props.google}
//      defaultZoom={this.props.zoom}
//      defaultCenter={{
//       lat: this.state.mapPosition.lat,
//       lng: this.state.mapPosition.lng
//      }}
//     >
//      {/*Marker*/}
//      <Marker
//       google={this.props.google}
//       draggable={false}
//       position={{
//        lat: this.state.markerPosition.lat,
//        lng: this.state.markerPosition.lng
//       }}
//      />
//      <Marker />
//     </GoogleMap>
//    ))
//   );
//   let map;
//   if (this.props.center.lat !== undefined) {
//    map = (
//     <AsyncMap
//       googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + Config.googleMapsToken + "&libraries=places"}
//       loadingElement={<div style={{ height: `100%` }} />}
//       containerElement={<div style={{ height: this.props.height }} />}
//       mapElement={<div style={{ height: `100%` }} />}
//      />
//    );
//   } else {
//    map = <div style={{ height: this.props.height }} />;
//   }
//   return map;
//  }
// }
// export default Map;


// import React, { useState, useEffect } from "react";
// import { withGoogleMap, GoogleMap, withScriptjs, Marker } from "react-google-maps";
// import Config from './config';

// const Map = (props) => {
//   const [mapPosition, setMapPosition] = useState({
//     lat: props.center.lat,
//     lng: props.center.lng
//   });
//   const [markerPosition, setMarkerPosition] = useState({
//     lat: props.center.lat,
//     lng: props.center.lng
//   });

//   useEffect(() => {
//     setMapPosition({
//       lat: props.center.lat,
//       lng: props.center.lng
//     });
//     setMarkerPosition({
//       lat: props.center.lat,
//       lng: props.center.lng
//     });
//   }, [props.center]);

//   const AsyncMap = withScriptjs(
//     withGoogleMap(() => (
//       <GoogleMap
//         defaultZoom={props.zoom}
//         defaultCenter={{
//           lat: mapPosition.lat,
//           lng: mapPosition.lng
//         }}
//       >
//         <Marker
//           draggable={false}
//           position={{
//             lat: markerPosition.lat,
//             lng: markerPosition.lng
//           }}
//         />
//       </GoogleMap>
//     ))
//   );

//   return (
//     props.center.lat !== undefined ? (
//       <AsyncMap
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${Config.googleMapsToken}&libraries=places`}
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: props.height }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     ) : (
//       <div style={{ height: props.height }} />
//     )
//   );
// };

// export default Map;

// import React from "react";
// import { withGoogleMap, GoogleMap, withScriptjs, Marker } from "react-google-maps";
// import Config from './config';

// const staticMapPosition = {
//   lat: 0,  // Example latitude (can be set to a meaningful default)
//   lng: 0   // Example longitude (can be set to a meaningful default)
// };

// const AsyncMap = withScriptjs(
//   withGoogleMap(() => (
//     <GoogleMap
//       defaultZoom={15}  // Static zoom level
//       defaultCenter={{
//         lat: staticMapPosition.lat,
//         lng: staticMapPosition.lng
//       }}
//     >
//       <Marker
//         draggable={false}
//         position={{
//           lat: staticMapPosition.lat,
//           lng: staticMapPosition.lng
//         }}
//       />
//     </GoogleMap>
//   ))
// );

// const Map = () => {
//   return (
//     <AsyncMap
//       googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${Config.googleMapsToken}&libraries=places`}
//       loadingElement={<div style={{ height: `100%` }} />}
//       containerElement={<div style={{ height: "300px" }} />}  // Static height
//       mapElement={<div style={{ height: `100%` }} />}
//     />
//   );
// };

// export default Map;


import React from "react";
import { withGoogleMap, GoogleMap, withScriptjs, Marker } from "react-google-maps";
import Box from '@mui/material/Box';
import Config from './config';
import { Typography } from "@mui/material";

const staticMapPosition = {
  lat: 0,  // Example latitude (can be set to a meaningful default)
  lng: 0   // Example longitude (can be set to a meaningful default)
};

const AsyncMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={15}  // Static zoom level
      defaultCenter={{
        lat: staticMapPosition.lat,
        lng: staticMapPosition.lng
      }}
    >
      <Marker
        draggable={false}
        position={{
          lat: staticMapPosition.lat,
          lng: staticMapPosition.lng
        }}
      />
    </GoogleMap>
  ))
);

const Map = () => {
  return (
    <>
      <Typography sx={{ flexGrow: 1 }}>
        Dirección completa
      </Typography>
      <Box sx={{ height: '300px', width: '100%' }}>
        <AsyncMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${Config.googleMapsToken}&libraries=places`}
          loadingElement={<Box sx={{ height: '100%' }} />}
          containerElement={<Box sx={{ height: '100%' }} />}
          mapElement={<Box sx={{ height: '100%' }} />}
        />
      </Box>
    </>
  );
};

export default Map;

