export const frConfig = {
  title: 'Thérapeutique du Cancer',
  description: 'Solutions naturelles pour le traitement du cancer',

  themeConfig: {
    nav: [
      { text: 'Préambule', link: '/introduction' },
      { text: 'Posologie : Phase 1', link: '/posologie_1' },
      { text: 'Terminologie', link: '/terminologie' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Préambule', link: '/introduction' },
          { text: 'Posologie : Phase 1', link: '/posologie_1' },
          { text: 'Terminologie', link: '/terminologie' }
        ],
      },
    ],

    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante'
    },

    outlineTitle: 'Sur cette page',
  }
};