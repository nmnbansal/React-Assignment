import { useRef } from "react";

const ChangeBackgroundColor = () => {
  const colorRef = useRef(null);

  const changeColor = () => {
    colorRef.current.style.backgroundColor = "red";
  };

  return (
    <div>
      <h1>Change Background Color</h1>
      <div
        ref={colorRef}
        onClick={changeColor}
        style={{
          width: "200px",
          height: "50px",
          border: "1px solid black",
        }}
      >
        Click me to change background color to red
      </div>
    </div>
  );
};

export default ChangeBackgroundColor;
