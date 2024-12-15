export const frConfig = {
  title: 'Thérapeutique du Cancer',
  description: 'Solutions naturelles pour le traitement du cancer',

  themeConfig: {
    nav: [
      { text: 'Préambule', link: '/introduction' },
      { text: 'Phase 1 🚩 Initialisation Cétose', link: '/posologie_0' },
      { text: 'Phase 2 🚩 Stress Alimentaire, Famine', link: '/posologie_1' },
      { text: 'Phase 3 🚩 Stress Oxydatif, Cytotoxicité', link: '/posologie_1' },
      { text: 'Phase 4 🚩 Rééquilibrage, Homéostasie', link: '/posologie_1' },
      { text: 'Terminologie', link: '/terminologie' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Préambule', link: '/introduction' },
          { text: 'Phase 1 🚩 Initialisation Cétose', link: '/posologie_0' },
          { text: 'Phase 2 🚩 Stress Alimentaire,...', link: '/posologie_1' },
          { text: 'Phase 3 🚩 Stress Oxydatif,...', link: '/posologie_1' },
          { text: 'Phase 4 🚩 Rééquilibrage,...', link: '/posologie_1' },
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