"use client";

import { H1 } from "@/components/common/h1";
import * as React from "react";
import { Topbotsvg } from "@/components/common/topbotsvg";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";
import useSWR from "swr";
import { defaultFetcherGet } from "@/lib/utils";

interface MapProps {
  marker: LatLngExpression;
  label: string;
}

export default function Map() {
  const url =
    process.env.NEXT_PUBLIC_STRAPI_API_URL + "carte-des-travauxes?populate=*";
  const { data, error, isLoading } = useSWR(url, defaultFetcherGet);

  const iconSize = 40;
  const juihernatureAxes: LatLngExpression = [
    44.43044099313026, 0.12722739711419073,
  ];
  const icon = L.icon({
    iconUrl: "/assets/images/map-marker.webp",
    iconSize: [iconSize, iconSize],
    iconAnchor: [iconSize / 2, iconSize + 9],
  });

  const allMarkers: MapProps[] = data?.data?.map((marker: any) => {
    return {
      marker: [marker.attributes.Latitude, marker.attributes.Longitude],
      label: marker.attributes.Commentaire,
    };
  });

  console.log(allMarkers);

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={"relative flex flex-col py-24 bg-juiher-ternary-green p-4 "}
    >
      <div className={"text-center"}>
        <H1 label={"Où nous trouver ?"} />
      </div>
      <span className={"text-muted-foreground text-center"}>
        Retrouvez tous nos chantiers en cours et à venir sur la carte ci-dessous
        !
      </span>

      <MapContainer
        className={"h-[600px]"}
        center={juihernatureAxes}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={icon} position={juihernatureAxes}>
          <Popup>Juiher Nature</Popup>
        </Marker>

        {allMarkers?.map((marker, index) => (
          <Marker icon={icon} key={index} position={marker.marker}>
            <Popup>{marker.label}</Popup>
          </Marker>
        ))}
      </MapContainer>

      <Topbotsvg />
    </div>
  );
}
