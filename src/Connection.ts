import mongoose from 'mongoose';

// URI de connexion à la base de données
const uri: string = 'mongodb://127.0.0.1:27017/insta';

// Connexion à MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log('Connexion à MongoDB réussie !');
  })
  .catch((error: Error) => {
    console.error('Connexion à MongoDB échouée :', error);
  });
