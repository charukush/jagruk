export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60a6ef658569860097156ed8',
                  title: 'Sanity Studio',
                  name: 'jagruk-studio',
                  apiId: '41dae343-a779-43ce-97a1-eae92fb21e23'
                },
                {
                  buildHookId: '60a6ef650eeca300b95cfc7f',
                  title: 'Landing pages Website',
                  name: 'jagruk',
                  apiId: '2b3d2501-3e61-4076-b240-049793f05785'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/charukush/jagruk',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://jagruk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
