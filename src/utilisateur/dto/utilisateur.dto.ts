import { IsString } from "class-validator";
import { IsAlpha, IsEmail, IsNotEmpty, IsOptional, ValidateIf } from "class-validator/types/decorator/decorators";
import { Voiture } from "src/voiture/entities/voiture.entity";

export class UtilisateurDto{
    @IsString({message: "Un utilisateur doit avoir un nom"})
    @IsAlpha()
    @IsNotEmpty()
    public nom: string = "Do";

    @IsString()
    public prenom: string = "John";

    @IsEmail()
    public email: string = "john.do@mail.com";

    @ValidateIf((voitures: Voiture[])=>voitures?.length < 10)5
    @IsOptional()
    public voitures: Voiture[] = []
}