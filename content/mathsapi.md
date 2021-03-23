---
id: mathsapi
title: Maths APIs
sidebar_label: Maths APIs
slug: /maths-api
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

Let’s perform a mathematical operation as shown in the below code. We are carrying out the operations on hypi id - `Author2Book1` generated during [Aggregate APIs example](#).
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
Result:
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
In this example, we are using all the mathematical operators available in the APIs. Notice that the query uses an array (the square brackets) so you can perform math operations on multiple objects (and even multiple types) in one request.

The order of execution is as follows:

1.  value = 5.99 (the price of the book with id Author2Book1)
2.  5.99 / 3 = 1.996666666666667
3.  1.996666666666667 * 10 = 19.96666666666667
4.  19.96666666666667 - 2 = 17. 96666666666667
5.  17. 96666666666667 + 30 = 47. 96666666666667

Now, query the price value of the book that was originally set to 5.99. Its value has changed to 47.96666666666667.
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