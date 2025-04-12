> at3-api-dinter@1.0.0 test
> cross-env NODE_ENV=test jest --forceExit --detectOpenHandles

  console.log
    1

      at log (src/models/enderecoModel.js:11:15)
          at Array.forEach (<anonymous>)

  console.log
    2

      at log (src/models/enderecoModel.js:11:15)
          at Array.forEach (<anonymous>)

  console.log
    3

      at log (src/models/enderecoModel.js:11:15)
          at Array.forEach (<anonymous>)

  console.log
    4

      at log (src/models/enderecoModel.js:11:15)
          at Array.forEach (<anonymous>)

  console.log
    5

      at log (src/models/enderecoModel.js:11:15)
          at Array.forEach (<anonymous>)

  console.log
    {
      id: 1,
      logradouro: 'Rua das Flores',
      numero: '123',
      complemento: 'Apto 101',
      cidade: 'São Paulo',
      cep: '01234-567',
      uf: 'SP'
    }

      at Function.log [as getById] (src/models/enderecoModel.js:16:15)

  console.log
    1

      at log (src/models/enderecoModel.js:11:15)
          at Array.forEach (<anonymous>)

  console.log
    2

      at log (src/models/enderecoModel.js:11:15)
          at Array.forEach (<anonymous>)

  console.log
    3

      at log (src/models/enderecoModel.js:11:15)
          at Array.forEach (<anonymous>)

  console.log
    4

      at log (src/models/enderecoModel.js:11:15)
          at Array.forEach (<anonymous>)

  console.log
    5

      at log (src/models/enderecoModel.js:11:15)
          at Array.forEach (<anonymous>)

  console.log
    Endereco not found

      at Function.log [as getById] (src/models/enderecoModel.js:18:15)

 PASS  test/endereco.test.js
  Testes da API de Endereços
    ✓ GET /enderecos - deve retornar todos os endereços (121 ms)
    ✓ GET /enderecos/:id - deve retornar um endereço específico (61 ms)
    ✓ GET /enderecos/:id - deve retornar 404 para ID inexistente (31 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.316 s
Ran all test suites.
