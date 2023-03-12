import React, { useState } from "react";
import { Cities } from "../Json/il";
import { Districts } from "../Json/ilce";
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

  const cityNa = Cities;

  ///dist///

  const distNa = Districts;

  const [districts, setDistricts] = useState<any>();

  const [dist, setDist] = useState<string>();

  const [selectedDist, setSelectedDist] = useState<string>();

  const [openDist, setOpenDist] = useState<boolean>(false);

  const handleCity = async (id: any) => {
    const dt: any = distNa.filter((x) => x.il_id === id);
    await setDistricts(dt);
    console.log(dt);
  };

  return (
    <div>
      <div className="fixed  z-4 inset-0  flex justify-center items-center ">
        <div className="w-[600px] h-[550px]   bg-white rounded  flex flex-col justify-center items-center">
          <div className="bg-white mb-8 w-full font-bold justify-between  flex ">
            <div className="flex flex-col items-center  justify-between ">
              <h1 className="text-2xl ml-24 p-1 font-bold w-96 justify-center flex items-center text-center ">
                Adresime Gelsin
              </h1>
              <h1 className="text-xl ml-24 justify-center text-center font-bold ">
                Siparişini nereye getirelim?
              </h1>
            </div>
            <div className=" mb-4">
              <span
                onClick={handleClick}
                className="w-16 ml-8  h-16 place-self-end rounded-full justify-center  items-center flex hover:bg-gray-100 cursor-pointer"
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

          <div className="flex-col flex justify-center items-center py-3.5 ">
            <div
              onClick={() => setOpen(!open)}
              className={`bg-white  w-96   p-1 rounded mb-4  h-[56px] ${
                open ? " border-2 " : "border"
             } border-black flex justify-between items-center shadow-lg font-bold cursor-pointer`}
            >
              {selectedCity ?  selectedCity : "il"}
            
              <BiChevronDown size={30} />
            </div>

            <ul
              className={`bg-white  overflow-y-auto w-96 active:border-2 shadow-lg rounded-lg ${
                 open ? "max-h-60 border-2 " : "max-h-0"
              }`}
            >
              <div className="flex justify-center items-center   h-8 sticky  bg-white">
                <SlMagnifier
                  size={27}
                  className="text-gray-400 bg-white  rounded-l-lg"
                />
                <input
                  className=" bg-white border-b  w-96  "
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value?.toLowerCase())}
                ></input>
              </div>

              {cityNa?.map((cit: any) => (
                <option
                  value={cit.id}
                  className={`p-2  text-sm cursor-pointer  hover:text-orange-400 active:bg-gray-200 ${
                    cit.name 
                  }
                  ${cit.name === selectedCity && "text-orange-400"} ${
                    cit.name?.toLowerCase().startsWith(city) ? "block" : "hidden"
                  }`}
                  key={cit.name}
                  onClick={(e: any) => {
                    if (cit.name?.toLowerCase() !== selectedCity?.toLowerCase()) {
                      setSelectedCity(cit.name);
                      handleCity(e.target.value);
                      setOpen(!open)
                    }
                  }}
                >
                  {cit.name}
                </option>
              ))}
            </ul>
          </div>

          <div className={`flex-col flex  justify-center items-center py-3.5 mb-32 ${
                 open ? "hidden" : ""
              } `}>
            <div
              onClick={() => setOpenDist(!openDist)}
              className={`bg-white  w-96    p-1 rounded h-[56px] mb-4 ${
                openDist ? " border-2  " : " border"
             } border-black flex justify-between items-center shadow-lg font-bold cursor-pointer`}
            >
              {selectedDist ? selectedDist : "ilçe"}
              <BiChevronDown size={30} />
            </div>
            <ul
              className={`bg-white  overflow-y-auto w-96 shadow-lg  rounded-lg ${
                openDist ? "max-h-60 border-2  " : "max-h-0" 
              }`}
            >
              <div className="flex justify-center items-center  px-2 sticky top-0 bg-white">
                <SlMagnifier
                  size={27}
                  className="text-gray-400 bg-white  rounded-l-lg"
                />
                <input
                  className=" bg-white  border-b w-96  "
                  type="text"
                  value={dist}
                  onChange={(e) => setDist(e.target.value)}
                ></input>
              </div>

              {districts &&
                districts?.map((dis: any) => (
                  <li
                    className={`p-2  text-sm cursor-pointer hover:text-orange-400 active:bg-gray-200 ${
                      dis.name
                    }
                  ${dis.name === selectedDist && "text-orange-400"} `}
                    key={dis.name}
                    onClick={() => {
                      if (dis.name !== selectedDist) {
                        setSelectedDist(dis.name);
                        setOpenDist(!openDist)
                      }
                    }}
                  >
                    {dis.name}
                  </li>
                ))}
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ChoosePlace;
