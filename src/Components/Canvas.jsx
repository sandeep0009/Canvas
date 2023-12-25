import { useState } from "react";

const Canvas = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState(16);
  const [colortext, setColortext] = useState("#000000");
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const handleIncreaseSize = () => {
    setSize((prev) => prev + 2);
  };

  const handleMove = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <>
      <div className="flex justify-between items-center mx-auto" onMouseMove={handleMove}>
        <div className="relative w-96 h-95 ml-5">
          <label htmlFor="text" className="block mb-2">
            Text
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border rounded px-2 py-1 mb-4 w-full"
          />
        </div>

        <div className="ml-4 justify-end mr-5 mt-5">
          <div className="mb-4">
            <button
              className="w-40 bg-gray-300 py-2 rounded"
              onClick={handleIncreaseSize}
            >
              Increase Size
            </button>
          </div>

          <div>
            <label htmlFor="textColor" className="block mb-2">
              Text Color
            </label>
            <input
              type="color"
              value={colortext}
              onChange={(e) => setColortext(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </div>
      </div>

      <div className="container w-full absolute" onMouseMove={handleMove}>
        <p
          style={{
            fontSize: `${size}px`,
            color: colortext,
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          {text}
        </p>
      </div>
    </>
  );
};

export default Canvas;
