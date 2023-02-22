import { Injectable } from '@nestjs/common';
import { UtilisateurDto } from './Utilisateur.dto';
import { Utilisateur } from './utilisateur.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UtilisateurService {

    private utilisateurs: UtilisateurDto[] = [];
    constructor(
        @InjectRepository(Utilisateur)
        private repository: Repository<Utilisateur>
    ){}

    save(utilisateur: UtilisateurDto){
        return this.utilisateurs.push(utilisateur);
    }

    findAll(){
        return this.utilisateurs;
    }
}
