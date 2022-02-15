import { Module } from '@nestjs/common';
import { OfficialService } from './official.service';
import { OfficialController } from './official.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entity/Person';

@Module({
  imports: [
    TypeOrmModule.forFeature([Person],'officialmydata'),
  ],
  controllers: [OfficialController],
  providers: [OfficialService]
})
export class OfficialModule {}
