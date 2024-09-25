import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DetailsService } from './details.service';
import { DetailsController } from './details.controller';
import { Details, DetailsSchema } from './details.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Details.name, schema: DetailsSchema }])],
  controllers: [DetailsController],
  providers: [DetailsService],
})
export class DetailsModule {}
