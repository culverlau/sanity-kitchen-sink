export default {
  widgets: [
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
                  buildHookId: '604272f38f66fd0089669bcd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mozv8r5h',
                  apiId: 'a948579d-c7f6-445d-a0e5-777e152b2e80'
                },
                {
                  buildHookId: '604272f38ab0ec0097836188',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dg1d55dk',
                  apiId: '40c868f3-022c-4c34-86bc-a6e1bc5f4bd9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/culverlau/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dg1d55dk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
