# 🎯 Casos de Uso – API de Endereços

Este documento descreve os principais casos de uso da API de Endereços desenvolvida na atividade AT-3 da disciplina INFO7013 (Engenharia de Software – DINTER UFPR/UNIOESTE).

---

## 🧾 Lista de Casos de Uso

### UC01 – Consultar todos os endereços

- **Ator principal:** Usuário (cliente da API)
- **Resumo:** Retorna a lista completa de endereços registrados no sistema.
- **Pré-condição:** A base de dados JSON deve conter pelo menos um endereço.
- **Pós-condição:** A lista é retornada com sucesso ou uma mensagem 404 é exibida.
- **Fluxo principal:**
  1. O cliente envia uma requisição GET para `/enderecos`.
  2. O sistema valida a requisição.
  3. O sistema retorna a lista de endereços.

---

### UC02 – Consultar endereço por ID

- **Ator principal:** Usuário
- **Resumo:** Permite recuperar um único endereço por meio de um identificador numérico.
- **Pré-condição:** O ID informado deve existir na base de dados.
- **Pós-condição:** O endereço correspondente é retornado.
- **Fluxo principal:**
  1. O cliente envia uma requisição GET para `/enderecos/:id`.
  2. O sistema verifica a existência do ID.
  3. O sistema retorna o endereço correspondente.

---

### UC03 – Consultar endereço por CEP

- **Ator principal:** Usuário
- **Resumo:** Permite recuperar um endereço específico com base em seu CEP.
- **Pré-condição:** O CEP deve estar formatado corretamente e existir na base.
- **Pós-condição:** O endereço correspondente é retornado.
- **Fluxo principal:**
  1. O cliente envia uma requisição GET para `/enderecos?cep=XXXXX-XXX`.
  2. O sistema filtra os dados por CEP.
  3. O sistema retorna o endereço correspondente.

---

### UC04 – Consultar endereços por cidade

- **Ator principal:** Usuário
- **Resumo:** Retorna uma lista de endereços da cidade especificada.
- **Pré-condição:** O nome da cidade deve ser válido.
- **Pós-condição:** A lista filtrada de endereços é exibida.
- **Fluxo principal:**
  1. O cliente envia uma requisição GET para `/enderecos?cidade=Cascavel`.
  2. O sistema realiza a filtragem.
  3. O sistema retorna a lista correspondente.

---

### UC05 – Consultar endereços por UF

- **Ator principal:** Usuário
- **Resumo:** Retorna todos os endereços pertencentes a um estado brasileiro (UF).
- **Pré-condição:** A sigla da UF deve ser válida.
- **Pós-condição:** A lista de endereços filtrados por UF é exibida.
- **Fluxo principal:**
  1. O cliente envia uma requisição GET para `/enderecos?uf=PR`.
  2. O sistema realiza a filtragem.
  3. O sistema retorna a lista correspondente.

---

## 📌 Observação sobre o Diagrama de Casos de Uso

- Ator principal: **Usuário**
- Sistema: **API de Endereços**
- Casos de uso: **Consultar todos**, **Consultar por ID**, **Consultar por CEP**, **Consultar por cidade**, **Consultar por UF**

> Sugestão: representar estes casos em um diagrama UML com o ator "Usuário" à esquerda e os 5 casos de uso organizados em elipses à direita.

---

## 📁 Versão do Documento

- **Versão:** 1.0  
- **Última atualização:** 11 de abril de 2025  
- **Autor:** Christiano Julio Pilger de Brito
