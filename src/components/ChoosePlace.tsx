import React, { useState, useEffect } from "react";
import { CityNames } from "../Json/il";
import { Districts } from "../Json/ilce";
import { Neighbourhoods } from "../Json/mahalle";
import { BiChevronDown } from "react-icons/bi";
import { SlMagnifier } from "react-icons/sl";
type Props = {
  isOn: boolean;
  setIsOn: (active: boolean) => void;
  isActive: boolean;
  setIsActive: (active: boolean) => void;
};

const ChoosePlace = ({ isOn, setIsOn, setIsActive, isActive }: Props) => {
  const handleClick = () => {
    setIsActive(false);
    console.log(isActive);
  };

  ///city///

  const [city, setCity] = useState<string>();

  const [selectedCity, setSelectedCity] = useState<string>();

  const [open, setOpen] = useState<boolean>(false);

  const cityNa = CityNames;

  const cityN = selectedCity
  ///dist///

  const distNa = Districts;




  const [dist, setDist] = useState<string>();

 
  const [selectedDist, setSelectedDist] = useState<string>();

  const [openDist, setOpenDist] = useState<boolean>(false);

   

  /// Neig///

  const [selectedNeig, setSelectedNeig] = useState<string>();

  const [openNeig, setOpenNeig] = useState<boolean>(false);

  const neigNa = Neighbourhoods;
  console.log(cityN)
  return (
    <div>
      <div className="fixed inset-0  flex justify-center items-center ">
        <div className="w-[600px] h-[600px] mt-0 align-top bg-white rounded p-8 flex flex-col justify-center items-center">
          <div className="bg-white mb-8 w-full p-0 font-bold justify-between mt-0  flex ">
            <div className="flex flex-col justify-between align-top self-start">
              <h1 className="text-2xl ml-16 font-bold w-96 justify-center flex items-center text-center">
                Adresime Gelsin
              </h1>
              <h1 className="text-xl mt-0 ml-16 justify-center text-center font-bold ">
                Siparişini nereye getirelim?
              </h1>
            </div>
            <div className="mt-0 mb-4">
              <span
                onClick={handleClick}
                className="w-16 ml-12  h-16 place-self-end rounded-full justify-center  items-center flex hover:bg-gray-100 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-black text-xl  cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
          </div>
         
          <div className="flex-col flex justify-center items-center  ">
            <div
              onClick={() => setOpen(!open)}
              className="bg-white  w-96   p-1 rounded-lg mb-4 border-2 flex justify-between items-center shadow-lg font-bold cursor-pointer"
            >
              {selectedCity ? selectedCity : "il"}
              <BiChevronDown size={30} />
            </div>
            <ul
              className={`bg-white  overflow-y-auto w-96 active:border-2 rounded-lg ${
                open ? "max-h-60 border-2" : "max-h-0"
              }`}
            >
              <div className="flex justify-center items-center  px-2 sticky top-0 bg-white">
                <SlMagnifier
                  size={27}
                  className="text-gray-400 bg-white border-l-2 border-t-2 border-b-2  rounded-l-lg"
                />
                <input
                  className="border-t-2 border-b-2 border-r-2 border-1 bg-white  shadow-lg w-96 rounded-r-lg outline-none "
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value.toLowerCase())}
                ></input>
              </div>

              {cityNa.map((cit: any) => (
                <li
                  className={`p-2  text-sm cursor-pointer hover:text-orange-400 active:bg-gray-200 ${cit.toLowerCase()}
                  ${
                    cit.toLowerCase() === selectedCity?.toLowerCase() &&
                    "text-orange-400"
                  } ${cit.toLowerCase().startsWith(city) ? "block" : "hidden"}`}
                  key={cit.index}
                  onClick={() => {
                    if (cit.toLowerCase() !== selectedCity?.toLowerCase()) {
                      setSelectedCity(cit);
                    }
                 
                  }}
                >
                  {cit}
                  
                </li>
              ))}
            </ul>
          </div>


           <div className="flex-col flex justify-center items-center  ">
           <div 
              onClick={() => setOpenDist(!openDist)}
              className="bg-white  w-96   p-1 rounded-lg mb-4 border-2 flex justify-between items-center shadow-lg font-bold cursor-pointer"
            >
              {selectedDist ? selectedDist : "ilçe"}
              <BiChevronDown size={30} />
            </div>
            <ul
              className={`bg-white  overflow-y-auto w-96 active:border-2 rounded-lg ${
                openDist ? "max-h-60 border-2" : "max-h-0"
              }`}
            >
              <div className="flex justify-center items-center  px-2 sticky top-0 bg-white">
                <SlMagnifier
                  size={27}
                  className="text-gray-400 bg-white border-l-2 border-t-2 border-b-2  rounded-l-lg"
                />
                <input
                  className="border-t-2 border-b-2 border-r-2 border-2 bg-white  shadow-lg w-96 rounded-r-lg outline-none "
                  type="text"
                  value={dist}
                  onChange={(e) => setDist(e.target.value)}
                ></input>
              </div>

              {   distNa.map((dis: any) => (
                <li
                
                  className={`p-2  text-sm cursor-pointer hover:text-orange-400 active:bg-gray-200 ${dis}
                  ${
                    dis === selectedDist &&
                    "text-orange-400"
                  } `}
                  key={dis.Districts}
                  onClick={() => {
                    if (dis !== selectedDist) {
                      setSelectedDist(dis);
                    }
                   
                  }}
                >
                  
                {dis.Districts}
                </li>
              )) }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlace;
