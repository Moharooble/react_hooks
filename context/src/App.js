import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Persons from "./components/Persons";
import InformationDetails from "./components/InformationDetails";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Persons />} />
          <Route path="/info/details" element={<InformationDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
