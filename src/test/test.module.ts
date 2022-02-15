import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';

//import { databaseProviders } from '../config/database.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { User,Student,UserMetadata } from 'src/entity/';
import { User } from 'src/test/entity/User';
import { Student } from 'src/test/entity/Student';
import { UserMetadata } from 'src/test/entity/UserMetadata';

@Module({
  imports: [
    TypeOrmModule.forFeature([User,Student,UserMetadata],'testmydata')
  ],
  controllers: [TestController],
  providers: [TestService]

})
export class TestModule {}
