<template>
    <div class="imc-calculator">
      <label>
        Poids (kg) :
        <input type="number" v-model="poids" placeholder="Entrez votre poids" step="0.1" />
      </label>
      <label>
        Taille (m) :
        <input type="number" v-model="taille" placeholder="Entrez votre taille" step="0.01" />
      </label>
  
      <div v-if="taille > 0" class="result">
        <!-- Ligne affichant la valeur de l'IMC -->
        <p>
          Votre IMC est : <strong>{{ imc.toFixed(2) }}</strong>
        </p>
        <!-- Nouvelle ligne affichant la catégorie avec le style approprié -->
        <p>
          <span :class="categorieClass" class="category-label">
            {{ categorieLabel }}
          </span>
        </p>
      </div>
      <p v-else>
        Veuillez saisir une taille valide pour calculer l'IMC.
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const poids = ref(0)
  const taille = ref(0)
  
  // Calcul de l'IMC : Poids / (Taille²)
  const imc = computed(() => {
    return taille.value > 0 ? poids.value / (taille.value ** 2) : 0
  })
  
  // Détermination de la catégorie en fonction de l'IMC
  const categorieLabel = computed(() => {
    const value = imc.value
    if (value === 0) return ''
    if (value < 16.5) return 'Dénutrition ou famine'
    if (value < 18.5) return 'Maigreur'
    if (value < 25) return 'Corpulence normale'
    if (value < 30) return 'Surpoids'
    if (value < 35) return 'Obésité modérée'
    if (value < 40) return 'Obésité sévère'
    return 'Obésité morbide ou massive'
  })
  
  // Attribution des classes en fonction de la catégorie
  const categorieClass = computed(() => {
    const value = imc.value
    if (value === 0) return ''
    if (value < 16.5) return 'bg-red-600/80 text-white p-1'
    if (value < 18.5) return 'bg-orange-300/50 text-black p-1'
    if (value < 25) return 'bg-green-200/50 text-black p-1'
    if (value < 30) return 'bg-orange-300/50 text-black p-1'
    if (value < 35) return 'bg-red-400/50 text-white p-1'
    if (value < 40) return 'bg-red-600/50 text-white p-1'
    return 'bg-red-600/80 text-white p-1'
  })
  </script>
  
  <style scoped>
  .imc-calculator {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
    margin: 1rem 0;
  }
  
  .imc-calculator label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }
  
  .imc-calculator input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .result p {
    margin: 0.5rem 0;
  }
  
  .category-label {
    display: inline-block;
    border-radius: 4px;
    /* Vous pouvez éventuellement ajouter un padding ou d'autres styles ici */
  }
  </style>
  