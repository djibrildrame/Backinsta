import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = 5000;

// URI de connexion à la base de données locale
const uri = 'mongodb://localhost:27017/insta';

// Middleware pour permettre les requêtes Cross-Origin (CORS)
app.use(cors());

// Middleware pour permettre à Express de parser le corps des requêtes JSON
app.use(express.json());

// Connexion à MongoDB avec Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion à MongoDB réussie !');
  })
  .catch((error) => {
    console.error('Connexion à MongoDB échouée !', error);
  });

// Définir le schéma et le modèle Mongoose
const userSchema = new mongoose.Schema({
  emailOrMobile: { type: String, required: true },
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Route pour la création d'un nouvel utilisateur
app.post('/creercompte', async (req: Request, res: Response): Promise<void> => {
  const { emailOrMobile, fullName, username, password } = req.body;

  try {
    const newUser = new User({
      emailOrMobile,
      fullName,
      username,
      password,
    });

    const savedUser = await newUser.save();
    res.json({ message: 'Inscription réussie', user: savedUser });
  } catch (error: any) {
    console.error('Erreur lors de la création du compte', error);
    res.status(500).json({ error: 'Erreur lors de la création du compte.' });
  }
});

// Route de test
app.get('/insta', (req: Request, res: Response) => {
  res.send('Hello, Instagram API!');
});

app.listen(port, () => {
  console.log(`Votre serveur est disponible à l'adresse http://localhost:${port}`);
});
