import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { validate } from 'class-validator';
import { Utilisateur } from '../../entities/utilisateur.entity';
@Injectable()
export class ClassValidatorUtilisateurPipe implements PipeTransform {
  transform(value: Utilisateur, metadata: ArgumentMetadata) {
    const error = validate(value);
    return value;
  }
}
