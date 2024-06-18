# Informações do Projeto
`TÍTULO DO PROJETO`  

PseudoPurge

`CURSO` 

Engenharia de Software

## Participantes

> Arthur Fonseca Delmiro de Jesus; 
> Guilherme Marques Roberto de Oliveira;
> João Paulo Carvalho Guedes;
> João Vitor Santana Lopes;  

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

O problema que a aplicação deve resolver é a disseminação de fake news e pseudociências. Devido a proliferação de informações na internet, muitas vezes sem fundamentação, diversas vezes é difícil discernir o que é válido ou não.
Esse problema pode causar desconfiança em fontes confiáveis, e contribuir para a propragação de informações sem validação científica.
A aplicação será utilizada por usuários que buscam validar informações científicas e discernir entre conteúdo legítimo e pseudocientífico. Ela pode ser implementada como uma plataforma online ou um aplicativo móvel, oferecendo recursos como verificação de fatos, acesso a fontes confiáveis, educação científica e ferramentas para ajudar os usuários a entenderem melhor o método científico e a avaliarem criticamente as informações que encontram.

> Descreva a importância ou a motivação para trabalhar com esta aplicação
> que você escolheu. Indique as razões pelas quais você escolheu seus
> objetivos específicos ou as razões para aprofundar em certos aspectos
> do software.
> 
> O grupo de trabalho pode fazer uso de questionários, entrevistas e
> dados estatísticos, que podem ser apresentados, com o objetivo de
> esclarecer detalhes do problema que será abordado pelo grupo.
>

