import { Controller, Get, Post } from '@nestjs/common';
import { UtilisateurDto } from './Utilisateur.dto';
import { UtilisateurService } from './utilisateur.service';

@Controller('utilisateurs')
export class UtilisateurController {

    constructor(private service: UtilisateurService){}

    @Get()
    getUtilisateurs(): UtilisateurDto[]{
        return this.service.findAll();
    }

    @Post()
    postUtilisateur(utilisateur: UtilisateurDto){
        return this.service.save(utilisateur);
    }
}
