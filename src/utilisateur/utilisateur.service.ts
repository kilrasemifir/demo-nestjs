import { Injectable } from '@nestjs/common';
import { UtilisateurDto } from './Utilisateur.dto';
import { Utilisateur } from './utilisateur.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UtilisateurService {

    constructor(
        @InjectRepository(Utilisateur)
        private repository: Repository<Utilisateur>
    ){}

    /**
     * Sauvegarde un utilisateur ou le remplace s'il existe déjà
     * @param utilisateur 
     * @returns 
     */
    save(utilisateur: UtilisateurDto){
        return this.repository.save(utilisateur);
    }

    /**
     * retourne tous les utilisateurs
     * @returns tous les utilisateurs
     */
    findAll(){
        return this.repository.find();
    }

    /**
     * Supprime un utilisateur par son id
     * @param id de l'utilisateur à supprimer
     * @returns ack
     */
    deleteById(id: number){
        return this.repository.delete(id);
    }

    /**
     * Recherche un utilisateur par son id
     * @param id de l'utilisateur à rechercher
     * @returns l'utilisateur
     */
    findById(id: number){
        return this.repository.findOne({where: {id}})
    }

    /**
     * Recherche un utilisateur par son nom
     * @param nom de l'utilisateur à rechercher
     * @returns l'utilisateur
     */
    findByNom(nom: string){
        // <=> SELECT * FROM utilisateurs WHERE nom = nom
        return this.repository.find({where: {nom}})
    }
}
