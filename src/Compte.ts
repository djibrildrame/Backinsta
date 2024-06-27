import mongoose, { Document, Schema } from 'mongoose';

// Définition de l'interface pour le modèle Compte
interface ICompte extends Document {
  emailOrMobile: string;
  fullName: string;
  username: string;
  password: string;
}

// Schéma Mongoose pour le modèle Compte
const CompteSchema: Schema = new Schema({
  emailOrMobile: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Création du modèle Mongoose
const Compte = mongoose.model<ICompte>('Compte', CompteSchema);

export { Compte };
