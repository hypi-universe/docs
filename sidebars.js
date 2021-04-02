// module.exports = {
//   someSidebar: {
//     'Getting Started': ['introduction', 'overview'],
//     'API References': ['authentication','hypiobject','createdata','updatedata','readdata','deletedata','crud','authorisation','mathsapi','aggregation'],
//     'Sample App': ['mdx'],
//     'User Interface': ['mdx'],
//   },
// };

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Welcome',
      items: ['introduction', 'overview', 'get-started'],
    },
    {
      type: 'category',
      label: 'API & References',
      items: ['apisetup','authentication','arcql','hypiobject','crud','createdata','updatedata','readdata','deletedata','references','authorisation','apigateway','aggregation','mathsapi','userdefinedfunctions','workflow','triggers','webhooks','serverlessfunction','fileupload','rest-apis','oauth2login','password-reminder'],
    },
    {
      type: 'category',
      label: 'Hypi + Angular',
      items: ['hypi-angular'],
    },
    {
      type: 'category',
      label: 'Tutorial',
      items: [
	'graphql',
        {
	  'GraphQL Features': ['gql-introduction','gql-queries','gql-mutations','gql-directives','gql-interfaces','gql-schema-types'],
	},
	'gql-crud-tutorial',
	'time-series-aggregations',
	], //GraphQL, ArcQL
    },
    {
      type: 'category',
      label: 'Case study: Build a social network',
      items: [],
    },
    {
      type: 'category',
      label: 'User Interface Guide',
      items: [],
    },
    'glossary',
    'get-involved',
    	
//    {
//      type: 'category',
//      label: 'Glossary',
 //     items: ['glossary'],
 //   },
    {
      type: 'category',
      label: 'Release Notes',
      items: [],
    },
 //   {
 //     type: 'category',
 //     label: 'Get Involved',
 //     items: ['get-involved'],
 //   },
  ],
};
