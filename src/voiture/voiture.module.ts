import { Module } from '@nestjs/common';
import { VoitureService } from './voiture.service';
import { VoitureController } from './voiture.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voiture } from './entities/voiture.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Voiture])
  ],
  controllers: [
    VoitureController
  ],
  providers: [
    VoitureService
  ]
})
export class VoitureModule {}
