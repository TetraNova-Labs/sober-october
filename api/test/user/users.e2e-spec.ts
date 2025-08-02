import { INestApplication } from '@nestjs/common';
import { afterAll, beforeAll, beforeEach, describe, expect } from 'vitest';
import { createTestApplication } from '../setup/testApplication.setup';
import request from 'supertest';
import { UserManagement } from './user.management';
import { TestingModule } from '@nestjs/testing';
import {
  clearDatabase,
  setupDatabase,
  teardownDatabase,
} from '../setup/dbUtils';
import { User } from '../../src/user/user.entity';

describe('UserController (e2e)', () => {
  let application: INestApplication;
  let module: TestingModule;
  let userManagement: UserManagement;

  beforeAll(async () => {
    ({ application, module } = await createTestApplication());
    await setupDatabase();
    userManagement = await module.resolve(UserManagement);
  });

  afterAll(async () => {
    await application.close();
    await teardownDatabase();
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  it('GET /user should return empty array', async () => {
    await userManagement.givenUser({});
    const res = await request(application.getHttpServer())
      .get('/user')
      .expect(200);
    expect(res.status).toBe(200);
    const body = (await res.body) as User[];
    expect(body.length).toEqual(1);
  });
});
