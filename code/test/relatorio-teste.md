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

  console.log
    salvador

      at Function.log [as getByCidade] (src/models/enderecoModel.js:26:13)

  console.log
    cascavel

      at Function.log [as getByCidade] (src/models/enderecoModel.js:26:13)

 PASS  test/endereco.test.js
  Testes da API de Endereços
    ✓ GET /enderecos - deve retornar todos os endereços (104 ms)
    ✓ GET /enderecos/:id - deve retornar um endereço específico (41 ms)
    ✓ GET /enderecos/:id - deve retornar 404 para ID inexistente (30 ms)
    ✓ GET /enderecos/cidade/:cidade - deve retornar uma lista de endereços da cidade (23 ms)
    ✓ GET /enderecos/cidade/:cidade - deve retornar 404 para cidade inexistente (14 ms)
    ✓ GET /enderecos/uf/:uf - deve retornar uma lista de endereços da uf (11 ms)
    ✓ GET /enderecos/uf/:uf - deve retornar 404 para uf inexistente (18 ms)
    ✓ GET /enderecos/cep/:cep - deve retornar uma lista de endereços do cep (12 ms)
    ✓ GET /enderecos/cep/:cep - deve retornar 404 para cep inexistente (25 ms)

Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        0.85 s, estimated 1 s
Ran all test suites.
