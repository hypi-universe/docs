---
id: fileupload
title: File Upload
sidebar_label: File Upload
slug: /fileupload
---

Many applications need to upload the file to the backend. Hypi provides a simple API to do so!

Hypi’s core App has a type definition called `File`. A file can be uploaded using an endpoint. Once it is uploaded an object of `File` type gets created. The information about the file gets extracted and stored as a `File` object. The definition includes metadata about the file, the URL to download it, and more.

The file can be downloaded from the URL given in the object using an authorization token. Anonymous users cannot download the file. To permit access to other users can be granted to download the file.

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

### Upload endpoint

To upload a file (any file can be uploaded, image, pdf, etc), use the following endpoint

`POST /upload/**`

Note the `**`, if you use a path like `/upload/my/path`, then the `File` object will have a directory value of `/my/path`. 


## Download endpoint

`GET /file/<path>.ext`

To download a file uploaded to the platform, the above URL pattern should be used.

The `<path>` is by default the `ID` of the `File` object. The `.ext` is the original extension of the file e.g. `.txt`.

## curl upload example
```
auth='<hypi-auth-token>'
curl -v https://api.hypi.app/upload/ -H "Accept: application/json" -H "Authorization: $auth" -H 'hypi-domain: <instance-domain>' -F 0=@/path/to/file.txt
```
+  The response of the upload is JSON
+  The `Authorization` header is required
+  The `hypi-domain` header is required (like other API requests)

## curl download example
```
curl -v https://api.hypi.app/file/<id>.ext -H "Authorization: $auth"
```

In this example, we provide an authorisation token. This is because files are private to the account which created it by default. To give access to other users or allow anonymous download a permission must be created with appropriate policies.

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
          resource: "<file-id>"
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
    
In this example we explicitly give anonymous users access to the file uploaded. This could also have been done by giving access to_all_accounts in the app instance by setting `includeAllAccounts` to true.

    curl -v https://api.hypi.app/file/<id>.ext

Due to the permission above, the curl request can now be made without any authorisation headers.