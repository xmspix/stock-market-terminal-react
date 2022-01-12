import React, { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// import { IWidgets, widgets } from "./utils/widgetHelpers";
import Header from "./components/Header";
import { IOptions, widgets } from "./components/Widget";
import Home from "./pages/Home";
import store from "./store";

function App() {

  useEffect(() => {
    store.setWidgets(widgets.map((e: IOptions) => [{ ...e, isActive: true }]));
  }, [])

  return (
    // HashRouter is used for Github Pages
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
