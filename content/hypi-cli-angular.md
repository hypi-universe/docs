---
id: hypi-cli-angular
title: Use Hypi in an Angular Project
sidebar_label: Angular
slug: /hypi-cli-angular
---

Angular is a TypeScript-based open-source web application framework. In this guide, we will import the Hypi package within the Angular project using Hypi CLI. After the import, you may use Hypi functionalities to build Angular applications.

**Prerequisite**: Knowledge of application development using Angular. Development set up for Angular.

### Create Angular App

Create an angular app using [this](https://angular.io/tutorial/toh-pt0) tutorial or use an example from [here](https://github.com/hypi-universe/hypi-cli-angular-example) .

In this example, we will use the apollo client as the graphql client. Add the following dependencies to `package.json`
```
"@apollo/client": "^3.3.19",
"apollo-angular": "^2.4.0",
"graphql": "^15.5.0",
```     
Follow the below steps to import the Hypi package.

### Login

On the command line, go to your Angular application folder. Login to your Hypi account using [hypi login](hypi-cli-intro.md#hypi-login) command. After successful login, the user config file will be placed in `~/.config/hypi/config.json` . In case of Windows, the file will be created in `\Users\user\AppData\Local`

Here, are the contents of the file. It makes the connection between Hypi and Angular app.
```
{
  "domain": "latest.store.hypi.01f2ga50p2mzkmyqse17gd2bae.hypi.app",
  "sessionToken": "Auth-Token",
  "sessionExpires": 1626580838
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
==============================
website: https://hypi.app/apps
name: AngularApp
label: AngularApp
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

You need to generate graphql Angular schema file to use Hypi APIs within the Angular typescript project. Use the `hypi sync angular` command for that.
```
    USAGE
      $ hypi sync angular
    
    OPTIONS
      -h, --help  show CLI help
    
    EXAMPLE
      $ hypi sync
```
Now run `hypi sync` to generate angular schema file.
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
After syncing, `graphql.ts` files get created in the `\src\generated` folder. Also, `generated-schema.graphql` file gets generated in the `.hypi` folder that has full hypi schema.

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
Now you are ready to create your Angular application using Hypi APIs!

### Using GraphQL hooks

Inside `src/app/products` folder, add Product Component :`products.component.ts` file. This file will access the graphql queries and mutations using the created services.

Here is the content of the entire file. You may modify this file to use your own services.

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductsQueryService, UpsertMutationService } from '../../generated/graphql';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  loading!: boolean;

  products!: Observable<any>;
  productForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
  });
  constructor(private productsQueryService: ProductsQueryService,
    private upsertMutationService: UpsertMutationService) { }

  ngOnInit(): void {
   this.getProducts()
  }

  getProducts(){
    this.products = this.productsQueryService
    .watch({ arcql: '*' }, { fetchPolicy: 'network-only' })
    .valueChanges.pipe(map(result => result.data.find.edges));
  }

  onSubmit() {
    console.warn('hi');
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
  }

}
```
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
        const http = httpLink.create({ uri: 'https://api.hypi.app/graphql' });
        const authToken = 'Auth-Token'
        const domain = 'teething.apps.hypi.app'
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