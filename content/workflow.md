---
id: workflow
title: Workflow
sidebar_label: Workflow
slug: 
---

Workflows are useful to handle sequential events. Let’s say you want to execute one function after the other and you need results of the first function to execute the second function. The `workflow` will handle these kinds of events for you.

Design the steps of the workflow and create an order of events. Execute the functions (work) inside the steps. Get the result after sequential processing of steps or functions. You may check the results of individual steps as well.

Hypi provides below given `Workflow` data type for the implementation of the sequence of steps.
```java
type Workflow {
    name: String!
    cronSchedule: String
    execAs: String
    async: Boolean
    parallel: Boolean
    maxExecutionTime: String
    steps(...): [WorkflowStep!]
}
```
The parameters are as follows:


| Parameter        | Type         | Description                                                                                                                                                                                                                                                                                               |
|------------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name             | String       | Name of the workflow                                                                                                                                                                                                                                                                                      |
| cronSchedule     | String       | If present, this is a \`cron\` schedule to automatically execute this Workflow The syntax as defined at https://www.manpagez.com/man/5/crontab/ NOTE: The special strings @hourly, @daily, etc are NOT supported                                                                                          |
| execAs           | String       | An ArcQL query to find the account e.g. hypi.id = 'user123' to find by id or username = 'blah' to find by username.<br><br>If present, execution of the steps in the Workflow will be done as this account. If not specified, it defaults to the account making the request                               |
| Async            | Boolean      | Set to \`true\` for asynchronous processing                                                                                                                                                                                                                                                               |
| Parallel         | Boolean      | If present AND true, all steps in the workflow are executed at the same time.                                                                                                                                                                                                                             |
| maxExecutionTime | String       | Specifies the max time an async task should be allowed to execute. When this time has elapsed the task will be killed.<br><br>The format is ISO8601 durations [https://en.wikipedia.org/wiki/ISO_8601](https://en.wikipedia.org/wiki/ISO_8601)<br><br>#Durations e.g. P1M is 1 month and PT1M is 1 minute |
| Steps            | WorkflowStep | Holds details of each workflow step                                                                                                                                                                                                                                                                       |

Let’s look into WorkflowStep as well:
```java
type WorkflowStep {
    name: String
    fn: GraphQLRef!
    order: Int!
}
```

| Parameter | Type       | Description                                                                                                                                                                                                  |
|-----------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name      | String     | The name of the step                                                                                                                                                                                         |
| Fn        | GraphQLRef | The function to execute for this step. The data returned by the step can subsequently be used in other steps. Set the type of the functions as query, mutation, or Subscription. Set the field to step name. |
| Order     | Int        | Order of the step                                                                                                                                                                                            |

#### Example

Let’s take an example from a Library system. You go to the library to borrow a book. You get a list of authors. You choose an author and then you get a list of books by the author. You select the book from the list. The book becomes unavailable for others.

Below are the steps for designing the schema:

+ Step-a:" Welcome to library"

+ Step-b: Query: Get Author list

+ Step-c: Query: Get a booklist by an author of your choice

+ Step-d: Query: Get the ID of the selected book from the list

+ Step-e: Mutation: Select the book with retrieved ID and update its availability 

Here is the schema for this Workflow.

```java
type LibraryWork {
    a: String
    previous: Json
    session: WorkflowSession,
    params: Json
}

type Query {
    stepa: String@tan(type:Groovy, inline: "return 'Welcome to Library!'")
    stepb: Json@tan(type:Groovy,inline:"""
      return gql(\"""
        query{
                find (
                type: Author, 
                arcql: "*")
                {
                    edges {
                    cursor
                    node {
                        ... onAuthor {
                        hypi {
                           id
                        }
                        name
                        }
                    }
                  }
               }           
           }  
    \"""
        )
    """)  
    stepc(a:String): Json@tan(type:Groovy, inline: """
      return  gql(\"""
        query {
            get(type: Author, id: "$a"){
                ... onAuthor {
                    hypi{
                        id
                     }
                    name
                booklist{
                    title
                    price
                    authorid
                }
            }
        }
    }\"""
    )
    """)
    stepd(b: String): [String!] @tan(type:Groovy, inline: """
    def results =  gql(\"""
    query {
        find (
            type: Book, 
            arcql: "title = '$b'"
         ) {
                edges {
                    cursor
                    node {
                    ... onBook {
                        hypi {
                        id
                        }
                    }
                }
              }
            }
          }
   \"""
   ) 
   return results.data.find.edges.stream()
   .map({o -> o.node.hypi.id})
   .collect(java.util.stream.Collectors.toList())  
""")  
   stepf(a: String, previous: String, session: WorkflowSessionInput, 
   params: Json): 
   LibraryWork@tan(type:Groovy, inline: """
   return [
    "a": a,
    "previous": previous,
    "session": session,
    "params": params
  ]
""")
   BorrowBook(a: String,b: String): LibraryWork@workflow(name: "BorrowBook")
}

