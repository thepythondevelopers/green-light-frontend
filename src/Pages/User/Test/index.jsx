import React, { useState } from "react";
import { useJsApiLoader, useLoadScript, GoogleMap, Marker, Autocomplete, DirectionsRenderer, } from '@react-google-maps/api';
import "./style.css";

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const Test = () => {
    // Google Map API
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAf0pDKUsl4WzjNdeKtiuABBy1KMrJGEXw",
        libraries: ['places']
    })
    const [map, setMap] = useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    return (
        <>
            <div className="googlemap-flex">
                <div className="googleMap-box">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        options={{
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false,
                        }}
                    >

                        <Marker position={center} />
                    </GoogleMap>

                    <Autocomplete>
                        <input type="text" name="" id="" />
                    </Autocomplete>
                </div>
            </div>
        </>
    )
}

export default Test;