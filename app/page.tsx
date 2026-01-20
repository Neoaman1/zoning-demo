"use client";

import { useState } from "react";
import { zoningData } from "../data/zoningMock";
import ZoningResult from "../components/ZoningResult";
import ZoningMap from "../components/ZoningMap";

export default function Home() {
  const [city, setCity] = useState<string | null>(null);
  const [useType, setUseType] = useState("Retail");

  const zoning = city ? zoningData[city] : null;

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 2 }}>
        <ZoningMap onCitySelect={setCity} />
      </div>

      <div
        style={{
          flex: 1,
          padding: 20,
          background: "#fff",
          borderLeft: "1px solid #ddd",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <h2>Zoning Intelligence</h2>

        {city && (
          <>
            <p><strong>Selected City:</strong> {city}</p>

            <select
              value={useType}
              onChange={(e) => setUseType(e.target.value)}
              style={{ marginBottom: 10 }}
            >
              <option value="Retail">Retail</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Gas Station">Gas Station</option>
              <option value="Office">Office</option>
              <option value="Medical">Medical</option>
            </select>

            {zoning && (
              <ZoningResult city={city} use={useType} data={zoning} />
            )}
          </>
        )}

        {!city && <p>Click a city marker to begin.</p>}
      </div>
    </div>
  );
}
