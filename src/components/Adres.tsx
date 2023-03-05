import React, { useState } from "react";

const Adres = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(true);
  };
  return (
    <div className="bg-white flex overflow-hidden h-36 border-b-2  w-full">
      
        <div
         onClick={handleClick} className="w-64 flex ml-32 h-14 border-l-2 border-t-2 border-b-2  mt-4 rounded-l-lg  cursor-pointer">
          <img
            className="w-12 h-6  my-3 rounded-lg cursor-pointer"
            src="https://www.migros.com.tr/assets/icons/home-active.svg"
            alt=""
           
          ></img>

          <div className="text-sm mt-3 font-bold   m-2">
            Teslimat adresi seçiniz
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-3 font-bold 
              "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <img
            className="w-2 box-border  mt-0 cursor-pointer"
            src="https://www.migros.com.tr/assets/icons/header-delivery-schedule-separator.svg"
            alt=""
           
          ></img>
        </div>



        <div className="w-64 flex h-14 mt-4   ml-0 border-t-2 border-r-2 border-b-2  rounded-tr-lg rounded-br-lg  cursor-pointer">
       

          <div className="text-sm mt-3 ml-5 w-42 font-normal m-2">
            En yakın teslimat

            Saatler
          </div>
         

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-3 ml-6 font-bold 
              "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
    
     
    </div>
  );
};

export default Adres;
