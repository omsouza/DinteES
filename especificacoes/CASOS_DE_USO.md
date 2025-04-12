# Casos de Uso – API de Logradouros

Este documento descreve os principais casos de uso da API REST desenvolvida na atividade AT-3 da disciplina INFO7013 (Engenharia de Software – DINTER UFPR/UNIOESTE). A API é responsável por disponibilizar dados de **logradouros**, definidos como conjuntos contendo logradouro, número, complemento, cidade, UF e CEP.

---

## Lista de Casos de Uso

### UC01 – Recuperar todos os logradouros

- **Ator principal:** Usuário  
- **Identificador:** user1
- **Resumo:** Permite consultar todos os logradouros armazenados no arquivo estático.
- **Pré-condição:** O arquivo de dados (`enderecos.json`) deve conter pelo menos um logradouro.
- **Pós-condição:** A lista de logradouros é retornada ou uma mensagem de erro (404) é enviada.
- **Fluxo principal:**
  1. O usuário envia uma requisição HTTP GET para a URL `/enderecos`.
  2. O sistema verifica a existência de dados.
  3. O sistema retorna a lista de logradouros encontrados.

---

### UC02 – Recuperar logradouro por ID

- **Ator principal:** Usuário  
- **Identificador:** user2
- **Resumo:** Permite obter um único logradouro com base em seu identificador único (ID).
- **Pré-condição:** O ID informado deve estar presente no arquivo de dados.
- **Pós-condição:** O logradouro correspondente ao ID é retornado.
- **Fluxo principal:**
  1. O usuário envia uma requisição HTTP GET para a URL `/enderecos/:id`.
  2. O sistema verifica a existência do ID.
  3. O sistema retorna o logradouro correspondente.

---

### UC03 – Consultar logradouro por CEP

- **Ator principal:** Usuário  
- **Identificador:** user3
- **Resumo:** Permite recuperar um logradouro a partir de um CEP válido.
- **Pré-condição:** O CEP deve estar corretamente formatado e existir na base de dados.
- **Pós-condição:** O logradouro correspondente ao CEP é retornado.
- **Fluxo principal:**
  1. O usuário envia uma requisição HTTP GET para a URL `/enderecos?cep=XXXXX-XXX`.
  2. O sistema filtra os dados pelo CEP informado.
  3. O sistema retorna o logradouro correspondente.

---

### UC04 – Consultar logradouros por cidade

- **Ator principal:** Usuário  
- **Identificador:** user4
- **Resumo:** Retorna todos os logradouros associados a uma cidade específica.
- **Pré-condição:** O nome da cidade deve ser válido e presente no arquivo de dados.
- **Pós-condição:** Uma lista de logradouros filtrados por cidade é retornada.
- **Fluxo principal:**
  1. O usuário envia uma requisição HTTP GET para a URL `/enderecos?cidade=NomeCidade`.
  2. O sistema filtra os logradouros pela cidade informada.
  3. O sistema retorna a lista de logradouros correspondentes.

---

### UC05 – Consultar logradouros por UF (Estado)

- **Ator principal:** Usuário  
- **Identificador:** user5
- **Resumo:** Retorna todos os logradouros pertencentes a uma Unidade Federativa (UF).
- **Pré-condição:** A sigla da UF deve ser válida e estar presente na base de dados.
- **Pós-condição:** Uma lista de logradouros filtrados por UF é retornada.
- **Fluxo principal:**
  1. O usuário envia uma requisição HTTP GET para a URL `/enderecos?uf=UF`.
  2. O sistema filtra os logradouros pela UF informada.
  3. O sistema retorna os logradouros correspondentes.

---

## Observação sobre o Diagrama de Casos de Uso

- **Ator principal:** Usuário  
- **Identificador:** user1 6
- **Sistema:** API de Logradouros  
- **Casos de uso representados:**  
  - UC01: Recuperar todos os logradouros  
  - UC02: Recuperar por ID  
  - UC03: Recuperar por CEP  
  - UC04: Recuperar por cidade  
  - UC05: Recuperar por UF

> Sugestão: representar graficamente este cenário com um diagrama UML, utilizando o ator "Usuário (user1)" interagindo com os 5 casos de uso.

---

## Versão do Documento

- **Versão:** 2.0  
- **Última atualização:** 12 de abril de 2025  
- **Autor:** Christiano Julio Pilger de Brito
