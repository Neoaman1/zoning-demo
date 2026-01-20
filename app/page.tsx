"use client";

import { useState } from "react";
import { zoningData } from "../data/zoningMock";
import ZoningResult from "../components/ZoningResult";

export default function Home() {
  const [city, setCity] = useState("");
  const [useType, setUseType] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleSearch = () => {
    if (zoningData[city]) {
      setResult(zoningData[city]);
    } else {
      alert("City not in demo dataset");
    }
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Commercial Zoning Research – Demo</h1>

      <input
        placeholder="City, State (e.g. Detroit, MI)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <select
        value={useType}
        onChange={(e) => setUseType(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      >
        <option value="">Select Use</option>
        <option value="Retail">Retail</option>
        <option value="Restaurant">Restaurant</option>
        <option value="Gas Station">Gas Station</option>
        <option value="Office">Office</option>
        <option value="Medical">Medical</option>
      </select>

      <button onClick={handleSearch}>Run Zoning Check</button>

      {result && useType && (
        <ZoningResult city={city} use={useType} data={result} />
      )}
    </main>
  );
}
