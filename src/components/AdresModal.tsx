import React,{useState} from "react";
import ChoosePlace from "./ChoosePlace";

type Props = {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
};

const AdresModal = ({ isActive, setIsActive }: Props) => {

  const [isOn, setIsOn] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive(false);
    console.log(isActive)
  };

  const handleClick2 = () => {
    setIsOn(true);
  };

  if (!isActive) return null;
  return (
    <div className="fixed inset-0  bg-black bg-opacity-40 flex justify-center items-center ">
      { !isOn ? 
      <div className="w-[600px]  flex flex-col">
      <div className="bg-white p-8 rounded font-bold flex flex-col ">
         
               
  
        <svg           onClick={handleClick}

        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black text-xl w-8 place-self-end cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

        <h1 className="text-3xl font-bold justify-center text-center">Telimat Yöntemini Belirle </h1>

           </div>

        <div className="bg-white p-8 rounded font-bold ">
         
Merhaba,      
<h1 className="text-3xl font-bold ">Siparişini nasıl getirelim? </h1>
  </div>
        <div onClick={handleClick2} className="bg-white p-8 rounded border-4 cursor-pointer">
          <img
            src="https://www.migros.com.tr/assets/images/delivery/address.svg"
            alt="home"
          />
          Adresime Gelsin
        </div>

        <div className="bg-white p-8 rounded border-4 cursor-pointer">
          <img
            src="https://www.migros.com.tr/assets/images/delivery/store.svg"
            alt="home"
          />
          Tıkla Gel Al{" "}
        </div>
        <div className="bg-white p-8 rounded border-4 cursor-pointer">
          <img
            src="https://www.migros.com.tr/assets/images/delivery/foundation.svg"
            alt="home"
          />
          Bağış Yapacağım
        </div>
      

      </div>
 : <ChoosePlace  setIsOn={setIsOn} isOn={isOn} setIsActive={setIsActive} isActive={isActive}/> }
    </div>
  );
};

export default AdresModal;
