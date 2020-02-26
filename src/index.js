import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main'
// import TableColumn from './Components/TableColumn'
import {BrowserRouter} from 'react-router-dom'
import './styles/stylesheet.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';





ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));