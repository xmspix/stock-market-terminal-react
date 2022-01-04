import React, { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Chart from "./components/Widgets/Chart";
import Matrix from "./components/Widgets/Matrix";
import PositionTracker from "./components/Widgets/PositionTracker";
import Screener from "./components/Widgets/Screener";
import Wallets from "./components/Widgets/Wallets";
import Watchlist from "./components/Widgets/Watchlist";
import Home from "./pages/Home";
import store from "./store";

function App() {

  useEffect(() => {
    const widget1 = [
      {id:1, type: 'screener', tab: 'Market Screener', isActive: true, content: <Screener /> },
      {id:2, type: 'test', tab: 'Test', isActive: false, content: <div>Test body</div> },
    ];
    const widget2 = [
      {id:3, type: 'chart', tab: 'Chart', isActive: true, content: <Chart/> },
    ];
    const widget3 = [
      {id:4, type: 'watchlist', tab: 'Watchlist', isActive: true, content: <Watchlist /> },
    ];
    const widget4 = [
      {id:5, type: 'matrix', tab: 'Matrix', isActive: true, content: <Matrix /> },
    ];
    const widget5 = [
      {id:6, type: 'positionTracker', tab: 'Position Tracker', isActive: true, content: <PositionTracker /> },
    ];
    const widget6 = [
      {id:7, type: 'wallets', tab: 'Wallets', isActive: true, content: <Wallets /> },
    ];

    store.setWidgets([widget1, widget2, widget3, widget4, widget5, widget6]);
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
