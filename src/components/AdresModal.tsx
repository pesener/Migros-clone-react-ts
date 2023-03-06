import React from 'react'

type Props = {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

const AdresModal = ( {isActive, setIsActive}: Props) => {

  const handleClick = () => {
    setIsActive(false);
  };
 
  if(!isActive) return null
  return (
    <div className='fixed inset-0  bg-black bg-opacity-40 flex justify-center items-center '>
<div className='w-[600px]  flex flex-col'><button onClick={handleClick} className='text-black text-xl place-self-end'>X</button><div className='bg-white p-8 rounded border-4'>Modal</div></div>
    </div>
  )
}

export default AdresModal