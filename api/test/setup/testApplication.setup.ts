import 'reflect-metadata';

import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TestModule } from './test.module';

export async function createTestingApplication(): Promise<{
  testingModule: TestingModule;
  app: INestApplication;
}> {
  const moduleBuilder = Test.createTestingModule({
    imports: [TestModule],
  });

  const testingModule = await moduleBuilder.compile();
  const app = testingModule.createNestApplication();
  await app.init();

  return {
    testingModule,
    app,
  };
}
