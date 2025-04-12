const request = require('supertest');
const { app } = require('../src/app');

describe('Testes da API de Endereços', () => {
  it('GET /enderecos - deve retornar todos os endereços', async () => {
    const response = await request(app).get('/enderecos');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(5);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('logradouro');
  });

  it('GET /enderecos/:id - deve retornar um endereço específico', async () => {
    const response = await request(app).get('/enderecos/1');
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(1);
    expect(response.body).toHaveProperty('logradouro');
  });

  it('GET /enderecos/:id - deve retornar 404 para ID inexistente', async () => {
    const response = await request(app).get('/enderecos/999');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message');
  });

  //teste cidade
  it('GET /enderecos/cidade/:cidade - deve retornar uma lista de endereços da cidade', async () => {
    const response = await request(app).get('/enderecos/cidade/salvador');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('logradouro');
    expect(response.body[0]).toHaveProperty('cidade', 'Salvador');
  });
  

  it('GET /enderecos/cidade/:cidade - deve retornar 404 para cidade inexistente', async () => {
    const response = await request(app).get('/enderecos/cidade/cascavel');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message');
  });

  //teste uf
  it('GET /enderecos/uf/:uf - deve retornar uma lista de endereços da uf', async () => {
    const response = await request(app).get('/enderecos/uf/ba');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('logradouro');
    expect(response.body[0]).toHaveProperty('uf', 'BA');
  });
  

  it('GET /enderecos/uf/:uf - deve retornar 404 para uf inexistente', async () => {
    const response = await request(app).get('/enderecos/uf/PR');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message');
  });

  //teste cep
  it('GET /enderecos/cep/:cep - deve retornar uma lista de endereços do cep', async () => {
    const response = await request(app).get('/enderecos/cep/30123-456');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('logradouro');
    expect(response.body[0]).toHaveProperty('cep', '30123-456');
  });
  

  it('GET /enderecos/cep/:cep - deve retornar 404 para cep inexistente', async () => {
    const response = await request(app).get('/enderecos/cep/85807-594');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message');
  });


});