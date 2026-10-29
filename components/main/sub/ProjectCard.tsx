import React from "react";

interface Props {
  src?: string;
  title: string;
  description: string;
  repoUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
}

const ProjectCard = ({ src, title, description, repoUrl, liveUrl, liveLabel = "Acessar site" }: Props) => (
  <article className="relative overflow-hidden rounded-xl border border-[#2a0e61] bg-[#0300145e] backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-[#7042f8]/30 hover:border-[#7042f8] flex flex-col h-full">
    {src ? (
      <div className="relative w-full h-48 overflow-hidden bg-[#10152d]">
        <img src={src} alt={`Imagem do projeto ${title}`} className="w-full h-full object-cover object-top" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-40" />
      </div>
    ) : (
      <div aria-hidden="true" className="h-48 flex items-center justify-center bg-gradient-to-br from-[#25144b] via-[#101b3d] to-[#083d4a] px-6">
        <span className="text-center text-2xl font-semibold text-white/90">{title}</span>
      </div>
    )}
    <div className="p-5 flex flex-col gap-3 flex-1">
      <h2 className="text-xl font-bold tracking-wide bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">{title}</h2>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      {(repoUrl || liveUrl) && <div className="flex flex-wrap gap-3 mt-auto pt-4">
        {repoUrl && <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-sm font-medium text-white py-2.5 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-colors">Repositório</a>}
        {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-sm font-medium text-[#030014] py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-500 hover:to-emerald-500 transition-colors">{liveLabel}</a>}
      </div>}
    </div>
  </article>
);

export default ProjectCard;
