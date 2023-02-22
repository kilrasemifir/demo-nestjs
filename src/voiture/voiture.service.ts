import { Injectable } from '@nestjs/common';
import { CreateVoitureDto } from './dto/create-voiture.dto';
import { UpdateVoitureDto } from './dto/update-voiture.dto';
import { Repository } from 'typeorm';
import { Voiture } from './entities/voiture.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class VoitureService {

  constructor(
    @InjectRepository(Voiture)
    private readonly voitureRepository: Repository<Voiture>
  ){}

  create(createVoitureDto: CreateVoitureDto) {
    return this.voitureRepository.save(createVoitureDto);
  }

  findAll() {
    return this.voitureRepository.find();
  }

  findOne(id: number) {
    return this.voitureRepository.findOne({where: {id}});
  }

  update(id: number, updateVoitureDto: UpdateVoitureDto) {
    return this.voitureRepository.update(id, updateVoitureDto);
  }

  remove(id: number) {
    return this.voitureRepository.delete(id);
  }
}
