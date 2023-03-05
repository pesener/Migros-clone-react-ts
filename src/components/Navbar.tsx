import React, { useState } from "react";
import Adres from "./Adres";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(false);
  };

  const handleClick2 = () => {
    setIsActive(true);
  };

  return (
    <div>
      {!isActive ? (
        <div className="flex justify-items-start ">
          <div className="bg-primary overflow-hidden h-16  w-full">
            <button className="cursor-auto">
              <img
                className="w-48 h-12 ml-32 my-2  rounded-tl-lg rounded-tr-lg  cursor-pointer"
                src="https://images.migrosone.com/sanalmarket/custom/sanalmarket-seo-34706362.png"
                alt=""
                onClick={handleClick}
              ></img>
            </button>

            <button className="cursor-auto">
              <img
                className="w-32 h-12 my-3 ml-2 rounded-lg   cursor-pointer"
                src="https://kuponigo.com/tr/wp-content/uploads/2022/10/migros-hemen-logo-480x270.jpg"
                alt=""
                onClick={handleClick2}
              ></img>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-start ">
          <div className="bg-hemen overflow-hidden h-16  w-full">
            <button  className="cursor-auto">
              <img
                className="w-48 h-12 ml-32 my-3 rounded-lg    cursor-pointer"
                src="https://images.migrosone.com/sanalmarket/custom/sanalmarket-seo-34706362.png"
                alt=""
                onClick={handleClick}
              ></img>
            </button>

            <button className="cursor-auto">
              <img
                className="w-32 h-12 my-2  ml-2  rounded-tl-lg rounded-tr-lg  cursor-pointer"
                src="https://kuponigo.com/tr/wp-content/uploads/2022/10/migros-hemen-logo-480x270.jpg"
                alt=""
                onClick={handleClick2}
              ></img>
            </button>
          </div>
        </div>
      )}
      <Adres />
    </div>
  );
};

export default Navbar;
