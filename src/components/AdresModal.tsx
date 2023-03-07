import React, { useState } from "react";
import ChoosePlace from "./ChoosePlace";

type Props = {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
};

const AdresModal = ({ isActive, setIsActive }: Props) => {
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
        <div className="w-[600px] bg-white rounded p-8 flex flex-col justify-center items-center">
          <div className="bg-white p-6 rounded font-bold  flex-col grid grid-cols-2">
            <h1 className="text-xl ml-10 font-bold w-96 justify-center text-center">
              Teslimat Yöntemini Belirle{" "}
            </h1>
            <span className="w-12 h-12 place-self-end ">
              <svg
                onClick={handleClick}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-black text-xl hover:shadow-lg shadow-slate-600 hover:bg-gray-100 items-center justify-center 	rounded-full place-self-end  cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
<div className="flex flex-col w-96 mb-4">
          <div className="bg-white  rounded font-bold ">
            <h1>Merhaba,</h1>
            <h1 className="text-3xl font-bold ">
              Siparişini nasıl getirelim?{" "}
            </h1>
            </div>

          </div>
          <div className="flex-col flex justify-center items-center">
          <div
            onClick={handleClick2}
            className="bg-white  w-96  p-6 rounded mb-4 border flex font-bold cursor-pointer"
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

          <div className="bg-white p-6 mb-4 w-96 border rounded flex font-bold cursor-pointer">
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
          <div className="bg-white p-6 w-96 rounded border flex font-bold  cursor-pointer">
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
        />
      )}
    </div>
  );
};

export default AdresModal;
