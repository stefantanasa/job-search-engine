import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import CompanyDetails from "./components/CompanyDetails";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Routes>
            <Route exact path={"/"} element={<Homepage />} />
            <Route path={"/:company"} element={<CompanyDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
