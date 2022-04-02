---
id: openwhisk-cli
title: OpenWhisk CLI
sidebar_label: OpenWhisk CLI
slug: /lowcode/openwhisk-cli
---

### What is OpenWhisk

Apache OpenWhisk is an open-source, a serverless platform that executes custom functions. It manages the infrastructure, servers, and scaling using Docker containers. As per its programming model, Developers write functional logic called Actions, in any supported programming language. These actions can be dynamically scheduled and run in response to Triggers from external sources called Feeds or from HTTP requests.

OpenWhisk supports a growing set of Programming languages. It has REST API-based Command Line Interface (CLI) to support the deployment of actions.

You can configure OpenWhisk using Hypi CLI or [OpenWhisk CLI](#Install-OpenWhisk-CLI). It is advisable to use Hypi CLI. 

###  Hypi CLI for OpenWhisk

You can configure OpenWhisk with Hypi CLI. Install Hypi CLI using [this guide](https://docs.hypi.app/docs/lowcode/hypi-cli-intro#install-hypi-cli) for installation. 

Configure Hypi CLI using the `hypi config` command.

```
USAGE
  $ hypi config [API_DOMAIN] [FN_DOMAIN]

OPTIONS
  -a, --api_domain=api_domain
  -f, --fn_domain=fn_domain
  -h, --help                   show CLI help

EXAMPLES
  $ hypi config https://api.my-onpremise-domain.com
  $ hypi config https://fn.your.domain
  $ hypi config https://api.my-onpremise-domain.com https://fn.your.domain
  $ hypi config -a=https://api.my-onpremise-domain.com
  $ hypi config -f=https://fn.your.domain
  $ hypi config -a=https://api.my-onpremise-domain.com -f=https://fn.your.domain
  $ hypi config --api_domain=https://api.my-onpremise-domain.com
  $ hypi config --fn_domain=https://fn.your.domain
  $ hypi config --api_domain=https://api.my-onpremise-domain.com --fn_domain=https://fn.your.domain
  
```

Go to your project folder command line and run `hypi config` to set configuration. `-a` represents the API hostname. `-f` represents the serverless function domain.

```
hypi config -a=https://api.staging.hypi.dev -f=https://fn.hypi.app
Done, Please make sure to login again, hypi login and do init and sync your schema
```

Now, [Login](hypi-cli-intro.md#hypi-login) to Hypi App Instance.

```
hypi login -d
Enter domain and token
? Domain?  professionally.apps.hypi.app
? Token?  <Auth-Token>
Logged in successfully
```

Run `hypi wsk configure` command to configure OpenWhisk.

```
hypi wsk configure
Command wsk not found
Do you want to install Openwhisk? (yes/no): yes
Openwhisk binaries downloaded
OpenWhisk installed
ok: whisk auth set. Run 'wsk property get --auth' to see the new value.
ok: whisk API host set to '[https://fn.staging.hypi.dev](https://fn.staging.hypi.dev/)'
```

This completes the configuration of OpenWhisk. Now, you can create your own Serverless Functions.
Use below steps for installation of OpenWhisk CLI if you opt to use it.

### Install OpenWhisk CLI

Install the latest version of OpenWhisk CLI (wsk) for your Operating system as per the instructions given in the below link.

https://github.com/apache/openwhisk-cli/releases

Make sure to set PATH environmental variable pointing towards wsk binary file. Verify the installation using the following command. You may get the list of available commands.

```
wsk --help
```

### Configure OpenWhisk 

Before using OpenWhisk, you must configure it to point towards Hypi's API endpoint and provide associated authentication credentials.

##### wsk property set

Run the follwing command to set Hypi Instance Domain as OpenWhisk Host.

```java
wsk property set --apihost "https://fn.hypi.app" --auth "<InstanceDomain\>:<Auth_Key>"
```
Here \<InstanceDomain\>  is App Instance Domain, e.g. `proudest.apps.hypi.app` and \<Auth_Key> is the Authorization token of that domain.

API endpoint to implement serverless functionality with Hypi is `https://fn.hypi.app`
