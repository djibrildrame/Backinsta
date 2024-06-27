import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = 5000;

// URI de connexion à la base de données locale
const uri = 'mongodb://127.0.0.1:27017/insta';

// Middleware pour permettre les requêtes Cross-Origin (CORS)
app.use(cors());

// Middleware pour permettre à Express de parser le corps des requêtes JSON
app.use(express.json());

// Connexion à MongoDB avec Mongoose
mongoose.connect(uri)
  .then(() => {
    console.log('Connexion à MongoDB réussie !');
  })
  .catch((error) => {
    console.error('Connexion à MongoDB échouée !', error);
  });

// Route de test
app.get('/insta', (req: Request, res: Response) => {
  res.send('Hello, Instagram API!');
});

app.listen(port, () => {
  console.log(`Your server available at http://localhost:${port}`);
});


/*
// Middleware pour permettre les requêtes Cross-Origin (CORS)
app.use(cors());

// Middleware pour permettre à Express de parser le corps des requêtes JSON
app.use(express.json());

// Route pour la création d'un nouvel utilisateur
app.post('/creercompte', async (req: Request, res: Response): Promise<void> => {
  const { emailOrMobile, fullName, username, password } = req.body;

  try {
    const newCompte = new Compte({
      emailOrMobile,
      fullName,
      username,
      password,
    });

    const savedCompte = await newCompte.save();
    res.json({ message: 'Inscription réussie', user: savedCompte });
  } catch (error: any) {
    console.error('Erreur lors de la création du compte', error);
    res.status(500).json({ error: 'Erreur lors de la création du compte.' });
  }
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur http://localhost:${port}`);
});

*/