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
    const response = await request(app).get('/enderecos/cascavel');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message');
  });


});