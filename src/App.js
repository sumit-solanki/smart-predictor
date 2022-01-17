import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Summary from "./Home/Summary";
import Details from "./Home/Details";

function App() {
  return (
    <div className="App">
      <div className="grid-layout">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/detail" element={<Details />} />
            <Route path="/" element={<Summary />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
