import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "./App.css";
import "../node_modules/leaflet/dist/leaflet.css";
import states from "./states.json";

function App() {
    console.log(states);
    return (
        <>
            <MapContainer
                center={[8.5238, -66.5897]}
                zoom={6}
                bounds={[6.4238, -66.5897]}
                maxZoom={8}
                minZoom={5}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {states.map((state) => (
                    <>
                        {state.latitude && (
                            <Marker position={state.latitude}>
                                <Popup>{state.name}</Popup>
                            </Marker>
                        )}
                    </>
                ))}
            </MapContainer>
        </>
    );
}

export default App;
