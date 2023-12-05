import "./App.css";
import React, { lazy, Suspense } from "react";

const Header = lazy(() => import("./components/header/header.jsx"));
const Main = lazy(() => import("./components/main/main.jsx"));

function App() {
  return (
    <div className="flex-box">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Main />
      </Suspense>
    </div>
  );
}

export default App;
