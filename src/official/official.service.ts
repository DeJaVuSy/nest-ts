import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entity/Person';

@Injectable()
export class OfficialService {

    constructor(
        @InjectRepository(Person,'officialmydata')
        private readonly personRepository: Repository<Person>
    ){

    }

    async getPerson(){
        let personList = await this.personRepository.find();
        console.log("personList:",personList);
        return personList;
    }

}
