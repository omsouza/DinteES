# 📋 Lista de Requisitos – API de Endereços

Este documento apresenta os requisitos funcionais e não-funcionais da API de endereços desenvolvida na atividade AT-3 da disciplina INFO7013 (Engenharia de Software – DINTER UFPR/UNIOESTE).

---

## ✅ Requisitos Funcionais (RF)

| Código | Descrição                                                                 |
|--------|---------------------------------------------------------------------------|
| RF01   | A API deve retornar uma lista de endereços via requisição HTTP GET.       |
| RF02   | A API deve retornar erro 404 quando não existirem endereços disponíveis.  |
| RF03   | A API deve retornar um endereço específico quando fornecido um ID válido. |

---

## ⚙️ Requisitos Não-Funcionais (RNF)

| Código | Descrição                                                                                         |
|--------|---------------------------------------------------------------------------------------------------|
| RNF01  | A API deve seguir o padrão REST.                                                                  |
| RNF02  | A API deve utilizar o protocolo HTTP para comunicação.                                             |
| RNF03  | Os dados da API devem ser armazenados em um arquivo estático (enderecos.json).                    |
| RNF04  | A API deve responder a 95% das requisições em menos de 500ms em condições normais de operação.    |

---

## 🗂 Versão do Documento

- **Versão:** 1.1
- **Última atualização:** 11 de abril de 2025
- **Autores:** Christiano Julio Pilger de Brito
