# Painel de Acompanhamento de Qualidade – API de Logradouros

## Objetivo (GQM)
Melhorar a qualidade estrutural, funcional e de desempenho da API de logradouros, com base na análise contínua de métricas, testes e versionamento.

---

## Questões e Métricas

| Área               | Questão                                              | Métrica                                | Ferramenta de verificação            |
|--------------------|------------------------------------------------------|----------------------------------------|--------------------------------------|
| Arquitetura        | A estrutura segue o modelo MVC corretamente?         | Grau de acoplamento entre módulos      | Análise estática / revisão por pares |
| Funcionalidade     | Os requisitos estão completamente implementados?     | Percentual de requisitos atendidos     | Checklist de requisitos              |
| Testabilidade      | A cobertura de testes é adequada?                    | Percentual de cobertura de testes      | jest --coverage                      |
| Desempenho         | A API responde dentro do tempo exigido?              | Tempo médio de resposta (em milissegundos) | Artillery                        |
| Confiabilidade     | Os testes estão passando consistentemente?           | Percentual de testes que passam        | Jest (npm test)                      |
| Documentação       | Os artefatos estão entregues e atualizados?          | Presença de arquivos obrigatórios      | Verificação manual                   |
| SCM                | As mudanças estão bem versionadas e rastreáveis?     | Padrão nas mensagens de commit         | Git (git log)                        |

---

## Painel de Requisitos

| Requisito | Implementado | Testado | Desempenho OK | Documentado | Último Commit | Observações               |
|-----------|--------------|---------|----------------|-------------|----------------|---------------------------|
| RF01      | Sim          | Sim     | Sim            | Sim         | 10/abr         | -                         |
| RF02      | Sim          | Sim     | Sim            | Sim         | 10/abr         | -                         |
| RF03      | Sim          | Sim     | Parcial        | Sim         | 11/abr         | Resposta próxima de 500ms |
| RF04      | Não          | Não     | Não            | Não         | -              | Em desenvolvimento        |
| RF05      | Não          | Não     | Não            | Não         | -              | Não iniciado              |
| RF06      | Não          | Não     | Não            | Não         | -              | Não iniciado              |

---

## Relatório Parcial (exemplo) – v0.2 (11/04/2025)

- Requisitos implementados: RF01 a RF03
- Cobertura de testes: 91%
- Tempo médio de resposta (GET /enderecos): 410ms
- SCM: Artefatos versionados, commits com mensagens claras
- Documentação entregue: README, REQUISITOS, CASOS_DE_USO, CONFIGURACAO
