import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus, 
    Logger, 
    Param, 
    ParseIntPipe, 
    Post, 
    UseFilters,
    UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DemoGuard } from 'src/auth/demo/demo.guard';
import { HasRole } from 'src/auth/hasrole.decorator';
import { RoleGuard } from 'src/auth/role/role.guard';
import { NotFoundFilter } from 'src/exceptions/not-found/not-found.filter';
import { UtilisateurDto } from '../dto/utilisateur.dto';
import { Utilisateur } from '../entities/utilisateur.entity';
import { UtilisateurPipe } from '../pipes/utilisateur.pipe';
import { UtilisateurService } from '../services/utilisateur.service';


@Controller('utilisateurs')
// @UseFilters(new NotFoundFilter())
export class UtilisateurController {
    private readonly logger = new Logger(UtilisateurController.name);

    constructor(private service: UtilisateurService) { }

    @Get()
    @HasRole("USER")
    @UseGuards(RoleGuard)
    async getUtilisateurs(): Promise<Utilisateur[]> {
        return this.service.findAll();
    }

    @Post()
    postUtilisateur(@Body(UtilisateurPipe) utilisateur: UtilisateurDto) {
        return this.service.save(utilisateur);
    }

    @Get(":id")
    // @UseFilters(new NotFoundFilter())
    getUtilisateurById(@Param("id", ParseIntPipe) id: number) {
        return this.service.findById(id);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.ACCEPTED)
    deleteUtilisateurById(@Param("id") id: number) {
        this.logger.log(`demande de suppression de l'utilisateur ${id}`)
        return this.service.deleteById(id);
    }
}
