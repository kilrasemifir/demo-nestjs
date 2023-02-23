import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { utilisateurSchema } from './utilisateur.schema';

@Injectable()
export class UtilisateurPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const {error} = utilisateurSchema.validate(value);
    if (error){
      throw new BadRequestException(error.message)
    }
    return {
      nom: value.nom,
      prenom: value.prenom,
      email: value.email,
      voitures: value.voitures
    };
  }
}
