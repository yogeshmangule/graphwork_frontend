//================================================================================

// import React, { useState, useEffect } from 'react';
// import { Modal, Box, Typography, TextField, Button, Grid, IconButton, Select, MenuItem, FormControl, List, ListItem, ListItemText } from '@mui/material';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import PhotoIcon from '@mui/icons-material/Photo';
// import CloseIcon from '@mui/icons-material/Close';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
// import axios from 'axios';

// const containerStyle = {
//     width: '100%',
//     height: '300px'
// };

// const center = {
//     lat: 40.4182439,
//     lng: 3.696106
// };

// const AddEstablishmentModal = ({ isOpen, toggle, setIsModalOpen, establishment }) => {
//     const [currentEstablishment, setCurrentEstablishment] = useState({
//         ID: '',
//         name: '',
//         descriptions: {},
//         full_address: '',
//         latitude: 0,
//         longitude: 0,
//         pictures: [],
//         language: 'en_US' // Default language
//     });
//     const [originalEstablishment, setOriginalEstablishment] = useState({});
//     const [isPhotoUpload, setIsPhotoUpload] = useState(false);
//     const [photos, setPhotos] = useState([]);
//     const [autocompleteService, setAutocompleteService] = useState(null);
//     const [geocoderService, setGeocoderService] = useState(null);
//     const [suggestions, setSuggestions] = useState([]);
//     const [autocompleteActive, setAutocompleteActive] = useState(false);

//     const { isLoaded } = useJsApiLoader({
//         googleMapsApiKey: 'AIzaSyDjZAjwwH6jSZch6q2lEKQpmIAnzLTxkEU',
//         libraries: ['places'],
//     });

//     useEffect(() => {
//         if (establishment) {
//             const initialDescriptions = establishment.description || {};
//             const initialEstablishment = {
//                 ID: establishment?.ID || '',
//                 name: establishment?.name || '',
//                 descriptions: initialDescriptions,
//                 full_address: establishment?.full_address || '',
//                 latitude: establishment?.latitude || 0,
//                 longitude: establishment?.longitude || 0,
//                 pictures: establishment?.pictures || [],
//                 language: Object.keys(initialDescriptions)[0] || 'en_US'
//             };
//             setCurrentEstablishment(initialEstablishment);
//             setOriginalEstablishment(initialEstablishment); // Save original state to compare later
//             setPhotos(establishment.pictures || []);
//         }
//     }, [establishment]);

//     console.log(currentEstablishment, "currentEstablishment")

//     useEffect(() => {
//         if (isLoaded) {
//             if (!autocompleteService) {
//                 setAutocompleteService(new window.google.maps.places.AutocompleteService());
//             }
//             if (!geocoderService) {
//                 setGeocoderService(new window.google.maps.Geocoder());
//             }
//         }
//     }, [isLoaded, autocompleteService, geocoderService]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCurrentEstablishment((prev) => ({
//             ...prev,
//             [name]: value
//         }));

//         if (name === 'full_address' && value) {
//             handleAddressChange(value);
//         }
//     };

//     const handleLanguageChange = (e) => {
//         const { value } = e.target;
//         setCurrentEstablishment((prev) => ({
//             ...prev,
//             language: value
//         }));
//     };

//     const handleDescriptionChange = (value) => {
//         setCurrentEstablishment((prev) => ({
//             ...prev,
//             descriptions: {
//                 ...prev.descriptions,
//                 [prev.language]: value
//             }
//         }));
//     };

//     const handleAddressChange = (input) => {
//         if (autocompleteService) {
//             autocompleteService.getPlacePredictions({ input }, (predictions, status) => {
//                 if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
//                     setSuggestions(predictions);
//                 } else {
//                     setSuggestions([]);
//                 }
//             });
//         }
//     };

//     const handleSuggestionClick = (suggestion) => {
//         setCurrentEstablishment((prev) => ({
//             ...prev,
//             full_address: suggestion.description
//         }));
//         setAutocompleteActive(false);
//         fetchPlaceDetails(suggestion.place_id);
//     };

//     const fetchPlaceDetails = (placeId) => {
//         const service = new window.google.maps.places.PlacesService(document.createElement('div'));
//         service.getDetails({ placeId }, (place, status) => {
//             if (status === window.google.maps.places.PlacesServiceStatus.OK && place.geometry) {
//                 setCurrentEstablishment((prev) => ({
//                     ...prev,
//                     full_address: place.formatted_address,
//                     latitude: place.geometry.location.lat(),
//                     longitude: place.geometry.location.lng()
//                 }));
//             }
//         });
//     };

