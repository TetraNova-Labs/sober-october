import 'reflect-metadata';

import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TestModule } from './test.module';

export const createTestApplication = async (): Promise<{
  application: INestApplication;
  module: TestingModule;
}> => {
  const module: TestingModule = await Test.createTestingModule({
    imports: [TestModule],
  }).compile();
  const application = module.createNestApplication();
  await application.init();

  return {
    application,
    module,
  };
};
