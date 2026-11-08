"use client";

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-col md:flex-row items-center justify-center px-5 sm:px-10 lg:px-20 mt-28 md:mt-40 w-full z-[20] gap-10 md:gap-0'
    >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
            >
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                    <h1 className='Welcome-text text-[13px]'>Portfólio de Desenvolvedor Full-Stack</h1>
            </motion.div>
            <motion.div 
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto"
        >
            <span>Olá! Você está no Portfólio do</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Euller Júlio da Silva
            </span>
            </motion.div>

            <motion.p
            variants={slideInFromLeft(0.8)}
            className='text-base md:text-lg text-gray-200 md:text-gray-400 [text-shadow:0_1px_10px_rgba(3,0,20,0.9)] md:[text-shadow:none] my-3 md:my-5 max-w-full md:max-w-[600px]'
            >
                Tenho 21 anos e sou estudante de Engenharia de Software na Universidade de Brasília. Desenvolvo soluções full-stack, com interesse especial em back-end e inteligência artificial. Minha experiência inclui projetos para educação, saúde e serviços públicos, além de testes e refatorações na ferramenta de IA do Informa.BR, da CGU. Gosto de transformar ideias em tecnologia útil e de aprender em equipe a cada desafio.
            </motion.p>
            <motion.a
            variants={slideInFromLeft(1)}
            href="#projects"
            className='py-2 button-primary text-center text-white cursor-pointer rounded-lg w-full sm:max-w-[280px] px-4'>
                Saiba mais sobre meu trabalho!
            </motion.a>
        </div>
        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center max-w-[420px] md:max-w-none'>
            <Image
                            src="/mainIconsdark.svg"
                            alt="work icons"
                            height={650}
                            width={650}
                            className="w-full h-auto max-w-[650px]"
                        />
        </motion.div>
    </motion.div>
  )
}

export default HeroContent