<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Tooltip from './Tooltip.vue'


// Exemple dans SocialActions.vue (script setup ou méthode)
const fetchCommentsCount = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/comments/count');
    const data = await response.json();
    // Mettre à jour votre état avec data.count
    return data.count;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

const likes = ref(0)
// Initialisation de la ref avec une valeur par défaut
const comments = ref<number>(0);
const reviews = ref(0)

// Définition des props permettant de choisir quelles actions afficher et personnaliser le tooltip
const props = defineProps({
  showLikes: { type: Boolean, default: true },
  showComments: { type: Boolean, default: true },
  showShare: { type: Boolean, default: true },
  showReview: { type: Boolean, default: true },
  tooltipSubject: { type: String, default: "cet article" }
})

const handleLike = () => {
  likes.value++
}

const handleComment = () => {
}

const handleReview = () => {
  reviews.value++
}

const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Thérapeutique du Cancer',
        text: 'Des solutions naturelles, pourtant simples et efficaces !',
        url: window.location.href
      })
    } catch (err) {
      console.log('Error sharing:', err)
    }
  }
}


// Au montage, on met à jour la valeur avec le résultat de la promesse
onMounted(async () => {
  comments.value = await fetchCommentsCount();
});

</script>

<template>
  <div class="social-actions-wrapper">
    <div class="social-actions">
      <Tooltip :text="`Aimer ${tooltipSubject}`" v-if="showLikes">
        <button @click="handleLike" class="action-button">
          <FontAwesomeIcon icon="heart" />
          <span class="count">{{ likes }}</span>
        </button>
      </Tooltip>
      
      <Tooltip :text="`Commenter ${tooltipSubject}`" v-if="showComments">
        <button @click="handleComment" class="action-button">
          <FontAwesomeIcon icon="comment" />
          <span class="count">{{ comments }}</span>
        </button>
      </Tooltip>
      
      <Tooltip text="Donnez votre avis" v-if="showReview">
        <button @click="handleReview" class="action-button">
          <FontAwesomeIcon icon="coffee" />
          <span class="count">{{ reviews }}</span>
        </button>
      </Tooltip>
      
      <Tooltip :text="`Partager ${tooltipSubject}`" v-if="showShare">
        <button @click="handleShare" class="action-button">
          <FontAwesomeIcon icon="share-nodes" />
        </button>
      </Tooltip>
    </div>
  </div>
</template>

<style scoped>
.social-actions-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
}

.social-actions {
  display: flex;
  gap: 0.75rem;
  padding: 0.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.action-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: var(--vp-c-bg-mute);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--vp-c-text-2);
}

.action-button:hover {
  transform: scale(1.05);
  background: var(--vp-c-bg);
  color: var(--vp-c-brand);
}

.action-button:active {
  transform: scale(0.95);
}

.icon {
  font-size: 1.2rem;
  line-height: 1;
}

.count {
  font-size: 0.9rem;
  font-weight: 500;
  min-width: 1rem;
  text-align: center;
}

@media (max-width: 640px) {
  .social-actions {
    gap: 0.5rem;
    padding: 0.4rem;
  }
  
  .action-button {
    padding: 0.4rem 0.8rem;
  }
  
  .icon {
    font-size: 1.1rem;
  }
  
  .count {
    font-size: 0.8rem;
  }
}
</style>
