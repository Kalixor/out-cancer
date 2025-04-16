// server.js
import express from 'express';
import cors from 'cors';
import { promises as fsPromises } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3001;

// Définir __filename et __dirname pour les ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier JSON de stockage des commentaires
const COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Fonction utilitaire pour lire le fichier et retourner un objet avec meta et comments
const readCommentsData = async () => {
  try {
    const data = await fsPromises.readFile(COMMENTS_FILE, 'utf8');
    if (data.trim()) {
      return JSON.parse(data);
    } else {
      // Fichier vide, retourne l'objet par défaut
      return { meta: { count: 0 }, comments: [] };
    }
  } catch (err) {
    console.error(err);
    // En cas d'erreur (fichier inexistant, etc.), retourne l'objet par défaut
    return { meta: { count: 0 }, comments: [] };
  }
};

// Endpoint pour récupérer l'ensemble des commentaires (avec meta)
app.get('/api/comments', async (req, res) => {
  try {
    const commentsData = await readCommentsData();
    res.json(commentsData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la lecture des commentaires' });
  }
});

// Nouvel endpoint pour récupérer uniquement le nombre courant de commentaires
app.get('/api/comments/count', async (req, res) => {
  try {
    const commentsData = await readCommentsData();
    res.json({ count: commentsData.meta.count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la lecture du count de commentaires' });
  }
});

// Endpoint pour ajouter un commentaire
app.post('/api/comments', async (req, res) => {
  const { pseudo, text } = req.body;
  if (!pseudo || !text) {
    return res.status(400).json({ error: 'Le pseudo et le texte sont obligatoires.' });
  }
  const newComment = { pseudo, text, date: new Date().toISOString() };

  try {
    // Lire les données existantes
    const commentsData = await readCommentsData();
    // Ajouter le nouveau commentaire
    commentsData.comments.push(newComment);
    // Mettre à jour le meta count
    commentsData.meta.count = commentsData.comments.length;
    // Sauvegarder le fichier JSON
    await fsPromises.writeFile(COMMENTS_FILE, JSON.stringify(commentsData, null, 2));
    res.json(newComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de l’enregistrement du commentaire' });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur d'API à l’écoute sur http://localhost:${PORT}`);
});
