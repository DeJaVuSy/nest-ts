import { Controller, Post } from '@nestjs/common';
import { OfficialService } from './official.service';

@Controller('official')
export class OfficialController {
  constructor(private readonly officialService: OfficialService) {}


  @Post("getPerson")
  async getPerson(){
    return this.officialService.getPerson();
  }
}
