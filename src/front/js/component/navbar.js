import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";
import React, { useContext, useEffect, useState } from 'react';


export default function Navbar() {
  const { actions } = useContext(Context);
  const history = useNavigate();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [show]);

  return (
    <>
      <div className="containerr">
        <div className="header" />
        <span className="right-icons container-fluid">
          <Link className="navbar-brand navbar-right" to="/">
            Better&Beyond
          </Link>
          <ul className="nav navbar-nav navbar-right text-light">
            <li>
              <Link to="/login">
                <span className="user-icon" />
                <i className="fas fa-user fa-lg me-3 mt-1 text-light"></i>
              </Link>
            </li>
          </ul>
        </span>
        <input
          type="checkbox"
          className="openSidebarMenu" onClick={() => setShow(!show)}
          id="openSidebarMenu"

        />
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
          <div className="spinner diagonal part-1" />
          <div className="spinner horizontal" />
          <div className="spinner diagonal part-2" />
        </label>
        <div id="sidebarMenu">
          <ul className="sidebarMenuInner justify-content-end flex-grow-1 pe-3 mt-3 ms-3">
            <form className="d-flex">
              <input
                className="form-control me-2 bg-transparent text-light"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Buscar
              </button>
            </form>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Página Principal
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/private">
                Mis clases
              </Link>
            </li>
            <li className="nav-dropDwn btn-md dropdown m-3">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="offcanvasNavbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ajustes
              </Link>
              <ul
                className="dropdown-menu bg-dark"
                aria-labelledby="offcanvasNavbarDropdown"
                style={{ padding: "1px", fontSize: "12px", }}
                data-popper-placement="bottom"
              >
                <li className="dropdown-item">
                  <Link to="/profile">
                    Perfil
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/preferences">
                    Preferencias
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/update">
                    Actualizar perfil
                  </Link>
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => actions.handleLogout(history)}
                >
                  Cerrar Sesión
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}