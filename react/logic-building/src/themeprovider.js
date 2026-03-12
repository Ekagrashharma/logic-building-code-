import "./App.css";

const theme = { mode: "dark", accent: "blue" };

function MenuItem({ theme }) {
  const iconColor = theme.accent === "blue" ? "blue" : "black";

  return (
    <div
      style={{
        padding: "10px",
        background: theme.mode === "dark" ? "#222" : "#eee",
        color: theme.mode === "dark" ? "white" : "black",
        marginTop: "10px"
      }}
    >
      <span style={{ color: iconColor }}>★</span> Menu Item
    </div>
  );
}

function Sidebar({ theme }) {
  return (
    <div>
      <h3>Sidebar</h3>
      <MenuItem theme={theme} />
    </div>
  );
}

function Layout({ theme }) {
  return (
    <div>
      <h2>Layout</h2>
      <Sidebar theme={theme} />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>App</h1>
      <Layout theme={theme} />
    </div>
  );
}

export default App;