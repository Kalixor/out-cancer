export const enConfig = {
  title: 'Cancer Therapeutics',
  description: 'Natural solutions for cancer treatment',

  themeConfig: {
    nav: [
      { text: 'Introduction', link: '/en/introduction' },
      { text: 'Dosage: Phase 1', link: '/en/posologie_1' },
      { text: 'Terminology', link: '/en/terminologie' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/en/introduction' },
          { text: 'Dosage: Phase 1', link: '/en/posologie_1' },
          { text: 'Terminology', link: '/en/terminologie' }
        ],
      },
    ],

    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },

    outlineTitle: 'On this page',
  }
};