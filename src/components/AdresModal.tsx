import React, { useState } from "react";
import ChoosePlace from "./ChoosePlace";

type Props = {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
  selectedDist:string;
  setSelectedDist:(active: string) =>void;
  selectedCity:string;
  setSelectedCity: (active:string) => void;
};

const AdresModal = ({ isActive, setIsActive,selectedCity, setSelectedCity,selectedDist, setSelectedDist  }: Props) => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive(false);
    console.log(isActive);
  };

  const handleClick2 = () => {
    setIsOn(true);
  };

  if (!isActive) return null;
  return (
    <div className="fixed inset-0  bg-black bg-opacity-40 flex justify-center items-center ">
      {!isOn ? (
        <div className="w-[600px] h-[550px]    bg-white rounded  align-top flex flex-col justify-center items-center">
          <div className="bg-white mb-8 w-full  font-bold justify-between  flex ">
            <div className="flex justify-between pt-0">
            <h1 className="text-2xl ml-28 font-bold w-96 justify-center flex items-center text-center">
              Teslimat Yöntemini Belirle{" "}
            </h1>
            </div>
            <div>
            <span onClick={handleClick} className="w-16 h-16 ml-8  place-self-end rounded-full justify-center  items-center flex hover:bg-gray-100 cursor-pointer">
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
<div className="flex flex-col w-96 mb-4 mr-8">
          <div className="bg-white rounded font-extrabold ">
            <h1 className="mb-4">Merhaba,</h1>
            <h1 className="text-2xl  font-bold ">
              Siparişini nasıl getirelim?{" "}
            </h1>
            </div>

          </div>
          <div className="flex-col flex justify-center items-center px-20 pb-20 pt-0">
          <div
            onClick={handleClick2}
            className="bg-white  w-[420px] h-20 items-center px-8 rounded-lg mb-4 border-2 flex shadow-lg font-bold cursor-pointer"
          >
            <div className="w-10 h-10 ml-12 ">
              {" "}
              <img
                className="w-10 h-10 "
                src="https://www.migros.com.tr/assets/images/delivery/address.svg"
                alt="home"
              />
            </div>

            <div className="ml-6 flex text-lg text-center items-center">
              {" "}
              <h1>Adresime Gelsin</h1>
            </div>
          </div>

          <div className="bg-white px-8 h-20 mb-4 w-[420px] items-center shadow-lg  border-2 rounded-lg flex font-bold cursor-pointer">
            <img
              className="w-10 h-10 ml-12"
              src="https://www.migros.com.tr/assets/images/delivery/store.svg"
              alt="home"
            />
            <div className="grid grid-cols-1 ">
              {" "}
              <div className="mb-1 ml-6 flex text-lg text-center items-center">
                <h1>Tıkla Gel Al</h1>
              </div>
              <div className="ml-6 flex text-xs text-green-400 text-center items-center">
                <h1>Ücretsiz Teslimat!</h1>
              </div>
            </div>
          </div>
          <div className="bg-white px-8 h-20 w-[420px] items-center rounded-lg border-2 shadow-lg  flex font-bold  cursor-pointer">
         <div className="">   <img className="w-10 h-10 ml-12"
              src="https://www.migros.com.tr/assets/images/delivery/foundation.svg"
              alt="home"
            /></div>
           <div className="ml-6 text-lg"><h1>Bağış Yapacağım</h1></div>
          </div>
          </div>
        </div>
      ) : (
        <ChoosePlace
          setIsOn={setIsOn}
          isOn={isOn}
          setIsActive={setIsActive}
          isActive={isActive}
          selectedCity={selectedCity} setSelectedCity={setSelectedCity}selectedDist={selectedDist} setSelectedDist ={setSelectedDist}
        />
      )}
    </div>
  );
};

export default AdresModal;
