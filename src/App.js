import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import TvmazeSearch from "./components/header/TvmazeSearch";

function App() {
  const [rV, setRV] = useState("");
  console.log(rV);
  return (
    <div className="App">
      <Header setRV={setRV} rV={rV} />
      <TvmazeSearch setRV={setRV} rV={rV} />
    </div>
  );
}

export default App;
