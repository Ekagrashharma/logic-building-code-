function Feature({ feature, onToggle }) {
    return (
        <div>
        <h2>{feature.name}</h2>

        <p>
            Status: {feature.enabled ? "Enabled ✅" : "Disabled ❌"}
        </p>

        <button onClick={onToggle}>
            Toggle
        </button>
        </div>
    );
    }
    export default Feature
