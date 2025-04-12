# Lista de Requisitos – API de Logradouros

Este documento apresenta os requisitos funcionais e não-funcionais da API de logradouros desenvolvida na atividade AT-3 da disciplina INFO7013 (Engenharia de Software – DINTER UFPR/UNIOESTE). A API segue o modelo REST e disponibiliza dados estruturados de logradouros, contendo: logradouro, número, complemento, cidade, UF e CEP.

---

## Requisitos Funcionais (RF)

| Código | Descrição                                                                                              |
|--------|--------------------------------------------------------------------------------------------------------|
| RF01   | A API deve retornar uma lista de logradouros por meio de uma requisição HTTP GET ao endpoint `/enderecos`. |
| RF02   | A API deve retornar erro 404 quando não existirem logradouros disponíveis no arquivo de dados.         |
| RF03   | A API deve retornar um logradouro específico quando fornecido um ID válido via requisição HTTP GET.    |
| RF04   | A API deve retornar um logradouro específico quando fornecido um CEP válido via parâmetro de consulta. |
| RF05   | A API deve retornar uma lista de logradouros quando fornecido o nome de uma cidade válida.             |
| RF06   | A API deve retornar uma lista de logradouros quando fornecida uma Unidade Federativa (UF) válida.      |

---

## Requisitos Não-Funcionais (RNF)

| Código | Descrição                                                                                                         |
|--------|-------------------------------------------------------------------------------------------------------------------|
| RNF01  | A API deve seguir o padrão REST, utilizando métodos HTTP apropriados e rotas organizadas.                        |
| RNF02  | A API deve utilizar o protocolo HTTP para comunicação via socket, operando na porta padrão `3000`.               |
| RNF03  | Os dados dos logradouros devem ser armazenados em um arquivo estático chamado `enderecos.json`, no formato JSON. |
| RNF04  | A API deve responder a pelo menos 95% das requisições em menos de 500ms, considerando condições locais normais.  |

---

## Versão do Documento

- **Versão:** 2.0  
- **Última atualização:** 11 de abril de 2025  
- **Autor:** Christiano Julio Pilger de Brito
