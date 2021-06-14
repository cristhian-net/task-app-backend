const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../app');
const TaskModel = require('../../models/task.model');

jest.mock('../../services/hipsum-api.service');

const taskOne = {
  title: 'testing',
};

const taskTwo = {
  title: 'This is task 2',
};

beforeEach(async () => {
  await TaskModel.deleteMany();
  await new TaskModel(taskOne).save();
});

afterAll(async () => { await mongoose.connection.close(); });

describe('Tasks Controller', () => {
  it('should return 200 when getting tasks', async () => request(app)
    .get('/api/tasks')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200));

  it('should return at least 3 tasks if no arguments', async () => {
    const res = await request(app)
      .get('/api/tasks')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(res.body.tasks.length).toBeGreaterThanOrEqual(3);
  });

  it('should insert new tasks', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({
        title: taskTwo.title,
      })
      .expect(201);
    expect(res.body).toBeDefined();
    expect(res.body).toMatchObject({
      title: taskTwo.title,
    });
  });

  it('should not insert duplicates', async () => {
    await request(app)
      .post('/api/tasks')
      .send({
        title: taskOne.title,
      });
    const res = await request(app)
      .get('/api/tasks')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(res.body.tasks).toBeDefined();
    expect(res.body.tasks.filter((t) => t.title === taskOne.title).length).toBe(1);
  });
});
