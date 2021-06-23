---
id: arcql
title: ArcQL filtering
sidebar_label: ArcQL filtering
slug: /arcql
---

Hypi offers a powerful query language as part of its platform. `ArcQL` works as a filter to select data to process upon. ArcQL statements are used along with query functions like `find`.You will be able to make your own ArcQL statements as they are easy to construct. `ArcQL` is very much SQL-like. If you understand SQL, you will write the ArcQL statements just by guessing at it.

We will frame `AcrQL` queries to get data from the below schema.
```java
type Author {
    name: String
    age: Int
    bestbook: Book
    booklist(...): [Book!]
}

type Book {
    title: String
    authorid: Int
    price: Float
}
```
Insert the following data in the table `Author`. Know more about Insert [here](createdata.md).

:::note

For illustration purpose, the data is demonstrated in the form of table.

:::

| hypi.id     | name            | age  |
|-------------|-----------------|------|
| **Author1** | Dan Brown       | 56   |
| **Author2** | Paulo Coelho    | 70   |
| **Author3** | Sudha Murti     | 70   |
| **Author4** | Agatha christie | null |

| booklist     |                                     |           |              |
|--------------|-------------------------------------|-----------|--------------|
| **hypi.id**  | **title**                           | **price** | **authorid** |
| Author1Book1 | Da Vinci Code                       | 12.99     | 1            |
| Author1Book2 | The Last Symbol                     | 10        | 1            |
| Author1Book3 | Inferno                             | 5.99      | 1            |
| Author2Book1 | Alchemist                           | 5.99      | 2            |
| Author2Book2 | Warriors of light                   | 12.99     | 2            |
| Author3Book1 | Wise and Otherwise                  | 3.99      | 3            |
| Author3Book2 | How I taught my GrandMother to Read | 2.99      | 3            |
| null         | null                                | null      | null         |

> Let's get inside the ArcQL query statements one by one.

