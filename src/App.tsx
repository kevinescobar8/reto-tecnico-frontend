import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AddNave from './addNave'
import NavesList from './nave-list'
import "bootstrap/dist/css/bootstrap.min.css";
import TiposNaves from "./tipos-lista";

function App() {
  return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Naves
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/no_tripulada"} className="nav-link">
              No tripulada
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/tripulada"} className="nav-link">
                Tipulada
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/lanzadera"} className="nav-link">
                Lanzadera
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Agregar
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
        <Routes>
          <Route path="/"  element = {<TiposNaves searchTitle="" title={"Todas"} />} />
          <Route path="/no_tripulada"  element = {<TiposNaves searchTitle="no%20tripulada" title={"Solo no tripuladas"}/>} />
          <Route path="/tripulada"  element = {<TiposNaves searchTitle="tripulada" title={"solo tripuladas"} />} />
          <Route path="/lanzadera"  element = {<TiposNaves searchTitle="Lanzadera" title={"solo lanzaderas"} />} />
          <Route path="/add" element = {<AddNave />} />
        </Routes>
        </div>
      </div>
  );
}

export default App;
