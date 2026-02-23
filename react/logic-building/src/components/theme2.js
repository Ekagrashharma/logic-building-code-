import { useState } from "react";
import { Feature } from "./components/Feature";
import './App.css'


const App = () => {
  const [feature, setFeature] = useState({
    name: "Dark Mode",
    enabled: true
  });

   const toggleFeature = () => {
    setFeature(prev => ({
      ...prev,
      enabled: !prev.enabled
    }));
  };
  return (
    <div>
      {/* <Feature feature={feature} onToggle={toggleFeature} /> */}
      <h2>ello</h2>
    </div>
  )
}

export default App