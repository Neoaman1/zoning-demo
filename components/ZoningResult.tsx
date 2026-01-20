type Props = {
  city: string;
  use: string;
  data: any;
};

export default function ZoningResult({ city, use, data }: Props) {
  let status = "Prohibited";

  if (data.permittedUses.includes(use)) status = "Permitted";
  else if (data.conditionalUses.includes(use)) status = "Conditional Use";

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, marginTop: 20 }}>
      <h3>Zoning Result</h3>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Zoning:</strong> {data.zone}</p>
      <p><strong>Proposed Use:</strong> {use}</p>
      <p><strong>Status:</strong> {status}</p>

      <h4>Development Standards</h4>
      <p>Max Height: {data.standards.maxHeight}</p>
      <p>Parking: {data.standards.parking}</p>

      <small>
        *Demo only. Verify with municipality.
      </small>
    </div>
  );
}
