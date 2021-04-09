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
      items: ['introduction', 'overview', 'get-started','faq'],
    },
    {
      type: 'category',
      label: 'API & References',
      items: ['api-references','apisetup','authentication','arcql','hypiobject','crud','createdata','updatedata','readdata','deletedata','references','authorisation','apigateway','aggregation','mathsapi','userdefinedfunctions','workflow','triggers','webhooks','serverlessfunction','fileupload','rest-apis','oauth2login','password-reminder'],
    },
    'hypi-angular',
    {
      type: 'category',
      label: 'Tutorial',
      items: [
	'tutorials',
	'graphql',
        {
	  'GraphQL Features': ['gql-introduction','gql-schema-types','gql-queries','gql-mutations','gql-directives','gql-interfaces'],
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
      items: ['ui-create-app','ui-create-release','ui-create-table-vb','ui-create-table-gse','ui-add-environment-var','ui-add-dependencies','ui-deprecate-publish','ui-create-instance','ui-view-instance','ui-instance-api-config','ui-gql-config','ui-gql-playground'],
    },
    'glossary',
    'get-involved',
   {
      type: 'category',
      label: 'Release Notes',
      items: [],
    },
  ],
};
