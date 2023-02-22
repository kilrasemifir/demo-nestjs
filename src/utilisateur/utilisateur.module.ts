import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotFoundFilter } from 'src/not-found/not-found.filter';
import { UtilisateurController } from './utilisateur.controller';
import { Utilisateur } from './utilisateur.entity';
import { UtilisateurRepository } from './utilisateur.reposiory';
import { UtilisateurService } from './utilisateur.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilisateur])
  ],
  controllers: [UtilisateurController],
  providers: [
    UtilisateurService, 
    UtilisateurRepository,
    {
      provide: APP_FILTER,
      useClass: NotFoundFilter
    }
  ],
  exports: [UtilisateurService]
})
export class UtilisateurModule {}
