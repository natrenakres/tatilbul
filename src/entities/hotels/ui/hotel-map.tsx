"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"


  interface MapProps {
    latitude: number | undefined;
    longitude: number | undefined;
    name: string | undefined;
    zoom: number
  }

  export default function HotelMap({latitude,  longitude, name, zoom }: MapProps) {

    if(!latitude || !longitude || !name) {
        return <p>Error generating map data...</p>
    }

    const position: LatLngTuple = [latitude, longitude];
    return (
        <MapContainer
            center={position}
            zoom={zoom}
            className="rounded-md h-96 w-full"
        >
            <TileLayer
                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                 />
            <Marker position={position}>
                <Popup>{name}</Popup>
            </Marker>
        </MapContainer>
    )
  }