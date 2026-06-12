import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  repoUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ src, title, description, repoUrl, liveUrl }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[#2a0e61] bg-[#0300145e] backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[#7042f8]/30 hover:border-[#7042f8] flex flex-col justify-between h-full w-full md:w-[31%] min-h-[420px]">
      <div>
        <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
          <img 
            src={src} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-60"></div>
        </div>
        
        <div className="p-5 flex flex-col gap-2">
          <h2 className="text-xl font-bold text-white tracking-wide bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0 flex gap-3 mt-auto">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-sm font-medium text-white py-2.5 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-indigo-500/20 active:scale-95 cursor-pointer z-[50]"
          >
            Repositório
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-sm font-medium text-[#030014] py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-500 hover:to-emerald-500 transition-all duration-300 shadow-md hover:shadow-emerald-500/20 active:scale-95 cursor-pointer z-[50]"
          >
            Acessar Site
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
