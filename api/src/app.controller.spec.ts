import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AppModule} from "./app.module";

describe('AppController', () => {
  let appController: AppController;
  let app: TestingModule

  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  afterAll(async() => {
    await app.close();
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
