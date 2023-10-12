const request = require('supertest');
const app = require('../../app');
const { openConnection, closeConnection } = require('../../mongo');


describe('launches API', () => {
    beforeAll(async () => {
        await openConnection();
    });

    afterAll(async () => {
        await closeConnection();
    })

    test('should response with 200 status', async () => {
        await request(app)
            .get('/launches')
            .expect('Content-Type', /json/)
            .expect(200);
    })
});