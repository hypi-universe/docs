---
id: references
title: Creating and removing one-to-one and one-to-many references
sidebar_label: References
slug: /references
---

Hypi can provide `one-to-one` or `one-to-many` references for tables.

Let’s say you want to connect Table A to Table B through one common field ‘C’. So, table A has this field C of type B. This is the one-to-one reference. If field C is an array or list of type B, it is a one-to-many kind of reference.

For creating a reference, Hypi has the built-in function `link`. The references can be removed using the `unlink` function.

Let’s check the signatures of link and unlink functions.

```java
link(
    from:HypiMutationType!
    to:HypiMutationType!
    via:String!
    whereFromID:String!
    andToID:String!
):Boolean!
```
```java
unlink(
    from:HypiMutationType!
    to:HypiMutationType!
    via:String!
    whereFromID:String!
    andToID:String!
):Boolean!
```

| **Parameter**   | **Description**                                                                            | **Example**    |
|-----------------|--------------------------------------------------------------------------------------------|----------------|
| **from**        | The data type from where reference needs to be created                                     | from: ‘Author’ |
| **to**          | The data type to be referred                                                               | to: ‘Book’     |
| **via**         | The field of object ‘to’ in the object ‘from’                                              | Booklist       |
| **whereFromID** | Hypi ID of the Object of type ‘from’ that needs an entry of object ‘to’                    | ‘Author1’      |
| **andToID**     | Hypi ID of the Object of type ‘to’ that needs to be entered into the object of type ‘from’ | ‘Book1’        |

## Examples

To go through examples, we will need below schema.

```java
type Book {
    title: String
    authorid: Int
    price: Float
}

type Author {
    name: String
    age: Int
    bestbook: Book
    booklist: [Book!]
}
```
Here, the field `bestbook` will be used to generate `one-to-one reference` between table `Author` and table `Book`. Also, the field `booklist` will be used to generate `one-to-many` kind of references.

Let’s add data in the table Author and table Book as follows.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Input Data', value: 'data'},
 ]}>
<TabItem value="query">

```java

mutation Upsert($values: HypiUpsertInputUnion!) {
  upsert(values: $values) {
    id
  }
}
```

</TabItem>

<TabItem value="data">

```java
//Author Table
{
  "data": {
    "find": {
      "edges": [
        {
          "node": {
            "name": "Dan Brown",
            "age": 56,
            "bestbook": {
              "title": "Inferno",
              "authorid": 1
            },
            "booklist": [
              {
                "title": "Da Vinci Code",
                "authorid": 1
              },
              {
                "title": "The Last Symbol",
                "authorid": 1
              }
            ]
          },
          "cursor": "Author1"
        }
      ]
    }
  }
}

//Book Table

{
  "values": {
    "Book": [
      {
        "hypi": {"id": "Book1"},
        "title":  "Inferno",
        "authorid": 1
      }       
    ]
  }
}      
```
</TabItem>
</Tabs>

### One-to-One Reference

If you want to enter `Book1` as the bestbook of Author1, you may link Author1 with Book1 via field `bestbook`.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
mutation {
    link(from:Author,to:Book,
    via:"bestbook",whereFromID:"Author1",andToID:"Book1")
}
```

</TabItem>
<TabItem value="response">

```json
{
  "data": {
    "link": true
  }
}
```

</TabItem>
</Tabs>

Linking the tables results in the insertion of data from Book1 into the field Bestbook of Author1. Now, retrieve data of Author using find function and verify.

```json
{
  "data": {
    "find": {
      "edges": [
        {
          "node": {
            "name": "Dan Brown",
            "age": 56,
            //Book1 Inserted
            "bestbook": {
              "title": "Inferno",
              "authorid": 1
            },
            "booklist": [
              {
                "title": "Da Vinci Code",
                "authorid": 1
              },
              {
                "title": "The Last Symbol",
                "authorid": 1
              }
            ]
          },
          "cursor": "Author1"
        }
      ]
    }
  }
}
```
You may remove the reference using the unlink function.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
mutation{
    unlink(from:Author,to:Book,
    via:"bestbook",whereFromID:"Author1",andToID:"Book1")
}
```
</TabItem>
<TabItem value="response">

```json
{
  "data": {
    "unlink": true
  }
}
```

</TabItem>
</Tabs>