//     const handleMapClick = (event) => {
//         const lat = event.latLng.lat();
//         const lng = event.latLng.lng();

//         setCurrentEstablishment((prev) => ({
//             ...prev,
//             latitude: lat,
//             longitude: lng
//         }));

//         if (geocoderService) {
//             geocoderService.geocode({ location: { lat, lng } }, (results, status) => {
//                 if (status === window.google.maps.GeocoderStatus.OK && results[0]) {
//                     setCurrentEstablishment((prev) => ({
//                         ...prev,
//                         full_address: results[0].formatted_address
//                     }));
//                 }
//             });
//         }
//     };

//     const toggleModal = () => {
//         setCurrentEstablishment({
//             ID: '',
//             name: '',
//             descriptions: {},
//             full_address: '',
//             latitude: 0,
//             longitude: 0,
//             pictures: [],
//             language: 'en_US'
//         });
//         setPhotos([]);
//         setIsModalOpen(!isOpen);
//         setIsPhotoUpload(false);
//     };

//     const handleSubmit = async () => {
//         const userId = JSON.parse(localStorage.getItem('userId'));
//         const endpoint = currentEstablishment.ID
//             ? `http://localhost:8000/establishments/update`
//             : `http://localhost:8000/establishments/create`;

//         try {
//             const formData = new FormData();
//             let isChanged = false;

//             // Always send all fields, but detect if a change has been made
//             formData.append('name', currentEstablishment.name);
//             formData.append('full_address', currentEstablishment.full_address);
//             formData.append('latitude', currentEstablishment.latitude);
//             formData.append('longitude', currentEstablishment.longitude);
//             formData.append('language', currentEstablishment.language);
//             formData.append('user_id', userId);

//             // Append descriptions
//             Object.entries(currentEstablishment.descriptions).forEach(([lang, text]) => {
//                 formData.append(`description[${lang}]`, text);
//             });

//             // Marking if any of the fields have been changed
//             if (currentEstablishment.name !== originalEstablishment.name ||
//                 JSON.stringify(currentEstablishment.descriptions) !== JSON.stringify(originalEstablishment.descriptions) ||
//                 currentEstablishment.full_address !== originalEstablishment.full_address ||
//                 currentEstablishment.latitude !== originalEstablishment.latitude ||
//                 currentEstablishment.longitude !== originalEstablishment.longitude) {
//                 isChanged = true;
//             }

//             if (currentEstablishment.ID) {
//                 formData.append('ID', currentEstablishment.ID); // Add ID for update
//             }

//             // Append pictures to formData if available
//             if (photos && photos.length > 0) {
//                 photos.forEach((photo) => {
//                     formData.append('pictures', photo);
//                 });
//                 isChanged = true;
//             }

//             if (isChanged || !currentEstablishment.ID) {
//                 const response = await axios({
//                     method: currentEstablishment.ID ? 'PUT' : 'POST',
//                     url: endpoint,
//                     data: formData,
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 });

//                 console.log('Success:', response.data);
//                 toggleModal(); // Close modal after submit
//                 // Refresh or update the UI as needed
//             } else {
//                 console.log('No changes detected, nothing to submit.');
//             }
//         } catch (error) {
//             console.log('Error:', error);
//             if (error.response) {
//                 console.log('Error Data:', error.response.data);
//             }
//         }
//     };


//     const handlePhotoUploadToggle = () => {
//         setIsPhotoUpload(!isPhotoUpload);
//     };

//     const handlePhotoChange = (e) => {
//         const files = Array.from(e.target.files);
//         setPhotos((prevPhotos) => [...prevPhotos, ...files]);
//     };

//     const handlePhotoRemove = (index) => {
//         setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
//     };

