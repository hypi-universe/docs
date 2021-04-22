---
id: openwhisk-cli
title: OpenWhisk CLI
sidebar_label: OpenWhisk CLI
slug: /openwhisk-cli
---

### What is OpenWhisk

Apache OpenWhisk is an open-source, a serverless platform that executes custom functions. It manages the infrastructure, servers, and scaling using Docker containers. As per its programming model, Developers write functional logic called Actions, in any supported programming language. These actions can be dynamically scheduled and run in response to Triggers from external sources called Feeds or from HTTP requests.

OpenWhisk supports a growing set of Programming languages. It has REST API-based Command Line Interface (CLI) to support the deployment of actions.

### Install OpenWhisk CLI

Install OpenWhisk CLI (wsk) for your Operating system as per the instructions given in the below link.

https://openwhisk.apache.org/documentation.html#wsk-cli

Make sure to set PATH environmental variable pointing towards wsk binary file. Verify the installation using the following command. You may get the 

```
$ wsk --help
```

### Configure OpenWhisk 

Before using OpenWhisk, you must configure it to point towards Hypi's API endpoint and provide associated authentication credentials.

##### wsk property set

Run the follwing command to set Hypi Instance Domain as OpenWhisk Host.

```java
wsk property set --apihost "https://api.hypi.app/fn" --auth "<InstanceDomain\>:<Auth_Key>"
```
Here \<InstanceDomain\>  is App Instance Domain, e.g. `proudest.apps.hypi.app` and \<Auth_Key> is the Authorization token of that domain.

API endpoint to implement serverless functionality with Hypi is `https://api.hypi.app/fn`
