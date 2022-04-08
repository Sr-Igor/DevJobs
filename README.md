# DevJobs
DevJobs é uma plataforma criada com intuito de agregar projetos ao meu portifólio 

O que ela faz? 

- Existem 2 tipos de usuários na plataforma, as empresas e os usuários em busca de um emprego
- Nela é possível se candidatar a uma determinada vaga, vendo todos os detalhes da mesma, e também é possível criar vagas 
----------------------------------------------------------------------------------------------------------------------------
Detalhes Importantes

- Algumas vagas de emprego foram inseridas manualmente para o preenchimento da página atual, essas vagas são adicionadas 
ao LocalStorage assim que o index.html é iniciado.
- Também foram inseridos manualmente, contas de usuários e empresa (que você encontra os dados de acesso ao fim do README) 
- As vagas já criadas, foram linkadas com as contas de empresas, sendo possível ver as mesmas na página de vagas 
- O sistema é baseado apenas em HTML, CSS, JS E BOOTSTRAP, não possui recursos complexos de backend e todas os itens são salvos 
somente em LocalStorage
----------------------------------------------------------------------------------------------------------------------------

Como funciona para usuários? 

--PÁGINA INICIAL--

-Na página inicial, é possível ver as vagas criadas porem sem o login é impossível se candidatar nessas vagas 
-Você pode criar uma conta seguindo os critérios de verificação inseridos como: formato de e-mail valido, senha com mínimo de caracteres,
CPF valido, campos preenchidos, endereço (que é preenchido automaticamente após digitar o CEP) e etc.
-Após o login se torna disponível a opção de se aplicar nas vagas, o modal de aplicação é preenchido automaticamente com as informações do usuário 
porém, podem ser alterados a qualquer momento,
-Para fazer pesquisas de vagas existem 3 critérios, o de palavras, estados é de período "Full Time", podem ser usados individualmente ou os todos em conjunto 
-As vagas encontradas pelas palavras, são referentes a palavras iguais pesquisadas e dos títulos 

--PÁGINA DE VAGAS --

-As vagas do usuário aparecem na página de vagas, e possuem as opções de ver os detalhes da vaga e cancelar a inscrição (caso a vaga esteja aberta)
- As vagas finalizadas pela empresa criadora, não podem ter suas inscrições canceladas pelo usuário, e caso o mesmo esteja candidatado, 
ela aparece na seção de vagas finalizadas. 

-- PÁGINA DE PRFIL --
- -Na página de perfil é possível alteras as informações de cadastro digitando a senha corretamente
- -A alteração de nova senha, também passa pelos mesmos critérios de cadastro 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

Como funciona para Empresas? 

--PÁGINA INICIAL --

-Na página inicial é possível fazer login ou criar uma conta preenchendo todos os campos e seguindo os requisitos de verificação do formulário
-Após o login o usuário é enviado para uma página na qual podem ser criadas as vagas
-As vagas criadas devem ter todos os campos preenchidos e são adicionadas em primeiro lugar na página inicial do usuário (index.html)
-Quando a vaga é criada, ela gera uma data que é salva em LocalStorage, podem fazer assim a verificação do período de criação e exibindo na tela inicial

-- SESSÃO DE EDITAR PERFIL -- 

- Editar perfil, não é uma página independente, é uma alteração no <main>  da página de criação das vagas
- Nela é possível alteras informações de perfil seguindo os critérios de validação do formulário

-- PÁGINA DE VAGAS --
  
- Na página de vagas das empresas, é possível ver todas as vagas criadas pela mesma. Estão disponíveis as opções de finalizar a vaga e verificar os 
usuários inscritos.
--------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  - USUÁRIOS JÁ DISPONÍVEIS 
  
Email - igorsousa@gmail.com
Senha - 1 (SENHA INSERIDA MANUALMENTE E NAO ATENDE OS CRITEIROS DE VALIDAÇÃO)

Email - vitormilagre@gmail.com
Senha - 2 (SENHA INSERIDA MANUALMENTE E NAO ATENDE OS CRITEIROS DE VALIDAÇÃO)

Email - joaocouto@gmail.com
Senha - 3 (SENHA INSERIDA MANUALMENTE E NAO ATENDE OS CRITEIROS DE VALIDAÇÃO)
  
  - EMPRESAS JÁ DISPONÍVEIS 
 
Email - bancointer@gmail.com
Senha - 1 (SENHA INSERIDA MANUALMENTE E NAO ATENDE OS CRITEIROS DE VALIDAÇÃO)

Email - picpay@gmail.com
Senha - 2 (SENHA INSERIDA MANUALMENTE E NAO ATENDE OS CRITEIROS DE VALIDAÇÃO)

Email - nubank@gmail.com
Senha - 3 (SENHA INSERIDA MANUALMENTE E NAO ATENDE OS CRITEIROS DE VALIDAÇÃO)

Email - apple@gmail.com
Senha - 4 (SENHA INSERIDA MANUALMENTE E NAO ATENDE OS CRITEIROS DE VALIDAÇÃO)


--PENDÊNCIAS IDENTIFICADAS --

-- É necessário fazer o refaturamento de algumas funções pois, alguns arquivos foram copiados diretamente nas pastas JS das Páginas
é possuem funções dentro dos arquivos não utilizadas pelas páginas referentes 

-- Modo noturno possui uma função muitos extensa, e é necessários uma otimização da escrita (O MODO ESTA ATIVO)
