<template>
  <div class="comment-section">
    <h2>Commentaires</h2>

    <!-- Liste des commentaires -->
    <div v-if="comments.length" class="comments-list">
      <div v-for="(comment, index) in comments" :key="index" class="comment">
        <p class="comment-header">
          <span class="comment-pseudo">{{ comment.pseudo }}</span>
          <span class="comment-date">{{ formatDate(comment.date) }}</span>
        </p>
        <p class="comment-body">{{ comment.text }}</p>
      </div>
    </div>
    <div v-else>
      <p>Aucun commentaire pour l'instant. Soyez le premier à commenter !</p>
    </div>

    <!-- Formulaire d'ajout de commentaire -->
    <form @submit.prevent="addComment" class="comment-form">
      <input
        type="text"
        v-model="newComment.pseudo"
        placeholder="Votre pseudo"
        required
        class="comment-input pseudo-input"
      />
      <textarea
        v-model="newComment.text"
        placeholder="Votre commentaire"
        required
        class="comment-input text-input"
      ></textarea>
      <button type="submit" class="btn submit-btn">Envoyer</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Définition de l'interface pour un commentaire
interface Comment {
  pseudo: string
  text: string
  date: string
}

// Dans ce composant, 'comments' sera uniquement le tableau de commentaires.
const comments = ref<Comment[]>([])

// Objet réactif pour le nouveau commentaire
const newComment = ref<{ pseudo: string; text: string }>({
  pseudo: '',
  text: ''
})

// Fonction utilitaire pour formater la date
const formatDate = (dateStr: string): string => new Date(dateStr).toLocaleString()

// Charger les commentaires depuis le serveur lors du montage du composant
onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3001/api/comments')
    if (!response.ok) {
      throw new Error('Erreur lors du chargement des commentaires')
    }
    // On extrait le tableau via la propriété "comments" de l'objet renvoyé
    const data = await response.json() as { meta: { count: number }; comments: Comment[] }
    comments.value = data.comments
  } catch (error) {
    console.error(error)
  }
})

// Fonction pour ajouter un nouveau commentaire via l'API
const addComment = async () => {
  if (newComment.value.pseudo.trim() && newComment.value.text.trim()) {
    try {
      const response = await fetch('http://localhost:3001/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pseudo: newComment.value.pseudo.trim(),
          text: newComment.value.text.trim()
        })
      })
      if (!response.ok) {
        throw new Error('Erreur lors de l’ajout du commentaire')
      }
      // On extrait le commentaire sauvegardé
      const savedComment = (await response.json()) as Comment
      // On ajoute le commentaire dans le tableau existant
      comments.value.push(savedComment)
      // Réinitialiser le formulaire
      newComment.value.pseudo = ''
      newComment.value.text = ''
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped>
.comment-section {
  border: 1px solid #ccc;
  box-shadow: 2px -2px 12px #64d2f552;
  transition: box-shadow 0.3s ease;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 2rem;
}

.comment-section h2 {
  margin-bottom: 1rem;
}

.comments-list {
  margin-bottom: 1rem;
}

.comment {
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.comment-pseudo {
  font-weight: bold;
}

.comment-date {
  color: #777;
}

.comment-body {
  margin: 0;
}

.comment-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.comment-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.text-input {
  min-height: 80px;
}

.btn.submit-btn {
  align-self: flex-end;
  padding: 0.5rem 1rem;
  background-color: #64d2f552;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
