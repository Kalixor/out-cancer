export const frConfig = {
  title: 'HuriYou',
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
      '/fr/sante/': [
        {
          text: 'Santé',
          link: '/fr/sante',
          items: [
            {
              text: '🥦 Thérapie du Cancer',
              link: '/fr/sante/introduction/',
              items: [ {
                text: '🚩 Détox, et Psycho…',
                link: '/fr/sante/posologie_0'
              }],
            },
           
            {
              text: '🖋️ Solution à la psychose',
              link: '/fr/sante/introduction/',
              // si vous voulez un sous‑niveau, vous pouvez ajouter un `items` ici
              items: [
                {
                  text: '🚩Phase 1 – Détox, Cétose',
                  link: '/fr/sante/posologie_0'
                }
              ]
            }
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
