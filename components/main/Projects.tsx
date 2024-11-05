import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Meus Projetos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/RsRevive.png"
          title="RSRevive-MaratonaRS"
          description="Repositório do projeto RecomeçoRS, uma plataforma para auxiliar na reintegração das vítimas das enchentes no Rio Grande do Sul. Oferecemos cursos, vagas de emprego e oportunidades de trabalho voluntário para reconstruir as comunidades afetadas."
        />
        <ProjectCard
          src="/RsRevive.jpg"
          title="PasLib"
          description="Um site desenvolvido para atender às necessidades de estudantes que buscam sua aprovação nas provas do
PAS-UNB e Vestibular-UNB, mas que têm pouco tempo disponível para frequentar cursinhos tradicionais ou para pesquisar extensivamente por materiais de estudo."
        />
          <ProjectCard
            src="/Toaflix.png"
            title="Toaflix-App"
            description="Um site de Cinema completo que conta com uma interface de fácil entendimento, onde é possível fazer cadastro em uma conta, como usuário é possível buscar filmes em cartaz e caso esteja logado como administrador, você pode cadastrar, remover e listar os filmes em cartaz, também é
possível ver todos os pedidos feitos por usuários."
          />
          <ProjectCard
            src="/gerenciador.png"
            title="Gerenciador de Planilha Financeira"
            description="O Gerenciador de Planilha Financeira é uma aplicação desenvolvida em Python que permite aos usuários gerenciar e atualizar dados financeiros de forma fácil e eficiente. Através de uma interface gráfica amigável, o usuário pode adicionar, filtrar e organizar informações financeiras em planilhas Excel, facilitando a gestão de centros de custo e fornecedores."
              
          />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-10"> {/* Adicionando margin-top aqui */}
          <ProjectCard
            src="/toaflix-plus.png"
            title="Toaflix-plus"
            description="O site oferece uma interface fácil de usar para pesquisar. Foi dedicado para usuários que
  buscam encontrar filmes e e-books de domínio público.
  "
          />
          <ProjectCard
            src="/Portfolio.png"
            title="Portfólio Euller Júlio"
            description="Bem-vindo ao meu portfólio! Descubra projetos que mostram minhas habilidades em desenvolvimento e design, refletindo minha paixão por tecnologia e inovação."
          />
        
      </div>
    </div>
  );
};

export default Projects;