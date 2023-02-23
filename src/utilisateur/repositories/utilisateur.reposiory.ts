import { Injectable } from "@nestjs/common";
import { DataSource } from 'typeorm';
import { Utilisateur } from "../entities/utilisateur.entity";


@Injectable()
export class UtilisateurRepository {

    constructor(
        private dataSource: DataSource
    ){}

    async saveMany(utilisateurs: Utilisateur[]){
        const queryRunner = this.dataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {

            for(let utilisateur of utilisateurs){
                await queryRunner.manager.save(utilisateur);
            }
            await queryRunner.manager.delete(Utilisateur, 1);

            await queryRunner.commitTransaction()
        } catch (err){
            await queryRunner.rollbackTransaction();
        }
        await queryRunner.release()
    }
}