import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UtilisateurDto } from './Utilisateur.dto';
import { UtilisateurService } from './utilisateur.service';

@Controller('utilisateurs')
export class UtilisateurController {

    constructor(private service: UtilisateurService){}

    @Get()
    getUtilisateurs(): Promise<UtilisateurDto[]>{
        return this.service.findAll();
    }

    @Post()
    postUtilisateur(@Body() utilisateur: UtilisateurDto){
        return this.service.save(utilisateur);
    }

    @Get(":id")
    getUtilisateurById(@Param("id") id: number){
        return this.service.findById(id);
    }

    @Delete(":id")
    deleteUtilisateurById(@Param("id") id: number){
        return this.service.deleteById(id);
    }
}
