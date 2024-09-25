import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Details } from './details.schema';
import { DetailsDto } from './dto/details.dto';

@Injectable()
export class DetailsService {
  constructor(
    @InjectModel(Details.name) private DetailsModel: Model<Details>,
  ) {}

  async createDetails(DetailsDto: DetailsDto): Promise<Details> {
    const newDetails = new this.DetailsModel(DetailsDto);
    return newDetails.save();
  }

  async getAllDetailss(): Promise<Details[]> {
    return this.DetailsModel.find().exec();
  }

  async getDetailsById(id: string): Promise<Details> {
    return this.DetailsModel.findById(id).exec();
  }
}
