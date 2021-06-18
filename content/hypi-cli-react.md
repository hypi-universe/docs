---
id: hypi-cli-reactjs
title: Use Hypi in a ReactJS Project
sidebar_label: ReactJS
slug: /hypi-cli-reactjs
---

ReactJS is a JavaScript library for building user interfaces and UI components. In this guide, we will import the Hypi package within the React Typescript project using Hypi CLI. After the import, you may use Hypi functionalities to build ReactJS applications.

**Prerequisite**: Knowledge of application development using ReactJS. Development set up for ReactJS.

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
Let's import the Hypi package now.

### Login

On the command line, go to your ReactJS application folder. Login to your Hypi account using [hypi login](hypi-cli-intro.md#hypi-login) command. After successful login, the user config file will be placed in `~/.config/hypi/config.json` . In case of Windows, the file will be created in `\Users\user\AppData\Local`

Here, are the contents of the file. It makes the connection between Hypi and ReactJS app.
```
{
  "domain": "latest.store.hypi.01f2ga50p2mzkmyqse17gd2bae.hypi.app",
  "sessionToken": "Auth-Token",
  "sessionExpires": 1626580838
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
==============================
website: https://hypi.app/apps
name: ReactJSApp
label: ReactJSApp
releases:
  - name: latest
schema:
types: schema.graphql
status: PUBLISHED
notes: latest version
```
```
domain: engulfs.apps.hypi.app
release:
name: latest
hypi:
id: 01F8EMYY0935THH0GX40K7QESY
hypi:
id: 01F8EMZ1PN1ANAS1C15K6DD63H
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

###  Hypi GraphQL settings

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
Inside `src/graphql` folder, add files related to GraphQl queries and mutations.

Here is the sample Product Query file : `src/graphql/products.graphql`
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

Now, add Products Mutation: `src/graphql/products-mutation.graphql`
```
mutation upsert($values:HypiUpsertInputUnion!) {
  upsert(values:$values)
    {
        id
    }
}
```
### Hypi Sync

You need to generate graphql ReactJS schema file to use Hypi APIs within the ReactJS typescript project. Use the `hypi sync reactjs` command for that.
```
    USAGE
      $ hypi sync reactjs
    
    OPTIONS
      -h, --help  show CLI help
    
    EXAMPLE
      $ hypi sync
```
Now run `hypi sync` to generate ReactJS schema file.
```
hypi sync reactjs
App created with id : 01F8EMYY01YDD2HB0WH8E1AZJW
Instance created with id : 01F8EMZ1PN1ANAS1C15K6DD63H
updateAppYamlFile done
updateInstanceYamlFile done
Introspection done
Sync Process... done
The file was succesfully generated!
```
After syncing, `graphql.ts` files get created in the `\src\generated` folder. Also, `generated-schema.graphql` file gets generated in the `.hypi` folder that has full hypi schema.

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
Now you are ready to create your React TypeScript application using Hypi APIs!

### Using GraphQL hooks

Inside src/components, add `Product` or your own data type component. Add `ProductList.js` file. This file will access the graphql queries and mutations using the hooks.

Here is the content of the entire file. You may modify this file to use your own hooks.

```typescript
import React, { useState } from 'react';
import { useProductsQuery, useUpsertMutation } from '../../generated/graphql'

const ProductList = (props) => {
  const [newProduct, setNewProduct] = useState(false)
  const [productForm, setProductForm] = useState({
    title: '',
    description: ''
  })

  const { loading, error, data } = useProductsQuery({
    variables: { arcql: '*' },
  });
  
  const [upsertMutation, { upsertData, upsertLoading, upsertError }] = useUpsertMutation()

  const onNewProductHandler = (event) => {
    event.preventDefault()
    setNewProduct(true)
  }

  const inputChangedHandler = (event) => {
    setProductForm({
      ...productForm, [event.target.name]: event.target.value
    })
  }
  const submitProductHandler = (event) => {
    console.log('submit')
    event.preventDefault()
    
      upsertMutation({
      variables: {
        values: {
          Product: {
            title: productForm.title,
            description: productForm.description
          }
        }
      }
    })
  }

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;

  if (upsertLoading) return <p>loading...</p>;
  if (upsertError) return <p>{error}</p>;
  if (upsertData) return <p>{upsertData}</p>;

  let noProductsOutput = null
  if (data.find.edges.length === 0) {
    noProductsOutput = (
      <div>
        <p>No products found</p>
      </div>
    )
  }
  let addProductOutput = null;
  if (newProduct) {
    addProductOutput = (
      <form onSubmit={submitProductHandler}>
        <label htmlFor="title">Title</label>
        <input
          className="Input"
          type="text"
          id="title"
          name="title"
          value={productForm.title}
          onChange={(event) => inputChangedHandler(event, 'title')}
          placeholder="Title.." />

        <label htmlFor="description">Description</label>
        <input
          className="Input"
          type="text"
          id="description"
          name="description"
          value={productForm.description}
          onChange={inputChangedHandler}
          placeholder="Description.." />

        <button className="Button" > Submit</button>

      </form>
    )
  } else {
    addProductOutput = (
      <button className="Button" onClick={onNewProductHandler}> New Product</button>
    )
  }

  const productsOutput = data.find.edges.map(product => {
    return (
      <div>
        <h1>{product.node.title}</h1>
        <p>{product.node.description}</p>
      </div>
    )
  })

  return (
    <div>
      {noProductsOutput}
      {productsOutput}
      {addProductOutput}
    </div>
  )
};
export default ProductList;
```
Let's try to understand the usage of hooks in the ProductList component.

+ First, we import the hooks from graphql.ts file.
```
import { useProductsQuery, useUpsertMutation } from '../../generated/graphql'
```
+ Here, you may declare the GraphQL query hook and provide the [arcql statements](https://docs.hypi.app/docs/arcql) under variables.
```
const { loading, error, data } = useProductsQuery({
    variables: { arcql: '*' },
});
```
+ Declare the GraphQL mutation hook.
```
const [upsertMutation, { upsertData, upsertLoading, upsertError }] = useUpsertMutation()
```
+ Retrieve the data from the `Product` data type. The retrieved title and description get placed on the heading h1 and paragraph. Replace the data type and fields as per your own schema.
```
  const productsOutput = data.find.edges.map(product => {
    return (
      <div>
        <h1>{product.node.title}</h1>
        <p>{product.node.description}</p>
      </div>
    )
  })
```
+ Insert data using the mutation. Data from the `productForm` gets inserted into the Product table.
```
upsertMutation({
      variables: {
        values: {
          Product: {
            title: productForm.title,
            description: productForm.description
          }
        }
      }
    })
```
+ Inside your main `App.js` file, you may access the ProductList.
```
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductList />
      </header>
    </div>
  );
}
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

const httpLink = new HttpLink({ uri: "https://api.hypi.app/graphql" });

const authMiddleware = () =>
  new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    const authToken = 'Auth-Token'
    const domain = 'teething.apps.hypi.app'

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