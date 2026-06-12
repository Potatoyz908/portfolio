import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Projetos em Destaque
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row flex-wrap gap-10 px-10 justify-center">
        <ProjectCard
          src="/investeeasy.png"
          title="Investeeasy"
          description="Plataforma web de investimentos e finanças de fácil acesso, desenvolvida para simplificar e tornar intuitiva a visualização e gestão de ativos financeiros."
          liveUrl="https://investeeasy.com.br"
        />
        <ProjectCard
          src="/acheiunb.jpeg"
          title="AcheiUnB"
          description="Plataforma de achados e perdidos da UnB com chat em tempo real e sistema de match inteligente com notificações automáticas. Desenvolvido usando Django, Vue, Docker, PostgreSQL, Redis e Celery."
          repoUrl="https://github.com/fcte-pi1/2026_1_PI1_Grupo02_Hilmer"
        />
        <ProjectCard
          src="/BrasilParticipativo.png"
          title="Brasil Participativo - Lappis"
          description="Pesquisa e desenvolvimento em cibersegurança e infraestrutura para a maior plataforma de participação social do mundo. Atuação no Red Team e mitigação de vulnerabilidades."
          liveUrl="https://brasilparticipativo.presidencia.gov.br"
        />
        <ProjectCard
          src="/gerenciador.png"
          title="Gerenciador de Custos"
          description="Sistema financeiro inteligente desenvolvido para o projeto Gamifica DF, permitindo a gestão fácil de dados financeiros com interface gráfica intuitiva e manipulação automatizada de planilhas Excel."
          repoUrl="https://github.com/Potatoyz908/Gerenciador-de-Planilha-Financeira"
        />
        <ProjectCard
          src="/RsRevive.jpg"
          title="RSRevive"
          description="Plataforma de apoio às vítimas das enchentes no Rio Grande do Sul. Fui responsável pela construção do frontend em React, criação do sistema de login e integração com o banco de dados."
          repoUrl="https://github.com/Potatoyz908/RSRevive-MaratonaRS"
        />
      </div>
    </div>
  );
};

export default Projects;
