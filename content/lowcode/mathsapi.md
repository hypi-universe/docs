---
id: mathsapi
title: Maths APIs
sidebar_label: Maths APIs
slug: /lowcode/maths-api
---
Mathematical functions perform standard calculations on the data. Users may perform these calculations on the client-side. However, if more than two clients are performing mathematical operations on the data at the same time, it may lead to data loss or errors. To prevent this scenario, Hypi Maths APIs are designed.

Let’s perform mathematical operations on the price field in the data type `Book`. `Price` is a float value. Mathematical APIs work only on floats and integers, i.e., numerical values.

```json
type Book {
    authorid: Int
    title: String
    price: Float
}
```
Mathematical operations can only be performed on an existing object. The precedence of the mathematical operations follows [BODMAS](https://en.wikipedia.org/wiki/Order_of_operations). So, if all fields are specified the precedence is:

+  Division
+  Multiplication
+  Addition
+  Subtraction

Let’s perform a mathematical operation as shown in the below code. We are carrying out the operations on hypi id - `Author2Book1` generated during [Aggregate APIs example](aggregation.md#examples).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```json
mutation {
     math (
         values: {
             Book: [
             {
                 price: {
                     hypi: { id: "Author2Book1" }
                         div: 3
                         times: 10
                         minus: 2
                         plus: 30
                        }
                     }
                 ]
             }
         ) 
    {
       id
    }
}
```

</TabItem>

<TabItem value="response">

```json
{
 "data": {
     "math": [
         {
         "id": "Author2Book1"
         }
     ]
   }
}
```

</TabItem>
</Tabs>

In above example, we are using all the mathematical operators available in the APIs. Notice that the query uses an array (the square brackets) so you can perform math operations on multiple objects (and even multiple types) in one request.

The order of execution is as follows:

1. value = 5.99 (the price of the book with id Author2Book1)
2. 5.99 / 3 = 1.996666666666667
3. 1.996666666666667 * 10 = 19.96666666666667
4. 19.96666666666667 - 2 = 17.96666666666667
5. 17.96666666666667 + 30 = 47.96666666666667

Now, query the price value of the book that was originally set to 5.99. Its value has changed to 47.96666666666667.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
 find(type: Book, arcql: "hypi.id = 'Author2Book1'") {
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
                 "price": 47.96666666666667 },
                 "cursor": "Author2Book1"
             }
         ]
     }
  }
}
```

</TabItem>
</Tabs>

:::note Read More...

* [How to execute division using Math API](https://hypi.dev/t/how-to-execute-division-using-math-api/80)
* [How to execute multiplication using Maths API](https://hypi.dev/t/how-to-execute-multiplication-using-maths-api/79)
* [How to execute subtraction using Maths API](https://hypi.dev/t/how-to-execute-subtraction-using-maths-api/78)
* [How to execute addition using Maths API](https://hypi.dev/t/how-to-execute-addition-using-maths-api/77)

:::