import React from "react";
import ProjectCard from "./sub/ProjectCard";

const projects = [
  {
    src: "/tutor-darcy.png",
    title: "Tutor Darcy",
    description: "Assistente virtual inteligente da UnB que ajuda estudantes com dúvidas de acesso e uso da plataforma Aprender, disponível 24 horas por dia.",
  },
  {
    src: "/informa-br.png",
    title: "Informa.BR — IA e transparência",
    description: "Participação em testes e refatorações no desenvolvimento da nova ferramenta de inteligência artificial do Informa.BR, pela Controladoria-Geral da União (CGU).",
    liveUrl: "https://informabr.cgu.gov.br/",
  },
  {
    src: "/medguia.png",
    title: "MedGuia — PET Saúde Digital",
    description: "Assistente conversacional do projeto PET Saúde Digital para apoiar profissionais de saúde na estruturação de encaminhamentos clínicos.",
    liveUrl: "https://petsaude-chatbot.vercel.app/",
  },
  {
    src: "/acheiunb.jpeg",
    title: "AcheiUnB",
    description: "Plataforma de achados e perdidos da UnB que conecta pessoas que perderam e encontraram objetos. Projeto colaborativo desenvolvido com Django, Vue e Docker.",
    repoUrl: "https://github.com/unb-mds/2024-2-AcheiUnB",
    liveUrl: "https://unb-mds.github.io/2024-2-AcheiUnB/",
    liveLabel: "Documentação",
  },
  {
    title: "Pikachu — Micromouse | PI1",
    description: "Projeto integrador da UnB para desenvolver um robô micromouse capaz de resolver labirintos. Participei da equipe de software em um trabalho multidisciplinar.",
    repoUrl: "https://github.com/fcte-pi1/2026_1_PI1_Grupo02_Hilmer",
    liveUrl: "https://fcte-pi1.github.io/2026_1_PI1_Grupo02_Hilmer/",
    liveLabel: "Documentação",
  },
  {
    src: "/investeeasy.png",
    title: "Investeeasy",
    description: "Plataforma web de investimentos e finanças de fácil acesso, desenvolvida para simplificar e tornar intuitiva a visualização e gestão de ativos financeiros.",
    liveUrl: "https://investeeasy.com.br",
  },
  {
    title: "Busca indexada para o AcheiUnB | EDA2",
    description: "Estrutura de busca em Python que combina índices e busca binária para aprimorar a pesquisa de itens no AcheiUnB, com testes e comparação de desempenho.",
    repoUrl: "https://github.com/eda2-2026/Busca_AcheiUnB",
  },
  {
    title: "Detecção de phishing com AutoML | IEEE CIS",
    description: "Projeto em equipe para identificar possíveis ameaças de phishing a partir de características de URLs, utilizando Python e PyCaret.",
    repoUrl: "https://github.com/Potatoyz908/CIS-IEEE-Project",
  },
  {
    src: "/BrasilParticipativo.png",
    title: "Brasil Participativo — Lab/Livre",
    description: "Pesquisa e desenvolvimento em cibersegurança e infraestrutura para a plataforma de participação social. Atuação no Red Team e mitigação de vulnerabilidades.",
    liveUrl: "https://brasilparticipativo.presidencia.gov.br",
  },
  {
    src: "/gerenciador.png",
    title: "Gerenciador de Custos",
    description: "Sistema financeiro desenvolvido para o projeto Gamifica DF, com interface gráfica e manipulação automatizada de planilhas Excel.",
    repoUrl: "https://github.com/Potatoyz908/Gerenciador-de-Planilha-Financeira",
  },
  {
    src: "/RsRevive.jpg",
    title: "RSRevive",
    description: "Plataforma de apoio às vítimas das enchentes no Rio Grande do Sul. Atuação no frontend em React, no sistema de login e na integração com o banco de dados.",
    repoUrl: "https://github.com/Potatoyz908/RSRevive-MaratonaRS",
  },
  {
    src: "/Toaflix.png",
    title: "Toaflix",
    description: "Aplicação de cinema em Java e Spring Boot, com cadastro, login, escolha de sessões e painel administrativo.",
    repoUrl: "https://github.com/Potatoyz908/Project-Toaflix",
  },
  {
    title: "EstudaSync",
    description: "Plataforma para registrar materiais de estudo, acompanhar o progresso e visualizar um ranking, com Django e Vue.js.",
    repoUrl: "https://github.com/Potatoyz908/estudasync",
  },
  {
    title: "Paslib",
    description: "Plataforma de apoio a estudantes que se preparam para o PAS e o vestibular da UnB, reunindo materiais de estudo.",
    repoUrl: "https://github.com/Potatoyz908/Paslib",
  },
];

const Projects = () => (
  <section className="flex flex-col items-center py-20" id="projects">
    <h1 className="text-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
      Projetos em Destaque
    </h1>
    <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-6 md:px-10">
      {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
    </div>
    <a href="https://github.com/Potatoyz908?tab=repositories" target="_blank" rel="noopener noreferrer" className="mt-10 text-cyan-300 hover:text-cyan-200 underline underline-offset-4">
      Ver mais projetos no GitHub →
    </a>
  </section>
);

export default Projects;
