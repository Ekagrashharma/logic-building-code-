import { useState } from "react";

const initialFeatures = [
  { id: 1, name: "Dark Mode", enabled: true, critical: true },
  { id: 2, name: "Chat Support", enabled: false, critical: false},
];

function FeatureItem({ feature, onToggle }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <span style={{ marginRight: "10px" }}>
        {feature.name} -{" "}
        <strong>{feature.enabled ? "Enabled" : "Disabled"}</strong>
      </span>

      <button
        onClick={() => onToggle(feature.id)}
        disabled={feature.critical}
      >
        Toggle
      </button>

      {feature.critical && (
        <p style={{ color: "red", marginTop: "5px" }}>
          This feature is critical and cannot be changed.
        </p>
      )}
    </div>
  );
}

export default function App() {
  const [features, setFeatures] = useState(initialFeatures);

  const handleToggle = (id) => {
    const updatedFeatures = features.map((feature) =>
      feature.id === id
        ? { ...feature, enabled: !feature.enabled }
        : feature
    );

    setFeatures(updatedFeatures);
  };

  return (
    <div>
      <h2>Admin Feature Panel</h2>

      {features.map((feature) => (
        <FeatureItem
          key={feature.id}
          feature={feature}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}