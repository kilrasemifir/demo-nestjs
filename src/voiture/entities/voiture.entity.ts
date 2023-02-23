import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { Entity } from 'typeorm';
import { PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity()
export class Voiture {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    marque: string;

    @Column()
    modele: string;

    @Column()
    imatriculation: string;

    // @ManyToMany(type => Utilisateur, utilisateur=>utilisateur.voitures)
    // proprietaires: Utilisateur[]

}
