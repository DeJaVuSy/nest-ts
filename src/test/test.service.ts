import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entity/Student';
import { User } from './entity/User';
import { UserMetadata } from './entity/UserMetadata';


@Injectable()
export class TestService {
  private readonly databaseName:String = 'testmydata';
  constructor(
    // @Inject('USER_REPOSITORY')
    // private readonly userRepository: Repository<User>
    @InjectRepository(User,'testmydata')
    private readonly userRepository: Repository<User>,
    @InjectRepository(Student,'testmydata')
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(UserMetadata,'testmydata')
    private readonly userMetadataRepository: Repository<UserMetadata>
  ){

  }


  async getUser(){
    let user = new User();
    user.firstName = "张三3";
    let u = await this.userRepository.findOne(user);
    let userList = await this.studentRepository.query("select * from user");
    console.log("user：",u)
    console.log("userList",userList)
    return userList;
  }

  async getUserById(id: number){
    let user = await this.userRepository.findOne(id);
    console.log("user：",user)
    return user;
  }


}

