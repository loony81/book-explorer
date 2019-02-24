import React from 'react';
import ReactDOM from 'react-dom';
import Global from './js/components/Global';
import feather from 'feather-icons';
import "./css/bootstrap.min.css";
import "./css/index.css";



ReactDOM.render(
  <Global />,
  document.getElementById('root')
);

feather.replace();