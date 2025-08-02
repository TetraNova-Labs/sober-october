import { Module } from '@nestjs/common';
import { AppModule } from '../../src/app.module';
import { UserManagement } from '../user/user.management';
import { UserModule } from '../../src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../src/user/user.entity';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../src/config/configuration';
import { envSchema } from '../../src/config/validationSchema';
import path from 'path';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      load: [configuration],
      validate: (config) => envSchema.parse(config),
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'sober-october-test',
        autoLoadEntities: true,
        entities: [User],
        synchronize: false,
        logging: false,
        migrations: [path.join(__dirname, 'src', 'migrations', '*.{js,ts}')],
        migrationsTableName: 'migrations_history',
      }),
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserManagement],
})
export class TestModule {}
