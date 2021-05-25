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
      items: ['api-references','apisetup','authentication','scalars','hypiobject','crud','createdata','updatedata','readdata','deletedata','arcql','references','authorisation','realtime-db','apigateway','aggregation','mathsapi','hypi-directives','userdefinedfunctions','workflow','triggers','webhooks','fileupload','rest-apis','oauth2login','password-reminder'],
    },
    {
      type: 'category',
      label: 'Serverless',
      items: ['serverless', 'openwhisk-cli', 'create-serverless','use-serverless','openwhisk-actions','openwhisk-parameters','openwhisk-annotations','openwhisk-triggers','openwhisk-sequences','openwhisk-conductors','openwhisk-packages','openwhisk-webactions'],
    },
    {
      type: 'category',
      label: 'Serverless: Language Support',
      items: ['actions-nodejs','actions-python','actions-java','actions-swift','actions-go','actions-php','actions-ruby','actions-rust','actions-dotnet','actions-docker'],
    },
    {
      type: 'category',
      label: 'Hyoi CLI',
      items: ['hypi-cli'],
    },
    {
      type: 'category',
      label: 'GraphQL',
      items: ['graphql', 'gql-introduction', 'gql-schema-types','gql-queries','gql-mutations','gql-interfaces'],
    },
    {
      type: 'category',
      label: 'System Apps',
      items: ['core'],
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
      items: ['ui-create-app','ui-create-release','ui-create-table-vb','ui-create-table-gse','ui-add-environment-var','ui-add-dependencies','ui-deprecate-publish','ui-create-instance','ui-view-instance','ui-instance-api-config','ui-gql-config','ui-gql-playground','ui-data-migration','ui-real-time-streams'],
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
