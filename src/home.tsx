import React from "react";
import { Link } from "react-router-dom";

function Home() {
  function checkDebuggeer() {
    const start = performance.now();
    debugger;
    const end = performance.now();
    if (end - start > 100) {
      onDebuggerOpen();
    }

    function onDebuggerOpen() {
      window.location.href = "https://www.google.com";
    }
  }

  setInterval(checkDebuggeer, 100);

  const isResponsiveModeOpen = () => {
    const userAgent = navigator.userAgent;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const isMobileResolution =
      (width <= 768 && height <= 1024) || (width <= 480 && height <= 800);
    const isEmulationUserAgent =
      userAgent.includes("mobile") ||
      userAgent.includes("iPhone") ||
      userAgent.includes("Android");
    return isMobileResolution && isEmulationUserAgent;
  };

  setInterval(() => {
    if (isResponsiveModeOpen()) {
      window.location.href = "https://www.google.co.in/";
    }
  }, 400);

  return (
    <div className="flex justify-center flex-col items-center relative h-screen">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <p className="text-gray-900 text-6xl  font-black">Welcome</p>
      <p className="text-gray-900 text-6xl font-black">
        <span className="text-red-900 text-8xl font-black">
          {" "}
          Please open Dev Tools
        </span>
      </p>
    </div>
  );
}

export default Home;
