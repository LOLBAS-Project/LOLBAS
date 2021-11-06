---
Name: Microsoft.Workflow.Compiler.exe
Description: A utility included with .NET that is capable of compiling and executing C# or VB.net code.
Author: 'Conor Richard'
Created: 2018-10-22
Commands:
  - Command: Microsoft.Workflow.Compiler.exe tests.xml results.xml
    Description: Compile and execute C# or VB.net code in a XOML file referenced in the test.xml file.
    Usecase: Compile and run code
    Category: Execute
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows 10S
  - Command: Microsoft.Workflow.Compiler.exe tests.txt results.txt
    Description: Compile and execute C# or VB.net code in a XOML file referenced in the test.txt file.
    Usecase: Compile and run code
    Category: Execute
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows 10S
  - Command: Microsoft.Workflow.Compiler.exe tests.txt results.txt
    Description: Compile and execute C# or VB.net code in a XOML file referenced in the test.txt file.
    Usecase: Compile and run code
    Category: AWL Bypass
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows 10S
Full_Path:
  - Path: C:\Windows\Microsoft.Net\Framework64\v4.0.30319\Microsoft.Workflow.Compiler.exe
Code_Sample:
- Code:
Detection:
 - IOC: Microsoft.Workflow.Compiler.exe would not normally be run on workstations.
 - IOC: The presence of csc.exe or vbc.exe as child processes of Microsoft.Workflow.Compiler.exe
 - IOC: Presence of "<CompilerInput" in a text file.
Resources:
  - Link: https://twitter.com/mattifestation/status/1030445200475185154
  - Link: https://posts.specterops.io/arbitrary-unsigned-code-execution-vector-in-microsoft-workflow-compiler-exe-3d9294bc5efb
  - Link: https://gist.github.com/mattifestation/3e28d391adbd7fe3e0c722a107a25aba#file-workflowcompilerdetectiontests-ps1
  - Link: https://gist.github.com/mattifestation/7ba8fc8f724600a9f525714c9cf767fd#file-createcompilerinputxml-ps1
  - Link: https://www.forcepoint.com/blog/security-labs/using-c-post-powershell-attacks
  - Link: https://www.fortynorthsecurity.com/microsoft-workflow-compiler-exe-veil-and-cobalt-strike/
  - Link: https://medium.com/@Bank_Security/undetectable-c-c-reverse-shells-fab4c0ec4f15
Acknowledgement:
  - Person: Matt Graeber
    Handle: '@mattifestation'
  - Person: John Bergbom
    Handle: '@BergbomJohn'
  - Person: FortyNorth Security
    Handle: '@FortyNorthSec'
  - Person: Bank Security
    Handle: '@Bank_Security'
---
