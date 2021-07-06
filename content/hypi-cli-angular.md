---
id: hypi-cli-angular
title: Use Hypi in an Angular Project
sidebar_label: Angular
slug: /hypi-cli-angular
---

In this guide, we will access Hypi APIs from the Angular project using the Hypi CLI.

**Prerequisites**: Knowledge of application development using Angular. Development set up for Angular.

### Create Angular App

Create an angular app using [this](https://angular.io/tutorial/toh-pt0) tutorial or use an example from [here](https://github.com/hypi-universe/hypi-cli-angular-example) .

In this example, we will use the apollo client as the graphql client. Add the following dependencies to `package.json`
```
"@apollo/client": "^3.3.19",
"apollo-angular": "^2.4.0",
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
Go to your Angular project folder on the command line and run `hypi config` to set configuration.
```
>hypi config https://api.hypi.app
Done, Please make sure to login again, hypi login and do int and sync your schema
```

### Login

On the command line, go to your Angular application folder. Login to your Hypi account using [hypi login](hypi-cli-intro.md#hypi-login) command. After successful login, the user config file will be placed in `~/.config/hypi/config.json` . In case of Windows, the file will be created in `\Users\user\AppData\Local`

Here, are the contents of the file. It makes the connection between Hypi and Angular app.
```
{
  "domain": "latest.store.hypi.01f2ga50p2mzkmyqse17gd2bae.hypi.app",
  "sessionToken": "Auth-Token",
  "sessionExpires": 1626580838,
  "api_domain": "https://api.hypi.app"
}
```

### Hypi Init

Use the `hypi init` command to initialize a new hypi App and Instance in your Angular project folder.
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
Go to your Angular project folder on the command line and run `hypi init`
```
>hypi init
This command will walk you through creating app.yaml and instance.yaml files.
? Do you have a Hypi instance created at https://hypi.app that you’d like to use? No
? App name?  AngularApp
? App label?  AngularApp
? Website?  https://hypi.app/apps
? Domain(Optional)?
Init done successfully, Now write your schema then run the hypi sync command to generate your app's API
```
This creates a  `.hypi` folder in your Angular project folder. Within `.hypi`, three files are created. `app.yaml`, `instance.yaml` and `schema.graphql`. The files app.yaml and instance.yaml has Hypi `App and Instance` details. 

:::info 

You should write your schema inside `schema.graphql` file.

:::

```
app.yaml
========
website: https://hypi.app/apps
name: AngularApp
label: AngularApp
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
hypi sync angular
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

Now, you need to generate graphql Angular code to use Hypi APIs within the Angular project. 

Inside `src/graphql` folder, add files related to GraphQl queries and mutations.

+ Here is the sample Product Query file to find all data : `src/graphql/products.graphql`
```
query products($arcql: String!) {
    find(type: Product, arcql: $arcql) {
        edges {
            node {
                ... on Product {
                    hypi {
                        id
                    }
                    title
                    description
                }
            }
        }
    }
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
query ProductDetails($id: String!){
  get(type: Product, id: $id) {
      ... on Product {
      hypi {
          id
        }
      title
      description
      }
  }
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
+ After adding the graphql queries and mutations, use the `generate` command to generate the Angular graphql code so that you can use Hypi APIs within your project.
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
hypi generate angular
Generate Process... done
The file was succesfully generated!
```
Inside `graphql.ts` file, you will find services for the query and the mutation to be used inside your angular components.

```typescript
export class UpsertMutationService extends Apollo.Mutation<UpsertMutation, UpsertMutationVariables> {
    document = UpsertDocument;
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
```
```typescript
  export class ProductsQueryService extends Apollo.Query<ProductsQuery, ProductsQueryVariables> {
    document = ProductsDocument;
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
```
```typescript
export class DeleteMutationService extends Apollo.Mutation<DeleteMutation, DeleteMutationVariables> {
    document = DeleteDocument;
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
```
```typescript
 export class ProductDetailsQueryService extends Apollo.Query<ProductDetailsQuery, ProductDetailsQueryVariables> {
    document = ProductDetailsDocument;
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
```
Now, you are ready to create your Angular application using Hypi APIs!

:::note

To use various Hypi APIs like CRUD, you will have to write the related graphql queries in \*.graphl files inside  `src/graphql` folder. Please check various APIs [here](https://docs.hypi.app/docs/api-references).

:::

### Using GraphQL services

Inside `src/app/products` folder, add Product Component :`products.component.ts` file. This file will access the graphql queries and mutations using the created services. You may modify this file to use your own services.

Let's try to understand the usage of services in the class ProductsComponent.

+ First, we import the services from `graphql.ts` file.
```
import { ProductsQueryService, UpsertMutationService } from '../../generated/graphql';
```
+ Here, you retreive  the data from the `Product` data type using `ProductQueryService` providing the [arcql statements](https://docs.hypi.app/docs/arcql) under `watch`.
```
getProducts(){
    this.products = this.productsQueryService
    .watch({ arcql: '*' }, { fetchPolicy: 'network-only' })
    .valueChanges.pipe(map(result => result.data.find.edges));
  }
```
+ Insert data using the `upsertMutationService`. Data from the `productForm` gets inserted into the Product table.
```
    this.upsertMutationService.mutate({
      values: {
        Product: [
          {
            title: this.productForm.get('title')?.value,
            description: this.productForm.get('description')?.value,
            price: this.productForm.get('price')?.value,
          }
        ]
      }
    }).subscribe(() => {
      this.getProducts()
    });
```
+ Inside your main App Module (`app.module.ts`) file, declare the `ProductComponent` class.
```
  declarations: [
    AppComponent,
    ProductComponent
  ]
```
### Authentication using Apollo Client

To make an HTTP connection to Hypi Endpoint, we use Apollo client. Following code demonstrates how to make this connection. Replace Hypi Authorization Token (Auth-Token) and hypi domain. This code has been added in the `app.module.ts` file.

```typescript
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        const authToken = config.token
        const domain = config.domain
        const uri = config.default_api_domain + "/graphql";
        const http = httpLink.create({ uri: uri });
        const middleware = new ApolloLink((operation, forward) => {
          operation.setContext({
            headers: new HttpHeaders()
              .set(
                'Authorization',
                `Bearer ${authToken}`,
              )
              .set('hypi-domain', `${domain}`),
          });
          return forward(operation);
        });
        const link = middleware.concat(http);
        return {
          link,
          cache: new InMemoryCache(),
        };
      },
      deps: [HttpLink],
    },
  ],
```
Run the application using `ng serve` command. If you face an issue with Angular Command line, you may check [this](https://www.freecodecamp.org/news/angular-command-line-interface-explained) guide.

This is the simplest way to use Hypi GraphQL queries and Mutations inside Angular application!