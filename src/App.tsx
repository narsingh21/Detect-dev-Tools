import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const rootRef = useRef<HTMLDivElement>(null);

  const devtoolsOpen = () => {
    const threshold = 160;
    const isOpen =
      window.outerWidth - window.innerWidth > 160 ||
      window.outerHeight - window.innerHeight > threshold;
    return isOpen;
  };

  setInterval(() => {
    if (devtoolsOpen()) {
      window.location.href = "https://www.google.co.in/";
    }
  }, 400);

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

  let isDebuggerOpen = false;

  function checkDebuggeer() {
    const start = performance.now();
    debugger;
    const end = performance.now();
    if (end - start > 100) {
      isDebuggerOpen = true;
      onDebuggerOpen();
    } else {
      isDebuggerOpen = false;
    }

    function onDebuggerOpen() {
      window.location.href = "https://www.google.co.in/";
    }
  }

  setInterval(checkDebuggeer, 100);

  return (
    <div
      ref={rootRef}
      className="flex justify-center flex-col items-center relative h-screen"
    >
      <p className="text-gray-900 text-6xl  font-black">Welcome to AU BANK</p>
      <p className="text-gray-900 text-6xl font-black">
        <span className="text-red-900 text-8xl font-black">
          {" "}
          open Dev Tools
        </span>
      </p>
    </div>
  );
}

export default App;