> **Links Úteis**:
> - [Objetivos, Problema de pesquisa e Justificativa](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)
> - [Matriz Certezas, Suposições e Dúvidas](https://medium.com/educa%C3%A7%C3%A3o-fora-da-caixa/matriz-certezas-suposi%C3%A7%C3%B5es-e-d%C3%BAvidas-fa2263633655)
> - [Brainstorming](https://www.euax.com.br/2018/09/brainstorming/)

## Objetivos

Objetivo geral:

Desenvolver um software eficaz para solucionar o problema da disseminação de informações pseudocientíficas, fornecendo aos usuários uma ferramenta confiável para validar informações científicas e diferenciar entre conteúdo legítimo e pseudocientífico.

Objetivos específicos:
-Integrar a aplicação com bases de dados científicas confiáveis e atualizadas, oferecendo aos usuários acesso fácil a informações precisas e verificadas, facilitando a validação de conteúdo científico.
-Criar uma comunidade online dentro da aplicação, onde os usuários possam interagir, discutir e compartilhar informações relacionadas à ciência, promovendo o engajamento e o compartilhamento de conhecimento entre os usuários.
 
 > Aqui você deve descrever os objetivos do trabalho indicando que o
 > objetivo geral é desenvolver um software para solucionar o problema
 > apresentado acima. Apresente também alguns (pelo menos 2) objetivos
 > específicos dependendo de onde você vai querer concentrar a sua
 > prática investigativa, ou como você vai aprofundar no seu trabalho.
 >


> **Links Úteis**:
> - [Objetivo geral e objetivo específico: como fazer e quais verbos utilizar](https://blog.mettzer.com/diferenca-entre-objetivo-geral-e-objetivo-especifico/)

## Justificativa

 A disseminação de informações pseudocientíficas pode levar a decisões prejudiciais à saúde, ao meio ambiente e à sociedade em geral. Ao fornecer uma ferramenta para validar e discernir informações científicas, podemos contribuir para uma sociedade mais informada e capacitada a tomar decisões fundamentadas.
 Devido a internet e as redes sociais, a propagação de desinformação se tornou mais rápida. Uma aplicação que aborda esse problema pode ter um impacto significativo para evitar a que informações pseudocientíficas online ganhem força.
 Os objetivos específicos foram escolhidos para educar os usuários sobre os princípios científicos e como avaliar criticamente informações, além de garantir a interação entre eles.

 > Descreva a importância ou a motivação para trabalhar com esta aplicação
> que você escolheu. Indique as razões pelas quais você escolheu seus
> objetivos específicos ou as razões para aprofundar em certos aspectos
> do software.
> 
> O grupo de trabalho pode fazer uso de questionários, entrevistas e
> dados estatísticos, que podem ser apresentados, com o objetivo de
> esclarecer detalhes do problema que será abordado pelo grupo.
>

 
> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Público-Alvo

Perfil dos Usuários:

Estudantes Universitários:
 Variedade de conhecimentos, dependendo da área de estudo. Podem estar familiarizados com o método científico, mas podem precisar de orientação em áreas específicas.
 Geralmente familiarizados com tecnologia e aplicativos, pois faz parte de suas vidas cotidianas e de seus estudos.
 Podem estar em diferentes níveis de ensino universitário, desde calouros até estudantes avançados.

Profissionais da Saúde:
 Possuem um alto nível de conhecimento em sua área de especialização, mas podem precisar de suporte para áreas fora de sua expertise.
 Dependendo da idade e da especialidade, podem ter diferentes níveis de familiaridade com tecnologia, mas geralmente estão confortáveis em usar ferramentas digitais em sua prática profissional.
 Podem incluir médicos, enfermeiros, farmacêuticos e outros profissionais de saúde em diferentes estágios de suas carreiras.

Educadores:
 Têm conhecimento sobre o método científico e podem ter experiência em ensinar conceitos científicos a alunos de diferentes faixas etárias.
 Podem variar, mas muitos educadores estão cada vez mais integrando a tecnologia em suas práticas de ensino.
 Podem incluir professores de ciências em escolas primárias, secundárias ou de nível superior, bem como educadores informais em museus ou centros de ciência.

> Descreva quem serão as pessoas que usarão a sua aplicação indicando os
> diferentes perfis. O objetivo aqui não é definir quem serão os
> clientes ou quais serão os papéis dos usuários na aplicação. A ideia
> é, dentro do possível, conhecer um pouco mais sobre o perfil dos
> usuários: conhecimentos prévios, relação com a tecnologia, relações
> hierárquicas, etc.
>
> Adicione informações sobre o público-alvo por meio de uma descrição
> textual, ou diagramas de personas, mapa de stakeholders, ou como o
> grupo achar mais conveniente.
> 
> **Links Úteis**:
> - [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
> - [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)
 
# Especificações do Projeto

Entrevistas e Questionários: Para coletar informações sobre as necessidades e expectativas dos usuários em relação à aplicação, foram realizadas entrevistas e questionários com potenciais usuários, especialistas em ciência e educação, e outros stakeholders relevantes.

Análise de Stakeholders: Identificação e análise dos diferentes stakeholders envolvidos no projeto, incluindo usuários finais, equipe de desenvolvimento, especialistas em conteúdo científico, entre outros, para compreender suas necessidades e expectativas.

Brainstorming: Junção e desenvolvimento das ideias dos membros do grupo, sendo assim, selecionadas as mais adequadas em nossa concepção.

Mural de possibilidades: As escolhas foram afuniladas, e assim foram criadas e desenvolvidas mais claramente as ideias, e como elas seriam apresentadas no projeto.


> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

## Personas e Mapas de Empatia



> Relacione as personas identificadas no seu projeto e os respectivos mapas de empatia. Lembre-se que 
> você deve ser enumerar e descrever precisamente e de forma
> personalizada todos os principais envolvidos com a solução almeja. 
> 
> Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Como fazer um mapa de empatia - Vídeo](https://www.youtube.com/watch?v=JlKHGpVoA2Y)
> 
> 
> **Exemplo de Persona**
> 
> ![Exemplo de Persona](imaages/../images/persona.png)
> 
> Fonte: [Como criar uma persona para o seu negócio](https://raissaviegas.com.br/como-criar-uma-persona/)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Tela de login(simulado)| ALTA | 
|RF-002| Tela de cadastro(simulado)  | ALTA|
|Rf-003|  Mapa Interativo | MÉDIA |
|Rf-004|  Fórum de discussão | BAIXA |
|Rf-005|  Blog Informativo sobre pseudociência | ALTA |
|Rf-006|  Fórum de perguntas e respostas | BAIXA |
|Rf-007|  Área para divulgacão de experiências negativas sobre pseudociência | BAIXA |
|Rf-008|  Área para informar sites confiáveis e seguros em relação a pseudociência | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Responsividade em Dispositivos Móveis| MÉDIA | 
|RNF-002| Processamento Rápido de Requisições |  BAIXA | 
|Rf-003|   Navegação Intuitiva | ALTA |
|Rf-004|  Facilidade de Atualização | MÉDIA |
|Rf-005|  Compatibilidade com Diferentes Navegadores | MÉDIA |
|Rf-006|   Criptografia de Dados Sensíveis | ALTA |
|Rf-007|  Alta Disponibilidade | ALTA |
|Rf-008|  Capacidade de Escalabilidade Horizontal | MÉDIA |

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.
> 
> **Links Úteis**:
> 
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Restrição 01: Prazo de Entrega:

Planejamento Eficiente: Realizar um planejamento detalhado do projeto, identificando todas as etapas e tarefas necessárias para sua conclusão dentro do prazo estabelecido. Isso inclui definir marcos intermediários, estimar prazos realistas para cada fase e atribuir recursos de forma adequada.
Priorização de Funcionalidades: Identificar e priorizar as funcionalidades essenciais do projeto que podem ser entregues dentro do prazo estabelecido, deixando funcionalidades menos críticas para fases posteriores ou versões futuras.

Restrição 02: Ausência de Módulo de Backend:

Implementação de Funcionalidades Simplificadas: Adaptar as funcionalidades da aplicação para funcionar de forma simplificada e independente no frontend, evitando a necessidade de um backend complexo. Isso pode envolver a redução de complexidade em certas funcionalidades ou a utilização de abordagens alternativas para alcançar os mesmos resultados desejados.


> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g1-pseudociencia/assets/73785066/019f78e2-b063-4ea5-8dec-66194f700bf3)


> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g1-pseudociencia/assets/73785066/224615a3-fec1-414d-a067-a5a6345866c1)

Página - Landing Page
A landing-page será a primeira página que o usuário irá se deparar ao entrar em nosso site. Nela, apresentamos o blog.

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g1-pseudociencia/assets/73785066/0637af0e-9ae0-42ce-b3b4-8743101b0d97)

Página - Fórum
Esse vai ser o fórum de discussão e de perguntas e respostas do site.

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g1-pseudociencia/assets/73785066/aa015fb3-bef1-402d-b7d7-040c52c7a9e1)

Página - Mapa Interativo
Nessa página teremos um mapa interativo que mostra a pseudociência mais famosas de alguns países selecionados.

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g1-pseudociencia/assets/73785066/b78b40a1-6125-4ee6-9622-be4be6e46b01)

