export const frConfig = {
  title: 'LibertyNa',
  description: 'Des Solutions naturelles pour le traitement du cancer',

  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/' },
      {
        text: 'Santé',
        link: '/fr/sante/introduction/',
        activeMatch: '^/fr/sante/'
        
      },
      {
        text: 'Foi',
        link: '/fr/foi/',
        activeMatch: '^/fr/foi/'
      }
    ],
  
    sidebar: {
      // quand l'URL commence par /fr/sante/
      '/fr/sante/': [
        {
          text: '🥦 Thérapeutique du Cancer',
          link: '/fr/sante/introduction/',
          items: [
            {
              text: '🖋️ Préambule du Protocole',
              link: '/fr/sante/introduction/'   // notez le slash final
            },
            {
              text: '🚩Détox, Cétose, Psycho...',
              link: '/fr/sante/posologie_0'
            }
            // … autres pages santé
          ]
        },
        {
          text: '🥦 Solution à la psychose',
          items: [
            {
              text: '🖋️ Préambule du Protocole',
              link: '/fr/sante/introduction/'   // notez le slash final
            },
            {
              text: '🚩Détox, Cétose, Psycho...',
              link: '/fr/sante/posologie_0'
            }
            // … autres pages santé
          ]
        }
      ],

      '/fr/foi/': [
        {
          text: 'Foi',
          items: [
            {
              text: "Fondements de l'idéologie",
              link: '/fr/sante/introduction/'   // notez le slash final
            },
            {
              text: '🚩Détox, Cétose, Psycho...',
              link: '/fr/sante/posologie_0'
            }
            // … autres pages santé
          ]
        }
      ]
    },

    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante'
    },

    outlineTitle: 'Sur cette page',
  }
};
