import { INestApplication } from '@nestjs/common';
import { afterAll, beforeAll, beforeEach, describe, expect } from 'vitest';
import { createTestingApplication } from '../setup/testApplication.setup';
import request from 'supertest';

describe('MOCK TEST...', () => {
  let app: INestApplication;
  let httpRequest: () => ReturnType<typeof request>;

  beforeAll(async () => {
    ({ app } = await createTestingApplication());
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    httpRequest = () => request(app.getHttpServer());
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    //     Before each it (test) do ...
  });

  describe('MOCK', () => {
    it('MOCK .... ', async () => {
      const res = await httpRequest().get('/user').expect(200);
      expect(res.status).toBe(200);
      const body = (await res.body) as [];
      expect(body).toEqual([]);
    });
  });
});
