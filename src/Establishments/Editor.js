import React, { useState, useEffect } from 'react';
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
    lng: -3.696106
};

const URI = api + 'establishments/';


const EditEstablishmentModal = ({ isOpen, setIsEditModalOpen, establishmentId, fetchData }) => {
    console.log(establishmentId, "establishmentId")
    const [currentEstablishment, setCurrentEstablishment] = useState(initializeEstablishment({}));
    const [originalEstablishment, setOriginalEstablishment] = useState({});
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

        fetchEstablishment(establishmentId);

    }, [establishmentId]);

    useEffect(() => {
        if (isLoaded) {
            if (!autocompleteService) {
                setAutocompleteService(new window.google.maps.places.AutocompleteService());
            }
            if (!geocoderService) {
                setGeocoderService(new window.google.maps.Geocoder());
            }
        }
    }, [autocompleteService, geocoderService, isLoaded]);

    const fetchEstablishment = async (id) => {
        try {
            const userId = JSON.parse(localStorage.getItem('userId'))
            // const response = await axios.post(`http://localhost:8000/establishments/${id}?full=true`, {
            const response = await axios.post(`${URI}${id}?full=true`, {

                user_id: userId,
                permissions: ["read:establishments"],
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const fetchedEstablishment = response.data;

            const initialEstablishment = initializeEstablishment(fetchedEstablishment);
            setCurrentEstablishment(initialEstablishment);
            setOriginalEstablishment(initialEstablishment);
            setPhotos(fetchedEstablishment.pictures || []);
        } catch (error) {
            console.error('Error fetching establishment:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentEstablishment((prev) => ({
            ...prev,
            [name]: value
        }));

        if (name === 'full_address' && value) {
            handleAddressChange(value);
        }
    };

    const handleLanguageChange = (e) => {
        const { value } = e.target;
        setCurrentEstablishment((prev) => ({
            ...prev,
            language: value
        }));
    };

    const handleDescriptionChange = (value) => {
        setCurrentEstablishment((prev) => ({
            ...prev,
            descriptions: prev.descriptions.map(desc =>
                desc.language === prev.language ? { ...desc, text: value } : desc
            )
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
        setCurrentEstablishment((prev) => ({
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
                setCurrentEstablishment((prev) => ({
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

        setCurrentEstablishment((prev) => ({
            ...prev,
            latitude: lat,
            longitude: lng
        }));

        if (geocoderService) {
            geocoderService.geocode({ location: { lat, lng } }, (results, status) => {
                if (status === window.google.maps.GeocoderStatus.OK && results[0]) {
                    setCurrentEstablishment((prev) => ({
                        ...prev,
                        full_address: results[0].formatted_address
                    }));
                }
            });
        }
    };

    const toggleModal = () => {
        // setCurrentEstablishment(initializeEstablishment({}));
        setPhotos([]);
        setIsEditModalOpen(!isOpen);
        setIsPhotoUpload(false);
    };

    const handleSubmit = async () => {
        const userId = JSON.parse(localStorage.getItem('userId'));
        // const endpoint = `http://localhost:8000/establishments/update`;
        const endpoint = `${URI}update`

        if (!isValidEstablishment(currentEstablishment)) {
            console.log('Required fields are missing');
            return;
        }

        try {
            const formData = new FormData();
            let isChanged = false;

            populateFormData(formData, currentEstablishment, userId);

            if (isEstablishmentChanged(currentEstablishment, originalEstablishment)) {
                isChanged = true;
            }

            if (photos.length > 0) {
                photos.forEach((photo) => formData.append('pictures', photo));
                isChanged = true;
            }

            if (isChanged) {
                const response = await axios.put(endpoint, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                console.log('Success:', response.data);
                fetchData()
                toggleModal();
            } else {
                console.log('No changes detected, nothing to submit.');
            }
        } catch (error) {
            handleApiError(error);
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
        <Modal open={isOpen} aria-labelledby="edit-establishment-modal">
            <Box sx={modalStyles}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <HeaderIcon isPhotoUpload={isPhotoUpload} />
                    <Typography variant="h6" component="h2" sx={{ flexGrow: 1 }}>
                        {isPhotoUpload ? "Galería de fotos" : "Datos del establecimiento"}
                    </Typography>
                    <FormControl variant="outlined" size="small" sx={{ width: 'auto', marginRight: '35%' }}>
                        <Select
                            value={currentEstablishment.language}
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
                    <PhotoUploadSection
                        photos={photos}
                        handlePhotoChange={handlePhotoChange}
                        handlePhotoRemove={handlePhotoRemove}
                        toggleModal={toggleModal}
                        handleSubmit={handleSubmit}
                    />
                ) : (
                    <EstablishmentForm
                        currentEstablishment={currentEstablishment}
                        handleChange={handleChange}
                        handleDescriptionChange={handleDescriptionChange}
                        suggestions={suggestions}
                        autocompleteActive={autocompleteActive}
                        handleSuggestionClick={handleSuggestionClick}
                        setAutocompleteActive={setAutocompleteActive}
                        handleMapClick={handleMapClick}
                        isLoaded={isLoaded}
                        toggleModal={toggleModal}
                        handleSubmit={handleSubmit}
                    />
                )}
            </Box>
        </Modal>
    );
};

// Helper functions and components

const initializeEstablishment = (establishment) => ({
    ID: establishment?.ID || '',
    name: establishment?.name || '',
    descriptions: establishment?.description || [],
    full_address: establishment?.full_address || '',
    latitude: establishment?.latitude || 0,
    longitude: establishment?.longitude || 0,
    pictures: establishment?.pictures || [],
    language: establishment?.description?.[0]?.language || 'en_US',
});

const isValidEstablishment = (establishment) =>
    establishment.ID &&
    establishment.name &&
    establishment.full_address &&
    establishment.latitude &&
    establishment.longitude &&
    establishment.descriptions.length > 0;

const populateFormData = (formData, establishment, userId) => {
    formData.append('ID', establishment.ID);
    formData.append('name', establishment.name);
    formData.append('full_address', establishment.full_address);
    formData.append('latitude', establishment.latitude);
    formData.append('longitude', establishment.longitude);
    formData.append('language', establishment.language);
    formData.append('user_id', userId);

    establishment.descriptions.forEach(desc => {
        formData.append(`description[${desc.language}]`, desc.text);
    });
};

const isEstablishmentChanged = (current, original) =>
    current.name !== original.name ||
    JSON.stringify(current.descriptions) !== JSON.stringify(original.descriptions) ||
    current.full_address !== original.full_address ||
    current.latitude !== original.latitude ||
    current.longitude !== original.longitude;

const handleApiError = (error) => {
    console.log('Error:', error);
    if (error.response) {
        console.log('Error Data:', error.response.data);
    }
};

const HeaderIcon = ({ isPhotoUpload }) => (isPhotoUpload ? <PhotoIcon sx={{ mr: 1 }} /> : <LocationOnIcon sx={{ mr: 1 }} />);

const PhotoUploadSection = ({ photos, handlePhotoChange, handlePhotoRemove, toggleModal, handleSubmit }) => (
    <>
        <Box sx={photoUploadStyles}>
            <Button variant="contained" component="label" startIcon={<PhotoIcon />} sx={{ mb: 2 }}>
                Subir fotos
                <input type="file" multiple hidden onChange={handlePhotoChange} />
            </Button>
            <Box sx={photoContainerStyles}>
                {photos.map((photo, index) => (
                    <Box key={index} sx={photoItemStyles}>
                        <img
                            src={photo instanceof File ? URL.createObjectURL(photo) : photo}
                            alt="Establishment Preview"
                            style={photoPreviewStyles}
                        />
                        <IconButton sx={photoRemoveButtonStyles} size="small" onClick={() => handlePhotoRemove(index)}>
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
                Guardar cambios
            </Button>
        </Box>
    </>
);

const EstablishmentForm = ({
    currentEstablishment,
    handleChange,
    handleDescriptionChange,
    suggestions,
    autocompleteActive,
    handleSuggestionClick,
    setAutocompleteActive,
    handleMapClick,
    isLoaded,
    toggleModal,
    handleSubmit,
}) => (
    <>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography sx={{ flexGrow: 1 }}>Nombre del establecimiento</Typography>
                <TextField
                    fullWidth
                    name="name"
                    variant="outlined"
                    placeholder="Introduzca el nombre del establecimiento"
                    value={currentEstablishment.name}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography sx={{ flexGrow: 1 }}>Dirección completa</Typography>
                <TextField
                    fullWidth
                    name="full_address"
                    variant="outlined"
                    placeholder="Escriba la dirección completa"
                    value={currentEstablishment.full_address}
                    onChange={handleChange}
                    onFocus={() => setAutocompleteActive(true)}
                />
                {autocompleteActive && suggestions.length > 0 && (
                    <List component="nav" aria-label="suggestions">
                        {suggestions.map((suggestion) => (
                            <ListItem button key={suggestion.place_id} onClick={() => handleSuggestionClick(suggestion)}>
                                <ListItemText primary={suggestion.description} />
                            </ListItem>
                        ))}
                    </List>
                )}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography sx={{ flexGrow: 1 }}>Descripción</Typography>
                <ReactQuill
                    value={
                        currentEstablishment.descriptions.find(desc => desc.language === currentEstablishment.language)?.text || ''
                    }
                    onChange={handleDescriptionChange}
                    placeholder="Ingrese la descripción del establecimiento"
                    modules={EditEstablishmentModal.modules}
                    formats={EditEstablishmentModal.formats}
                    style={{ height: '220px', marginBottom: '16px' }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                {isLoaded && (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={
                            currentEstablishment.latitude !== 0 && currentEstablishment.longitude !== 0
                                ? { lat: currentEstablishment.latitude, lng: currentEstablishment.longitude }
                                : center
                        }
                        zoom={15}
                        onClick={handleMapClick}
                    >
                        {currentEstablishment.latitude !== 0 && currentEstablishment.longitude !== 0 && (
                            <Marker position={{ lat: currentEstablishment.latitude, lng: currentEstablishment.longitude }} />
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
                Guardar cambios
            </Button>
        </Box>
    </>
);

// Quill modules and formats
EditEstablishmentModal.modules = {
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

EditEstablishmentModal.formats = [
    'bold', 'italic', 'underline',
    'list', 'bullet',
    'link',
    'header', 'font', 'size',
    'color', 'background', 'align'
];

const modalStyles = {
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
};

const photoUploadStyles = {
    border: '1px solid #ccc',
    width: '100%',
    height: '200px',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center'
};

const photoContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2
};

const photoItemStyles = {
    position: 'relative',
    width: '100px',
    height: '100px'
};

const photoPreviewStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
};

const photoRemoveButtonStyles = {
    position: 'absolute',
    top: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.7)'
};

export default EditEstablishmentModal;
