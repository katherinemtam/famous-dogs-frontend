import request from 'superagent';

const URL = '/api/dogs';

export async function getDogs() {
  const response = await request.get(URL);
  return response.body;
}

export async function getDogId(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}

export async function addDog(dog) {
  const response = await (await request.post(URL)).statusType('json').send(dog);
  return response.body.id;
}