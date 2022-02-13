---
id: hypi-cli-react
title: Use Hypi in a ReactJS Project
sidebar_label: ReactJS
slug: /lowcode/hypi-cli-react
---

In this guide, we will access Hypi APIs from the React Typescript project using the Hypi CLI.

**Prerequisites**: Knowledge of application development using ReactJS. Development set up for ReactJS.

### Create React Typescript App

You may create a sample React Typescript app using the following command. 
```
npx create-react-app my-app --template typescript`  
```
or use an example from [here](https://github.com/hypi-universe/hypi-cli-react-example) 

In this example, we will use the apollo client as the graphql client. Add the following dependencies to `package.json`
```
"@apollo/client": "^3.3.16",
"graphql": "^15.5.0",
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
Go to your ReactJS project folder on the command line and run `hypi config` to set configuration.
```
>hypi config https://api.hypi.app
Done, Please make sure to login again, hypi login and do int and sync your schema
```

### Login

On the command line, go to your ReactJS application folder. Login to your Hypi account using [hypi login](hypi-cli-intro.md#hypi-login) command. After successful login, the user config file will be placed in `~/.config/hypi/config.json` . In case of Windows, the file will be created in `\Users\user\AppData\Local`

Here, are the contents of the file. It makes the connection between Hypi and ReactJS app.
```
{
  "domain": "latest.store.hypi.01f2ga50p2mzkmyqse17gd2bae.hypi.app",
  "sessionToken": "Auth-Token",
  "sessionExpires": 1626580838,
  "api_domain": "https://api.hypi.app"
}
```
### Hypi Init

Use the `hypi init` command to initialize a new hypi App and Instance in your ReactJS project folder.
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
Go to your ReactJS project folder on the command line and run `hypi init`
```
>hypi init
This command will walk you through creating app.yaml and instance.yaml files.
? Do you have a Hypi instance created at https://hypi.app that you’d like to use? No
? App name?  ReactJSApp
? App label?  ReactJSApp
? Website?  https://hypi.app/apps
? Domain(Optional)?
Init done successfully, Now write your schema then run the hypi sync command to generate your app's API
```
This creates a  `.hypi` folder in your ReactJS project folder. Within `.hypi`, three files are created. `app.yaml`, `instance.yaml` and `schema.graphql`. The files app.yaml and instance.yaml has Hypi `App and Instance` details. 

:::info 

You should write your schema inside `schema.graphql` file.

:::

```
app.yaml
========
website: https://hypi.app/apps
name: ReactJSApp
label: ReactJSApp
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

The next step is to sync the edited local schema and get the full schema of Hypi.
Use the `hypi sync` command for that.
```
    USAGE
      $ hypi sync 
    
    OPTIONS
      -h, --help  show CLI help
    
    EXAMPLE
      $ hypi sync
```
Now run `hypi sync` to generate full schema file.
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

Now, you need to generate graphql ReactJS code to use Hypi APIs within the ReactJS typescript project. 

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
mutation upsert($values:HypiUpsertInputUnion!) {
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
+ After adding the graphql queries and mutations, use the `generate` command to generate the Reactjs graphql code so that you can use Hypi APIs within your project.
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
After running the command, `graphql.ts` files get created in the `\src\generated` folder. 
```
hypi generate reactjs
Generate Process... done
The file was succesfully generated!
```
Inside `graphql.ts` file, you will find hooks for the query and the mutation to be used inside your typescript components.

```typescript
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
```
```typescript
export function useUpsertMutation(baseOptions?: Apollo.MutationHookOptions<UpsertMutation, UpsertMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertMutation, UpsertMutationVariables>(UpsertDocument, options);
      }
```
```typescript
export function useDeleteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMutation, DeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMutation, DeleteMutationVariables>(DeleteDocument, options);
      }
```
```typescript
export function useGetProductQuery(baseOptions: Apollo.QueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
      }
```
Now, you are ready to create your React TypeScript application using Hypi APIs!

:::note

To use various Hypi APIs like CRUD, you will have to write the related graphql queries in \*.graphl files inside  `src/graphql` folder. Please check various APIs [here](https://docs.hypi.app/docs/api-references).

:::

### Using GraphQL hooks

Inside src/components, add `Product` or your own data type component. Add `ProductList.js` / `AddProduc.js` / `EditProduct.js`files. These files will access the graphql queries and mutations using the hooks.

Let's try to understand the usage of hooks in the ProductList component.

+ First, we import the hooks from graphql.ts file.
```javascript
import { useUpsertMutation } from'../../generated/graphql'
import { useUpsertMutation, useGetProductQuery } from'../../generated/graphql'
import { useProductsQuery, useDeleteMutation } from'../../generated/graphql'
```
+ Here, you may declare the GraphQL query hook and provide the [arcql statements](https://docs.hypi.app/docs/arcql) under variables.
```javascript
const { loading, error, data } = useProductsQuery({
    variables: { arcql: '*' },
});
```
+ Declare the GraphQL mutation hook.
```javascript
const [upsertMutation, { upsertData, upsertLoading, upsertError }] = useUpsertMutation()
```
+ Declare Delete mutation hook.
```javascript
const handleRemove = (event, id) => {
    deleteMutation({
      variables: {
        arcql: "hypi.id = '" + id + "'"
      }
    })
    window.location.reload();
}
```
+ Declare Get Query hook.
```javascript
  const { loading, error, data } = useGetProductQuery({
    variables: { id: id },
  });
```
+ Retrieve the data from the `Product` data type. Delete the product on click event.
```javascript
const productsOutput = data.find.edges.length === 0 ?
    <div>
      <p>No products found</p>
    </div>
    : data.find.edges.map((product, index) => {
      return (
        <div key={product.node.hypi.id}>
          <li key={index} >
            {product.node.title}
          </li>
          <button type="button" className={"btn"} onClick={(event) => handleRemove(event, product.node.hypi.id)}>
            Remove
          </button>
          <Link
            to={"/products/" + product.node.hypi.id}
            className="badge badge-warning">
            <button type="button" className={"btn"}>
              Edit
            </button>
          </Link>
        </div>
      )
    })
```
+ Insert data using the mutation. Data from the `productForm` gets inserted into the Product table.
```javascript
const submitProductHandler = (event) => {
    event.preventDefault()
    //call the mutation to send data
    upsertMutation({
      variables: {
        values: {
          Product: {
            hypi: {
              id: productForm.id
            },
            title: productForm.title,
            description: productForm.description
          }
        }
      }
    })
    setRedirectToReferrer(true)
  }
```
+ Inside your main `App.js` file, you may access the ProductList.
```javascript
<div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/products"]} component={ProductList} />
          <Route exact path="/add" component={AddProduct} />
          <Route path="/products/:id" component={EditProduct} />
        </Switch>
      </div>
```
### Authentication using Apollo Client

To make an HTTP connection to Hypi Endpoint, we use Apollo client. Following code demonstrates how to make this connection. Replace Hypi Authorization Token (Auth-Token) and hypi domain. This code has been added in the `apollo-client.js` file.

```typescript
import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";

import config from '../config'

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

export const apolloClient = new ApolloClient({
  link: authMiddleware().concat(httpLink),
  cache: new InMemoryCache(),
});
```
Run the application using `npm run start` command. To run the application `react-scripts` is needed.  You may check the setting in `packag.json` file. If the script is not installed, you may install it using `npm install react-scripts --save` command.

This is the simplest way to use Hypi GraphQL queries and Mutations inside React TypeScript application!