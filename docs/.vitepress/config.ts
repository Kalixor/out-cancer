import { defineConfig } from 'vitepress';
import { enConfig } from './locales/en';
import { frConfig } from './locales/fr';
import { arConfig } from './locales/ar';

export default defineConfig({
  locales: {
    root: {
      label: 'Français',
      lang: 'fr',
      ...frConfig
    },
    en: {
      label: 'English',
      lang: 'en',
      ...enConfig
    },
    ar: {
      label: 'العربية',
      lang: 'ar',
      ...arConfig
    }
  },

  appearance: true,

  markdown: {
    container: {
      customQuote: {
        render: (tokens, idx) => {
          const token = tokens[idx]
          if (token.nesting === 1) {
            return '<div class="custom-quote">\n'
          } else {
            return '</div>\n'
          }
        }
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Kalixor/re-cancer' }
    ]
  }
});
