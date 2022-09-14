---
id: api-rate-limits
title: API Rate Limits
sidebar_label: API Rate Limits
slug: /lowcode/api-rate-limits
---

`API Rate Limits` refer to **the number of API requests a user can make to the Server within a given period**. The Rate Limits vary as per the subscribed plans and the type of requests.

If the `API Rate Limit` gets exceeded, then check for the **standard 429 status code and HTTP header** beginning with `X-Hypi-`

**Example**

```
x-hypi-apirequest-rate-limit-remaining: 18
x-hypi-apirequest-rate-limit-retry-after-seconds: 0
x-hypi-file-rate-limit-remaining: 50000000
x-hypi-file-rate-limit-retry-after-seconds: 0
x-hypi-networkin-rate-limit-remaining: 252349763
x-hypi-networkin-rate-limit-retry-after-seconds: 0
x-hypi-networkout-rate-limit-remaining: 243087069
x-hypi-networkout-rate-limit-retry-after-seconds: 2666416
x-hypi-row-rate-limit-remaining: 999266
x-hypi-row-rate-limit-retry-after-seconds: 2666416532000000
x-hypi-serverless-rate-limit-remaining: 3600000
x-hypi-serverless-rate-limit-retry-after-seconds: 0
```
Let's check the terminologies being used in the above response.

+ `retry-after-seconds`:  The number of seconds before you can retry the request
+ `remaining`: Remaining amount from the request Rate Limit

The Rate Limit is applicable for the following parameters or type of requests:

1.  `apirequest`: The number of API requests users can send to a single instance within a month or 31 days. 
2.  `requestsPerSecond`: The number of requests that can be sent within 1 second. 
3.  `row`: The number of records that can be upserted across all data types within a single instance. If you exceed this limit, you may delete old records and upsert new records.
4.  `file`: The number of bytes of data that can be uploaded using the files within a single instance.
5.  `networkin`:  The amount of data that can be sent through a single request. For a query, the incoming data towards the server may be in a few bytes. While uploading a file, this amount will include the size of the file.
6.  `networkout` : The amount of data that can be retrieved from a single response to a particular request. 
7.  `serverless`: Execution time of the serverless functions. The time spent executing a serverless function gets recorded. If the time limit exceeds, then the user gets an error with a 429 status code. 

For current pricing and rate limits for the above parameters, see [hypi.io](https://hypi.io). 