//     return (
//         <Modal open={isOpen} aria-labelledby="add-establishment-modal">
//             <Box sx={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 width: '80%',
//                 bgcolor: 'background.paper',
//                 boxShadow: 24,
//                 p: 4,
//                 maxHeight: '90vh',
//                 overflowY: 'auto'
//             }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//                     {isPhotoUpload ? <PhotoIcon sx={{ mr: 1 }} /> : <LocationOnIcon sx={{ mr: 1 }} />}
//                     <Typography variant="h6" component="h2" sx={{ flexGrow: 1 }}>
//                         {isPhotoUpload ? "Galería de fotos" : "Datos del establecimiento"}
//                     </Typography>
//                     <FormControl variant="outlined" size="small" sx={{ width: 'auto', marginRight: '35%' }}>
//                         <Select
//                             value={currentEstablishment.language}
//                             onChange={handleLanguageChange}
//                         >
//                             <MenuItem value="es_ES">🇪🇸 Español (España)</MenuItem>
//                             <MenuItem value="en_US">🇺🇸 Inglés (Estados Unidos)</MenuItem>
//                         </Select>
//                     </FormControl>
//                     <Box sx={{ display: 'flex', ml: 'auto', gap: 1 }}>
//                         <IconButton disabled={!isPhotoUpload} onClick={handlePhotoUploadToggle}>
//                             <ShoppingBagIcon />
//                         </IconButton>
//                         <IconButton onClick={handlePhotoUploadToggle} disabled={isPhotoUpload}>
//                             <PhotoIcon />
//                         </IconButton>
//                     </Box>
//                 </Box>

//                 {isPhotoUpload ? (
//                     <>
//                         <Box sx={{
//                             border: '1px solid #ccc',
//                             width: '100%',
//                             height: '200px',
//                             display: 'grid',
//                             justifyContent: 'center',
//                             alignItems: 'center'
//                         }}>
//                             <Button
//                                 variant="contained"
//                                 component="label"
//                                 startIcon={<PhotoIcon />}
//                                 sx={{ mb: 2 }}
//                             >
//                                 Subir fotos
//                                 <input
//                                     type="file"
//                                     multiple
//                                     hidden
//                                     onChange={handlePhotoChange}
//                                 />
//                             </Button>
//                             <Box sx={{
//                                 display: 'flex',
//                                 flexWrap: 'wrap',
//                                 gap: 2
//                             }}>
//                                 {photos.map((photo, index) => (
//                                     <Box key={index} sx={{
//                                         position: 'relative',
//                                         width: '100px',
//                                         height: '100px'
//                                     }}>
//                                         <img
//                                             src={photo instanceof File ? URL.createObjectURL(photo) : photo}
//                                             alt="Establishment Preview"
//                                             style={{
//                                                 width: '100%',
//                                                 height: '100%',
//                                                 objectFit: 'cover'
//                                             }}
//                                         />
//                                         <IconButton
//                                             sx={{
//                                                 position: 'absolute',
//                                                 top: 0,
//                                                 right: 0,
//                                                 background: 'rgba(255, 255, 255, 0.7)'
//                                             }}
//                                             size="small"
//                                             onClick={() => handlePhotoRemove(index)}
//                                         >
//                                             <CloseIcon />
//                                         </IconButton>
//                                     </Box>
//                                 ))}
//                             </Box>
//                         </Box>
//                         <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', mt: 2, gap: 1 }}>
//                             <Button variant="contained" color="secondary" onClick={toggleModal}>
//                                 Cancelar
//                             </Button>
//                             <Button variant="contained" color="primary" onClick={handleSubmit}>
//                                 {establishment ? 'Guardar cambios' : 'Crear establecimiento'}
//                             </Button>
//                         </Box>
//                     </>
//                 ) : (
//                     <>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} sm={12} md={6} lg={6}>
//                                 <Typography sx={{ flexGrow: 1 }}>
//                                     Nombre del establecimiento
//                                 </Typography>
//                                 <TextField
//                                     fullWidth
//                                     name="name"
//                                     variant="outlined"
//                                     placeholder="Introduzca el nombre del establecimiento"
//                                     value={currentEstablishment.name}
//                                     onChange={handleChange}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={12} md={6} lg={6}>
//                                 <Typography sx={{ flexGrow: 1 }}>
//                                     Dirección completa
//                                 </Typography>
//                                 <TextField
//                                     fullWidth
//                                     name="full_address"
//                                     variant="outlined"
//                                     placeholder="Escriba la dirección completa"
//                                     value={currentEstablishment.full_address}
//                                     onChange={handleChange}
//                                     onFocus={() => setAutocompleteActive(true)}
//                                 />
//                                 {autocompleteActive && suggestions.length > 0 && (
//                                     <List component="nav" aria-label="suggestions">
//                                         {suggestions.map((suggestion) => (
//                                             <ListItem
//                                                 button
//                                                 key={suggestion.place_id}
//                                                 onClick={() => handleSuggestionClick(suggestion)}
//                                             >
//                                                 <ListItemText primary={suggestion.description} />
//                                             </ListItem>
//                                         ))}
//                                     </List>
//                                 )}
//                             </Grid>
//                             <Grid item xs={12} sm={12} md={6} lg={6}>
//                                 <Typography sx={{ flexGrow: 1 }}>
//                                     Descripción
//                                 </Typography>
//                                 <ReactQuill
//                                     value={currentEstablishment.descriptions[currentEstablishment.language] || ''}
//                                     onChange={handleDescriptionChange}
//                                     placeholder="Ingrese la descripción del establecimiento"
//                                     modules={AddEstablishmentModal.modules}
//                                     formats={AddEstablishmentModal.formats}
//                                     style={{ height: '220px', marginBottom: '16px' }}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={12} md={6} lg={6}>
//                                 {isLoaded && (
//                                     <GoogleMap
//                                         mapContainerStyle={containerStyle}
//                                         center={currentEstablishment.latitude !== 0 && currentEstablishment.longitude !== 0
//                                             ? { lat: currentEstablishment.latitude, lng: currentEstablishment.longitude }
//                                             : center}
//                                         zoom={15}
//                                         onClick={handleMapClick}
//                                     >
//                                         {currentEstablishment.latitude !== 0 && currentEstablishment.longitude !== 0 && (
//                                             <Marker
//                                                 position={{ lat: currentEstablishment.latitude, lng: currentEstablishment.longitude }}
//                                             />
//                                         )}
//                                     </GoogleMap>
//                                 )}
//                             </Grid>
//                         </Grid>
//                         <hr />
//                         <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
//                             <Button variant="contained" color="secondary" onClick={toggleModal}>
//                                 Cancelar
//                             </Button>
//                             <Button variant="contained" color="primary" onClick={handleSubmit}>
//                                 {establishment ? 'Guardar cambios' : 'Crear establecimiento'}
//                             </Button>
//                         </Box>
//                     </>
//                 )}
//             </Box>
//         </Modal>
//     );
// };

