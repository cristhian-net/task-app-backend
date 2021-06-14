const hipsumApi = require('../../services/hipsum-api.service');

test('get paragraph returns a string', async () => {
  const paragraphResponse = await hipsumApi.getParagraph();
  expect(paragraphResponse).toBeDefined();
  expect(paragraphResponse.length).toBeGreaterThan(0);
});