Página - Artigo do Blog
Nessa página teremos as informações da pseudociencia selecionada, como combater e verificar sua vericidade.

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g1-pseudociencia/assets/73785066/11df2079-7dea-46ad-a4a3-1b14e17586e5)

Página - Tópico do fórum
Aqui vai ocorrer as perguntas e respostas e as discussões do fórum.

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g1-pseudociencia/assets/73785066/b3bf76cd-50b6-4a15-afa0-06c322ebba33)

Página - Post
Nesta página será onde os usuários irão fazer os post no fórum, e os usuaários autorizados poderão fazer um post no blog.

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g1-pseudociencia/assets/73785066/36bd26a6-93af-44c8-ae69-13051d1c5dc8)

Página - Cadastro
Aqui os usuários irão fazer seu cadastro(Simulado).

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g1-pseudociencia/assets/73785066/962402c5-5f28-4595-bad6-e6d7ae38fd21)

Página - Login

Aqui os usuários irão fazer seu login(simulado).

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g1-pseudociencia/assets/73785066/04d8bf76-35bc-4117-b18c-6250788c962e)

Página - Esquecer senha
Nessa página os usuários que esqueceram suas senhas poderão requisitar um email para altera-la(Simulado).

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 



# Metodologia
Design Thinking:

Empatia: O grupo realizou pesquisas para entender as necessidades e desafios dos usuários em relação à verificação de informações científicas e à identificação de pseudociência.
Definição: Com base nas informações coletadas, o grupo definiu claramente o problema a ser resolvido e os objetivos da aplicação.
Ideação: Foram realizadas sessões de brainstorming para gerar ideias criativas e soluções inovadoras para abordar o problema.
Divisão de Papéis e Tarefas: O grupo adotou papéis claros, as tarefas foram divididas em incrementos menores e atribuídas a membros específicos da equipe.

Ferramentas:

GitHub: O GitHub foi utilizado para gerenciamento de configuração do projeto, e colaboração entre os membros da equipe. Houve a documentação e acompanhamento de problemas.
Ferramentas de Projeto Online: Para acompanhar o progresso do projeto, foram utilizadas ferramentas online, como Trello.

Essa abordagem integrada permitiu que o grupo desenvolvesse uma aplicação que atendesse às necessidades das personas de forma eficaz, com uma combinação de Design Thinking para entender os problemas dos usuários e Scrum para gerenciar o desenvolvimento da solução.

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> - [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> - [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> - [Gerência de projetos - Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis

Arthur: Criação de personas
Guilherme: Documentação do projeto, entrevista
João Paulo: Wireframe, Userflow, requisitos
João Vitor: requisitos, historias de usário e slides

Todo o grupo foi presente durante a parte do Desing Thinking, todos participaram do processo no Miro.

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

Processo de Design Thinking: O Miro foi escolhido devido à sua capacidade de permitir colaboração em tempo real, facilitando a realização de workshops de design thinking e a criação de mapas mentais, fluxos de usuário e outras ferramentas de design colaborativo.
https://miro.com/app/board/uXjVNiWg54Q=/

Repositório de código: O GitHub foi selecionado como plataforma de hospedagem de código devido à sua ampla adoção, recursos avançados de controle de versão e facilidade de colaboração entre os membros da equipe.
https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g1-pseudociencia/edit/master/docs/relatorio/Relatorio%20Tecnico%20-%20TEMPLATE.md


Protótipo Interativo: O Figma foi escolhido para criar protótipos interativos devido à sua facilidade de uso, recursos avançados de design e capacidade de colaboração em tempo real. Ele permite que a equipe crie protótipos de alta fidelidade para validar e iterar sobre o design da aplicação.
https://www.figma.com/file/O6AcbnKH6V3rObZZm8dBbq/Wireframe?type=design&node-id=57%3A468&mode=design&t=aMW52JcBdY4dAFXZ-1

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro | https://miro.com/XXXXXXX | 
|Repositório de código | GitHub | https://github.com/XXXXXXX | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | https://figma.com/XXXXXXX | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
