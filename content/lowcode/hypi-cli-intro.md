---
id: hypi-cli-intro
title: Hypi CLI Overview
sidebar_label: Hypi CLI Overview
slug: /lowcode/hypi-cli-intro
---

Hypi has its own Command Line Interface(CLI) to facilitate using Hypi APIs with Client Applications. Instead of making an HTTP request to Hypi Endpoint, developers can include Hypi as a part of their applications.

CLI synchronizes Hypi APIs with client applications and developers can use them within their own workspace!

## Install Hypi CLI

Go to https://github.com/hypi-universe/cli . Click on `Releases`.  Download Hypi CLI for your operating system with the latest release.  Uncompress the `hypi` folder from the`tar.gz`file.

If you have npm installed,  use the following command to install hypi CLI.
```
$ npm install -g @hypi/cli
```
@hypi/cli => Here, use the entire path of the downloaded Hypi Cli folder

After this, you should have a new `hypi` command available to run. If you do not have `npm` then follow the platform specific steps below to install from the latest binaries.

### Mac

+ Add Hypi CLI folder to the bin folder of Home directory , i.e.` ~/bin`. If this directory doesn't exist then create it.
+ Update the PATH environment variable in `profile` file. 
```
vim ~/.profile
```
```
export PATH="/<PATH TO BIN>/bin/hypi:$PATH"
```
* Replace`<PATH TO BIN>`with the real path to your bin directory where you saved the Hypi binary.

- Open new shell. Provide command `hypi` to verify the installation.
```
hypi
```
```
➜  hypi-cli-angular-example git:(main) ✗ hypi  
 
Application developer community centred around Hypi's unique low-code, serverless development platform.VERSION  
  
  @hypi/cli/0.2.0 darwin-x64 node-v12.19.1USAGE  
  
  $ hypi \[COMMAND\]TOPICS  
  plugins  list installed pluginsCOMMANDS  
  commands  list all the commands  
  conf      manage configuration  
  help      display help for hypi  
  init      Init a hypi app  
  login     Login to hypi with email and password or domain and token  
  plugins   list installed plugins  
  sync      sync user local schema with hypi  
  update    update the hypi CLI  
```
+ If new shell is not opened, source the file with PATH environment variable, i.e. profile. And then use `hypi` command.
```
source ~/.profile
```
+ `which Hypi` shows the directory where Hypi has been downloaded. 
```
which hypi
/home-dir/bin/hypi/hypi
```

### Linux

+ Add Hypi CLI folder to the bin folder of Home directory , i.e.`/home/username`. If this directory doesn't exist then create it.
+ Update the PATH environment variable in `. bashrc` file.  
```
vim ~/.bashrc
```
```
export PATH="/<PATH TO BIN>/bin/hypi:$PATH"
```
* Replace`<PATH TO BIN>`with the real path to your bin directory where you saved the Hypi binary.

- Open new shell. Provide command `hypi` to verify the installation.
```
hypi
```
```
➜  hypi-cli-angular-example git:(main) ✗ hypi  
 
Application developer community centred around Hypi's unique low-code, serverless development platform.VERSION  
  
  @hypi/cli/0.2.0 linux-x64 node-v12.19.1USAGE  
  
  $ hypi \[COMMAND\]TOPICS  
  plugins  list installed pluginsCOMMANDS  
  commands  list all the commands  
  conf      manage configuration  
  help      display help for hypi  
  init      Init a hypi app  
  login     Login to hypi with email and password or domain and token  
  plugins   list installed plugins  
  sync      sync user local schema with hypi  
  update    update the hypi CLI  
```
+ If new shell is not opened, source the file with PATH environment variable, i.e. bashrc. And then use `hypi` command.
```
source ~/.bashrc
```
+ `which Hypi` shows the directory where Hypi has been downloaded. 
```
which hypi
/home-dir/bin/hypi/hypi
```

### Windows

+ Add Hypi CLI folder to the bin folder of Home directory , i.e. `\users\username`
+ Open Environment Variables settings with command `Windows Key + env + Enter`
+ Add new variable name `path` with following value. If 'path' variable is already present, edit it to add new value.
```
<PATH TO BIN>\hypi\bin
```
* Replace`<PATH TO BIN>`with the real path to your bin directory where you saved the Hypi binary.

+ Open new command prompt with `cmd`. Provide command `hypi` to verify the installation.
```
C:\>hypi
Application developer community centred around Hypi's unique low-code, serverless development platform.

VERSION
  @hypi/hypi/1.0.0 win32-x64 node-v14.16.0

USAGE
  $ hypi [COMMAND]

COMMANDS
  commands  list all the commands
  conf      manage configuration
  help      display help for hypi
  init      Init a hypi app
  login     Login to hypi with email and password or domain and token
  sync      sync user local schema with hypi
  update    update the hypi CLI

```

**After the installation, hypi CLI is ready to use!**

## Hypi Login

Login to the Hypi domain using the `login` command. You may login to your Hypi account using your own `email` and `password` or `domain` and `token`.
```
    USAGE
      $ hypi login
    
    OPTIONS
      -d, --domain
      -h, --help    show CLI help
    
    EXAMPLES
      $ hypi login
      $ hypi login -d
      $ hypi login --domain
```
Let's login using email and password.
```
hypi login
```
```
Enter your email and password
? Email? hypi-dev@gmail.com
? Password? [hidden]
Logged in successfully
```
Or you may enter with `Organization Namespace` and `Authorization Token` given on the below link.

[https://hypi.app/developer-hub](https://hypi.app/developer-hub)

```
hypi login -d
Enter domain and token
? Domain?  latest.store.hypi.01f2ga50p2mzkmyqse17gd2bae.hypi.app
? Token?  <Auth-Token>
Logged in successfully
```
