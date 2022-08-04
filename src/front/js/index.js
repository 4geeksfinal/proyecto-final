//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//include your index.scss file into the bundle
import "../styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