This results in the setting of the value of bestbook as null. Book1 data remains as it is. But the object simply gets removed from the field bestbook of object Author1.
```json
{
  "data": {
    "find": {
      "edges": [
        {
          "node": {
            "name": "Dan Brown",
            "age": 56,
             //Book1 entry removed
            "bestbook": null,
            "booklist": [
              {
                "title": "Da Vinci Code",
                "authorid": 1
              },
              {
                "title": "The Last Symbol",
                "authorid": 1
              },
              {
                "title": "Inferno",
                "authorid": 1
              }
            ]
          },
          "cursor": "Author1"
        }
      ]
    }
  }
}
```

### One-to-Many Reference:

The `link` function works on an array as well. You may link to the booklist field from the Author1 object to Book1. So an entry of Book1 gets added into the booklist array of Author1.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
mutation{
    link(from:Author,to:Book,
    via:"booklist",whereFromID:"Author1",andToID:"Book1")
}
```

</TabItem>
<TabItem value="response">

```json
{
  "data": {
    "link": true
  }
}
```

</TabItem>
</Tabs>

You may retrieve data from Author1 using find function.
```json
{
  "data": {
    "find": {
      "edges": [
        {
          "node": {
            "name": "Dan Brown",
            "age": 56,
            "bestbook": null,
            "booklist": [
              {
                "title": "Da Vinci Code",
                "authorid": 1
              },
              {
                "title": "The Last Symbol",
                "authorid": 1
              },
                //Book1 inserted in the array
              {
                "title": "Inferno",
                "authorid": 1
              }
            ]
          },
          "cursor": "Author1"
        }
      ]
    }
  }
}
```
Unlinking the reference would simply remove the entry Book1 from the booklist. The Book1 object would not get deleted from the platform. But its entry would be removed from the array. 

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
mutation{
    unlink(from:Author,to:Book,
    via:"booklist",whereFromID:"Author1",andToID:"Author1Book1")
}
```

</TabItem>
<TabItem value="response">

```json
{
  "data": {
    "unlink": true
  }
}
```

</TabItem>
</Tabs>

Retrieve Author1 data to get following result.
```json
{
  "values": {
    "Author": [
      {
        "hypi": {"id": "Author1"},
        "name": "Dan Brown",
        "age": 56,
        "booklist":[
          {
            "hypi": {"id": "Author1Book1"},
            "title": "Da Vinci Code",
            "price": 12.99,
            "authorid": 1
          },
          {
            "hypi": {"id": "Author1Book2"},
            "title": "The Last Symbol",
            "price": 10,
            "authorid": 1
          }          
        ] 
      }       
    ]
  }
}      

```

Using link and unlink function you may add or remove objects from the array of objects.

***
## Subscription

The `subscription` function monitors the upsert operation on any object of any type. If the mutation (insertion of data) happens in any field of the object on the client-side, the function reports the event on server side. It acts as a link between two sides. Subscription works on the `upsert` function execution only and not on other mutations.

Suppose you are creating a messaging app. When a sender sends the message, the receiver will receive the message through a subscription. The receiver listens to the changes in the text of the message object of the sender. If the data is inserted in the text field of the message object of the sender, the receiver receives the inserted text.

You may add the `subscription` to any field of any data type. The subscription works on the subscribed field only and not on other fields.

### Example

Here, we are configuring the subscription on the `name`  field of the `Author` type. This switches on the listener mode of the receiver. This works as a listener/receiver socket.

```json
subscription {
  subscribe {
    Author {
      name
    }
  }
}
```

Open second [Hypi GraphQL Playground](ui-gql-playground.md) (editor) on another tab of the browser selecting the same release and same instance. This works as a sender socket. Insert data in the name field.

```json
mutation Upsert($values: HypiUpsertInputUnion!) {
  upsert(values: $values) {
    id
  }
}
{
  "values": {
    "Author": [
      {
        "hypi": {"id": "Author1"},
        "name": "Dan Brown"
      }       
    ]
  }
}  
```

You will get the notification of this insertion into the previous socket that was listening to this event.

```json
{
  "data": {
    "subscribe": {
      "Author": {
        "name": "Dan Brown"
      }
    }
  },
  "errors": null
}
```

You may perform any number of upsert operation. The upsert event would be notified in the listener tab.

```json
{
  "data": {
    "subscribe": {
      "Author": {
        "name": "Paulo Coelho"
      }
    }
  },
  "errors": null
}

{
  "data": {
    "subscribe": {
      "Author": {
        "name": "Sudha Murti"
      }
    }
  },
  "errors": null
}    
```

Please note that if you insert data in the `age` field of Author1, the insertion notification will not be received.
