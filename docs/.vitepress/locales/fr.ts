export const frConfig = {
  title: 'HuriYou',
  description: 'Des Solutions naturelles pour le traitement du cancer',

  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/fr/' },
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
          text: 'SANTÉ',
          link: '/fr/sante',
          activeMatch: '^/fr/sante/',

          items: [
            {
              text: '🥦 THÉRAPIE DU CANCER',
              link: '/fr/sante/introduction/',
              activeMatch: '^/fr/sante/introduction',

              items: [ {
                text: '🚩 Détox et Psycho…',
                link: '/fr/sante/posologie_0'
              },
              {
                text: '🚩 Diète oxydative',
                link: '/fr/sante/posologie_1'
              }],
            },
           
            {
              text: '🖋️ Solution à la psychose',
              link: '/fr/sante/introduction/',
              // si vous voulez un sous‑niveau, vous pouvez ajouter un `items` ici
              items: [
                {
                  text: '🚩Les frustrations',
                  link: '/fr/sante/posologie_3'
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