type Mutation {
  # It is entirely up to the author to decide if their custom function 
  is mutation or not
  stepe(previous:\[String!\]): Json@tan(type:Groovy, inline: """
      return gql(\"""
        mutation {
        upsert(
            values: { 
                Book: [
                { 
                    hypi:{
                        id:"${previous[0]}"
                    }
                    available: false
                    }
                 ] 
            }) {
                id
            }
        }\"""
    )
""")
}
```

> Important notes to understand the schema!

The first step can have any parameters you want. For the other steps, some rules define how the system maps parameters to the function in these steps.

These rules are:

1. Any step (including the first step) can have a parameter `params: Json` i.e. name = params and type is `Json`.

      The `params` is a map of the arguments passed to the first function in the Workflow. For example, if the function was defined as `step1(a: Int, b: Json, c: MyType): T`.

      In this case, the `params` (Json) object would have the fields a, b, and c set to the values the function was executed with.

2. Any step can have a parameter `session: WorkflowSession`. This is the current workflow session and contains the results of all steps before the current one. You can identify the results for a specific step by finding the result using the step's name in the session's data array.

3. Except for the first step, a parameter `previous: T` can be used. `T` is the result type of the previous step from the workflow. 
       
      In this case, the platform will use the output of the previous function for this parameter. Note that if the type is not the same as the last step's output type then the workflow will fail if the field is not optional. If the field is optional then the platform will not provide it and it would therefore be null if you try to use it.

4. Except for the first step, pass-through is possible. The parameters from the first step are passed through to other steps by name and type. Example

      step1(a: Int, b: String): String
      step2(a: Int): ID

      In this case, the variable "a" in both step1 and step2 will have the same value that step1 was executed with. Incidentally, this is the same as getting "a" from the "params" (Json)

The last step in the schema is given for the illustration purpose only to understand the usage of various parameters.

To use the workflow, first create the workflow object in the system. The name of the workflow is important. Notice it is used in the function definition`@workflow(name: "BorrowBook")`. This is the same name used in the object created. 
```java
{
 "values": {
     "Workflow": [
         {
         "name": "BorrowBook",
         "steps": [
             {
                 "name": "stepa",
                 "order": 0,
                 "fn": {
                 "type": "Query",
                     "field": "stepa"
                 }
             },
             {
                 "name": "stepb",
                 "order": 1,
                 "fn": {
                     "type": "Query",
                     "field": "stepb"
                 }
             },
             {
                 "name": "stepc",
                 "order": 2,
                 "fn": {
                     "type": "Query",
                     "field": "stepc"
                 }
             },
             {
                 "name": "stepd",
                 "order": 3,
                 "fn": {
                     "type": "Query",
                     "field": "stepd"
                 }
             },
             {
                 "name": "stepe",
                 "order": 4,
                 "fn": {
                     "type": "Mutation",
                     "field": "stepe"
                 }
             },
             {
                 "name": "stepf",
                 "order": 5,
                 "fn": {
                     "type": "Query",
                     "field": "stepf",
                     "selection": "a previous params session
                     {data{stepName,stepResult}}"
                 }
                 }
             ]
             }
         ]
     }
}
```

To use this workflow execute it like any other workflow.

```java
query Q($a: String, $b: String){BorrowBook1(a: $a, b:$b){
 a previous params
     session{
         data{
             stepName
             stepResult
         }
     }
  }
}

#Data
{
 "a": "Author1",
 "b": "Inferno"
}
```

Verify the step results:

```json
{
  "data": {
    "BorrowBook1": {
      "a": "Author1",
      "previous": null,
      "params": {
        "a": "Author1",
        "b": "Inferno"
      },
      "session": {
        "data": [
          {
            "stepName": "stepa",
            "stepResult": "Welcome to Library!"
          },
          {
            "stepName": "stepb",
            "stepResult": {
              "data": {
                "find": {
                  "edges": [
                    {
                      "cursor": "Author1",
                      "node": {
                        "hypi": {
                          "id": "Author1"
                        },
                        "name": "Dan Brown"
                      }
                    },
                    {
                      "cursor": "Author2",
                      "node": {
                        "hypi": {
                          "id": "Author2"
                        },
                        "name": "Paulo Coelho"
                      }
                    },
                    {
                      "cursor": "Author3",
                      "node": {
                        "hypi": {
                          "id": "Author3"
                        },
                        "name": "Sudha Murti"
                      }
                    }
                  ]
                }
              }
            }
          },
          {
            "stepName": "stepc",
            "stepResult": {
              "data": {
                "get": {
                  "hypi": {
                    "id": "Author1"
                  },
                  "name": "Dan Brown",
                  "booklist": [
                    {
                      "title": "Da Vinci Code",
                      "price": 12.99,
                      "authorid": 1
                    },
                    {
                      "title": "The Last Symbol",
                      "price": 10,
                      "authorid": 1
                    },
                    {
                      "title": "Inferno",
                      "price": 5.99,
                      "authorid": 1
                    }
                  ]
                }
              }
            }
          },
          {
            "stepName": "stepd",
            "stepResult": [
              "Author1Book3"
            ]
          },
          {
            "stepName": "stepe",
            "stepResult": {
              "data": {
                "upsert": [
                  {
                    "id": "Author1Book3"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  }
}
