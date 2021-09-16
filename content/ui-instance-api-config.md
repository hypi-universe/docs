---
id: ui-instance-api-config
title: API configurations of an Instance
sidebar_label: API configurations of an Instance
slug: /ui-instance-api-config
---

1. Select any Instance under the `API Instances` tab. Click on `Configuration`. On the left side, you can see list of the `Environment Settings`. The environment settings saved under the Release are reflected here.

![APIConfig](/img/UI-Instance-API-Config-1.PNG)

2. To add a new value for the environment variable, click ``‘New Value’``.

![APIConfig](/img/UI-Instance-API-Config-2.PNG)

3. Add the new value and click on `Save and Update` to save the entered value.

![APIConfig](/img/UI-Instance-API-Config-3.PNG)

4. On the right side, you can see the configuration options for the Instance. It also includes the `Instance ID`. You may copy the Instance ID from here if required.

![APIConfig](/img/UI-Instance-API-Config-4.PNG)

5. `Configure APIs` as per your requirements with the following settings:

+ Enable Anonymous requests: If anonymous requests are enabled, any user may access the APIs without any  authentication token. Know more about Authentication and authentication token [here](authentication.md).

+ Enable Anonymous Registrations: If enabled, Accounts can be created by anonymous users by calling the `createAccount` function. 

+ Enable Account verification: If enabled, Accounts must be verified before the login.

Click the check box to enable the setting.

![APIConfig](/img/UI-Instance-API-Config-5.PNG)

6. You may `Enforce Referential Integrity On Deletes` by clicking the below check box.  It causes an error to be returned if an attempt is made to delete data that is being referenced by other tables. The errors can be avoided at runtime by setting the `clearArrayReferences` to true when you call the [delete](deletedata.md) API.

![APIConfig](/img/UI-Instance-API-Config-6.png)