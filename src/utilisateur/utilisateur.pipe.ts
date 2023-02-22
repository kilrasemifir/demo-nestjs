import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UtilisateurPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value.nom){
      throw new BadRequestException("Vous devez entrer un nom")
    }
    if (!value.prenom){
      throw new BadRequestException("Vous devez entrer un prenom")
    }
    if (!value.email){
      throw new BadRequestException("Vous devez entrer un email")
    }
    
    return {
      nom: value.nom,
      prenom: value.prenom,
      email: value.email,
      voitures: value.voitures
    };
  }
}
