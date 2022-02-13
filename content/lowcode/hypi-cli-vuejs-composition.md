---
id: hypi-cli-vuejs-composition
title: Use Hypi in VueJS Composition Project
sidebar_label: VueJS Composition
slug: /lowcode/hypi-cli-vuejs-composition
---

In this guide, we will access Hypi APIs inside the VueJS version 3 TypeScript app using the Hypi CLI.

**Prerequisites**: Knowledge of application development using VueJS. Development set up for VueJS.

### Create VueJS 3 Composition App

Create a VueJS version 3 typescript project using [vite](https://v3.vuejs.org/guide/installation.html#vite) or use an example from [here](https://github.com/hypi-universe/hypi-cli-vuejs3-composition-api-example) .

In this example, we will use the apollo client as the graphql client. Add the following dependencies to `package.json`
```
"@apollo/client": "^3.3.21",
    "@vue/apollo-composable": "^4.0.0-alpha.14",
    "@vue/apollo-option": "^4.0.0-alpha.14",
    "@vue/composition-api": "^1.0.4",
    "graphql": "^15.5.1",
    "graphql-tag": "^2.12.5",
```     
OR

Install the dependencies from the command line.
```
npm install --save  @vue/apollo-composable 
npm install @vue/composition-api @vue/apollo-option 
npm install --save graphql graphql-tag @apollo/client
```
Let's start using Hypi CLI now.

### Config

If you're an on-premise customer, you can use the `hypi config` option to set the hostname of your installation. Configure your domain using following command.
```
USAGE
  $ hypi config [API_DOMAIN]

OPTIONS
  -a, --api_domain=api_domain
  -h, --help                   show CLI help

EXAMPLES
  $ hypi config https://api.my-onpremise-domain.com
  $ hypi config -a=https://api.my-onpremise-domain.com
  $ hypi config --api_domain=https://api.my-onpremise-domain.com
```
Go to your VueJS project folder on the command line and run `hypi config` to set configuration.
```
>hypi config https://api.hypi.app
Done, Please make sure to login again, hypi login and do int and sync your schema
```

### Login

On the command line, go to your VueJS application folder. Login to your Hypi account using [hypi login](hypi-cli-intro.md#hypi-login) command. After successful login, the user config file will be placed in `~/.config/hypi/config.json` . In case of Windows, the file will be created in `\Users\user\AppData\Local`

Here, are the contents of the file. It makes the connection between Hypi and VueJS  app.
```
{
  "domain": "latest.store.hypi.01f2ga50p2mzkmyqse17gd2bae.hypi.app",
  "sessionToken": "Auth-Token",
  "sessionExpires": 1626580838,
  "api_domain": "https://api.hypi.app"
}
```

### Hypi Init

Use the `hypi init` command to initialize a new hypi App and Instance in your VueJS project folder.
```
    USAGE
      $ hypi init [WEBSITE] [NAME] [LABEL] [DOMAIN]
    
    OPTIONS
      -h, --help           show CLI help
      -i, --have_instance
    
    EXAMPLES
      $ hypi init -i
      $ hypi init --have_instance
      $ hypi init
```
Go to your VuesJS project folder on the command line and run `hypi init`
```
>hypi init
This command will walk you through creating app.yaml and instance.yaml files.
? Do you have a Hypi instance created at https://hypi.app that you’d like to use? No
? App name?  VueJSApp
? App label?  VueJSApp
? Website?  https://hypi.app/apps
? Domain(Optional)?
Init done successfully, Now write your schema then run the hypi sync command to generate your app's API
```
This creates a  `.hypi` folder in your VueJS project folder. Within `.hypi`, three files are created. `app.yaml`, `instance.yaml` and `schema.graphql`. The files app.yaml and instance.yaml has Hypi `App and Instance` details. 

:::info 

You should write your schema inside `schema.graphql` file.

:::

```
app.yaml
========
website: https://hypi.app/apps
name: VueJSApp
label: VueJSApp
releases:
  - name: latest
    schema:
      types: schema.graphql
    status: PUBLISHED
    notes: latest version
    hypi:
      id: 01F8EMYY0935THH0GX40K7QESY
hypi:
  id: 01F8EMYY01YDD2HB0WH8E1AZJW
```
```
instance.yaml
=============
domain: engulfs.apps.hypi.app
release:
  name: latest
  hypi:
    id: 01F8EMYY0935THH0GX40K7QESY
hypi:
  id: 01F8EMZ1PN1ANAS1C15K6DD63H
```
The new app gets created on the Hypi account. If an existing domain is not provided then a new domain also gets created.

If you want to use an existing domain on the Hypi website instead of creating a new one, you may provide that domain that as well.
```
hypi init
```
```
This command will walk you through creating app.yaml and instance.yaml files.
? Do you have a Hypi instance created at https://hypi.app that you’d like to use? Yes
? Please enter a valid domain engulfs.apps.hypi.app
Init done successfully, Now write your schema then run the hypi sync command to generate your app's API
```
In this case, the existing schema will get imported. 

###  Schema Edit

You may edit the schema in the `schema.graphql`
Let's edit the schema, to add the data types. Here, we are adding Product data type.
```
type Product {
    hypi: Hypi
    title: String!
    description: String!
    price: Float
}
```

### Hypi Sync

You need to sync edited local schema file to get full Hypi schema. Use the `hypi sync` command for that.
```
    USAGE
      $ hypi sync 
    
    OPTIONS
      -h, --help  show CLI help
    
    EXAMPLE
      $ hypi sync
```
Run `hypi sync` to generate full schema file.
```
hypi sync 
App created with id : 01F8EMYY01YDD2HB0WH8E1AZJW
Instance created with id : 01F8EMZ1PN1ANAS1C15K6DD63H
updateAppYamlFile done
updateInstanceYamlFile done
Introspection done
Sync Process... done
The file was succesfully generated!
```
After syncing, `generated-schema.graphql` file gets generated in the `.hypi` folder that has full hypi schema.

### Hypi Generate

Now, you need to generate graphql VueJS composition code to use Hypi APIs within the VueJS project. 

Inside `src/graphql` folder, add files related to GraphQl queries and mutations.

+ Here is the sample Product Query file to find all data : `src/graphql/products.graphql`
```
query products($arcql: String!) {
    find(type: Product, arcql: $arcql) {
        edges {
            node {
               ...ProductFields
            }
        }
    }
}

fragment ProductFields on Product {
   hypi {
        id
    }
    title
    description
}    
```
You may replace the type `Product` with your own data type and fields like `title/description` with your own fields.

+ Now, add Products Mutation: `src/graphql/products-mutation.graphql`
```
mutation updateProducts($values:HypiUpsertInputUnion!) {
  upsert(values:$values)
    {
        id
    }
}
```
+ You may also retrieve a single product using `get` query. Add `get` query:  `src/graphql/get-product.graphql
```
query getProduct($id: String!) {
    get(type: Product, id: $id) {
           ...ProductFields
    }
}

fragment ProductFields on Product {
   hypi {
        id
    }
    title
    description
}
```
+ Add delete mutation: `src/graphql/delete-product.graphql`
```
mutation delete( 
$arcql: String!
$clearArrayReferences: Boolean = false) {
  delete(type: Product, arcql: $arcql, clearArrayReferences: $clearArrayReferences)
}
```
+ After adding the graphql queries and mutations, use the `generate` command to generate the VueJS3 composition graphql code so that you can use Hypi APIs within your project.
```
USAGE
  $ hypi generate [PLATFORM]

OPTIONS
  -h, --help                              show CLI help
  -p, --platform=flutter|reactjs|angular

EXAMPLES
  $ hypi generate angular
  $ hypi generate -p=angular
  $ hypi generate --platform=angular

```
You will be asked whether to generate code for smart queries or composition API. Choose composition api. After running the command, `graphql.ts` files get created in the `\src\generated` folder. 
```
hypi generate vuejs
? What generation type you would like  Composition API
Generate Process... done
The file was succesfully generated!
```
Inside `graphql.ts` file, you will find vuejs composition queries to be used inside your VueJS components.

```typescript
export function useUpdateProductsMutation(options: VueApolloComposable.UseMutationOptions<UpdateProductsMutation, UpdateProductsMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateProductsMutation, UpdateProductsMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateProductsMutation, UpdateProductsMutationVariables>(UpdateProductsDocument, options);
}
```
```typescript
export function useGetProductQuery(variables: GetProductQueryVariables | VueCompositionApi.Ref<GetProductQueryVariables> | ReactiveFunction<GetProductQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetProductQuery, GetProductQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetProductQuery, GetProductQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetProductQuery, GetProductQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, variables, options);
}
```
```typescript
export function useDeleteMutation(options: VueApolloComposable.UseMutationOptions<DeleteMutation, DeleteMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteMutation, DeleteMutationVariables>>) {
  return VueApolloComposable.useMutation<DeleteMutation, DeleteMutationVariables>(DeleteDocument, options);
}
```
```typescript
export function useProductsQuery(variables: ProductsQueryVariables | VueCompositionApi.Ref<ProductsQueryVariables> | ReactiveFunction<ProductsQueryVariables>, options: VueApolloComposable.UseQueryOptions<ProductsQuery, ProductsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProductsQuery, ProductsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProductsQuery, ProductsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, variables, options);
}
```
Now, you are ready to create your VueJS3 composition application using Hypi APIs!

:::note

To use various Hypi APIs like CRUD, you will have to write the related graphql queries in \*.graphl files inside  `src/graphql` folder. Please check various APIs [here](https://docs.hypi.app/docs/api-references).

:::

### Using GraphQL queries

Inside `src/views` folder, add Product or your own data type component. AddProduct.vue, EditProduct.vue, Product.vue files. These files will access the graphql queries and mutations using the created queries. You may modify these files to use your own queries.

Let's try to understand the queries in the files.

+ First, we import the queries from `graphql.ts` file.
```
import { useUpdateProductsMutation } from"../generated/graphql";
```
+ Declare `useProductsQuery` providing the [arcql statements](https://docs.hypi.app/docs/arcql).
```
const { result, loading, error } = useProductsQuery({
      arcql: "*",
    });
```
+ Insert data using the `useUpdateProductsMutation`. 
```
  const {
      mutate: addProduct,
      loading,
      error,
      onDone,
    } = useUpdateProductsMutation({
      variables: {
        values: {
          Product: [
            {
              title: title.value,
              description: description.value,
              price: price.value,
            },
          ],
        },
      },
    });
```
### Authentication using Apollo Client

To make an HTTP connection to Hypi Endpoint, we use Apollo client. Following code demonstrates how to make this connection. This code has been added in the `apollo-client.ts` file.

```typescript
import config from './config';

const authToken = config.token;
const domain = config.domain;

const httpLink = new HttpLink({ uri: config.default_api_domain + "/graphql" });

const authMiddleware = () =>
  new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    const authToken = config.token
    const domain = config.domain

    operation.setContext({
      headers: {
        Authorization: `Bearer ${authToken}`,
        'hypi-domain': `${domain}`
      },
    });
    return forward(operation);
  });

```
Run the application using `npm run serve` command. 

This is the simplest way to use Hypi GraphQL queries and Mutations inside VueJS composition application!