import React, { useEffect, useState } from 'react';

const BrowserEvent = () => {
  const [position, setPosition] = useState({ screenX: 0, screenY: 0, clientX: 0, clientY: 0 });

  useEffect(() => {
    const logKey = (e) => {
      setPosition({
        screenX: e.screenX,
        screenY: e.screenY,
        clientX: e.clientX,
        clientY: e.clientY
      });
    };

    document.addEventListener("mousemove", logKey);

    return () => {
      document.removeEventListener("mousemove", logKey);
    };
  }, []);

  return (
    <div>
      <h1>Move your mouse to see its position.</h1>
      <p>
        Screen X/Y: {position.screenX}, {position.screenY} <br />
        Client X/Y: {position.clientX}, {position.clientY}
      </p>
    </div>
  );
};

export default BrowserEvent;
