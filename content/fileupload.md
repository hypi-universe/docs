---
id: fileupload
title: File Upload
sidebar_label: File Upload
slug: /fileupload
---

Many applications need to upload the file to the backend. Hypi provides a simple API to do so!

Hypi’s core App has a type definition called `File`. A file can be uploaded using an endpoint. Once it is uploaded an object of `File` type gets created. The information about the file gets extracted and stored as a `File` object. The definition includes metadata about the file, the URL to download it, and more. You may place these file objects within your data model. For example, profile picture of a user with his personal information.

The file can be downloaded from the URL given in the object using an authorization token. Anonymous users cannot download the file. To allow access to other users, [permission](authorisation.md#permission) can be granted to download the file.

With this preliminary information, let’s get inside the `File` type definition.
```java
type File {
    name: String!
    directory: String!
    path: String!
    isDirectory: Boolean!
    status: FileStatus
    url: URL
    type: String
    size: Long
    extension: String
    isStared: Boolean
    isSharable: Boolean
    content: String
    children(...): [File!]
}
```


| **Parameter**   | **Type**   | **Description**                                                                                                                   |
|-----------------|------------|-----------------------------------------------------------------------------------------------------------------------------------|
| **name**        | String     | Name of the file                                                                                                                  |
| **directory**   | String     | The name of the directory                                                                                                         |
| **path**        | String     | The path of the file                                                                                                              |
| **isDirectory** | Boolean    | If the file has to be uploaded in a virtual file system like Google Drive/Dropbox, this field is set to true                      |
| **status**      | FileStatus | Status of file upload                                                                                                             |
| **url**         | URL        | URL to download file                                                                                                              |
| **type**        | String     | Media type                                                                                                                        |
| **size**        | Long       | Size of the file in Bytes                                                                                                         |
| **extension**   | String     | Extension of the file (.txt,.jpg, etc)                                                                                            |
| **isStared**    | Boolean    | For the virtual file system, the file can be set to Starred status                                                                |
| **isSharable**  | Boolean    | File sharing status                                                                                                               |
| **content**     | String     | For the virtual file system upload, the content of the file would be set to a String value. Otherwise, the content would be null. |
| **children**    | File       | For the virtual file system, the directory can have sub-files                                                                     |

## Upload endpoint

To upload a file (any file can be uploaded, image, pdf, etc), use the following endpoint

`POST /upload/**`

Note the `**`, if you use a path like `/upload/my/path`, then the `File` object will have a directory value of `/my/path`.  If you have many files to upload, you may put all of them in one directory.


## Download endpoint

`GET /file/<path>.ext`

To download a file uploaded to the platform, the above URL pattern should be used.

The `<path>` is by default the `ID` of the `File` object. The `.ext` is the original extension of the file e.g. `.txt`. You may copy the value from `path` field of `File` object.

## curl upload example
```
auth='<hypi-auth-token>'
curl -v https://api.hypi.app/upload/ -H "Accept: application/json" -H "Authorization: $auth" -H "hypi-domain: <instance-domain>" -F 0=@/path/to/file.txt
```
+  The response of the upload is JSON
+  The `Authorization` header is required
+  The `hypi-domain` header is required (like other API requests)
+  You may copy the authorization token and hypi instance domain from [GraphQL configuration of the instance](ui-gql-config.md).
+  `@` is the root directory of the file to be uploaded.

In the following example of curl request, we are uploading logo.png file to Hypi domain. `incineration.apps.hypi.app`

```
curl -v https://api.hypi.app/upload/ -H "Accept: application/json" -H "Authorization: <auth-token>" -H "hypi-domain: incineration.apps.hypi.app" -F 0=@static/img/logo.png
```
The URL Path could be `https://api.hypi.app/upload/mydir` if you want to upload the file under `mydir` directory.

Here, we have uploaded an image file. So, an `Image` object also gets created that has details of the uploaded image. It contains the File object with file details. 

```
type Image {
    name: String!
    file: File!
    description: String
    location: Geo
}
```

After executing curl command, let's retrieve the details of the file object.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: File, arcql: "*") {
    edges {
      node {
        ... on File {
          hypi {
            id
          }
          name
          directory
          path
          isDirectory
          status
          status
          url {
            path //Path to download file
          }
          type
          size
          extension
          isStared
          isSharable
          content
        }
      }
      cursor
    }
  }
}
```

</TabItem>
<TabItem value="response">

```java
{
  "data": {
    "find": {
      "edges": [
        {
          "node": {
            "hypi": {
              "id": "01F35ZCSYBHTQ4JBWZ1KFXTDZR"
            },
            "name": "logo.png",
            "directory": "/",
            "path": "/logo.png",
            "isDirectory": false,
            "status": "UPLOADED",
            "url": {
              "path": "/file/01F322XSV13R9VAGJXW351PVBT-01F35ZCSYBHTQ4JBWZ1KFXTDZR.png"
            },
            "type": "image/png",
            "size": 13759,
            "extension": "png",
            "isStared": null,
            "isSharable": null,
            "content": null
          },
          "cursor": "01F35ZCSYBHTQ4JBWZ1KFXTDZR"
        }
      ]
    }
  }
}
```
</TabItem>
</Tabs>

## curl download example
```
curl -v https://api.hypi.app/file/<id>.ext -H "Authorization: $auth"
```
Let's download the file that we uploaded earllier. 
```
curl -v https://api.hypi.app/file/01F322XSV13R9VAGJXW351PVBT-01F35ZCSYBHTQ4JBWZ1KFXTDZR.png -H "Authorization: <auth-token>" --output filedownload.png  
```
`--ouput filedownload.png` would redirect the data from the file to an output file.

In this example, we provide an authorisation token. This is because files are private to the account which created it by default. To give access to other users or allow anonymous download, a permission must be created with appropriate policies.

For example, to give the anonymous users access (no token required), use an `AccountPolicy` to grant the `anonymous` user account read access.

```java
mutation {
  upsert(
    values: {
      Permission: [
        {
          name: "Grant access to anonymous user"
          decisionStrategy: Unanimous
          type: "File"
          resource: "01F35ZCSYBHTQ4JBWZ1KFXTDZR"
          scopes: ["*"]
          operationType: Query
          operations: ["find"]
          #includeAllAccounts: true, //wildcard so all accounts can access
          policies: [
            {
              hypi: { impl: "AccountPolicy" }
              name: "Grant user anonymous access to my file"
              logic: Positive
              accounts: [{ hypi: { id: "anonymous" } }]
            }
          ]
        }
      ]
    }
  ) {
    id
  }
}
```
   
Note:  `resource` field has the hypi id of the file uploaded.
    
In this example, we explicitly give anonymous users access to the file uploaded. This could also have been done by giving access to_all_accounts in the app instance by setting `includeAllAccounts` to true.

Due to the permission above, the curl request can now be made without any authorisation headers.

`curl -v https://api.hypi.app/file/<id>.ext`

Now you can download the file without the hassle of providing authorization token.

```
curl -v https://api.hypi.app/file/01F322XSV13R9VAGJXW351PVBT-01F35ZCSYBHTQ4JBWZ1KFXTDZR.png --output file.png
```