<h1>Yporã</h1>


<p>Yporã é um projeto integrador realizado através do Bootcamp Generation Brasil.</p>
<h2>Sobre</h2>
O projeto tem como principal foco informar dicas de melhoria e possibilitar denuncias relacionadas ao Saneamento Básico.

<h2>Linguagens utilizadas</h2>

<ul>
<li>Java</li>
<li>SQL</li>
<li>TypeScript</li>
<li>HTML</li>
<li>CSS</li>
  
<h2>Tecnologias utilizadas</h2>
<li>Spring Boot</li>
<li>Spring Security</li>
<li>Node Js</li>
<li>React Js</li>
<li>Heroku</li>
<li>Swagger Ui</li>
 
</ul>

<h2>Funcionalidades</h2>

<ul>
<li>Criação de perfil</li>
<li>Realização de login</li>
<li>Criação/Edição/Delete de temas</li>
<li>Criação/Edição/Delete de postagens</li>
</ul>


## Estrutura de pastas e suas responsabilidades

#### Models
Model são as classes responsáveis pelo domínio da aplicação e também da relação entre as entidades.

#### Services
A camada de serviço são criadas para processar a lógica de negócio.

#### Repositories
Trata-se da persistência dos dados. As lógicas se limitam às próprias necessidades. Aqui os dados são recebidos, persistidos ou retornados.

#### security
Envolve toda a parte de segurança do projeto. (endpoints públicos, privados, etc.)

## Validações e segurança

**Todos os enpoints possuem validações de diversos tipos, tais como:**

- Verificação se todos os dados da requisição foram informados corretamente
- Verificação se as informações do cliente coincidem com as informações enviadas 
- Controle de rotas autenticadas e públicas

#### Encriptação da senha e login

As senhas passam por um sistema de criptografia então seu login estará seguro.
