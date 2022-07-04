---
id: actions-swift
title: Swift actions
sidebar_label: Swift actions
slug: /lowcode/actions-swift
---

:::note

OpenWhisk requires a JSON object as output. Hence, serverless function cannot return arrays. It must return an object at the top level which can have arrays inside it.

:::

The process of creating Swift actions is similar to that of [other actions](openwhisk-actions.md#the-basics).
The following sections guide you through creating and invoking a single Swift action,
and demonstrate how to bundle multiple Swift files and third party dependencies.

**Tip:** You can use the [Online Swift Playground](http://online.swiftplayground.run) to test your Swift code without having to install Xcode on your machine.

**Note:** Swift actions run in a Linux environment. Swift on Linux is still in development,
and OpenWhisk usually uses the latest available release, which is not necessarily stable.
In addition, the version of Swift that is used with OpenWhisk might be inconsistent with versions
of Swift from stable releases of Xcode on MacOS.

#### Swift 4

An action is simply a top-level Swift function. For example, create a file called
`hello.swift` with the following content:

```swift
func main(args: [String:Any]) -> [String:Any] {
    if let name = args["name"] as? String {
        return [ "greeting" : "Hello \(name)!" ]
    } else {
        return [ "greeting" : "Hello stranger!" ]
    }
}
```
In this example the Swift action consumes a dictionary and produces a dictionary.

You can create an OpenWhisk action called `helloSwift` from this function as
follows:

```
hypi wsk action create helloSwift hello.swift
```

#### Swift 4 Codable type

New in Swift 4 in addition of the above main function signature there are two more signatures out of the box taking advantage of the [Codable](https://developer.apple.com/documentation/swift/codable) type. You can learn more about data types encodable and decodable for compatibility with external representations such as JSON [here](https://developer.apple.com/documentation/foundation/archives_and_serialization/encoding_and_decoding_custom_types).

The following takes as input parameter a Codable Input with field `name`, and returns a Codable output with a field `greetings`
```swift
struct Input: Codable {
    let name: String?
}
struct Output: Codable {
    let greeting: String
}
func main(param: Input, completion: (Output?, Error?) -> Void) -> Void {
    let result = Output(greeting: "Hello \(param.name ?? "stranger")!")
    print("Log greeting:\(result.greeting)")
    completion(result, nil)
}
```
In this example the Swift action consumes a Codable and produces a Codable type.
If you don't need to handle any input you can use the function signature that doesn't take any input, only Codable output.
```swift
struct Output: Codable {
    let greeting: String
}
func main(completion: (Output?, Error?) -> Void) -> Void {
    let result = Output(greeting: "Hello OpenWhisk!")
    completion(result, nil)
}
```


You can create a OpenWhisk action called `helloSwift` from this function as
follows:

```
hypi wsk action create helloSwift hello.swift
```
See the Swift [reference](#reference) for more information about the Swift runtime.

Action invocation is the same for Swift actions as it is for JavaScript actions:

```
hypi wsk action invoke --result helloSwift --param name World
```

```json
{
  "greeting": "Hello World!"
}
```

Find out more about parameters in the [Working with parameters](openwhisk-parameters.md) section.

### Packaging an action as a Swift executable

When you create an OpenWhisk Swift action with a Swift source file, it has to be compiled into a binary before the action is run. Once done, subsequent calls to the action are much faster until the container holding your action is purged. This delay is known as the cold-start delay.

To avoid the cold-start delay, you can compile your Swift file into a binary and then upload to OpenWhisk in a zip file. As you need the OpenWhisk scaffolding, the easiest way to create the binary is to build it within the same environment as it will be run in.

### Compiling Swift 4.2 packaged actions

The docker runtime includes a compiler to help users compile and package Swift 4.2 actions.

#### Compiling a single source file for Swift 4.2

To compile a single source file that doesn't depend on external libraries you can use the following command:
```bash
docker run -i openwhisk/action-swift-v4.2 -compile main <hello.swift >hello.zip
```
The docker container reads from stdin the content of the file, and writes to stdout a zip archive with the compiled swift executable.
Use the flag `-compile` with the name of the main method.
The zip archive is ready for deployment and invocation using the kind `swift:4.2`
```bash
hypi wsk action update helloSwiftly hello.zip --kind swift:4.2
hypi wsk action invoke helloSwiftly -r -p name World
```

#### Compiling dependencies and multi-file projects for Swift 4.2

To compile multiple files and include external dependencies create the following directory structure.
```
.
├── Package.swift
└── Sources
    └── main.swift
```
The directory `Sources/` should contain a file named `main.swift`.
The `Package.swift` should start with a comment specifying version `4.2` for the Swift tooling:
```swift
// swift-tools-version:4.2
import PackageDescription

let package = Package(
    name: "Action",
    products: [
    .executable(
        name: "Action",
        targets:  ["Action"]
    )
    ],
    dependencies: [
    .package(url: "https://github.com/IBM-Swift/SwiftyRequest.git", .upToNextMajor(from: "1.0.0"))
    ],
    targets: [
    .target(
        name: "Action",
        dependencies: ["SwiftyRequest"],
        path: "."
    )
    ]
)
```

Create a zip archive with the content of the directory:
```bash
zip ../action-src.zip -r *
```
Pass the zip archive to the docker container over stdin, and the stdout will be a new zip archive with the compiled executable.
The docker container reads from stdin the content of the zip archive, and writes to stdout a  new zip archive with the compiled swift executable.
```
docker run -i openwhisk/action-swift-v4.2 -compile main <action-src.zip >../action-bin.zip
```
In a Linux based system you can combined the `zip` and `docker run` steps in a single command:
```
zip - -r * | docker run -i openwhisk/action-swift-v4.2 -compile main >../action-bin.zip
```

The zip `action-bin.zip` archive is ready for deployment and invocation using the kind `swift:4.2`
```bash
hypi wsk action update helloSwiftly action-bin.zip --kind swift:4.2
hypi wsk action invoke helloSwiftly -r
```

### Error Handling in Swift 4

With the new Codable completion handler, you can pass an Error to indicate a failure in your Action.
[Error handling in Swift](https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/ErrorHandling.html) resembles exception handling in other languages, with the use of the `try, catch` and `throw` keywords.
The following example shows a an example on handling an error
```swift
enum VendingMachineError: Error {
    case invalidSelection
    case insufficientFunds(coinsNeeded: Int)
    case outOfStock
}
func main(param: Input, completion: (Output?, Error?) -> Void) -> Void {
    // Return real error
    do {
        throw VendingMachineError.insufficientFunds(coinsNeeded: 5)
    } catch {
        completion(nil, error)
    }
}
```

### Reference

#### Swift 4
Swift 4 actions are executed using Swift 4.2 using `--kind swift:4.2` respectively.
The default `--kind swift:default` is Swift 4.2.

Swift 4.x action runtimes don't embed any packages, follow the instructions for [packaged swift actions](openwhisk-actions.md#packaging-an-action-as-a-swift-executable) to include dependencies using a Package.swift.

:::note

Large portions of this page is copied from the [Apache OpenWhisk documentation](https://github.com/apache/openwhisk/tree/master/docs) on April 23rd 2021 - where there have been customisations to match Hypi's deployment this has been noted. Apache OpenWhisk and the Apache name are the property of the Apache Foundation and licensed under the [Apache V2 license](https://github.com/apache/openwhisk/blob/master/LICENSE.txt) .

:::