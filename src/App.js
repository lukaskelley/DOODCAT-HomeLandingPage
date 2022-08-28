import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <About />
      {/* <Intro />
        <CryptoVideo />
        <IntroTWO />
        <EthosIMG />
        <ParticipateIMG />
        <IdeaIMG />
        <MountIMG />
        <KnowMore />
        <Interested />
        <Bucky /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
