'use client';

import React from 'react'

interface ModalState {
  active: boolean;
  index: number;
}

interface ServicesProps {
  index: number;
  title: string;
  discription: string;
  setModal: React.Dispatch<React.SetStateAction<ModalState>>;
}

export default function Services({index, title, discription, setModal}: ServicesProps) {

    return (
        <div
            onMouseEnter={() => {setModal({active: true, index})}}
            onMouseLeave={() => {setModal({active: false, index})}}
            className="flex w-full justify-between items-center px-[50px] py-[30px] border-t-1 border-[#ffffff54] hover:opacity-50 hover:last-of-type:border-b-1 hover:last-of-type:border-[#ffffff54]"
        >
            <h2 className="w-[40%] leading-[1.2em] text-[40px] m-0 font-medium uppercase transition-all duration-[0.4s]">{title}</h2>
            <p className="w-[40%] leading-[1.4em] transition-all duration-[0.4s] font-light">{discription}</p>
        </div>
    )
}
