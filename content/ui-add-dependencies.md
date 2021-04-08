---
id: ui-add-dependencies
title: Add Dependencies
sidebar_label: Add Dependencies
slug: /ui-add-dependencies
---

A Hypi App may have a functional dependency on one or more apps. Borrow the functionalities from other apps using the `Dependencies` feature. When you add an app as a dependency, your Hypi app will inherit its behavior.

1. To add `Dependencies`, click on `Configuration` under the `Releases` tab. You will find the `Dependencies` section. Click on `+Create` to add a dependency.

![Dependencies](/img/UI-Dependencies-1.png)

2. Search for `App` name to add a dependency.

![Dependencies](/img/UI-Dependencies-2.png)

3. Click on the App name listed below.

![Dependencies](/img/UI-Dependencies-3.png)

4. You will get a list of releases. Select the appropriate release.

![Dependencies](/img/UI-Dependencies-4.png)

5. The release gets listed under the `Dependencies` section.

![Dependencies](/img/UI-Dependencies-5.png)

6. There is another way to add a dependency. Click on `+ Custom Dependency.`

![Dependencies](/img/UI-Dependencies-6.png)

7. Here, you need to enter `Release ID` to add a release as a dependency. You may copy the Release ID from the configuration section of the release to be added.

![Dependencies](/img/UI-Dependencies-7.png)

8. The release from the app gets added in the section. You may remove the dependencies by clicking the `Delete` icon.

![Dependencies](/img/UI-Dependencies-8.png)

9. Added dependencies can also be seen under the `Console` tab. Tables from the added Releases get added as dependencies under Table listing. Hence, schema from the added releases gets inherited.

![Dependencies](/img/UI-Dependencies-9.png)

