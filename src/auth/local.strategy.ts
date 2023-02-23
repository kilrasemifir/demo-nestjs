import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { userInfo } from "os";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { LoginDto } from "./login.dto";

@Injectable()
export class LocalStategy extends PassportStrategy(Strategy){
    constructor( private authService: AuthService ){
        super({usernameField: 'email'});
    }

    async validate(username: string, password: string){
        const utilisateur = this.authService.validate({email:username, password});
        if (!utilisateur){
            throw new UnauthorizedException();
        }
        return utilisateur;
    }
}