import request from 'superagent';

const URL = 'https://famous-dogs-api.herokuapp.com/api/dogs';

export async function getDogs() {
  const response = await request.get(URL);
  return response.body;
}