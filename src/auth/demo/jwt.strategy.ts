import { Injectable } from "@nestjs/common/decorators";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from '@nestjs/passport'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "mystrategy"){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: "azertyuhgflokjbvjijhvbhjijvbhji"
        })
    }

    async validate(payload: any){
        return payload;
    }
}