"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

type Props = {
  onCitySelect: (city: string) => void;
};

export default function ZoningMap({ onCitySelect }: Props) {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    if (!token) {
      console.error("❌ Mapbox token missing");
      return;
    }

    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-84.5555, 42.7325],
      zoom: 6,
    });

    const cities: { name: string; coords: [number, number] }[] = [
      { name: "Detroit, MI", coords: [-83.0458, 42.3314] },
      { name: "Ann Arbor, MI", coords: [-83.743, 42.2808] },
    ];

    cities.forEach((city) => {
      const marker = new mapboxgl.Marker()
        .setLngLat(city.coords as [number, number])
        .addTo(map);

      marker.getElement().addEventListener("click", () => {
        onCitySelect(city.name);
      });
    });

    return () => map.remove();
  }, [onCitySelect]);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
}
