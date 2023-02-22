import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateurController } from './utilisateur.controller';
import { Utilisateur } from './utilisateur.entity';
import { UtilisateurService } from './utilisateur.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilisateur])
  ],
  controllers: [UtilisateurController],
  providers: [UtilisateurService],
  exports: [UtilisateurService]
})
export class UtilisateurModule {}
