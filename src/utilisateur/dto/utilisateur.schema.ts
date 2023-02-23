import * as Joi from "joi";
import { Voiture } from "src/voiture/entities/voiture.entity";

export const utilisateurSchema = Joi.object({
    nom: Joi.string().required(),
    prenom: Joi.string().required(),
    email: Joi.string().email().required().messages({
        "any.required": "Vous devez definir un email"
    }),
    voitures: Joi.array<Voiture>()
})