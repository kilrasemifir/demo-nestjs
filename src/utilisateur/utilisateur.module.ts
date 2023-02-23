import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotFoundFilter } from 'src/exceptions/not-found/not-found.filter';
import { UtilisateurController } from './controllers/utilisateur.controller';
import { Utilisateur } from './entities/utilisateur.entity';
import { UtilisateurRepository } from './repositories/utilisateur.reposiory';
import { UtilisateurService } from './services/utilisateur.service';

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