+ [Sort Query](#sort-query)
+ [Term Query](#term-query)
+ [Phrase Query](#phrase-query)
+ [EXIST](#exist)
+ [NOT EXIST](#not-exist)
+ [Prefix Query](#prefix-query)
+ [Wildcard Query](#wildcard-query)
+ [Range Query](#range-query)
+ [Match All Query](#match-all-query)
+ [Geo Location](#geo-location)
+ [Type In-Field In Queries](#type-in-field-in-queries)

***

### Sort Query

To sort data in ascending or descending order, use the SORT clause.

Example:

`{arcql: fieldName SORT hypi.created ASC|DESC}`

You may frame a query like this:

+  SORT a
+  SORT a ASC
+  SORT a DESC
+  SORT a, b.c DESC, c

Here, `a` is the field name. `b` is an object and `c` is the field in object b.

:::info

If ASC/DESC order is not specified, hypi performs DESC order by default.

:::info

Let’s consider few examples with the inserted data:

#### SORT EXAMPLE 1

Query Statement: 
`arcql: "* SORT title ASC"`

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
{
 find(type: Book, arcql: "* SORT title ASC") {
     edges {
         node {
         ... on Book {
             title
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
                     "title": "Alchemist"
                 },
                 "cursor": "Author2Book1"
             },
             {
                 "node": {
                 "title": "Da Vinci Code"
                 },
                 "cursor": "Author1Book1"
             },
             {
                 "node": {
                 "title": "How I taught my GrandMother to Read"
                 },
                 "cursor": "Author3Book2"
             },
             {
                 "node": {
                 "title": "Inferno"
                 },
                 "cursor": "Author1Book3"
             },
             {
                 "node": {
                 "title": "The Last Symbol"
                 },
                 "cursor": "Author1Book2"
             },
             {
                 "node": {
                 "title": "Warriors of light"
                 },
                 "cursor": "Author2Book2"
             },
             {
                 "node": {
                 "title": "Wise and Otherwise"
                 },
                 "cursor": "Author3Book1"
             }
             ]
         }
     }
}
```

</TabItem>
</Tabs>


#### SORT EXAMPLE 2

Query Statement:
`arcql: "* SORT price DESC"`


<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
 find(type: Book, arcql: "* SORT price DESC") {
     edges {
         node {
             ... on Book {
             price
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
                     "price": 12.99
                     },
                     "cursor": "Author1Book1"
                 },
                 {
                     "node": {
                     "price": 12.99
                     },
                     "cursor": "Author2Book2"
                 },
                 {
                     "node": {
                     "price": 10
                     },
                     "cursor": "Author1Book2"
                 },
                 {
                     "node": {
                     "price": 5.99
                     },
                     "cursor": "Author2Book1"
                 },
                 {
                     "node": {
                     "price": 5.99
                     },
                     "cursor": "Author1Book3"
                 },
                 {
                     "node": {
                     "price": 3.99
                     },
                     "cursor": "Author3Book1"
                 },
                 {
                     "node": {
                     "price": 2.99
                     },
                     "cursor": "Author3Book2"
                 }
             ]
         }
     }
}
```

</TabItem>
</Tabs>

***

### Term Query

A term query is a simple filter asking to return results that match the provided value exactly. It searches for the record that contains the data mentioned in the arcql statement. E.g.

You may frame a query like this:

+ a = 'some string'
+ a = 123
+ a = 'some string' OR 123 AND 'abc'

Boolean Logic is possible on all query types. As specified in the third statement, AND and OR logic can be utilized to get specific records.

#### TERM QUERY EXAMPLE 1

Query Statement:
`arcql: "title='Wise and Otherwise'"`


<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: Book, arcql: "title='Wise and Otherwise'") {
    edges {
      node {
        ... on Book {
          price
          authorid
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
            "price": 3.99,
            "authorid": 3
          },
          "cursor": "Author3Book1"
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

#### TERM QUERY EXAMPLE 2

Query Statement: 
`price=5.99 AND authorid = 2`

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: Book, arcql: "price=5.99 AND authorid = 2") {
    edges {
      node {
        ... on Book {
          price
          authorid
          title
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
            "price": 5.99,
            "authorid": 2,
            "title": "Alchemist"
          },
          "cursor": "Author2Book1"
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>


#### TERM QUERY EXAMPLE 3

Query Statement: 
`(price=5.99 AND authorid = 1) OR authorid = 2`


<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: Book, arcql: "(price=5.99 AND authorid = 1) OR authorid = 2") {
    edges {
      node {
        ... on Book {
          price
          authorid
          title
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
            "price": 5.99,
            "authorid": 1,
            "title": "Inferno"
          },
          "cursor": "Author1Book3"
        },
        {
          "node": {
            "price": 5.99,
            "authorid": 2,
            "title": "Alchemist"
          },
          "cursor": "Author2Book1"
        },
        {
          "node": {
            "price": 12.99,
            "authorid": 2,
            "title": "Warriors of light"
          },
          "cursor": "Author2Book2"
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

***

### Phrase Query

Phrase query searches for the individual words or exact phrases from the data. It is similar to a search engine that searches the phrase through various web pages.

You may frame a query like this:

+ a ~ 'some string'
+ a ~ 123
+ a ~ 'some string' OR 123

Here `a` is any field from the data type. Consider the third statement. Here, the query returns data from the `a` field which has strings ‘some’ or ‘ string’ or integer 123.

#### PHRASE QUERY EXAMPLE 1

Query Statement: 
`name ~ 'sudha'`

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: Author, arcql: "name ~ 'sudha'" ) {
    edges {
      node {
        ... on Author {
          name
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
            "name": "Sudha Murti"
          },
          "cursor": "Author3"
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

#### PHRASE QUERY EXAMPLE 2

Query Statement: 
`name ~ 'sudha' OR age ~ 56`

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: Author, arcql: "name ~ 'sudha' OR age ~ 56" ) {
    edges {
      node {
        ... on Author {
          name
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
            "name": "Dan Brown"
          },
          "cursor": "Author1"
        },
        {
          "node": {
            "name": "Sudha Murti"
          },
          "cursor": "Author3"
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

***

### EXIST

+ EXIST a

This query returns records that have non-null data in the field `a`.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: Author, arcql: "EXIST age") {
    edges {
      node {
        ... on Author {
         name
         age
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
            "name": "Dan Brown",
            "age": 56
          },
          "cursor": "Author1"
        },
        {
          "node": {
            "name": "Paulo Coelho",
            "age": 70
          },
          "cursor": "Author2"
        },
        {
          "node": {
            "name": "Sudha Murti",
            "age": 70
          },
          "cursor": "Author3"
        }
        
      ]
    }
  }
}
```

</TabItem>
</Tabs>

***

### NOT EXIST

This query returns records that have null data in the field `a`.

+ NOT EXIST a

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: Author, arcql: "NOT EXIST age") {
    edges {
      node {
        ... on Author {
         name
         age
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
            "name": "Agatha christie",
            "age": null
           },
          "cursor": "Author4"
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

***

### Prefix Query

A prefix query returns records that have data starting with the prefix stated in the query.

+ a ^ 123
+ a ^ 'some string' OR 123

The last statement returns the records from the field `a` that start with ‘some string’ or ‘123’

#### PREFIX QUERY EXAMPLE 1

Query Statement: 
`name ^ 'Paulo' OR age ^ 5`

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: Author, arcql: "name ^ 'Paulo' OR age ^ 5" ) {
    edges {
      node {
        ... on Author {
          name
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
            "name": "Dan Brown"
          },
          "cursor": "Author1"
        },
        {
          "node": {
            "name": "Paulo Coelho"
          },
          "cursor": "Author2"
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

***

### Wildcard Query

A wildcard character is used to substitute one or more characters in a string. A wildcard query treats `*` and `?` as special characters. . `*`Means match anything from this point onwards. `?` Means match any single character at this position

+ a * 'some*'
+ a * 123
+ a * 'string_?' OR 123

The first statement searches words with ‘some’ like someone, somewhere, something, etc. Third sting searches phrases with 'string_?'. The question mark may carry any alphabet, number, or symbol.

#### WILDCARD QUERY EXAMPLE 1

Query Statement: 
`name * 'P*'`

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: Author, arcql: "name * 'P*'" ) {
    edges {
      node {
        ... on Author {
          name
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
            "name": "Paulo Coelho"
          },
          "cursor": "Author2"
        }
      ]
    }
  }
}

```

</TabItem>
</Tabs>

***

#### WILDCARD QUERY EXAMPLE 2

Query Statement: 
`age * '?6'`

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: Author, arcql: "age * '?6'" ) {
    edges {
      node {
        ... on Author {
          name
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
            "name": "Dan Brown"
          },
          "cursor": "Author1"
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

***

### Range Query

Range queries search for the content that falls within given range.

+ a IN (0, 1] =>  left inclusive => including 0, excluding 1
+ a IN \[0, 1) => right inclusive => excluding 0, including 1
+ a IN (0, 1) => exclusive => not including 0 or 1, only those in between
+ a IN \[0, 1\] => inclusive => including both 0, 1 and everything in between

You may use boolean logic to combine search e.g.

+ a IN \[0, 1 OR 5,10 AND 10, 11)

Range query also works for strings

+ a IN \['America', 'Jamaica')

The strings work in alphabetical order. The query returns the values that start with a letter between ‘A’ and ‘J’.

#### RANGE QUERY EXAMPLE 1

Query Statement: 
`age IN (50, 70)`

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: Author, arcql: "age IN (50, 70)") {
    edges {
      node {
        ... on Author {
          name
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
            "name": "Dan Brown"
          },
          "cursor": "Author1"
        }
      ]
    }
  }
}
```


</TabItem>
</Tabs>

#### RANGE QUERY EXAMPLE 2

Query Statement: 
`age IN (50, 70]`

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: Author, arcql: "age IN (50, 70]") {
    edges {
      node {
        ... on Author {
          name
        }
      }
      cursor
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
            "name": "Dan Brown"
          },
          "cursor": "Author1"
        },
        {
          "node": {
            "name": "Paulo Coelho"
          },
          "cursor": "Author2"
        },
        {
          "node": {
            "name": "Sudha Murti"
          },
          "cursor": "Author3"
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

#### RANGE QUERY EXAMPLE 3

Query Statement: 
`title IN ['Da Vinci Code','Inferno']`

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: Book, arcql: "title IN ['Da Vinci Code','Inferno']") {
    edges {
      node {
        ... on Book {
          title
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
            "title": "Da Vinci Code"
          },
          "cursor": "Author1Book1"
        },
        {
          "node": {
            "title": "Inferno"
          },
          "cursor": "Author1Book3"
        },
        {
          "node": {
            "title": "How I taught my GrandMother to Read"
          },
          "cursor": "Author3Book2"
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

***

### Match All Query

A match all query is a query with the value **“\*”**. It returns all the data from all the fields.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: Author, arcql: "*" ) {
    edges {
      node {
        ... on Author {
          name
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
            "name": "Dan Brown"
          },
          "cursor": "Author1"
        },
        {
          "node": {
            "name": "Paulo Coelho"
          },
          "cursor": "Author2"
        },
        {
          "node": {
            "name": "Sudha Murti"
          },
          "cursor": "Author3"
        },
        {
          "node": {
            "name": "Agatha christie"
          },
          "cursor": "Author4"
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

***

### Geo Location

Hypi allows developers to get location data within a radius of a point defined by longitude and latitude.

`geo(latitude, longitude, radius, latitudeFieldName, longitudeFieldName)`

+  *latitude*: defined in radians by latitude * Pi / 180
+  *longitude*: defined in radians by longitude * Pi / 180
+  *radius*: defined in kilometers, for example, 0.5 stands for 500 meters
+  *latitudeFieldName*: The name of GraphQL type latitude field
+  *longitudeFieldName*: The name of GraphQL type longitude field

`latitudeFieldName` and `longitudeFieldName` give the developers the flexibility to use any float/double decimal point numbers as the source of latitude and longitude. For example, assume that you define a type GPS  in your App schema as follows:
```json
type GPS {
 x: Float
 y: Float
}
```
Now, `latitudeFieldName` should be set to x and `longitudeFieldName` should be set to y.

To query the locations within a radius of 500 meters of a point, degrees(31.9913129, 34.8661077) are converted to radians(0.55835, 0.60852).

Insert data in GPS. Remember x and y values are in **radians** not degrees.
```json
mutation {
 upsert(
     values: {
         GPS: [
             {x: 0.55835374214, y: 0.6084901767 }
             {x: 0.55835374214, y: 0.6084901767 }
             {x: -0.41167494186, y: -0.81812175344 }
             {x: -0.41786913283, y: -0.80969561972 }
             {x: -0.41776046165, y: -0.81033767224 }
             {x: 0.89901594913, y: -0.002154727644 }
             {x: 0.89938548071, y: -0.0022373637481 }
             {x: 0.90000538675, y: -0.0027382086662 }
             {x: 0.55843351241, y: 0.60848146576 }
             {x: 0.55769501648, y: 0.60841038723 }
             { x: 0.55831914971, y: 0.60843128929 }
             ]
         }
     ) {
     id
     }
}
```
Now we can locate the objects within a given radius.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
 find(type: GPS, arcql: "geo(0.55835374214,0.60852837672,0.5,'x','y')") {
     edges {
         node {
         ... on GPS {
                     x
                     y
                 }
             }
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
                 "x": 0.55835374214,
                 "y": 0.6084901767
                 }
             },
             {
                 "node": {
                 "x": 0.55835374214,
                 "y": 0.6084901767
                 }
             }
         ]
     }
   }
}
```

</TabItem>
</Tabs>


### TYPE IN-FIELD IN Queries

Both forms of queries `<fieldExr> TYPE IN` and `<fieldExpr> FIELD IN` are translated to SQL sub-queries with the `IN` clause. These forms of queries act only on scalar fields.

We will go through examples to understand working on these two clauses.

#### TYPE IN

Consider a question for Author data.:  **What are the books by Author2**?

The simple ArcQL query to select Author2 could be

`type: Author, arcql:  “hypi.id=’Author2’”`

This query would fetch the records (booklist) for Author2. But what if table ‘Book’ contains some books with ‘Author2’. The data from the Book table would not be fetched by the above query. Here, TYPEIN would come to the rescue.

TYPE IN would perform a `SELF JOIN` on Book table and select the data with matching Author Name (Author2). 

Now, let’s enter another field `authorinfo` in the Book type which holds information of an author for a particular book. So our schema has been modified like this.
```java
type Book {
    hypi: Hypi
    title: String
    authorid: Int
    price: Float
    authorinfo: Author
}

type Author {
    hypi: Hypi
    name: String
    age: Int
    booklist(...): [Book!]
}
```
Consider we have the following data in the Author and Book table.

**Author**

| **hypi.id** | **name**        | **age** |
|-------------|-----------------|---------|
| **Author1** | Dan Brown       | 56      |
| **Author2** | Paulo Coelho    | 70      |
| **Author3** | Sudha Murti     | 70      |
| **Author4** | Agatha christie | null    |

| Booklist         |                                     |           |              |                |
|------------------|------------------------------------:|-----------|--------------|----------------|
| **hypi.id book** |                           **title** | **price** | **authorid** | **authorinfo** |
|                  |                                     |           |              | **name**       |
| **Author1Book1** |                       Da Vinci Code | 13        | 1            | Dan Brown      |
| **Author1Book2** |                     The Last Symbol | 10        | 1            | Dan Brown      |
| **Author1Book3** |                             Inferno | 5.99      | 1            | Dan Brown      |
| **Author2Book1** |                           Alchemist | 5.99      | 2            | Paulo Coelho   |
| **Author2Book2** |                   Warriors of light | 13        | 2            | Paulo Coelho   |
| **Author3Book1** |                  Wise and Otherwise | 3.99      | 3            | Sudha Murti    |
| **Author3Book2** | How I taught my GrandMother to Read | 2.99      | 3            | Sudha Murti    |
| Null             |                                Null | null      | Null         |                |

**Book**

| **hypi.id** | **title**              | **price** | **authorid** | **authorinfo** |
|-------------|------------------------|-----------|--------------|----------------|
|             |                        |           |              | **name**       |
| **Book1**   | Hamlet                 | -         | -            | Shakespeare    |
| **Book2**   | Like the flowing river | -         | -            | Paulo Coelho   |

Now we will combine data from Author and Book with TYPE IN query below.

```javascript
authorinfo.name TYPE IN Author:
booklist.authorinfo.name WHERE hypi.id = 'Author2'
```
In the above ArcQL query, Book table performs `SELF JOIN` combining all the author names (left parameter). Then it performs sub query with `IN` clause and selects the data of Author2(right parameter) . The matching data with the Author name (Paulo Coelho) gets selected.

Let’s look into the entire query and results.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: Book, arcql: "authorinfo.name TYPE IN Author:booklist.authorinfo.name WHERE hypi.id = 'Author2'") {
    edges {
      node {
        ... on Book {
         title
          authorinfo{
            name          
          }
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
                     "title": "Alchemist",
                     "authorinfo": {
                         "name": "Paulo Coelho"
                     }
                 },
                 "cursor": "Author2Book1"
             },

             {
                 "node": {
                     "title": "Warriors of light",
                     "authorinfo": {
                     "name": "Paulo Coelho"
                     }
                 },
                 "cursor": "Author2Book2"
             },
             {
                 "node": {
                     "title": "Like the flowing river",
                     "authorinfo": {
                     "name": "Paulo Coelho"
                     }
                 },
                 "cursor": "Book2"
                 }
             ]
         }
     }
}
```

</TabItem>
</Tabs>

Thus we get books by `Author2` from both tables using `TYPE IN`. Frame your own query using TYPE IN.

#### FIELD IN

Consider below question for Author data.

***What are the books by Author2 as well as books by other authors?***

Simply searching the Author table or Book table will not give us entire list.

Let’s use `FIELD IN` to get results!
```java
arql: “hypi.id != 'Author2' AND Author:booklist.authorinfo.name FIELD IN Author:booklist.authorinfo.name WHERE hypi.id = 'Author2'”
```
The query says:

1. Find the names of authors from the booklist where id is Author2 ( Author:booklist.authorinfo.name WHERE hypi.id = 'Author2'”)
2. Find the names of all the authors from booklist (Author:booklist.authorinfo.name)
3. Return all matching authors except Author2

First the query will perform self join on Books table to get all the author names excluding Author2 from left hand side. Then it does a SQL `IN` on the results of the query on the right hand side. 

Here Names of Author1, 2 and 3 are the common author names from both sides. Author4 would be skipped from the list. So this list returns all the books (Books by Author2 as well as books not written by Author2).

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
 find(type: Book, arcql: "hypi.id != 'Author2' AND Author:booklist.authorinfo.name FIELD IN Author:booklist.authorinfo.name WHERE hypi.id = 'Author2'") {
     edges {
         node {
             ... on Book {
                 title
                 authorinfo{
                     name
                 }
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
                 "title": "Da Vinci Code",
                 "authorinfo": {
                         "name": "Dan Brown"
                     }
                 },
                 "cursor": "Author1Book1"
             },
             {
                 "node": {
                 "title": "The Last Symbol",
                 "authorinfo": {
                     "name": "Dan Brown"
                 }
                 },
                 "cursor": "Author1Book2"
             },
             {
                 "node": {
                 "title": "Inferno",
                 "authorinfo": {
                 "name": "Dan Brown"
                 }
                 },
                 "cursor": "Author1Book3"
             },
             {
                 "node": {
                 "title": "Alchemist",
                 "authorinfo": {
                 "name": "Paulo Coelho"
                 }
                 },
                 "cursor": "Author2Book1"
             },
             {
                 "node": {
                 "title": "Warriors of light",
                 "authorinfo": {
                     "name": "Paulo Coelho"
                 }
                 },
                 "cursor": "Author2Book2"
             },
             {
                 "node": {
                 "title": "Wise and Otherwise",
                 "authorinfo": {
                 "name": "Sudha Murti"
                 }
                 },
                 "cursor": "Author3Book1"
             },
             {
                 "node": {
                 "title": "How I taught my GrandMother to Read",
                 "authorinfo": {
                 "name": "Sudha Murti"
                 }
                 },
                 "cursor": "Author3Book2"
             },

             {
                 "node": {
                 "title": "Hamlet",
                 "authorinfo": {
                 "name": "Shakespeare"
                 }
                 },
                 "cursor": "Book1"
             },

             {
                 "node": {
                 "title": "Like the flowing river",
                 "authorinfo": {
                 "name": "Paulo Coelho"
                 }
                 },
                 "cursor": "Book2"
                 }
             ]
         }
     }
}
```

</TabItem>
</Tabs>
