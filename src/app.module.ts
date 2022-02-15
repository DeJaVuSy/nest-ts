import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { OfficialModule } from './official/official.module';

@Module({
  imports: [
    // 加载连接数据库
    TypeOrmModule.forRoot({
      name: 'testmydata',
      type: 'mysql', // 数据库类型
      host: 'localhost', // 数据库ip地址
      port: 3306, // 端口
      username: 'root', // 登录名
      password: '123456', // 密码
      database: 'test', // 数据库名称
      entities: [__dirname + '/test/entity/*{.ts,.js}'], // 扫描本项目中.entity.ts或者.entity.js的文件
      synchronize: false, // true定义数据库表结构与实体类字段同步(这里一旦数据库少了字段就会自动加入,根据需要来使用)
      logging: true, //输入sql语句
    }),
    TypeOrmModule.forRoot({
      name: 'officialmydata',
      type: 'mysql', // 数据库类型
      host: 'localhost', // 数据库ip地址
      port: 3306, // 端口
      username: 'root', // 登录名
      password: '123456', // 密码
      database: 'official', // 数据库名称
      entities: [__dirname + '/official/entity/*{.ts,.js}'], // 扫描本项目中.entity.ts或者.entity.js的文件
      synchronize: false, // true定义数据库表结构与实体类字段同步(这里一旦数据库少了字段就会自动加入,根据需要来使用)
      logging: true, //输入sql语句
    }),
    TestModule,
    OfficialModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
