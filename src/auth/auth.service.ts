import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { UtilisateurService } from 'src/utilisateur/services/utilisateur.service';
import { LoginDto } from './login.dto';

@Injectable()
export class AuthService {

    constructor(
        private utilisateurService: UtilisateurService,
        private jwtService: JwtService
    ){}

    validate(dto: LoginDto){
        return this.utilisateurService.findByEmailAndPassword(dto.email, dto.password);
    }

    login(utilisateur: Utilisateur){
        const payload = {
            id: utilisateur.id,
            nom: utilisateur.nom,
            email: utilisateur.email,
            role: utilisateur.role
        }
        const jwt = this.jwtService.sign(payload);
        return {jwt};
    }
}
