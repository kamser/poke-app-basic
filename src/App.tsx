import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Layouts/Header';
import CustomFooter from './Layouts/Footer';
import CustomForm from './Components/CustomForm';

function App() {
  return (
    <div className="App">
        <CustomNavbar></CustomNavbar>
        <CustomForm></CustomForm>
        <CustomFooter></CustomFooter>
    </div>
  );
}

export default App;
