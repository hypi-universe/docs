---
id: scheduled-function
title: ScheduledFunction
sidebar_label: ScheduledFunction
slug: /scheduled-function
---

Hypi's `ScheduledFunction` helps to schedule a function to run automatically. [User Defined Functions](#) or [Serverless Functions](#) can be automated to run at a particular time or on a recurring basis.

`ScheduledFunction` data type manages the execution of scheduled functions. Let's look at the structure of this type.

```
type ScheduledFunction {
    fn: GraphQLRef!
    start: DateTime!
    end: DateTime
    repeats: Boolean!
    interval: ScheduledFunctionInterval!
    intervalFrequency: Int
    intervalFrequencySubset: String
    intervalDay: Int
    intervalHour: Int
    lastExecuted: DateTime
    lastExecutionStarted: DateTime
    nextExecution: DateTime
    lastExecutionSucceeded: Boolean
    lastExecutionError: String
    id: String
    arcql: String
    type: String!
}
```

| Parameter               | Description                                                                                                                                                                                                                  | Example                                                                                                                                                                                                                                                                                                                                   |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| fn                      | This refers to a GraphQL function to be scheduled to run                                                                                                                                                                     | `fn` has subfields like `type` and `field`. The `type` can be Query/Mutation/ Subscription. `field` is the name of the function to be scheduled for execution.                                                                                                                                                                            |
| start                   | Start date and time to run                                                                                                                                                                                                   | Should have valid ISO 8601 [DateTime](scalars.md#datetime) value                                                                                                                                                                                                                                                                          |
| end                     | End date and time                                                                                                                                                                                                            | Should have valid ISO 8601 [DateTime](scalars.md#datetime) value                                                                                                                                                                                                                                                                          |
| repeats                 | Set to `true` to repeat the execution                                                                                                                                                                                        | true / false                                                                                                                                                                                                                                                                                                                              |
| interval                | The interval to repeat the execution. Interval could be per minute, per hour, per week, per month, at the start of the month, at the end of the month, throughout the year, at the start of the year, or the end of the year | MINUTE / HOUR /DAY / WEEK / MONTH / MONTH_START/ MONTH_END / YEAR / YEAR_START/ YEAR_END                                                                                                                                                                                                                                                  |
| intervalFrequency       | This is a multiplier for the interval.                                                                                                                                                                                       | Defaults to 1. If the intervalFrequency is 1 and interval is MINUTE, the function is executed once per minute. If it is 2 and the interval is WEEK, the function is executed every 2 WEEKS.                                                                                                                                               |
| intervalFrequencySubset | This is a comma-separated list of numbers representing the frequency at which the function is executed. These values are a subset of the selected interval.                                                                  | If the interval is MONTH, then the subset has a possible range of 1 to 12. Values 1,2,6,12 would mean executing this function every January, February, June, and December until the end date. If the interval is DAY, the possible range will be 1 to 7. Values 1,3,7 would mean executing this function every Sunday, Tues and Saturday. |
| intervalDay             | If the interval is MONTH this specifies which day of the month. If null, it defaults to the beginning of the Month.                                                                                                          | Value 13 means execute on the 13th day of every month.                                                                                                                                                                                                                                                                                    |
| intervalHour            | If the interval is bigger than HOUR then this specifies the hour/time of execution. Defaults to midnight i.e. 0.                                                                                                             | If the interval is DAY, this sets which hour of the day to execute.                                                                                                                                                                                                                                                                       |
| lastExecuted            | Date and time of execution                                                                                                                                                                                                   | Automatically set by the system                                                                                                                                                                                                                                                                                                           |
| lastExecutionStarted    | Date and time of the start of the execution.                                                                                                                                                                                 | Automatically set by the system                                                                                                                                                                                                                                                                                                           |
| nextExecution           | Date and time of next execution                                                                                                                                                                                              | Automatically set by the system                                                                                                                                                                                                                                                                                                           |
| lastExecutionSucceeded  | Status of last execution                                                                                                                                                                                                     | Updated to `true` if last execution was successful                                                                                                                                                                                                                                                                                        |
| lastExecutionError      | Error message if execution failed                                                                                                                                                                                            | Automatically updated by the system                                                                                                                                                                                                                                                                                                       |
| id                      | This is the ID of the object on which the function should operate. This is an optional field, required IFF arcql is provided.                                                                                                | `hypi.id` of the object to work on                                                                                                                                                                                                                                                                                                        |
| arcql                   | This is an arcql statement. On execution, this provides the scheduled function with the data to operate. This is an optional field, required IFF id is provided.                                                             | Any [ArcQL](arcql.md) statement                                                                                                                                                                                                                                                                                                           |
| type                    | The type on which the scheduled function should operate. The ID parameter if provided is the ID of an object of this type.                                                                                                   | Data type                                                                                                                                                                                                                                                                                                                                 |

## Example 1

Let's run the below `testSchedule` function every Minute. Define the function in the schema editor.
It creates an object of type `Pair` with `key` and `value` fields.

```
type Mutation {
testSchedule(id: String, arcql: String, type: String!): Json @tan(type: Groovy, inline: 
    """return upsert([
          Pair: [
                   [ 
                        key : "A",
                        value : "B", 
                        hypi: [
                             id : id
                        ]          
                    ]
                 ]
            ]
        )  
      """
    )
 }
```

Use `upsert` to schedule the function.

We are going to execute it every minute. So, `interval` is `MINUTE` and `intervalFrequency` is `1` as . It creates an object `p1` with key-value pair.  Remember to put `start` time in UTC format as it is a required field.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">


```java
mutation {
  upsert(
    values: {
      ScheduledFunction: [
        {
          start: "2022-06-08T12:10:37Z"
          interval: MINUTE
          intervalFrequency: 1
          id: "p1"
          type: "Pair"
          repeats: true
          fn: { type: Mutation, field: "testSchedule" }
        }
      ]
    }
  ) {
    id
  }
}
```

</TabItem>

<TabItem value="response">


```json`
{
  "data": {
    "upsert": [
      {
        "id": "01G5C12MQDHN2DYCTRVGH5K8PF"
      }
    ]
  }
}
```

</TabItem>
</Tabs>


So, our scheduled function got registered to run!

Let's check if the `Pair` object got created to check the execution of the `testSchedule` function.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">


```
{
  find(type: Pair, arcql: "*") {
    edges {
      node {
        ... on Pair {
          key
          value
        }
      }
      cursor
    }
  }
}
```

</TabItem>

<TabItem value="response">

```
{
  "data": {
    "find": {
      "edges": [
        {
          "node": {
            "key": "A",
            "value": "B"
          },
          "cursor": "p1"
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>


##  Example 2

Define the below function in the schema editor. It finds `title` and `price` from `Book` objects and saves a record in the `Counter` object.

```java
type Mutation {
testSchedule1(id: String, arcql: String, type: String!): Json @tan(type: Groovy, inline: """   
    def matches = gql(\""" {
        find(type: Book, arcql: "$arcql") {
          edges {
            node {
              ... on Book {
                title
                price
              }
            }
          }
       }
    }
    \""").data.find.edges
    return upsert([
          Counter: [
           [ 
               name : "Counter1",
               label : matches[0].node.title,
               value : matches[0].node.price, 
               hypi: [
                 id : id,
               ]    
            ]
          ]
        ]
    )  
  """)
}
```

Use `upsert` to schedule the function.

We are going to execute it every two hours. So, `interval` is `HOUR` and `intervalFrequency` is `2` . It creates an object `Book1` of the `Counter` data type by processing the `arcql` filter on the `Book` data type.


<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">


```java
mutation {
  upsert(
    values: {
      ScheduledFunction: [
        {
          start: "2022-06-08T12:10:37Z"
          interval: HOUR
          intervalFrequency: 2
          id: "Book1"
          type: "Book"
          arcql: "price > 12"
          repeats: true
          fn: { type: Mutation, field: "testSchedule1" }
        }
      ]
    }
  ) {
    id
  }
}
```

</TabItem>

<TabItem value="response">


```json
{
  "data": {
    "upsert": [
      {
        "id": "01G5DZ371PNBHW8Z6J1NH2DGX4"
      }
    ]
  }
}
```

</TabItem>
</Tabs>


Let's check the `ScheduledFunction` data type for the status of execution of the function.


<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">


```java
{
  find(type: ScheduledFunction, arcql: "*") {
    edges {
      node {
        ... on ScheduledFunction {
          fn {
            type
            field
          }
          nextExecution
          lastExecuted
          lastExecutionSucceeded
          lastExecutionError
        }
      }
      cursor
    }
  }
}
```

</TabItem>

<TabItem value="response">


```json
{
  "data": {
    "find": {
      "edges": [
        {
          "node": {
           "fn": {
              "type": "Mutation",
              "field": "testSchedule1"
            },
            "nextExecution": "2022-06-13T13:23:30Z",
            "lastExecuted": "2022-06-13T11:23:30Z",
            "lastExecutionSucceeded": true,
            "lastExecutionError": null
          },
          "cursor": "01G5DZ371PNBHW8Z6J1NH2DGX4"
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>


And the `Book1` object got created!

```json
{
  "data": {
    "find": {
      "edges": [
        {
          "node": {
            "hypi": {
              "id": "Book1"
            },
            "name": "Counter1",
            "label": "PQR",
            "value": 13.99
          },
          "cursor": "Book1"
        }
      ]
    }
  }
}
```