// // Quill modules and formats
// AddEstablishmentModal.modules = {
//     toolbar: [
//         ['bold', 'italic', 'underline'],
//         [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//         ['link'],
//         [{ 'header': '1' }, { 'header': '2' }, { 'header': [3, 4, 5, 6] }, { 'font': [] }],
//         [{ 'size': ['small', false, 'large', 'huge'] }],
//         ['clean'],
//         [{ 'color': [] }, { 'background': [] }],
//         [{ 'align': [] }]
//     ],
// };

// AddEstablishmentModal.formats = [
//     'bold', 'italic', 'underline',
//     'list', 'bullet',
//     'link',
//     'header', 'font', 'size',
//     'color', 'background', 'align'
// ];

// export default AddEstablishmentModal;

import React, { useEffect, useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Grid, IconButton, Select, MenuItem, FormControl, List, ListItem, ListItemText } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PhotoIcon from '@mui/icons-material/Photo';
import CloseIcon from '@mui/icons-material/Close';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';
import { api } from '../servicios/api';

const containerStyle = {
    width: '100%',
    height: '300px'
};

const center = {
    lat: 40.4182439,
    lng: 3.696106
};

const URI = api + 'establishments/create';

const AddEstablishmentModal = ({ isOpen, toggle, setIsModalOpen }) => {
    const [newEstablishment, setNewEstablishment] = useState({
        name: '',
        descriptions: '',
        full_address: '',
        latitude: 0,
        longitude: 0,
        pictures: [],
        language: 'en_ES' // Default language
    });
    const [isPhotoUpload, setIsPhotoUpload] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [autocompleteService, setAutocompleteService] = useState(null);
    const [geocoderService, setGeocoderService] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [autocompleteActive, setAutocompleteActive] = useState(false);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyDjZAjwwH6jSZch6q2lEKQpmIAnzLTxkEU',
        libraries: ['places'],
    });

    useEffect(() => {
        if (isLoaded) {
            if (!autocompleteService) {
                setAutocompleteService(new window.google.maps.places.AutocompleteService());
            }
            if (!geocoderService) {
                setGeocoderService(new window.google.maps.Geocoder());
            }
        }
    }, [isLoaded, autocompleteService, geocoderService]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEstablishment((prev) => ({
            ...prev,
            [name]: value
        }));

        if (name === 'full_address' && value) {
            handleAddressChange(value);
        }
    };

    const handleLanguageChange = (e) => {
        const { value } = e.target;
        setNewEstablishment((prev) => ({
            ...prev,
            language: value
        }));
    };

    const handleDescriptionChange = (value) => {
        setNewEstablishment((prev) => ({
            ...prev,
            descriptions: value
            // ...prev,
            // descriptions: {
            //     ...prev.descriptions,
            //     [prev.language]: value
            // }
        }));
    };

    const handleAddressChange = (input) => {
        if (autocompleteService) {
            autocompleteService.getPlacePredictions({ input }, (predictions, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
                    setSuggestions(predictions);
                } else {
                    setSuggestions([]);
                }
            });
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setNewEstablishment((prev) => ({
            ...prev,
            full_address: suggestion.description
        }));
        setAutocompleteActive(false);
        fetchPlaceDetails(suggestion.place_id);
    };

    const fetchPlaceDetails = (placeId) => {
        const service = new window.google.maps.places.PlacesService(document.createElement('div'));
        service.getDetails({ placeId }, (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && place.geometry) {
                setNewEstablishment((prev) => ({
                    ...prev,
                    full_address: place.formatted_address,
                    latitude: place.geometry.location.lat(),
                    longitude: place.geometry.location.lng()
                }));
            }
        });
    };

    const handleMapClick = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();

        setNewEstablishment((prev) => ({
            ...prev,
            latitude: lat,
            longitude: lng
        }));

        if (geocoderService) {
            geocoderService.geocode({ location: { lat, lng } }, (results, status) => {
                if (status === window.google.maps.GeocoderStatus.OK && results[0]) {
                    setNewEstablishment((prev) => ({
                        ...prev,
                        full_address: results[0].formatted_address
                    }));
                }
            });
        }
    };

    const toggleModal = () => {
        setNewEstablishment({
            name: '',
            descriptions: {},
            full_address: '',
            latitude: 0,
            longitude: 0,
            pictures: [],
            language: 'en_US'
        });
        setPhotos([]);
        setIsModalOpen(!isOpen);
        setIsPhotoUpload(false);
    };

    const handleSubmit = async () => {
        const userId = JSON.parse(localStorage.getItem('userId'));
        // const endpoint = `http://localhost:8000/establishments/create`;
        const endpoint = `${URI}`;

        try {
            const formData = new FormData();

            formData.append('name', newEstablishment.name);
            formData.append('full_address', newEstablishment.full_address);
            formData.append(`description`, newEstablishment.descriptions);
            formData.append('latitude', newEstablishment.latitude);
            formData.append('longitude', newEstablishment.longitude);
            formData.append('language', newEstablishment.language);
            formData.append('user_id', userId);

            // Object.entries(newEstablishment.descriptions).forEach(([lang, text]) => {
            //     formData.append(`description[${lang}]`, text);
            // });

            if (photos && photos.length > 0) {
                photos.forEach((photo) => {
                    formData.append('pictures', photo);
                });
            }

            const response = await axios.post(endpoint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Success:', response.data);
            toggleModal(); // Close modal after submit
        } catch (error) {
            console.log('Error:', error);
            if (error.response) {
                console.log('Error Data:', error.response.data);
            }
        }
    };

    const handlePhotoUploadToggle = () => {
        setIsPhotoUpload(!isPhotoUpload);
    };

    const handlePhotoChange = (e) => {
        const files = Array.from(e.target.files);
        setPhotos((prevPhotos) => [...prevPhotos, ...files]);
    };

    const handlePhotoRemove = (index) => {
        setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
    };

    return (
        <Modal open={isOpen} aria-labelledby="add-establishment-modal">
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                maxHeight: '90vh',
                overflowY: 'auto'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    {isPhotoUpload ? <PhotoIcon sx={{ mr: 1 }} /> : <LocationOnIcon sx={{ mr: 1 }} />}
                    <Typography variant="h6" component="h2" sx={{ flexGrow: 1 }}>
                        {isPhotoUpload ? "Galería de fotos" : "Datos del establecimiento"}
                    </Typography>
                    <FormControl variant="outlined" size="small" sx={{ width: 'auto', marginRight: '35%' }}>
                        <Select
                            value={newEstablishment.language}
                            onChange={handleLanguageChange}
                        >
                            <MenuItem value="es_ES">🇪🇸 Español (España)</MenuItem>
                            <MenuItem value="en_US">🇺🇸 Inglés (Estados Unidos)</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{ display: 'flex', ml: 'auto', gap: 1 }}>
                        <IconButton disabled={!isPhotoUpload} onClick={handlePhotoUploadToggle}>
                            <ShoppingBagIcon />
                        </IconButton>
                        <IconButton onClick={handlePhotoUploadToggle} disabled={isPhotoUpload}>
                            <PhotoIcon />
                        </IconButton>
                    </Box>
                </Box>

                {isPhotoUpload ? (
                    <>
                        <Box sx={{
                            border: '1px solid #ccc',
                            width: '100%',
                            height: '200px',
                            display: 'grid',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Button
                                variant="contained"
                                component="label"
                                startIcon={<PhotoIcon />}
                                sx={{ mb: 2 }}
                            >
                                Subir fotos
                                <input
                                    type="file"
                                    multiple
                                    hidden
                                    onChange={handlePhotoChange}
                                />
                            </Button>
                            <Box sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 2
                            }}>
                                {photos.map((photo, index) => (
                                    <Box key={index} sx={{
                                        position: 'relative',
                                        width: '100px',
                                        height: '100px'
                                    }}>
                                        <img
                                            src={photo instanceof File ? URL.createObjectURL(photo) : photo}
                                            alt="Establishment Preview"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                        <IconButton
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                                background: 'rgba(255, 255, 255, 0.7)'
                                            }}
                                            size="small"
                                            onClick={() => handlePhotoRemove(index)}
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', mt: 2, gap: 1 }}>
                            <Button variant="contained" color="secondary" onClick={toggleModal}>
                                Cancelar
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                Crear establecimiento
                            </Button>
                        </Box>
                    </>
                ) : (
                    <>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography sx={{ flexGrow: 1 }}>
                                    Nombre del establecimiento
                                </Typography>
                                <TextField
                                    fullWidth
                                    name="name"
                                    variant="outlined"
                                    placeholder="Introduzca el nombre del establecimiento"
                                    value={newEstablishment.name}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography sx={{ flexGrow: 1 }}>
                                    Dirección completa
                                </Typography>
                                <TextField
                                    fullWidth
                                    name="full_address"
                                    variant="outlined"
                                    placeholder="Escriba la dirección completa"
                                    value={newEstablishment.full_address}
                                    onChange={handleChange}
                                    onFocus={() => setAutocompleteActive(true)}
                                />
                                {autocompleteActive && suggestions.length > 0 && (
                                    <List component="nav" aria-label="suggestions">
                                        {suggestions.map((suggestion) => (
                                            <ListItem
                                                button
                                                key={suggestion.place_id}
                                                onClick={() => handleSuggestionClick(suggestion)}
                                            >
                                                <ListItemText primary={suggestion.description} />
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography sx={{ flexGrow: 1 }}>
                                    Descripción
                                </Typography>
                                <ReactQuill
                                    value={newEstablishment.descriptions || ''}
                                    onChange={handleDescriptionChange}
                                    placeholder="Ingrese la descripción del establecimiento"
                                    modules={AddEstablishmentModal.modules}
                                    formats={AddEstablishmentModal.formats}
                                    style={{ height: '220px', marginBottom: '16px' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                {isLoaded && (
                                    <GoogleMap
                                        mapContainerStyle={containerStyle}
                                        center={newEstablishment.latitude !== 0 && newEstablishment.longitude !== 0
                                            ? { lat: newEstablishment.latitude, lng: newEstablishment.longitude }
                                            : center}
                                        zoom={15}
                                        onClick={handleMapClick}
                                    >
                                        {newEstablishment.latitude !== 0 && newEstablishment.longitude !== 0 && (
                                            <Marker
                                                position={{ lat: newEstablishment.latitude, lng: newEstablishment.longitude }}
                                            />
                                        )}
                                    </GoogleMap>
                                )}
                            </Grid>
                        </Grid>
                        <hr />
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                            <Button variant="contained" color="secondary" onClick={toggleModal}>
                                Cancelar
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                Crear establecimiento
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Modal>
    );
};

// Quill modules and formats
AddEstablishmentModal.modules = {
    toolbar: [
        ['bold', 'italic', 'underline'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link'],
        [{ 'header': '1' }, { 'header': '2' }, { 'header': [3, 4, 5, 6] }, { 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['clean'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }]
    ],
};

AddEstablishmentModal.formats = [
    'bold', 'italic', 'underline',
    'list', 'bullet',
    'link',
    'header', 'font', 'size',
    'color', 'background', 'align'
];

export default AddEstablishmentModal;
