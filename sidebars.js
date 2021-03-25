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
      items: ['introduction', 'overview'],
    },
    {
      type: 'category',
      label: 'API & References',
      items: ['authentication','hypiobject','createdata','updatedata','readdata','deletedata','crud','authorisation','mathsapi','aggregation', 'workflow', 'webhooks', 'fileupload'],
    },
    {
      type: 'category',
      label: 'Tutorial',
      items: [], //GraphQL, ArcQL
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
    {
      type: 'category',
      label: 'Release Notes',
      items: [],
    },
    {
      type: 'category',
      label: 'Get Involved',
      items: [],
    },
  ],
};
