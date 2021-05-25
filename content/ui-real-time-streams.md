---
id: ui-real-time-streams
title: Real-time Input Streams
sidebar_label: Real-time Input Streams
slug: /ui-real-time-streams
---

1. Under the `Data` tab of an instance, you can find `Real-time input streams`. Here, you can retrieve the data from the [Apache Pulsar cluster](https://pulsar.apache.org/).

![InputStream](/img/UI-Pulsar-1.PNG)

Pulsar is a multi-tenant, high-performance solution for server-to-server messaging. Using Pulsar, the publisher publishes the messages to different topics, and then the messages are broadcasted to all subscriptions.

Hypi acts as a subscriber and provides the user interface to stream messages from topics.

2. To start streaming the messages, click on `+New Stream`

![InputStream](/img/UI-Pulsar-2.PNG)

3. Enter the details of the pulsar messaging source. Provide the source name or topic name. Choose the account created in the instance for which message streaming must be started. From the dropdown, choose an in-built function. This function will process the input stream and transfer the data in the instance. 

![InputStream](/img/UI-Pulsar-3.PNG)

4. By default, input streaming starts running. But you can toggle the `Not Running` button to keep the status Not Running. You may keep the status `Non-persistent` or persistent as per the settings provided in the Pulsar Cluster.

![InputStream](/img/UI-Pulsar-4.PNG)

5. Click on `Enable credentials` to provide the Pulsar service URL settings. Enter Host, port, and token (if applicable). Click on `Create Streaming source` to create the Pulsar Messaging source.

![InputStream](/img/UI-Pulsar-5.PNG)

6. The Pulsar Source gets added. You may edit the source information or delete the source.

![InputStream](/img/UI-Pulsar-6.PNG)

7. You may start or stop running the stream or keep the messages Persistent or Non- persistent.

![InputStream](/img/UI-Pulsar-7.PNG)