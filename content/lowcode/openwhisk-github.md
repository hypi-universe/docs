---
id: openwhisk-github
title: Using the GitHub Package
sidebar_label: GitHub Package
slug: /lowcode/openwhisk-github
---

The `/whisk.system/github` package offers a convenient way to use the [GitHub APIs](https://developer.github.com/).

The package includes the following feed:

| Entity | Type | Parameters | Description |
| --- | --- | --- | --- |
| `/whisk.system/github` | package | username, repository, accessToken | Interact with the GitHub API |
| `/whisk.system/github/webhook` | feed | events, username, repository, accessToken | Fire trigger events on GitHub activity |

Creating a package binding with the `username`, `repository`, and `accessToken` values is suggested.  With binding, you don't need to specify the values each time that you use the feed in the package.

### Firing a trigger event with GitHub activity

The `/whisk.system/github/webhook` feed configures a service to fire a trigger when there is activity in a specified GitHub repository. The parameters are as follows:

- `username`: The user name of the GitHub repository.
- `repository`: The GitHub repository.
- `accessToken`: Your GitHub personal access token.
- `events`: The [GitHub event type](https://developer.github.com/v3/activity/events/types/) of interest.
- `baseUrl`: The GitHub api endpoint. Default value is 'https://api.github.com'.

The following is an example of creating a trigger that will be fired each time that there is a new commit to a GitHub repository.

1. Generate a GitHub [personal access token](https://github.com/settings/tokens).

  - **Important** _When [creating your personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line), be sure to select the following **scopes**:_
    - **repo**: **repo:status** to allow access to commit status.
    - **admin:repo_hook**: **write:repo_hook** to allow the feed action to create your webhook.
  - **Warning** _Make sure that you don't have any webhooks already defined for your repository or they may be overwritten._

2. Create a package binding that is configured for your GitHub repository and with the personal access token created in step 1.

  ```
  hypi wsk package bind /whisk.system/github myGit \
    --param baseUrl https://github.myenterprise.com/api/v3 \
    --param username myGitUser \
    --param repository myGitRepo \
    --param accessToken aaaaa1111a1a1a1a1a111111aaaaaa1111aa1a1a
  ```

3. Create a trigger for the GitHub `push` event type by using your `myGit/webhook` feed.

  ```
  hypi wsk trigger create myGitTrigger --feed myGit/webhook --param events push
  ```

A commit to the GitHub repository by using a `git push` causes the trigger to be fired by the webhook. If there is a rule that matches the trigger, then the associated action will be invoked.

The action receives the GitHub webhook payload as an input parameter. Each GitHub webhook event has a similar JSON schema, but is a unique payload object that is determined by its event type.

For more information about the payload content, see the [GitHub events and payload](https://developer.github.com/v3/activity/events/types/) API documentation.
  
:::note

Large portions of this page is copied from the [Apache OpenWhisk documentation](https://github.com/apache/openwhisk/tree/master/docs) on August 5th 2021 - where there have been customisations to match Hypi's deployment this has been noted. Apache OpenWhisk and the Apache name are the property of the Apache Foundation and licensed under the [Apache V2 license](https://github.com/apache/openwhisk/blob/master/LICENSE.txt) .

:::