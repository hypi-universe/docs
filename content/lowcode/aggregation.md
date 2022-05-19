---
id: aggregation
title: Aggregation
sidebar_label: Aggregation
slug: /lowcode/aggregation
---

Aggregation performs a calculation on a set of values and returns a single value. Aggregations are powerful functions. Their results provide insight into the gathered values in the database.

You can aggregate any scalar field in at least one way. String fields can only be counted or grouped. But, you can perform aggregations on numerical fields like Integers and Floats. You can perform the following aggregations with Hypi.

+ `avg` - Calculates the average of a set of values from a field
+ `count` - Counts the number of records from a field
+ `sum` – Calculates the sum of a set of values from a field
+ `max` – Returns maximum from a set of values
+ `min` – Returns minimum from a set of values

We will use the following schema to work with aggregate functions.
```java
type Book {
    authorid: Int
    title: String
    price: Float
}

type Author {
    name: String
    age: Int
    booklist: [Book!]
}
```

## Examples:

Let’s add some data in an object to perform aggregations.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Input Data', value: 'data'},
    {label: 'Response', value: 'response'},
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
         },
         {
         "hypi": {"id": "Author1Book3"},
         "title": "Inferno",
         "price": 5.99,
         "authorid": 1
         }
         ]
     },
 {
     "hypi": {"id": "Author2"},
     "name": "Paulo Coelho",
     "age": 70,
     "booklist":[
         {
         "hypi": {"id": "Author2Book1"},
         "title": "Alchemist",
         "price": 5.99,
         "authorid": 2
         },
        {
         "hypi": {"id": "Author2Book2"},
         "title": "Warriors of light",
         "price": 12.99,
         "authorid": 2
         }
         ]
     }
   ]
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
         "id": "Author1"
         },
         {
         "id": "Author2"
         }
        ]
    }
}
```

</TabItem>
</Tabs>

Here author’s age and price of the book are numerical fields. So, we would perform operations on these two fields. Aggregation operations can be performed with or without filters. Filters may have `distinct`, `group-by` or `where` clauses, etc. They are similar to SQL-type database queries.

### Aggregate with No Filter

The below example demonstrates aggregation without any filters. Here, we are simply aggregating values from age and price fields. The function returns the average value, the number of records(count), minimum value, maximum value, and the sum of the values from both fields.


<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```json
{
  aggregate {
    author {
      age {
        avg
        count
        max
        min
        sum
      }
    }
    book {
      price {
        avg
        count
        max
        min
        sum
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
     "aggregate": {
         "author": {
             "age": {
             "avg": 63,
             "count": 2,
             "max": 70,
             "min": 56,
             "sum": 126
         }
     },
         "book": {
             "price": {
             "avg": 9.592000000000002,
             "count": 5,
             "max": 12.99,
             "min": 5.99,
             "sum": 47.96000000000001
             }
         }
      }
   }
}
```

</TabItem>
</Tabs>


You may not select a field or an aggregation function, if it's not needed, Hypi will perform calculations only if you select the field or specify the aggregate function. This means you get faster queries by specifying less.

### Aggregate Distinct Rows

You may aggregate unique rows by specifying the filter ‘distinct’ as true. Hypi considers repeated values as just one value. Hence, the count of books has gone down to 3. Only three unique prices have been selected for aggregation. (12.99,5.99,10)



<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```json
{
  aggregate {
    book {
      price {
        avg(distinct: true)
        count(distinct: true)
        sum(distinct: true)
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
     "aggregate": {
         "book": {
             "price": {
             "avg": 9.660000000000002,
             "count": 3,
             "sum": 28.980000000000004
             }
         }
     }
   }
}
```

</TabItem>
</Tabs>

### Aggregate Matching Rows

You may select matching rows ( records with the specific field value) and perform aggregation on those rows. The below example shows the aggregation of prices of books with `authorid` equal to ‘2’.`where` clause have been used for row selection. The result returns aggregate values of prices of books of the second author.,i.e. Paulo Coelho


<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```json
{
  aggregate {
    book(where: "authorid='2'") {
      price {
        avg
        count
        sum
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
     "aggregate": {
         "book": {
             "price": {
                 "avg": 9.49,
                 "count": 2,
                 "sum": 18.98
                 }
             }
         }
     }
}
```

</TabItem>
</Tabs>

### Aggregate with groupBy

You may make specific groups of records and perform aggregate operations on them. Use `groupBy` clause as a filter. The below example makes two groups by specifying `authorid` as groupBy field. There are two groups of books with 2 distinct authorids. So, authorid is a key with values 1 and 2. `groupValues` povide the key (groupBy field) and the value of the key.

‘With’ gets attached to the data type to form the aggregate query function. Use the function `bookWith` for using the groupby clause. (Here data type is `book`). You may specify the order to sort the key values,i.e. ascending or descending. (ASC/DESC). The `bookWith` function returns the aggregate prices of books of two authors.


<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```json
{
 aggregate {
     bookWith(groupBy: [{ field: authorid, order: DESC }]) {
         price {
             avg
             count
             sum
             groupValues {
                 key
                 value
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
 "aggregate": {
 "bookWith": [
     {
         "price": {
             "avg": 9.49,
             "count": 2,
             "sum": 18.98,
             "groupValues": [
                 {
                 "key": "authorid",
                 "value": "2"
                 }
              ]
           }
     },
     {
     "price": {
         "avg": 9.660000000000002,
         "count": 3,
         "sum": 28.980000000000004,
         "groupValues": [
             {
             "key": "authorid",
             "value": "1"
             }
           ]
         }
       }
     ]
    }
  }
}
```

</TabItem>
</Tabs>

### Aggregate by Date

You may group the fields based upon the `dateTime` field. Hypi object has the dateTime fields like `hypi_created` or `hypi_updated`. The below example has groups based upon the date of creation of objects. dateGranularity can be set to DAYS, HOURS, MINUTES, or SECONDS.


<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```json
{
  aggregate {
    bookWith(groupBy: [{ field: hypi_created, dateGranularity: MINUTES }]) {
      price {
        avg
        count
        sum
        groupValues {
          key
          value
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
 "aggregate": {
     "bookWith": [
         {
             "price": {
                 "avg": 2.99,
                 "count": 1,
                 "sum": 2.99,
                 "groupValues":[
                     {
                     "key": "hypi_created",
                     "value": "2021-03-15 10:52"
                     }
                 ]
             }
         },
         {
             "price": {
                 "avg": 9.592000000000002,
                 "count": 5,
                 "sum": 47.96000000000001,
                 "groupValues": [
                     {
                     "key": "hypi_created",
                     "value": "2021-03-15 10:39"
                     }
                 ]
             }
          }
       ]
    }
  }
}
```

</TabItem>
</Tabs>

You can know more about dateGranularity in [this](time-series-aggregations.md) tutorial.

:::note Read More...

* [How to calculate an average of the set of values using Aggregation](https://hypi.dev/t/how-to-calculate-an-average-of-the-set-of-values-using-aggregation/86)
* [How to count the number of records from a field using Aggregation](https://hypi.dev/t/how-to-count-the-number-of-records-from-a-field-using-aggregation/84)
* [How to calculate a sum of the set of values using Aggregation](https://hypi.dev/t/how-to-calculate-a-sum-of-the-set-of-values-using-aggregation/85)
* [How to retrieve maximum and minimum values from a field](https://hypi.dev/t/how-to-retrieve-maximum-and-minimum-values-from-a-field/83)
* [How to group records and execute aggregation queries](https://hypi.dev/t/how-to-group-records-and-execute-aggregation-queries/82)
* [How to group records based upon the DateTime field](https://hypi.dev/t/how-to-group-the-records-based-upon-the-datetime-field/81)

:::