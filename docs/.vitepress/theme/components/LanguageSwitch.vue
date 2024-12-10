<script setup lang="ts">
import { useRouter } from 'vitepress'
import { computed } from 'vue'
import FranceFlag from './icons/FranceFlag.vue'
import UKFlag from './icons/UKFlag.vue'
import ArabicFlag from './icons/ArabicFlag.vue'

const router = useRouter()

const currentPath = computed(() => {
  return router.route.path
})

const switchLanguage = (lang: string) => {
  const path = currentPath.value
  const pathParts = path.split('/')
  const currentLang = pathParts[1]
  const pageName = pathParts[pathParts.length - 1]
  
  // Handle root French pages
  if (lang === 'fr') {
    if (currentLang === 'en' || currentLang === 'ar') {
      // Remove language prefix and keep the page name
      router.go(`/${pageName}`)
    }
    return
  }
  
  // Handle switching to English or Arabic
  if (currentLang === 'en' || currentLang === 'ar') {
    // Already in a language subfolder, just switch the language part
    router.go(path.replace(`/${currentLang}/`, `/${lang}/`))
  } else {
    // Coming from French (root), add language prefix
    router.go(`/${lang}/${pageName}`)
  }
}
</script>

<template>
  <div class="language-switch">
    <button 
      @click="switchLanguage('fr')"
      :class="{ active: !currentPath.match(/^\/(en|ar)\//) }"
      class="lang-button"
      title="Français"
      aria-label="Switch to French"
    >
      <FranceFlag class="flag" />
    </button>
    <button 
      @click="switchLanguage('en')"
      :class="{ active: currentPath.startsWith('/en/') }"
      class="lang-button"
      title="English"
      aria-label="Switch to English"
    >
      <UKFlag class="flag" />
    </button>
    <button 
      @click="switchLanguage('ar')"
      :class="{ active: currentPath.startsWith('/ar/') }"
      class="lang-button"
      title="العربية"
      aria-label="Switch to Arabic"
    >
      <ArabicFlag class="flag" />
    </button>
  </div>
</template>

<style scoped>
.language-switch {
  display: flex;
  gap: 0.25rem;
  margin: 0.5rem 0.75rem;
  align-items: center;
}

.lang-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 20px;
  padding: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  overflow: hidden;
}

.flag {
  width: 80%;
  height: 80%;
  object-fit: cover;
}

.lang-button:hover {
  transform: scale(1.1);
  border-color: var(--vp-c-brand);
}

.lang-button.active {
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 1px var(--vp-c-brand-light);
}

@media (max-width: 640px) {
  .language-switch {
    margin: 0.25rem 0.5rem;
  }
  
  .lang-button {
    width: 24px;
    height: 17px;
  }
}
</style>