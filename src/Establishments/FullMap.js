// import React, { Component } from "react";
// import { withGoogleMap, GoogleMap, withScriptjs, Marker } from "react-google-maps";
// import Geocode from "react-geocode";
// import Config from './config';
// Geocode.setApiKey(Config.googleMapsToken);
// Geocode.setRegion("es");
// Geocode.setLocationType("ROOFTOP");


// class Map extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             address: "",
//             mapZoom: 5,
//             mapPosition: {
//                 lat: this.props.center.lat,
//                 lng: this.props.center.lng
//             },
//             markerPosition: {
//                 lat: this.props.center.lat,
//                 lng: this.props.center.lng
//             }
//         };

//         this.onChange = this.onChange.bind(this);
//         this.onMarkerDragEnd = this.onMarkerDragEnd.bind(this);
//     }

//     onChange(event) {
//         this.setState({ [event.target.name]: event.target.value });
//     }

//     onMarkerDragEnd(event) {
//         let newLat = event.latLng.lat(), newLng = event.latLng.lng();
//         Geocode.fromLatLng(newLat, newLng).then(
//             response => {
//                 this.props.handleCallback(response.results[0]);
//             },
//             error => {
//                 console.error(error);
//             }
//         );
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         if (this.state.markerPosition.lat !== this.props.center.lat || this.state.address !== nextState.address) {
//             return true;
//         } else if (this.props.center.lat === nextProps.center.lat) {
//             return false;
//         } else {
//             return true
//         }
//     }


//     componentWillUpdate() {
//         if (this.props.center != null) {
//             this.setState({
//                 address: "",
//                 mapZoom: this.props.zoom,
//                 mapPosition: {
//                     lat: this.props.center.lat,
//                     lng: this.props.center.lng
//                 },
//                 markerPosition: {
//                     lat: this.props.center.lat,
//                     lng: this.props.center.lng
//                 }
//             })
//         }
//     }

//     render() {
//         const AsyncMap = withScriptjs(
//             withGoogleMap(props => (
//                 <GoogleMap
//                     defaultZoom={this.state.mapZoom}
//                     defaultCenter={{
//                         lat: this.state.mapPosition.lat,
//                         lng: this.state.mapPosition.lng
//                     }}
//                 >
//                     <Marker
//                         google={this.props.google}
//                         draggable={true}
//                         onDragEnd={this.onMarkerDragEnd}
//                         position={{
//                             lat: this.state.markerPosition.lat,
//                             lng: this.state.markerPosition.lng
//                         }}
//                     />
//                     <Marker />
//                 </GoogleMap>
//             ))
//         );
//         let map;
//         if (this.props.center.lat !== undefined) {
//             map = (
//                 <AsyncMap
//                     googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + Config.googleMapsToken + "&libraries=places"}
//                     loadingElement={<div style={{ height: `100%` }} />}
//                     containerElement={<div style={{ height: this.props.height }} />}
//                     mapElement={<div style={{ height: `100%` }} />}
//                 />
//             );
//         } else {
//             map = <div style={{ height: this.props.height }} />;
//         }
//         return map;
//     }
// }
// export default Map;

import React, { useState, useEffect, useCallback } from "react";
import { withGoogleMap, GoogleMap, withScriptjs, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Config from './config';

// Ensure Config.googleMapsToken is defined
if (!Config.googleMapsToken) {
    console.error('Google Maps API key is missing in config.js');
}

// Set the API key for Geocode
console.log(Config.googleMapsToken, "Config.googleMapsToken")
// Geocode.setApiKey('AIzaSyDjZAjwwH6jSZch6q2lEKQpmIAnzLTxkEU');
// Geocode.setRegion("es");
// Geocode.setLocationType("ROOFTOP");

const Map = (props) => {
    const [state, setState] = useState({
        address: "",
        mapZoom: 5,
        mapPosition: {
            lat: props.center.lat,
            lng: props.center.lng
        },
        markerPosition: {
            lat: props.center.lat,
            lng: props.center.lng
        }
    });

    const onMarkerDragEnd = useCallback((event) => {
        let newLat = event.latLng.lat(), newLng = event.latLng.lng();
        Geocode.fromLatLng(newLat, newLng).then(
            response => {
                props.handleCallback(response.results[0]);
            },
            error => {
                console.error(error);
            }
        );
    }, [props]);

    useEffect(() => {
        if (props.center) {
            setState(prevState => ({
                ...prevState,
                address: "",
                mapZoom: props.zoom,
                mapPosition: {
                    lat: props.center.lat,
                    lng: props.center.lng
                },
                markerPosition: {
                    lat: props.center.lat,
                    lng: props.center.lng
                }
            }));
        }
    }, [props.center, props.zoom]);

    const AsyncMap = withScriptjs(
        withGoogleMap(() => (
            <GoogleMap
                defaultZoom={state.mapZoom}
                defaultCenter={{
                    lat: state.mapPosition.lat,
                    lng: state.mapPosition.lng
                }}
            >
                <Marker
                    draggable={true}
                    onDragEnd={onMarkerDragEnd}
                    position={{
                        lat: state.markerPosition.lat,
                        lng: state.markerPosition.lng
                    }}
                />
            </GoogleMap>
        ))
    );

    return (
        <div>
            {props.center.lat !== undefined ? (
                <AsyncMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${Config.googleMapsToken}&libraries=places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: props.height }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            ) : (
                <div style={{ height: props.height }} />
            )}
        </div>
    );
};

export default Map;
