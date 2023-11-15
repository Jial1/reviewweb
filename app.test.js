const request = require('supertest');
const app = require('./app'); 

describe('API Endpoints', () => {
  it('should return all reviews', async () => {
    const res = await request(app).get('/api/reviews');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  // it('should return filtered reviews for a specific beverage', async () => {
  //   const beverage = 'Milk Tea';
  //   const res = await request(app).get(`/api/reviews?beverage=${beverage}`);
  //   expect(res.statusCode).toEqual(200);
  //   expect(res.body).toBeInstanceOf(Array);
  //   expect(res.body.every(review => review.beverage === beverage)).toBeTruthy();
  // });

  it('should handle 404 errors', async () => {
    const res = await request(app).get('/nonexistentpath');
    expect(res.statusCode).toEqual(404);
  });

});
