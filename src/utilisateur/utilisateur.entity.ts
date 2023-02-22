import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
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
}