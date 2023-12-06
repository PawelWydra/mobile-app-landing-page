import "./App.css";
import React, { lazy, Suspense } from "react";
import Footer from "./components/footer/footer";

const Header = lazy(() => import("./components/header/header.jsx"));
const Main = lazy(() => import("./components/main/main.jsx"));

function App() {
  return (
    <div className="flex-box">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Main />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
