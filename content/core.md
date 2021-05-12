
---
id: core
title: Core 
sidebar_label: Core 
slug: /core
---

`Core` is the built-in app that provides the default functionality for your App. There are some common data types required for different applications. Core has built-in those types for you.

`Core` is always on the left side of the [User Interface](https://docs.hypi.app/docs/ui-create-table-vb) of Hypi as a dependency. You need not add it manually.

> Let’s look at different data types available in the Core.

### Data Types in Core

In built data types help in building the application quickly.  Below is the list of data types under `Core` system app.

#### AccessToken 

When the user logs into his account, the AccessToken object gets generated holding session details.

| **Field Name**     | **Input type** | **Description**                                                           |
|--------------------|----------------|---------------------------------------------------------------------------|
| **sessionToken**   | **String**     | Authorization Token needed to perform various actions like Query/Mutation |
| **sessionExpires** | **Long**       | Session Expiry Time                                                       |
| **errorCode**      | **String**     | Login Error Code                                                          |
| **errorMsg**       | **String**     | Login Error Message                                                       |
#### Account

This data type holds the account details. When a user creates an account, he can store his account details.

| **Field Name**   | **Input type** | **Description**                                                     |
|------------------|----------------|---------------------------------------------------------------------|
| **verified**     | Boolean        | Account is verified or not                                          |
| **enabled**      | Boolean        | Account enable/disable                                              |
| **username**     | String         | Username of the account                                             |
| **password**     | Password       | Password of the account                                             |
| **owner**        | Person         | Personal Details                                                    |
| **emails**       | Email          | Email Details                                                       |
| **phones**       | Phone          | Phone Details                                                       |
| **groups**       | Group          | If the account belongs to any group, store the details of the group |
| **roles**        | Role           | If the account holds any Role, store the details                    |
| **attempts**     | LoginAttempt   | The login attempts to the account get updated                       |
| **remoteLogins** | RemoteLogin    | Remote Login Status                                                 |

#### Password

Password details of an account.

| **Field Name** | **Input type** | **Description**                       |
|----------------|----------------|---------------------------------------|
| **value**      | String         | Password value stored with Encryption |
| **expired**    | Boolean        | Password Expiry status                |

#### Person

Personal Details of an Account.

| **Field Name**  | **Input type** | **Description**    |
|-----------------|----------------|--------------------|
| **dob**         | DateTime       | Date of Birth      |
| **gender**      | Gender         | Gender             |
| **avatar**      | Image          | Photo Image        |
| **names**       | PersonName     | Firstname/lastname |
| **addresses**   | Address        | Address details    |
| **phones**      | Phone          | Phone Details      |
| **roles**       | Pair           | Role details       |
| **preferences** | Pair           | Preference details |

`PersonName`, `Address`, `Country`, `Language`, `Currency`, `Phone data` types are also available. The fields of these tables are self-explanatory. You may check the field details on the user interface.

#### URL

Details of a URL

| **Field Name**  | **Input type** | **Description**             |
|-----------------|----------------|-----------------------------|
| **path**        | String         | URL path                    |
| **queryParams** | JSON           | Query Parameters of the URL |
| **port**        | Int            | Port details                |
| **host**        | String         | Host of the url             |

#### GeoEnvelope

Latitude and Longitude details of a location.

| **Field Name** | **Input type** | **Description**       |
|----------------|----------------|-----------------------|
| **p1**         | Coordinate     | Latitude coordinates  |
| **p2**         | Coordinate     | Longitude coordinates |

#### Coordinate

Coordinates of a location.

| **Field Name** | **Input type** | **Description** |
|----------------|----------------|-----------------|
| **x**          | Float          | x coordinates   |
| **y**          | Float          | y coordinates   |

#### Pair

This data type acts as a mapping between key-value pairs.

| **Field Name** | **Input type** | **Description**   |
|----------------|----------------|-------------------|
| **key**        | String         | key of the pair   |
| **value**      | String         | Value of the pair |

#### Counter

This data type provides Counter functionality.

| **Field Name** | **Input type** | **Description**      |
|----------------|----------------|----------------------|
| **name**       | String         | Name of the Counter  |
| **label**      | String         | Label of the counter |
| **value**      | Float          | Value                |
| **tags**       | String         | Associated tags      |

#### Email

This data type holds the Email details of an account. When the Email value is entered, it provides an internal validation to check for proper Email format.

| **Field Name** | **Input type** | **Description**                   |
|----------------|----------------|-----------------------------------|
| **value**      | String         | Email Address value               |
| **type**       | String         | Type of Email: Work/Personal etc. |

#### EmailMessage

This data type holds the content of an Email Message.

| **Field Name**         | **Input type**      | **Description**                       |
|------------------------|---------------------|---------------------------------------|
| **from**               | Email               | Email Message from (Email ID)         |
| **subject**            | String              | Subject of the Email                  |
| **template**           | String              | Template of the Email                 |
| **text**               | String              | Text content                          |
| **html**               | String              | HTML message                          |
| **deliveryTime**       | DateTime            | Delivery time of the message          |
| **requireTls**         | Boolean             | Required time                         |
| **skipVerification**   | Boolean             | Verification should be skipped or not |
| **headers**            | Json                | Header of the Email                   |
| **variables**          | Json                | Email Variables                       |
| **recipientVariables** | Json                | Recipients                            |
| **to**                 | Email               | To Email ID                           |
| **cc**                 | Email               | Cc Email ID                           |
| **bcc**                | Email               | Bcc Email ID                          |
| **attachment**         | File                | Attachment file object                |
| **Inline**             | File                | Inline file object                    |
| **tags**               | String              | Tags of the Email                     |
| **responses**          | EmailSendingAttempt | Email response                        |

#### LogMessage

Logs of the messages can be stored in this data type.

| **Field Name** | **Input type** | **Description**                                  |
|----------------|----------------|--------------------------------------------------|
| **level**      | LogLevel       | Log Level                                        |
| **message**    | String         | Log message                                      |
| **stackTrace** | String         | Tracing the stack related to the log             |
| **releaseId**  | String         | releaseId of the application logging the message |
| **type**       | String         | Type of Log                                      |
| **workflow**   | String         | Workflow associated with Log                     |
### Enumerations

The core system app also contains in-built Enumerations types. Few enums are described below.
```
enum Gender {
    MALE
    FEMALE
    OTHER
    RATHER_NOT_SAY
}

enum TimeUnit {
    SECONDS
    MINUTES
    HOURS
    DAYS
}

enum OpType {
    Query
    Mutation
    Subscription
}

enum EventType {
    CREATED
    #An event type indicating that the cache entry was created.
    UPDATED
    #An event type indicating that the cache entry was updated.i.e. a previous mapping existed
    REMOVED
    #An event type indicating that the cache entry was removed.
    EXPIRED
    #An event type indicating that the cache entry has expired.
}

enum EmailEventType {
    delivered
    #Hypi sent the email and it was accepted by the recipient email server.
    failed
    #Hypi could not deliver the email to the recipient email server.
}

enum LogLevel {
    DEBUG
    INFO
    WARN
    ERROR
}
```