---
id: references
title: Creating and removing one-to-one and one-to-many references
sidebar_label: References
slug: /lowcode/references
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
#Author Table

{
  "values": {
    "Author": [
      {
        "hypi": {
          "id": "Author1"
        },
        "name": "Dan Brown",
        "age": 56,
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
      }
    ]
  }
}

#Book Table

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
    via:"booklist",whereFromID:"Author1",andToID:"Book1")
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
              }
                //Book1 removed from the array
            ]
          },
          "cursor": "Author1"
        }
      ]
    }
  }
}
```

Using link and unlink function you may add or remove objects from the array of objects.

:::note Read More...

* [How to create a link between two objects using the link function](https://hypi.dev/t/how-to-create-a-link-between-two-objects-using-the-link-function/103)
* [How to create a link between two objects by using `hypi.id`](https://hypi.dev/t/how-to-create-a-link-between-two-objects-by-using-hypi-id/114)
* [How to remove a link between two objects using the unlink function](https://hypi.dev/t/how-to-remove-a-link-between-two-objects-using-the-unlink-function/102)
* [Working with one to one and one to many relationships in Hypi’s low-code platform](https://hypi.dev/t/working-with-one-to-one-and-one-to-many-relationships-in-hypi-s-low-code-platform/282)

:::