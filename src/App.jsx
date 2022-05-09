import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import CompanyDetails from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <h1>React app</h1>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/:company"} element={<CompanyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
