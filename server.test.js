const { default: axios } = require("axios");

const host = 'http://localhost:8080';

test('Servidor retorna HTML', async () => {
    const response = await axios.get(`${host}/`);

    expect(response.data).toBe('<h1>Servidor bacana</h1>');
});

test('Path inexistente', async () => {
    try {
        await axios.get(`${host}/path-maluco`);
    } catch (error) {
        expect(error.response.status).toBeGreaterThan(399);
        expect(error.response.status).toBeLessThan(500);
    }
});
