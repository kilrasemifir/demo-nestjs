import { Module } from '@nestjs/common';
import { UtilisateurModule } from 'src/utilisateur/utilisateur.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt/dist';
import { JwtStrategy } from './demo/jwt.strategy';

@Module({
  imports: [
    UtilisateurModule, 
    PassportModule,
    JwtModule.register({
      secret: "azertyuhgflokjbvjijhvbhjijvbhji",
      signOptions: {}
    })
  ],
  providers: [
    AuthService, 
    LocalStategy, 
    JwtStrategy
  ],
  controllers: [AuthController]
})
export class AuthModule {}
