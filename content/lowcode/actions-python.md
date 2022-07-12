---
id: actions-python
title: Python actions
sidebar_label: Python actions
slug: /lowcode/actions-python
---

:::note

OpenWhisk requires a JSON object as output. Hence, serverless function cannot return arrays. It must return an object at the top level which can have arrays inside it.

:::

The process of creating Python actions is similar to that of [other actions](openwhisk-actions.md#the-basics).
The following sections guide you through creating and invoking a single Python action, and demonstrate how to bundle multiple Python files and third party dependencies.

An example action Python action is simply a top-level function. For example, create a file called `hello.py` with the following source code:

```python
def main(args):
    name = args.get("name", "stranger")
    greeting = "Hello " + name + "!"
    print(greeting)
    return {"greeting": greeting}
```

Python actions always consume a dictionary and produce a dictionary.
The entry method for the action is `main` by default but may be specified explicitly when creating
the action with the `wsk` CLI using `--main`, as with any other action type.

You can create an OpenWhisk action called `helloPython` from this function as follows:

```
hypi wsk action create helloPython hello.py
```
The CLI automatically infers the type of the action from the source file extension.
For `.py` source files, the action runs using a Python 3.6 runtime.

Action invocation is the same for Python actions as it is for any other actions:

```
hypi wsk action invoke --result helloPython --param name World
```
```json
  {
      "greeting": "Hello World!"
  }
```
Find out more about parameters in the [Working with parameters](openwhisk-parameters.md) section.

### Packaging Python actions in zip files

You can package a Python action and dependent modules in a zip file.
The filename of the source file containing the entry point (e.g., `main`) must be `__main__.py`.
For example, to create an action with a helper module called `helper.py`, first create an archive containing your source files:

```bash
zip -r helloPython.zip __main__.py helper.py
```
and then create the action:

```bash
hypi wsk action create helloPython --kind python:3 helloPython.zip
```

### Packaging Python actions with a virtual environment in zip files

Another way of packaging Python dependencies is using a virtual environment (`virtualenv`). This allows you to link additional packages that may be installed via [`pip`](https://packaging.python.org/installing/) for example.
To ensure compatibility with the OpenWhisk container, package installations inside a virtualenv must be done in the target environment.  So the docker image `openwhisk/python3action` should be used to create a virtualenv directory for your action.

As with basic zip file support, the name of the source file containing the main entry point must be `__main__.py`. In addition, the virtualenv directory must be named `virtualenv`.
Below is an example scenario for installing dependencies, packaging them in a virtualenv, and creating a compatible OpenWhisk action.

1. Given a `requirements.txt` file that contains the `pip` modules and versions to install, run the following to install the dependencies and create a virtualenv using a compatible Docker image:
 
```
 docker run --rm -v "$PWD:/tmp" openwhisk/python3action bash \
   -c "cd tmp && virtualenv virtualenv && source virtualenv/bin/activate && pip install -r requirements.txt"
```

2. Archive the virtualenv directory and any additional Python files:

```bash
 zip -r helloPython.zip virtualenv __main__.py
```

3. Create the action:
```bash
hypi wsk action create helloPython --kind python:3 helloPython.zip
```

### Python 3 actions

Python 3 actions are executed using Python 3.6.1. This is the default runtime for Python actions, unless you specify the `--kind` flag when creating or updating an action.
The following packages are available for use by Python actions, in addition to the Python 3.6 standard libraries.

- aiohttp v1.3.3
- appdirs v1.4.3
- asn1crypto v0.21.1
- async-timeout v1.2.0
- attrs v16.3.0
- beautifulsoup4 v4.5.1
- cffi v1.9.1
- chardet v2.3.0
- click v6.7
- cryptography v1.8.1
- cssselect v1.0.1
- Flask v0.12
- gevent v1.2.1
- greenlet v0.4.12
- httplib2 v0.9.2
- idna v2.5
- itsdangerous v0.24
- Jinja2 v2.9.5
- kafka-python v1.3.1
- lxml v3.6.4
- MarkupSafe v1.0
- multidict v2.1.4
- packaging v16.8
- parsel v1.1.0
- pyasn1 v0.2.3
- pyasn1-modules v0.0.8
- pycparser v2.17
- PyDispatcher v2.0.5
- pyOpenSSL v16.2.0
- pyparsing v2.2.0
- python-dateutil v2.5.3
- queuelib v1.4.2
- requests v2.11.1
- Scrapy v1.1.2
- service-identity v16.0.0
- simplejson v3.8.2
- six v1.10.0
- Twisted v16.4.0
- w3lib v1.17.0
- Werkzeug v0.12
- yarl v0.9.8
- zope.interface v4.3.3

:::note

Large portions of this page is copied from the [Apache OpenWhisk documentation](https://github.com/apache/openwhisk/tree/master/docs) on April 23rd 2021 - where there have been customisations to match Hypi's deployment this has been noted. Apache OpenWhisk and the Apache name are the property of the Apache Foundation and licensed under the [Apache V2 license](https://github.com/apache/openwhisk/blob/master/LICENSE.txt) .

:::