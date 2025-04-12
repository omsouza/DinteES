# Apresentação

Projeto desenvolvido como parte da Atividade AT-3 da disciplina **Engenharia de Software (INFO7013)** do DINTER UFPR/UNIOESTE. A proposta envolve o desenvolvimento de uma API REST para consulta de endereços, com aplicação de conceitos de **Gestão de Configuração de Software** (GCS/SCM).

---

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Testes](#testes)
- [Requisitos](#requisitos)
- [Organização SCM](#organização-scm)
- [Autores](#autores)
- [Versões](#versoes)

---

## Sobre o projeto

A API de Endereços tem como objetivo oferecer um serviço de consulta a dados geográficos (logradouro, número, complemento, cidade, estado e CEP) de forma performática e organizada, com ênfase em qualidade de código, testes e controle de configuração de software.

Este projeto utiliza a arquitetura MVC, dados estáticos em JSON e práticas de controle de versão, testes automatizados e testes de carga.

---

## Funcionalidades

- [x] Retornar todos os endereços via GET
- [x] Retornar endereço por ID
- [x] Filtrar por CEP
- [x] Filtrar por cidade
- [x] Filtrar por UF (estado)
- [x] Retornar erro 404 quando a lista estiver vazia
- [x] Testes unitários com Jest
- [x] Teste de desempenho com Artillery

---

## Tecnologias utilizadas

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com/)
- [Jest](https://jestjs.io/)
- [Artillery](https://www.artillery.io/)
- [Git](https://git-scm.com/)

---

## Como rodar o projeto

### Pré-requisitos

- Ter o [Node.js](https://nodejs.org/) instalado na máquina

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/at3-api-enderecos.git

### Autores

1. Alex Lemes Guedes
2. Christiano Julio Pilger De Brito
3. Danilo Giacobo
4. Guilherme Villaca
5. Odair Moreira de Souza
