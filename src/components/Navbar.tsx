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
            <button  
            onClick={handleClick} 
            className="cursor-pointer w-48 ml-32 h-14 mt-3  rounded-tl-lg rounded-tr-lg  bg-white ">
              <img
                className="w-36  h-10 my-2  ml-6   cursor-pointer"
                src="https://www.migros.com.tr/assets/logos/sanalmarket/sanalmarket-logo.svg"
                alt=""
                
              ></img>
            </button>
            <button  
            onClick={handleClick2} 
            className="bg-white w-32  h-12  ml-2   rounded-lg   cursor-pointer">
              <img
                className="w-9/12 h-10 my-2 ml-4  mx-auto   cursor-pointer"
                src="https://www.migros.com.tr/assets/logos/hemen/hemen-logo.svg"
                alt=""
               
              ></img>
            </button>
            
          </div>
        </div>
      ) : (
        <div className="flex justify-start ">
          <div className="bg-hemen overflow-hidden h-16  w-full">
            <button 
            onClick={handleClick} 
            className="cursor-pointer w-48 ml-32 h-12 mt-3  rounded-lg bg-white">
              <img
                className="w-36  h-10 my-2  ml-6   cursor-pointer"
                src="https://www.migros.com.tr/assets/logos/sanalmarket/sanalmarket-logo.svg"
                alt=""
                
              ></img>
            </button>

            <button 
             onClick={handleClick2}
             className="bg-white w-32  h-13 mt-3 ml-2 rounded-tl-lg rounded-tr-lg cursor-pointer">
              <img
                className="w-9/12  h-10 my-2  ml-4  cursor-pointer"
                src="https://www.migros.com.tr/assets/logos/hemen/hemen-logo.svg"
                alt=""
                
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
