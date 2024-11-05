import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxLinkedinLogo,
} from "react-icons/rx";
import { FaWhatsapp} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Contato</div>
<div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
  <p className="flex flex-row items-center my-[15px] cursor-pointer">
    <a href="https://wa.me/5561991131654" target="_blank" rel="noopener noreferrer" className="flex items-center">
      <FaWhatsapp />
      <span className="text-[15px] ml-[6px]">WhatsApp</span>
    </a>
  </p>
</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="https://instagram.com/potatoyz1" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <RxInstagramLogo />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="https://discord.com/users/285184598965485583" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Discord</span>
              </a>
            </p>
<p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="mailto:euller2005@gmail.com" className="flex items-center">
                <AiOutlineMail /> {/* Ícone de email */}
                <span className="text-[15px] ml-[6px]">euller2005@gmail.com</span>
              </a>
            </p>
          </div>
          
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Rede Social</div>
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="https://www.linkedin.com/in/euller-j%C3%BAlio-002572287/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </a>
            </p>
  <p className="flex flex-row items-center my-[15px] cursor-pointer">
    <a href="https://wa.me/5561991131654" target="_blank" rel="noopener noreferrer" className="flex items-center">
      <FaWhatsapp />
      <span className="text-[15px] ml-[6px]">WhatsApp</span>
    </a>
  </p>
</div>
<p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="https://github.com/potatoyz908" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">GitHub</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="https://instagram.com/potatoyz1" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <RxInstagramLogo />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Sobre</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Aprendendo sobre mim</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="mailto:euller2005@gmail.com" className="flex items-center">
                <AiOutlineMail /> {/* Ícone de email */}
                <span className="text-[15px] ml-[6px]">euller2005@gmail.com</span>
              </a>
            </p>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Euller Júlio 2024 Inc. Todos os direitos reservados
        </div>
      </div>
    </div>
  );
};

export default Footer;
