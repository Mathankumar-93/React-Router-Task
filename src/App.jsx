import React from "react";
import NavBar from "./components/NavBar";
import All from "./components/All";
import FullStack from "./components/FullStack";
import DataScience from "./components/DataScience";
import Cyber from "./components/Cyber";
import Carrer from "./components/Carrer";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/all" element={<All />} />
          <Route path="/fullstackdevelopment" element={<FullStack />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<Cyber />} />
          <Route path="/carrer" element={<Carrer />} />
          <Route path="*" element={<Navigate to='/all' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
