import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { DetailsService } from './details.service';
import { DetailsDto } from './dto/details.dto';
import { Details } from './details.schema';

@Controller('Details')
export class DetailsController {
  constructor(private readonly DetailsService: DetailsService) {}

  @Post()
  async createDetails(@Body() DetailsDto: DetailsDto): Promise<Details> {
    return this.DetailsService.createDetails(DetailsDto);
  }

  @Get('all-data')
  async getAllDetailss(): Promise<Details[]> {
    return this.DetailsService.getAllDetailss();
  }

  @Get(':id')
  async getDetailsById(@Param('id') id: string): Promise<Details> {
    return this.DetailsService.getDetailsById(id);
  }
}
