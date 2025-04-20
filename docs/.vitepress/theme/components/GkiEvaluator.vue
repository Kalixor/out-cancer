<template>
    <div class="gki-calculator">
      <label>
        Glycémie (g/L) :
        <input
          type="number"
          v-model.number="glycemie"
          placeholder="Entrez votre glycémie"
          step="0.01"
        />
      </label>
      <label>
        Cétonémie (g/L) :
        <input
          type="number"
          v-model.number="cetone"
          placeholder="Entrez votre cétonémie"
          step="0.001"
        />
      </label>
  
      <div v-if="glycemie > 0 && cetone > 0" class="result">
        <!-- Affichage du GKI -->
        <p>
          Votre GKI est : <strong>{{ gki.toFixed(2) }}</strong>
        </p>
        <!-- Affichage du niveau de cétose déterminé à partir du GKI -->
        <p>
          Niveau de cétose :
        </p>
        <p>
          <span :class="ketoseClass" class="ketose-label">
            {{ ketoseCategory }}
          </span>
        </p>
        <!-- Ligne conseil basée sur la cétonémie saisie -->
        <p>
          Evaluation :
        </p>
        <p v-if="conseilInfo.message">
          <span :class="conseilInfo.class" class="conseil-label">
            {{ conseilInfo.message }}
          </span>
        </p>
      </div>
      <p v-else>
        Veuillez saisir des valeurs valides pour la glycémie et la cétonémie.
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  // Valeurs saisies par l'utilisateur (en g/L)
  const glycemie = ref(0)
  const cetone = ref(0)
  
  // Conversions (1 g/L de glucose ≈ 5,5 mmol/L et 1 g/L de cétones ≈ 9,52 mmol/L)
  const glucose_mmol = computed(() => glycemie.value * 5.5)
  const cetone_mmol = computed(() => cetone.value * 9.52)
  
  // Calcul du GKI
  const gki = computed(() => {
    return (cetone.value > 0)
      ? glucose_mmol.value / cetone_mmol.value
      : 0
  })
  
  // Détermination du niveau de cétose (exemple de classification basée sur le GKI)
  const ketoseCategory = computed(() => {
    const value = gki.value
    if (value === 0) return ''
    if (value >= 10) return 'Absence'
    if (value >= 7) return 'Légère'
    if (value >= 3.5) return 'Modérée'
    if (value >= 1.2) return 'Profonde'
    return 'Maximale'
  })
  
  // Attribution d'une classe CSS en fonction du niveau de cétose
  const ketoseClass = computed(() => {
    const value = gki.value
    if (value === 0) return ''
    if (value >= 10) return 'bg-gray-200/50 text-black p-1'
    if (value >= 7) return 'bg-green-200/50 text-black p-1'
    if (value >= 3.5) return 'bg-green-200/50 text-black p-1'
    if (value >= 1.2) return 'bg-orange-300/50 text-black p-1'
    return 'bg-red-600/50 text-white p-1'
  })
  
  // Calcul du conseil en fonction de la cétonémie saisie (en g/L) et de la table de tolérance
  const conseilInfo = computed(() => {
    const k = cetone.value
    if (k > 0.0523 && k < 0.2615) {
      return { message: "👍 Cétose acceptable", class: "bg-green-200/50 text-black p-1" }
    } else if (k >= 0.2615 && k < 0.3138) {
      return { message: "🤨 Cétose limite : Basculer le régime, 20 % Glucides - 80 % Lipides", class: "bg-orange-200/50 text-black p-1" }
    } else if (k >= 0.3138 && k < 0.4707) {
      return { message: "😯 Cétose critique : Inverser, 80 % Glucides - 20 % Lipides", class: "bg-red-600/50 text-white p-1" }
    } else if (k >= 0.4707 && k < 0.5230) {
      return { message: "⛔ Cétose fatal : Stopper les lipides, jusqu'à la cétose limite", class: "bg-red-600/80 text-white p-1" }
    } else {
      return { message: "", class: "" }
    }
  })
  </script>
  
  <style scoped>
  .gki-calculator {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
    margin: 1.3rem;
  }
  
  .gki-calculator label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }
  
  .gki-calculator input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .result p {
    margin: 0.5rem 0;
  }
  
  .ketose-label,
  .conseil-label {
    display: inline-block;
    border-radius: 4px;
  }
  </style>
  