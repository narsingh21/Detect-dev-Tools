import { DragEvent, useEffect, useRef, useState } from "react";
import "./App.css";
import DragbleElement from "./component/dragble.component";

const leftBox = [
  {
    id: "1",
    content: "box1",
  },
  {
    id: "2",
    content: "box2",
  },
];
function App() {
  const [rightBox, setRightBox] = useState<any>([]);

  const rootRef = useRef<HTMLDivElement>(null);

  const onDrag = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("textplain", "");
  };

  const onDrop = (e: DragEvent<HTMLDivElement>, item: any) => {
    //   if (e.clientX != 0 && e.clientY) {
    //   }
    // };

    setRightBox((prev: any) => [
      ...prev,
      { element: item, position: { x: e.clientX, y: e.clientY } },
    ]);
    console.log(e.clientX, e.clientY);
    console.log(item);
  };

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
  }, 1000);

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
  }, 1000);

  // if (rootRef.current) {
  //   const checkFullScreen = rootRef.current.onfullscreenerror;
  //   const checkFullScreens = rootRef.current.onfullscreenchange;
  //   console.log(checkFullScreen, checkFullScreens);

  // }
  //   useEffect(() => {

  //   const full = document.fullscreenE;

  //   console.log(full);
  // }, [rightBox]);

  // console.log('Is DevTools open:', window.devtoo;
  // const checkFull = document.fullscreenElement;

  useEffect(() => {
    // window.addEventListener("devtoolschange", () => {
    //   console.log("dev-tool change");
    // });
  }, []);

  return (
    <div
      ref={rootRef}
      className="flex justify-center items-center relative h-screen"
    >
      {/* <div className="border-2 flex flex-col bg-red h-screen w-1/2">
        {leftBox.map((el) => (
          <div
            draggable
            onDragStart={(event) => onDrag(event)}
            onDragEnd={(event) => onDrop(event, el)}
            className="p-4  w-20  border bg-slate-500 text-gray-50"
            key={el.id}
          >
            {el.content}
          </div>
        ))}
      </div>
      <div className="border-2   h-screen w-1/2">
        {rightBox.map((el: any, index: number) => (
          <DragbleElement key={index} position={el.position}>
            {" "}
            <div
              draggable
              onDragStart={(event) => onDrag(event)}
              onDragEnd={(event) => onDrop(event, el)}
              className="p-4  w-20  border bg-slate-500 text-gray-50"
              key={el.id}
            >
              {el.element.content}
            </div>
          </DragbleElement>
        ))}
      </div> */}

      <p className="text-gray-900 text-6xl font-black">
        {" "}
        Welcome to Narsingh Code
      </p>
    </div>
  );
}

export default App;
