import React, { useState } from "react";
import AdresModal from "./AdresModal";

const Adres = () => {

  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<any>();
  const [selectedDist, setSelectedDist] = useState<any>();

  const handleClick = () => {
    setIsActive(true);
    console.log(isActive)
  };




  return (
   <div className="bg-white flex overflow-hidden h-36 border-b-2 mt-2  w-full">
     <div
        onClick={handleClick}
        className="w-72 flex ml-32 h-14 border-l-2 border-t-2 border-b-2  mt-4 rounded-l-lg  cursor-pointer"
      >
        <img
          className="w-12 h-6  my-3 rounded-lg cursor-pointer"
          src="https://www.migros.com.tr/assets/icons/home-active.svg"
          alt=""
        ></img>

        <div className="text-sm mt-4 font-bold   m-2">
        {selectedCity ? <h1>{selectedCity},{selectedDist}</h1>    : "Teslimat adresini seçiniz"}
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mt-4 font-bold 
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
          className="w-2 box-border ml-2  mt-0 cursor-pointer"
          src="https://www.migros.com.tr/assets/icons/header-delivery-schedule-separator.svg"
          alt=""
        ></img>
      </div>{ isActive ?  <AdresModal  selectedCity={selectedCity} setSelectedCity={setSelectedCity} 
      selectedDist={selectedDist} setSelectedDist ={setSelectedDist}
  setIsActive={setIsActive} isActive={isActive}/>  :  ""}

      <div className="w-60 flex h-14 mt-4   ml-0 border-t-2 border-r-2 border-b-2  rounded-tr-lg rounded-br-lg  cursor-pointer">
        <div className="text-sm mt-2 ml-1 w-42 font-normal ">
          <div className=" font-normal ">En yakın teslimat</div>
          <div className="text-sm   text-green-500 w-42 font-bold ">
            12:00 - 14:00
          </div>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mt-4 ml-20 font-bold 
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
