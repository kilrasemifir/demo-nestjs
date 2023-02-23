import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculatriceController } from './calculatrice/calculatrice.controller';
import { CalculatriceService } from './calculatrice/calculatrice.service';
import { CalculatriceV2Service } from './calculatrice-v2/calculatrice-v2.service';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from './utilisateur/entities/utilisateur.entity';
import { VoitureModule } from './voiture/voiture.module';
import { Voiture } from './voiture/entities/voiture.entity';

@Module({
  imports: [
    UtilisateurModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: "root",
      password: process.env["DB_PASSWORD"] || "root",
      database: "test",
      entities: [
        Utilisateur,
        Voiture
      ],
      synchronize: true
    }),
    VoitureModule
  ],
  controllers: [AppController, CalculatriceController],
  providers: [AppService, CalculatriceService, CalculatriceV2Service],
})
export class AppModule {}
