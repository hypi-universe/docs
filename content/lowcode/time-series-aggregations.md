---
id: time-series-aggregations
title: Timeseries Aggregations with Date Granularity
sidebar_label: Timeseries Aggregations with Date Granularity
slug: /lowcode/time-series-aggregations
---

Timeseries Aggregations can be performed on the `dateTime` field. So, you may group the records based upon the`dateTime`field and perform aggregations on them. Hypi object has the dateTime fields like`hypi_created` or `hypi_updated`. You may use these fields for timeseries aggregations.

In this tutorial, we will work with the following schema to demonstrate how to use the `dateGranularity` parameter to group numeric fields over time.

```java
type ActorRatings {
    rating: Float!
    gender: Gender!
}
enum Gender {
    Male
    Female
    NotSpecified
}
```
First is looking into the types that you want to aggregate.

## Aggregation Types

For each type in our schema, we have two aggregations that we can perform on them. The first one is named "\[our\_type\]" and the second one is named "\[our\_type\]With". Check more about Aggregations [here](aggregation.md).

Looking at our schema, our aggregations will be

```java
actorRatings(
    where: String
): ActorRatingsAggs
```
and
```java
actorRatingsWith(
    where: String
    groupBy: [ActorRatingsGroupByOptions!]!
    having: String
    first: Int
    after: String
    last: Int
    before: String
    includeTrashed: Boolean
): [ActorRatingsAggs]
```
In this tutorial we will focus on using`actorRatingsWith`since it is the one that allows grouping data.

## Using GroupBy with dateGranularity

Now, let's get into some examples.

Let's retrieve the **average** `rating` **for each day** for the actor with`hypi.id='actor1'`. The aggregation looks like this.
```java
{
  aggregate {
    actorRatingsWith(
      where: "hypi.id='actor1'"
      groupBy: [{ field: hypi_created, dateGranularity: DAYS }]) {
      rating {
        avg
        groupValues{
          key
          value
        }
      }
    }
  }
}
```

Here we are using the `actorRatingsWith` aggregation with the `groupBy` parameter pointing at the field `hypi_created` and passing the `dateGranularity: DAYS` parameter to indicate that we want to group by the `hypi_created` field and have the results grouped  **specifically**  by the  **days**.

As for the data we want to be returned, we specify`avg`and then the`groupValues`so we can know the **value of the field** we are grouping by -`hypi_created`.

:::tip Required Selections:

Note that the groupValues field is a mandatory selection when using the dateGranularity parameter. This means it _MUST_ be one of the fields you select. Otherwise you will receive an error.

:::

The result will look like this.

```json
{
  "data": {
    "aggregate": {
      "actorRatingsWith": [
        {
          "rating": {
            "avg": 4.5,
            "groupValues": [
              {
                "key": "hypi_created",
                "value": "2020-07-09"
              }
            ]
          }
        },
        {
          "rating": {
            "avg": 4.2,
            "groupValues": [
              {
                "key": "hypi_created",
                "value": "2020-07-10"
              }
            ]
          }
        },
        {
          "rating": {
            "avg": 3.3,
            "groupValues": [
              {
                "key": "hypi_created",
                "value": "2020-07-11"
              }
            ]
          }
        }
      ]
    }
  }
}
```

As you can see, the `value` field of the `groupValues`, is displaying dates with different days and the **average** is calculated for that day.

Similarly we can use all the other aggregations: `count` , `min` , `max` , `sum`.

Also, just as we did `DAYS` for the `dateGranularity` in this tutorial, you can use `HOURS` , `MINUTES` and `SECONDS` as for your needs.

In conclusion, aggregations using `dateGranularity` boils down to:

1.  Using the right aggregation type - which is named "\[your_type\]With".
2.  Using`groupBy`to specify which **field** and `dateGranularity` you would like to group by. In our example `hypi_created` , `DAYS`.
3.  Using `where` if you want to filter before calculating.  (It is an [ArcQL](arcql.md) string. In our example -`hypi.id='actor1'`.)
4.  Adding the field that you want to aggregate. In our example `rating`.
5.  Choosing what you want to calculate. In our example `avg`(others include `count` , `min` , `max` and `sum`)
6.  Adding `groupValues` so you can see the **value of the field** that you grouped by in the **result set**.