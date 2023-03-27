import React, { useState, useEffect } from "react";
import { PixelsContext } from "./PixelsContext";

const PixelsProvider: React.FC = ({ children }) => {
  const [pixelsArr, setPixelsArr] = useState([]);

  useEffect(() => {
    fetch("https://busy-gray-prawn-hem.cyclic.app/api/pixels/")
      .then((res) => res.json())
      .then((data) => setPixelsArr(data));
  }, []);

  return (
    <PixelsContext.Provider value={pixelsArr}>
      {children}
    </PixelsContext.Provider>
  );
};

export default PixelsProvider;
