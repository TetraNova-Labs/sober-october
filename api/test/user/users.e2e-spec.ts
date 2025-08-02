import { INestApplication } from '@nestjs/common';
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
} from 'vitest';
import { createTestingApplication } from '../setup/testApplication.setup';
import request from 'supertest';
import { UserManagement } from './user.management';
import { TestingModule } from '@nestjs/testing';
import {
  clearDatabase,
  setupDatabase,
  teardownDatabase,
} from '../setup/dbUtils';

describe('MOCK TEST...', () => {
  let app: INestApplication;
  let httpRequest: () => ReturnType<typeof request>;
  let userManagement: UserManagement;

  beforeAll(async () => {
    let testingModule: TestingModule;
    ({ app, testingModule } = await createTestingApplication());
    await setupDatabase();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    httpRequest = () => request(app.getHttpServer());

    userManagement = await testingModule.resolve(UserManagement);
  });

  afterAll(async () => {
    await app.close();
    await teardownDatabase();
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  // afterEach(async () => {});

  describe('MOCK', () => {
    it('MOCK .... ', async () => {
      await userManagement.givenUser({});

      const res = await httpRequest().get('/user').expect(200);
      expect(res.status).toBe(200);
      const body = (await res.body) as [];
      expect(body).toEqual([]);
    });
  });
});
