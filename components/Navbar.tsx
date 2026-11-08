import React from 'react';
import Image from "next/image";
import { Socials } from '@/constants';

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-3 sm:px-6 md:px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between gap-2 m-auto px-0 md:px-[10px]'>
        <a href='#' className='h-auto w-auto flex flex-row items-center'>
          <Image
            src='/NavLogo.png'
            alt='Logo'
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin w-[48px] h-[48px] md:w-[70px] md:h-[70px] shrink-0"
          />
          <span className='font-bold ml-[10px] hidden md:block text-gray-300 whitespace-nowrap'>
            Euller Dev
          </span>
        </a>
        <div className='flex-1 min-w-0 md:flex-none md:w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mx-0 md:mr-[15px] gap-2 px-3 sm:px-5 md:px-[20px] py-2 md:py-[10px] rounded-full text-gray-200 text-xs sm:text-sm md:text-base whitespace-nowrap'>
            <a href="/#" className='cursor-pointer'>Sobre mim</a>
            <a href="#skills" className='cursor-pointer'>Habilidades</a>
            <a href="#projects" className='cursor-pointer'>Projetos</a>
          </div>
        </div>
        <div className='hidden sm:flex flex-row gap-3 md:gap-5 shrink-0'>
          {Socials.map((social) => (
            <a href={social.link} target="_blank" rel="noopener noreferrer" key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar;