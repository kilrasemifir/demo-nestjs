import { Voiture } from "src/voiture/entities/voiture.entity";

export class UtilisateurDto{
    constructor(
        public nom: string = "Do",
        public prenom: string = "John",
        public email: string = "john.do@mail.com",
        public voitures: Voiture[] = []
    ){}
}