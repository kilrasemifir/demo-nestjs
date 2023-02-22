import { Voiture } from 'src/voiture/entities/voiture.entity';
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    ManyToMany,
    JoinTable,
    JoinColumn
} from 'typeorm'

@Entity({
    name:"utilisateurs"
})
export class Utilisateur {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    email: string;

    @ManyToMany(()=>Voiture, {eager: true, cascade: ["insert"]})
    @JoinTable()
    voitures: Voiture[]
}