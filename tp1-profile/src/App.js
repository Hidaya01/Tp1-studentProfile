import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Profile from "./components/content/Profile";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
