import {H1} from "@/components/common/h1";
import * as React from "react";
import {Topbotsvg} from "@/components/common/topbotsvg";
import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer} from 'react-leaflet'


export const Map = () => {
    return (
        <div className={"relative flex flex-col py-24 bg-juiher-ternary-green p-4 "}>
            <div className={"text-center"}>
                <H1 label={"Où nous trouver ?"}/>
            </div>
            <span className={"text-muted-foreground text-center"}>
                Retrouvez tous nos chantiers en cours et à venir sur la carte ci-dessous !
            </span>

            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            </MapContainer>

            <Topbotsvg/>

        </div>
    )
}