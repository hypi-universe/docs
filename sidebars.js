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
      items: ['api-references','apisetup','authentication','hypiobject','crud','createdata','updatedata','readdata','deletedata','arcql','references','authorisation','apigateway','aggregation','mathsapi','hypi-directives','userdefinedfunctions','workflow','triggers','webhooks','fileupload','rest-apis','oauth2login','password-reminder'],
    },
    {
      type: 'category',
      label: 'Serverless',
      items: ['serverless', 'openwhisk-cli', 'create-serverless','use-serverless'],
    },
    {
      type: 'category',
      label: 'GraphQL',
      items: ['graphql', 'gql-introduction', 'gql-schema-types','gql-queries','gql-mutations','gql-interfaces'],
    },
    'hypi-angular',
    {
      type: 'category',
      label: 'Tutorial',
      items: [
	'tutorials',
	'gql-crud-tutorial',
	'time-series-aggregations',
	], 
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
